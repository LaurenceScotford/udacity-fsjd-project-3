export class User {
    auth_level: number;
    first_name: string;
    last_name: string;
    username: string;
    password: string;

    constructor() {
        this.auth_level = 0;
        this.first_name = '';
        this.last_name = '';
        this.username = '';
        this.password = '';
    }
}