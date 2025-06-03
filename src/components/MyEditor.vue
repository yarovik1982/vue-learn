<template>
	<div class="editor-wrapper">
		<div ref="editorContainer" class="editor-container">
			<div class="task">
				<div class="task-header">
					<div class="task-number">Задание {{ currentTask.id }} из {{ tasks.length }}</div>
					<div class="task-nav">
						<button 
							@click="prevTask" 
							class="nav-button"
							:disabled="currentTaskIndex === 0"
							:class="{'nav-button--disabled': currentTaskIndex === 0}"
						>
							<span class="button-icon">←</span>
							Предыдущая
						</button>
						<button 
							@click="nextTask" 
							class="nav-button"
							:disabled="currentTaskIndex === tasks.length - 1"
							:class="{'nav-button--disabled': currentTaskIndex === tasks.length - 1}"
						>
							Следующая
							<span class="button-icon">→</span>
						</button>
					</div>
				</div>
				<div class="task-text">{{ currentTask.description }}</div>
			</div>
			<div class="editors-container">
				<div class="editor-section">
					<div class="editor-label">Начальный код:</div>
					<pre class="editor editor-initial"><code class="language-javascript" v-html="highlightedInitialCode"></code></pre>
				</div>
				<div class="editor-section">
					<div class="editor-label">Ваше решение:</div>
					<div 
						class="editor editor-solution" 
						ref="solutionEditor" 
						contenteditable="true"
						@paste="handlePaste"
						@input="handleInput"
						@keydown="handleKeyDown"
						spellcheck="false"
					></div>
				</div>
			</div>
			<div class="btn-group">
				<button 
					@click="checkSolution" 
					class="check-button"
					:disabled="isChecking"
				>
					<span v-if="isChecking" class="loader"></span>
					<span v-else>Проверить решение</span>
				</button>
			</div>
		</div>
		<transition name="fade">
			<div
				v-if="resultMessage"
				:class="['result', resultSuccess ? 'success' : 'error']"
			>
				{{ resultMessage }}
			</div>
		</transition>
	</div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import { tasks, getTaskById, getTasksByTheme, runTests } from '../data/tasks.js';

const currentTaskIndex = ref(0);
const currentTask = computed(() => tasks[currentTaskIndex.value]);
const solutionEditor = ref(null);
const isChecking = ref(false);
const resultMessage = ref('');
const resultSuccess = ref(false);
const solutionCode = ref('');

const highlightedInitialCode = computed(() => {
	return Prism.highlight(
		currentTask.value.initialCode,
		Prism.languages.javascript,
		'javascript'
	);
});

function handlePaste(e) {
	e.preventDefault();
	const text = e.clipboardData.getData('text/plain');
	insertTextAtCursor(text);
}

function handleInput() {
	const plainText = solutionEditor.value.innerText;
	solutionCode.value = plainText;

	// Сохраняем текущую позицию курсора
	const selection = window.getSelection();
	const offset = getCaretPosition(solutionEditor.value);

	// Обновляем подсветку синтаксиса
	const highlighted = Prism.highlight(
		plainText,
		Prism.languages.javascript,
		'javascript'
	);
	solutionEditor.value.innerHTML = highlighted;

	// Восстанавливаем позицию курсора
	setCaretPosition(solutionEditor.value, offset);
}

// Функция для получения текущей позиции курсора
function getCaretPosition(element) {
	let position = 0;
	const selection = window.getSelection();
	if (selection.rangeCount > 0) {
		const range = selection.getRangeAt(0);
		const preCaretRange = range.cloneRange();
		preCaretRange.selectNodeContents(element);
		preCaretRange.setEnd(range.endContainer, range.endOffset);
		position = preCaretRange.toString().length;
	}
	return position;
}

// Функция для установки позиции курсора
function setCaretPosition(element, position) {
	const range = document.createRange();
	const selection = window.getSelection();

	// Рекурсивно обходим узлы, чтобы найти нужную позицию
	function traverseNodes(node, currentPos) {
		if (node.nodeType === Node.TEXT_NODE) {
			const nodeLength = node.nodeValue.length;
			if (currentPos + nodeLength >= position) {
				range.setStart(node, position - currentPos);
				range.collapse(true);
				selection.removeAllRanges();
				selection.addRange(range);
				return true;
			}
			return currentPos + nodeLength;
		} else if (node.nodeType === Node.ELEMENT_NODE) {
			for (let i = 0; i < node.childNodes.length; i++) {
				const childNode = node.childNodes[i];
				const result = traverseNodes(childNode, currentPos);
				if (result === true) {
					return true;
				}
				currentPos = result;
			}
		}
		return currentPos;
	}

	traverseNodes(element, 0);
}

function handleKeyDown(e) {
	if (e.key === 'Tab') {
		e.preventDefault();
		insertTextAtCursor('    ');
	}
}

function insertTextAtCursor(text) {
	const selection = window.getSelection();
	const range = selection.getRangeAt(0);
	range.deleteContents();
	const textNode = document.createTextNode(text);
	range.insertNode(textNode);
	range.setStartAfter(textNode);
	range.setEndAfter(textNode);
	selection.removeAllRanges();
	selection.addRange(range);
	handleInput();
}

