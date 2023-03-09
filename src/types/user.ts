export type User = {
    sys: {
        id: string;
    };
    userid: string;
    password: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    address?: string;
    birthday?: Date;
    admin: boolean;
};