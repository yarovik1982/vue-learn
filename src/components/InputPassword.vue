<script setup>
import { ref } from "vue";
   const props = defineProps({
   	title: String,
   	modelValue: String,
   	placeholder: String,
   	name: String,
   	width: { type: String, default: "300px" },
      error:{type:Array, required: false }
   });
  const showPassword = ref(false);
  const passwordType = ref("password");
   const emit = defineEmits(["update:modelValue"]);
  const toggleType = () => { 
     passwordType.value = showPassword.value ? "text" : "password";
     showPassword.value = !showPassword.value;
  }

  const updateValue = (event) => {
    emit("update:modelValue", event.target.value);
  }
</script>
<template>
   <div class="form-input " :style="{ width: width }">
   	<input
         class="input-pass"
   		:type="passwordType"
   		:name="name"
   		:id="name"
   		:value="modelValue"
   		:placeholder="placeholder"
         @input="updateValue"
   		 />
   	<label :for="name" class="form-label">{{ title }}</label>
   	<div class="type-toggler" @click.stop="toggleType">
   		<svg
   			v-if="!showPassword"
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
   .form-error {
   	background: red;
   	margin-top: 4px;
   	border-radius: 7px;
   	font-size: 13px;
   	color: #fff;
   	padding: 5px;
   }
   .form-error__message {
   	font-size: 14px;
   	color: #ccc;
   }

   .input-pass {
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
