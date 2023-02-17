export type User = {
    sys: {
        id: string;
    };
    userid: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    address: string;
    admin: boolean;
};