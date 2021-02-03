export function domInject(selector: string) {

    return function (target: any, key: string) {

        let element: HTMLInputElement;

        const getter = function () {

            if (!element) {
                console.log(`Buscando ${selector} para injetar em ${key}`);
                element = (document.querySelector(selector) as HTMLInputElement);
            }

            return element;
        }

        Object.defineProperty(target, key, {
            get: getter
        });
    }
}