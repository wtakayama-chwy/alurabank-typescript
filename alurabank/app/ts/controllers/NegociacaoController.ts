import { Negociacao, Negociacoes } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { domInject } from '../helpers/decorators/index';

export class NegociacaoController {

    @domInject('#data')
    private _inputData: HTMLInputElement;
    @domInject('#quantidade')
    private _inputQuantity: HTMLInputElement;
    @domInject('#valor')
    private _inputValue: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    add(event: Event) {

        event.preventDefault();

        let data = new Date(this._inputData.value.replace(/-/g, ','));
        if (!this._isBusinessDay(data)) {
            this._mensagemView.update('Somente negociações em dias úteis, por favor.');
            return;
        }

        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantity.value),
            parseFloat(this._inputValue.value)
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso');
    }

    private _isBusinessDay(data: Date) {
        return data.getDay() !== WeekDay.sun || WeekDay.sat;
    }
}

enum WeekDay {
    sun,
    mon,
    tue,
    wed,
    thur,
    fri,
    sat
}