export const tasks = [
    // 1. Переменные и типы данных
    {
        id: 1,
        theme: 'Переменные и типы данных',
        description: `Создайте три переменные разных типов:
- number с значением 42
- string со значением "Привет, мир!"
- boolean с значением true
Выведите в консоль тип каждой переменной, используя оператор typeof.`,
        initialCode: 
`// Ваш код здесь
`,
        tests: [
            { 
                test: function(userCode) {
                    const logs = [];
                    const testEnv = {
                        console: { log: (...args) => logs.push(args.join(" ")) }
                    };
                    
                    try {
                        new Function('console', userCode)(testEnv.console);
                        return logs.length === 3 && 
                               logs[0] === "number" && 
                               logs[1] === "string" && 
                               logs[2] === "boolean";
                    } catch (e) {
                        throw new Error('Ошибка выполнения: ' + e.message);
                    }
                }
            }
        ]
    },
    {
        id: 2,
        theme: 'Переменные и типы данных',
        description: `Создайте переменную number и присвойте ей любое число.
Преобразуйте это число в строку и сохраните в переменную string.
Преобразуйте строку обратно в число и сохраните в переменную numberAgain.
Выведите в консоль тип каждой переменной, используя оператор typeof.
Это поможет убедиться, что преобразования типов выполнены правильно.`,
        initialCode:
`// Ваш код здесь
`,
        tests: [
            {
                test: function(userCode) {
                    const logs = [];
                    const testEnv = {
                        console: { log: (...args) => logs.push(args.join(" ")) }
                    };
                    
                    try {
                        new Function('console', userCode)(testEnv.console);
                        if (logs.length !== 3) return false;
                        
                        return logs[0] === "number" && 
                               logs[1] === "string" && 
                               logs[2] === "number";
                    } catch (e) {
                        throw new Error('Ошибка выполнения: ' + e.message);
                    }
                }
            }
        ]
    },
    {
        id: 3,
        theme: 'Переменные и типы данных',
        description: `Создайте переменную price с числом 99.99
Создайте переменную tax со значением 20 (процент налога)
Рассчитайте итоговую цену с налогом и сохраните в переменную total
Выведите результат в консоль, округлив до 2 знаков после запятой`,
        initialCode:
`// Ваш код здесь
`,
        tests: [
            {
                test: function(userCode) {
                    const logs = [];
                    const testEnv = {
                        console: { log: (...args) => logs.push(args.join(" ")) }
                    };
                    
                    try {
                        new Function('console', userCode)(testEnv.console);
                        return logs.length === 1 && logs[0] === "119.99";
                    } catch (e) {
                        throw new Error('Ошибка выполнения: ' + e.message);
                    }
                }
            }
        ]
    },
    {
        id: 4,
        theme: 'Объявление функций',
        description: `Создайте функцию multiply, которая принимает два параметра и возвращает их произведение.
Функция должна корректно работать с положительными и отрицательными числами.

Примеры вызовов для проверки:
multiply(5, 3) // должно вернуть 15
multiply(2, 4) // должно вернуть 8
multiply(-2, 3) // должно вернуть -6`,
        initialCode:
`// Создайте функцию multiply здесь
`,
        tests: [
            {
                testCode: `
                    function(userLogs) {
                        try {
                            const multiply = new Function('return ' + userLogs[0])();
                            if (typeof multiply !== 'function') {
                                return false;
                            }
                            return multiply(5, 3) === 15 &&
                                   multiply(2, 4) === 8 &&
                                   multiply(-2, 3) === -6;
                        } catch (e) {
                            return false;
                        }
                    }
                `
            }
        ]
    },
    // ... остальные задачи остаются без изменений ...
];

// Функция для получения задач по теме
export function getTasksByTheme(theme) {
    return tasks.filter(task => task.theme === theme);
}

// Функция для получения задачи по ID
export function getTaskById(id) {
    return tasks.find(task => task.id === id);
}

// Функция для получения всех тем
export function getAllThemes() {
    return [...new Set(tasks.map(task => task.theme))];
}

// Функция для запуска тестов
export function runTests(task, userCode) {
    return new Promise((resolve, reject) => {
        try {
            const result = task.tests[0].test(userCode);
            resolve({ result });
        } catch (error) {
            reject(new Error(error.message));
        }
    });
}