System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logExecutionTime(inSeconds = false) {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args) {
                let unit = 'ms';
                let divisor = 1;
                if (inSeconds) {
                    unit = 's';
                    divisor = 1000;
                }
                console.log('-----------------');
                console.log(`Parâmetros passados pelo método ${propertyKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const returned = originalMethod.apply(this, args);
                const t2 = performance.now();
                console.log(`O retorno do método ${propertyKey} é ${JSON.stringify(returned)}`);
                console.log(`O método ${propertyKey} demorou: ${(t2 - t1) / divisor}${unit}`);
                return returned;
            };
            return descriptor;
        };
    }
    exports_1("logExecutionTime", logExecutionTime);
    return {
        setters: [],
        execute: function () {
        }
    };
});
