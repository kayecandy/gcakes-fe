import {
    useState,
    useEffect,
    SetStateAction,
    Dispatch,
} from "react";

import { ApiResponse } from "@/types/api-response";
import { User } from "@/types/user";


export const useRegisterUser = (): [User, Dispatch<SetStateAction<User>>] => {
    const [registerUser, setRegisterUser] = useState<
        ApiResponse<User[]>
    >({
        loading: true,
    });

    useEffect(() => {
        const t = fetch("/api/users/register/user")

    }, []);

    /*
    useEffect(() => {

    }, [registerUser])*/

    return [registerUser, setRegisterUser];
}