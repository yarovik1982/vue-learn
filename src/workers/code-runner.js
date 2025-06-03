// Функция для безопасного выполнения кода
function runUserCode(userCode, testCode) {
    try {
        // Создаем изолированную среду выполнения
        const sandbox = {
            userLogs: [],
            console: {
                log: function(...args) {
                    sandbox.userLogs.push(args.join(" "));
                }
            },
            // Базовые объекты JavaScript
            Array: Array,
            Object: Object,
            String: String,
            Number: Number,
            JSON: JSON,
            Math: Math,
            isNaN: isNaN,
            undefined: undefined,
            // Функция для тестирования
            test: function() {
                try {
                    // Выполняем код пользователя
                    new Function('console', userCode)(sandbox.console);
                    // Выполняем тестовую функцию
                    const testFn = new Function('userLogs', testCode);
                    return testFn(sandbox.userLogs);
                } catch (e) {
                    throw new Error('Ошибка выполнения: ' + e.message);
                }
            }
        };

        // Устанавливаем таймаут
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Превышено время выполнения')), 2000);
        });

        // Выполняем тест с таймаутом
        return Promise.race([
            Promise.resolve().then(() => {
                const result = sandbox.test();
                return { result, logs: sandbox.userLogs };
            }),
            timeoutPromise
        ]);
    } catch (error) {
        return Promise.reject(error);
    }
}

// Обработчик сообщений
self.addEventListener('message', async (e) => {
    const { code, test } = e.data;
    
    try {
        const result = await runUserCode(code, test);
        self.postMessage({ success: true, result });
    } catch (error) {
        self.postMessage({ 
            success: false, 
            error: error.message || 'Произошла ошибка при выполнении кода' 
        });
    }
});