export interface Selector{
    id: number;
    name: string;
    age: number;
    email: string;
    phone: string;
    selectionStatus : SelectionStatus;
    adress: {
        street: String;
        number: number;
    }
    company: {
        name: string;
    };
}