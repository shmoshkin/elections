export interface Selector{
    id: number;
    name: string;
    email: string;
    phone: string;
    company: {
        name: string;
    };
}

export interface User{
    name: string;
    userName: string;
    password: string;
    isManager: boolean;
}