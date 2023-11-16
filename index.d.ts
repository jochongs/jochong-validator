declare module "jochong-validator" {
    class TypeValidator {
        constructor(data: any);

        private data: any;
        private validation: boolean;

        isString(): StringValidator;
        isNumber(): NumberValidator;
        isArray(): ArrayValidator;
        optional(): TypeValidator;
    }

    class Validator {
        constructor(data: any, validation: boolean, optional: boolean)

        private _data: any;
        private _valdiation: any;
        private _optional: any;

        end(): boolean;
    }

    class StringValidator extends Validator {
        constructor(data: any, validation: boolean, optional: boolean);

        length(min: number, max?: number): StringValidator;
        testRegExp(regExpString: string | RegExp): StringValidator;
        isIn(inArray: Array<string>): StringValidator;
        isNotEmpty(): StringValidator;
        isEmail(regExpString?: string | RegExp): StringValidator;
        isPw(regExpString?: string | RegExp): StringValidator;
        isName(regExpString?: string | RegExp): StringValidator;
        isTime(regExpString?: string | RegExp): StringValidator;
        isDatetime(regExpString?: string | RegExp): StringValidator;
        isDate(regExpString?: string | RegExp): StringValidator;
        isOnlyNumber(regExpString?: string | RegExp): StringValidator;
        isOnlyAlpabet(regExpString?: string | RegExp): StringValidator;
        isId(regExpString?: string | RegExp): StringValidator;
        trim(): StringValidator;
    }

    class NumberValidator extends Validator {
        constructor(data: any, validation: boolean, optional: boolean);

        isIn(inArray: Array<number>): NumberValidator;
        range(min: number, max: number): NumberValidator;
    }

    class ArrayValidator extends Validator {
        constructor(data: any, validation: boolean, optional: boolean);

        length(min: number, max?: number): ArrayValidator;
        isAllNumber(): ArrayValidator;
        isAllString(): ArrayValidator;
        testRegExpAll(regExpString: string | RegExp): ArrayValidator;
    }

    function validator(data: any): TypeValidator;

    export = validator;
}