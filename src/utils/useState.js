import { ref } from "vue";

export const useState = (initialValue) => {
  const state = ref(initialValue);
  const setState = (newValue) => {
    state.value = typeof newValue === "function" ? newValue(state.value) : newValue;
  };
  return [state, setState];
};