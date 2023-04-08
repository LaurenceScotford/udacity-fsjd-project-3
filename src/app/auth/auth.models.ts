export interface AuthToken {
    idToken: string;
    expiresIn: number;
}

export interface AuthState {
    username: string | null;
    token: AuthToken | null;
    error: string | null;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export interface User {
    auth_level: number;
    first_name: string;
    last_name: string;
    username: string;
    password: string;
}
