export class Message {
    message: string;
    type: 'confirm' | 'warn';
    datetime: number;

    constructor() {
        this.message = '';
        this.type = 'confirm';
        this.datetime = Date.now();
    }
}