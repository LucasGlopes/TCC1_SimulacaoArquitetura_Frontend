export interface User {
    cpf: string;
    dataNascimento: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    sexo: string;
    telefone: string;
}

export interface CurrentUser {
    firstName: string;
    lastName: string;
    email: string;
    id: number;
}
