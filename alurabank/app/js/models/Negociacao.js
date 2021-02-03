System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, quantity, value) {
                    this.data = data;
                    this.quantity = quantity;
                    this.value = value;
                }
                get volume() {
                    return this.quantity * this.value;
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
