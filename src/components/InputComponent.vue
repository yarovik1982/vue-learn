<script setup>
	const emit = defineEmits(["update:value"]);
	const props = defineProps({
		width: {
			type: String,
			default: "300px",
		},
		type: {
			type: String,
			default: "text",
		},
		label: {
			type: String,
			default: "",
		},
		placeholder: {
			type: String,
			default: "",
		},
		value: {
			type: String,
			default: "",
		},
		name: {
			type: String,
			required: true,
		},
      error:{
         type: Array,
         required: false
      },
		classDiv: {
			type: String,
			default: "",
		}
	});
	const updateValue = (e) => {
		emit("update:value", e.target.value);
	};
</script>
<template>
	<div :class="classDiv" :style="{ width:width }">
		<input
			:type="type"
			class="input-text"
			:id="name"
			:value="value"
			:placeholder="placeholder"
			:name="name" 
         @input="updateValue"
			autocomplete="off"
      />
		<label :for="name" class="input-label">{{ label }}</label>
		<slot></slot>
		<TransitionGroup>
			<div class="form-error" v-for="element of error" :key="element.$uid">
				<div class="form-error__message">{{ element.$message }}</div>
			</div>
		</TransitionGroup>
	</div>
</template>
<style scoped>
	.form-input {
		margin-bottom: 30px;
		position: relative;
		transform: trnslateZ(300px)
	}
	.form-input-check {
		margin-bottom: 30px;
		display: flex;
		align-items: center;
	}

	.form-error {
		background: red;
		margin-top: 4px;
		border-radius: 7px;
		font-size: 13px;
		color: #fff;
		padding: 5px;
		position: absolute;
		top: 100%;
	}
	.form-error__message {
		font-size: 14px;
		color: #ccc;
	}

	.input-text {
		border: 1px solid blue;
		outline: none;
		padding: 0 10px;
		height: 40px;
		border-radius: 7px;
		font-size: 15px;
		width: 100%;
		position: relative;
		z-index: 1;
	}

	.input-text:focus + .input-label,
	.input-text:not(:placeholder-shown) + .input-label {
		z-index: 1;
		opacity: 1;
		top: -20px;
	}

	.input-label {
		font-weight: bold;
		display: block;
		position: absolute;
		top: 20px;
		opacity: 0;
		z-index: -1;
		transition: 0.3s;
		font-size: 13px;
		color: var(--primary);
	}

	.form-input-check .input-label {
		/* margin-bottom: 10px; */
		position: static;
		font-size: 14px;
		font-weight: 500;
		color: var(--primary);
	}
	.form-input-check .input-text {
		width: 40px;
		margin-right: 20px;
	}
	.form-input-check .form-error {
		margin-left:20px;
	}
	/* Анимации для Vue Transition */
	.v-enter-active,
	.v-leave-active {
		transition: opacity 0.5s ease;
	}

	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}
</style>
