System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(_data, _quantity, _value) {
                    this._data = _data;
                    this._quantity = _quantity;
                    this._value = _value;
                }
                get data() {
                    return this._data;
                }
                get quantity() {
                    return this._quantity;
                }
                get value() {
                    return this._value;
                }
                get volume() {
                    return this._quantity * this._value;
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
