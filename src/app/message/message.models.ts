export enum MESSAGE_TYPE {
    Confirmation,
    Warning
}

export interface Message {
    message: string;
    type: 'confirm' | 'warn';
    datetime: number;
}