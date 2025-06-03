import { computed, watch } from "vue";

export function useValidation(config) {
	const fields = {};
	const errors = {};

	for (const key in config) {
		const field = config[key];
		fields[key] = {
			value: field.value,
			dirty: false,
		};

		errors[key] = "";

		// Функция валидации одного поля
		const validateField = () => {
			if (
				field.required &&
				(!field.value.value ||
					(typeof field.value.value === "string" && !field.value.value.trim()))
			) {
				errors[key] = field.message;
				return;
			}

			if (
				field.min &&
				typeof field.value.value === "string" &&
				field.value.value.length < field.min
			) {
				errors[key] = `Минимум ${field.min} символов`;
				return;
			}

			if (field.validator && typeof field.validator === "function") {
				const result = field.validator(field.value.value);
				if (result !== true) {
					errors[key] = result;
					return;
				}
			}

			errors[key] = "";
		};

		// Реактивность через watch — теперь реагируем на каждое изменение
		watch(
			() => field.value.value,
			() => {
				if (fields[key].dirty) {
					validateField();
				}
			},
		);
	}

	// Валидация всего объекта
	const isValid = computed(() => {
		return Object.values(errors).every((error) => error === "");
	});

	const getError = (key) => errors[key];

	const validateForm = () => {
		// Проставляем dirty всем полям
		for (const key in fields) {
			fields[key].dirty = true;
		}

		// Принудительно валидируем все поля
		for (const key in config) {
			const field = config[key];
			const errorField = errors[key];

			if (
				field.required &&
				(!field.value.value ||
					(typeof field.value.value === "string" && !field.value.value.trim()))
			) {
				errors[key] = field.message;
				continue;
			}

			if (
				field.min &&
				typeof field.value.value === "string" &&
				field.value.value.length < field.min
			) {
				errors[key] = `Минимум ${field.min} символов`;
				continue;
			}

			if (field.validator && typeof field.validator === "function") {
				const result = field.validator(field.value.value);
				if (result !== true) {
					errors[key] = result;
					continue;
				}
			}

			errors[key] = "";
		}

		return isValid.value;
	};

	return {
		fields,
		errors,
		isValid,
		getError,
		validateForm,
	};
}
