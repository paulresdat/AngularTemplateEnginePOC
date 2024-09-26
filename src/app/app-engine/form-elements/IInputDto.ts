export interface DataTransferObject {}

export interface IInputDto extends DataTransferObject {
    classes: string[];
    dataAttributes: string[];

    inputType: string;
    inputValues: IInputValue[];

    label: string;
    name: string;
}

export interface IInputValue {
    name: string;
    value: any;
}

export class InputValue implements IInputValue {
    constructor(
        public name: string,
        public value: any
    ) {}
}

export class InputDto implements IInputDto {
    inputType: string;
    inputValues: IInputValue[];
    label: string;
    name: string;
    constructor(
        public classes: string[],
        public dataAttributes: string[],
        questionInfo: {label: string, name: string, type: string, values: [{name: string, value: any}]}
    ) {
        this.inputType = questionInfo['type'];
        let values: IInputValue[] = [];
        for (let i in questionInfo['values']) {
            let value = questionInfo['values'][i];
            values.push(new InputValue(value['name'], value['value']));
        }
        this.inputValues = values;
        this.label = questionInfo['label'];
        this.name = questionInfo['name'];
    }
}