export interface Filter {
    title: string;
    id: number;
}

export interface Product {
    title: string;
    id: number;
    spec: any[];
    price: number;
    des: string;
}


export interface Register {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordRe: string;
}

export interface Login {
    email: string;
    password: string;
}


