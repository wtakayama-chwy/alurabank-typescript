class Negociacoes {

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {

        this._negociacoes.push(negociacao);
    }

    // Good coding practice to define which types they're returning
    paraArray(): Negociacao[] {
        // Defensive programming avoiding users to modify directly your array
        return [].concat(this._negociacoes);
    }
}