async function checkSolution() {
	const userCode = solutionEditor.value.innerText.trim();
	
	if (!userCode) {
		resultMessage.value = '⚠️ Введите решение';
		resultSuccess.value = false;
		return;
	}

	isChecking.value = true;
	resultMessage.value = '';

	try {
		const result = await runTests(currentTask.value, userCode);
		
		if (result.result) {
			resultSuccess.value = true;
			resultMessage.value = '✅ Отлично! Все тесты пройдены!';
		} else {
			resultSuccess.value = false;
			resultMessage.value = '❌ Тесты не пройдены. Проверьте ваше решение.';
		}
	} catch (e) {
		resultSuccess.value = false;
		resultMessage.value = `⚠️ ${e.message}`;
	} finally {
		isChecking.value = false;
	}
}

function getFunctionName() {
	const match = currentTask.value.initialCode.match(/function\s+(\w+)/);
	return match ? match[1] : '';
}

function nextTask() {
	if (currentTaskIndex.value < tasks.length - 1) {
		currentTaskIndex.value++;
		resetEditor();
	}
}

function prevTask() {
	if (currentTaskIndex.value > 0) {
		currentTaskIndex.value--;
		resetEditor();
	}
}

function resetEditor() {
	solutionCode.value = currentTask.value.initialCode;
	resultMessage.value = '';
	nextTick(() => {
		const highlighted = Prism.highlight(
			currentTask.value.initialCode,
			Prism.languages.javascript,
			'javascript'
		);
		solutionEditor.value.innerHTML = highlighted;
		solutionEditor.value?.focus();
	});
}

onMounted(() => {
	solutionCode.value = currentTask.value.initialCode;
	nextTick(() => {
		const highlighted = Prism.highlight(
			currentTask.value.initialCode,
			Prism.languages.javascript,
			'javascript'
		);
		solutionEditor.value.innerHTML = highlighted;
		solutionEditor.value?.focus();
	});
});
</script>

<style scoped>
.editor-wrapper {
	width: 100%;
	padding: 1.5rem;
}

.editor-container {
	width: 100%;
	min-width: 350px;
	border-radius: 12px;
	overflow: hidden;
	background-color: #1a1a1a;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
}

.task {
	padding: 1.5rem;
	background-color: #252525;
	border-bottom: 1px solid #333;
}

.task-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
}

.task-nav {
	display: flex;
	gap: 0.75rem;
}

.task-number {
	font-size: 0.875rem;
	color: #6366f1;
	font-weight: 500;
}

.nav-button {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 6px;
	background-color: #2d3748;
	color: #e2e8f0;
	font-size: 0.875rem;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease;
}

.nav-button:not(.nav-button--disabled):hover {
	background-color: #4a5568;
}

.nav-button--disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

.button-icon {
	font-size: 1.125rem;
	line-height: 1;
}

.task-text {
	color: #e2e8f0;
	line-height: 1.5;
	font-size: 1rem;
	white-space: pre-wrap;
}

.editors-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
	padding: 1rem;
}

.editor-section {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.editor-label {
	color: #6366f1;
	font-size: 0.875rem;
	font-weight: 500;
}

.editor {
	min-height: 200px;
	padding: 1rem;
	background-color: #252525;
	border-radius: 8px;
	color: #e2e8f0;
	font-family: 'Fira Code', monospace;
	font-size: 0.9375rem;
	line-height: 1.6;
	tab-size: 2;
	white-space: pre-wrap;
	overflow-y: auto;
}

.editor :deep(.token.comment) {
	color: #6b7280;
}

.editor :deep(.token.function) {
	color: #93c5fd;
}

.editor :deep(.token.keyword) {
	color: #c084fc;
}

.editor :deep(.token.string) {
	color: #86efac;
}

.editor :deep(.token.number) {
	color: #fca5a5;
}

.editor-initial {
	opacity: 0.7;
}

.editor-solution {
	height: 300px;
	overflow-y: scroll;
	outline: none;
	border: 1px solid #333;
}

.editor-solution:focus {
	border-color: #6366f1;
}

.btn-group {
	display: flex;
	justify-content: center;
	padding: 1rem;
	background-color: #252525;
	border-top: 1px solid #333;
}

.check-button {
	padding: 0.75rem 2rem;
	border: none;
	border-radius: 8px;
	background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
	color: white;
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	min-width: 200px;
	justify-content: center;
}

.check-button:not(:disabled):hover {
	background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
	transform: translateY(-1px);
}

.check-button:disabled {
	opacity: 0.7;
	cursor: not-allowed;
}

.result {
	margin-top: 1rem;
	padding: 1rem;
	border-radius: 8px;
	font-weight: 500;
	white-space: pre-wrap;
	animation: slideIn 0.3s ease-out;
}

.success {
	background: linear-gradient(135deg, #34d399 0%, #059669 100%);
	color: white;
}

.error {
	background: linear-gradient(135deg, #f87171 0%, #dc2626 100%);
	color: white;
}

.loader {
	width: 18px;
	height: 18px;
	border: 2px solid #fff;
	border-radius: 50%;
	border-top-color: transparent;
	animation: spin 0.8s linear infinite;
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}

@keyframes slideIn {
	from {
		opacity: 0;
		transform: translateY(-10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

@media (max-width: 768px) {
	.editor-wrapper {
		padding: 1rem;
	}

	.task-header {
		flex-direction: column;
		gap: 1rem;
		align-items: flex-start;
	}

	.editors-container {
		grid-template-columns: 1fr;
	}

	.task,
	.editor,
	.btn-group {
		padding: 0.875rem;
	}

	.check-button {
		padding: 0.625rem 1.5rem;
		font-size: 0.9375rem;
	}
}
</style>
