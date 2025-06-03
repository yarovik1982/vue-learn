<script setup>
	import { computed, h, reactive, ref } from "vue";
	import InputComponent from "./InputComponent.vue";
	import useVuelidate from "@vuelidate/core";
	import { minLength, email, helpers } from "@vuelidate/validators";

	const loginField = ref("");
	const inpytType = ref("password");
	const isShowPassword = ref(false);
	const passwordField = ref("");
	const emailField = ref("");
	const rules = computed(() => ({
		loginField: {
			minLength: helpers.withMessage(
				"Логин должен быть не менее 3 символов",
				minLength(3),
			),
		},
		passwordField: {
			minLength: helpers.withMessage(
				"Пароль должен быть не менее 3 символов",
				minLength(6),
			),
		},
		emailField: {
			email: helpers.withMessage("Введите корректный email", email),
		},
	}));
	const v$ = useVuelidate(rules, { loginField, passwordField, emailField });
	function onSubmit() {
		v$.value.$touch();
		if (!v$.value.$invalid) {
			const loginData = {
				login: loginField.value,
				password: passwordField.value,
				email: emailField.value,
			};
			console.log("success", loginData);
			loginField.value = "";
			passwordField.value = "";
			emailField.value = "";
		}
		inpytType.value = "password";
		isShowPassword.value = false;
	}
	const toggleType = () => {
		inpytType.value = inpytType.value === "text" ? "password" : "text";
		isShowPassword.value = !isShowPassword.value;
		console.log(isShowPassword.value);
	}
</script>
<template>
	<form
		action="#"
		id="form-login"
		class="form-login fs-sm"
		@submit.prevent="onSubmit">
		<div class="form-header">
			<h3 class="form-title">Авторизация</h3>
		</div>
		<div class="form-body">
			<InputComponent
				width="100%"
				type="text"
				label="Логин"
				:name="'userName'"
				:placeholder="'Введите логин'"
				v-model:value="v$.loginField.$model"
				:error="v$.loginField.$errors"
				:classDiv="'form-input'" />
			<InputComponent
				width="100%"
				:type="inpytType"
				label="Password"
				:name="'userPassword'"
				:placeholder="'Введите пароль'"
				v-model:value="v$.passwordField.$model"
				:error="v$.passwordField.$errors"
				:classDiv="'form-input'">
				<template #default>
					<div class="type-toggler" @click.stop="toggleType">
						<svg
							v-if="!isShowPassword"
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-eye"
							viewBox="0 0 16 16">
							<path
								d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
							<path
								d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
						</svg>
						<svg
							v-else
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-eye-slash"
							viewBox="0 0 16 16">
							<path
								d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
							<path
								d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
							<path
								d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
						</svg>
					</div>
				</template>
			</InputComponent>
			<InputComponent
				width="100%"
				type="email"
				label="Email"
				:name="'userEmail'"
				:placeholder="'Введите email'"
				v-model:value="v$.emailField.$model"
				:error="v$.emailField.$errors"
				:classDiv="'form-input'" />
		</div>
		<div class="form-footer">
			<button type="submit" class="btn-submit fs-md">Submit</button>
		</div>
	</form>
</template>
<style scoped>
	.form-login {
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		padding: 2em;
		color: #000;
		background: #fff;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}
	.form-title {
		text-align: center;
		margin-bottom: 1.5em;
		color: #333;
		font-size: 1.5em;
	}
	.type-toggler {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.success-message {
		background-color: #4caf50;
		color: white;
		padding: 1em;
		border-radius: 4px;
		margin-bottom: 1em;
		text-align: center;
	}
	.form-input-check {
		margin: 1.5em 0;
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}
	.form-input-check__input {
		margin-right: 10px;
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
	.checkbox-label {
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	.privacy-links {
		font-size: 0.9em;
		color: #666;
		margin-top: 0.5em;
	}
	.privacy-link {
		color: #2196f3;
		cursor: pointer;
		text-decoration: underline;
		transition: color 0.3s;
	}
	.privacy-link:hover {
		color: #1976d2;
	}
	.btn-submit {
		width: 100%;
		padding: 0.8em;
		border: none;
		border-radius: 4px;
		background-color: #2196f3;
		color: white;
		font-size: 1em;
		cursor: pointer;
		transition: background-color 0.3s;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.btn-submit:hover {
		background-color: #1976d2;
	}
	.btn-submit:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
	.form-error {
		color: #f44336;
		font-size: 0.9em;
		margin-top: 0.25em;
	}
	.loader {
		width: 20px;
		height: 20px;
		border: 2px solid #fff;
		border-radius: 50%;
		border-top-color: transparent;
		animation: spin 1s linear infinite;
	}
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
	@media (max-width: 768px) {
		.form-login {
			padding: 1em;
		}
	}
</style>
