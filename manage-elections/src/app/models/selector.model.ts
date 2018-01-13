export interface Selector{
    id: Number;
    name: String;
    age: Number;
    email: String;
    phone: String;
    selection_status : SelectionStatus;
    adress: {
        street: String;
        number: Number;
    }
    company: {
        name: String;
    };
    created_at: Date;
}