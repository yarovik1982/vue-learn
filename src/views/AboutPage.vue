<script setup>
// import  FormLogin  from '../components/FormLogin.vue'
import InputComponent from '../components/InputComponent.vue';
import useVuelidate from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
import { computed, ref } from 'vue'

const nameField = ref('')
const rules = computed(() => ({
    nameField: { required, minLength: minLength(3) }
}))
const v$ = useVuelidate(rules, { nameField })
console.log(v$);
</script>
<template>
    <div class="container" style="padding-top: 100px;">
        <h2 class="page__title">About Page</h2>
        <form action="#" class="form">
            <input-component
                label="Username"
                id="username"
                name="username"
                placeholder="Username"
                type="text"
                v-model:value="v$.nameField.$model"
                :error="v$.nameField.$errors"
            ></input-component>
        </form>
    </div>
</template>
<style scoped >
.form {
    max-width: 400px;
    margin: 50px auto;
}
span{
    color: #fff;
}
</style>