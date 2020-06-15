// Abstract = there's no reason to implemented - doesn't make sense const a = new View('#abc')
abstract class View<T> {

    private _element: JQuery;

    constructor(selector: string) {

        this._element = $(selector);
    }

    update(model: T): void {

        this._element.html(this.template(model));
    }

    abstract template(model: T): string
}