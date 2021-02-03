// Abstract = there's no reason to implemented - doesn't make sense const a = new View('#abc')
export abstract class View<T> {

    private _element: JQuery;
    private _escape: boolean;

    constructor(selector: string, escape: boolean = false) {

        this._element = $(selector);
        this._escape = escape;
    }

    update(model: T) {
        let template = this.template(model);
        /**
         * Avoid malicious code - when adding script tag on your template
         */
        if (this._escape)
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '');

        this._element.html(this.template(model));
    }

    abstract template(model: T): string
}