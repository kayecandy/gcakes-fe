import {
    useState,
    useEffect,
} from "react";

import { ApiResponse } from "@/types/api-response";
import { User } from "@/types/user";


export const useRegisterUser = () => {
    const [registerUser, setRegisterUser] = useState<
        ApiResponse<User[]>
    >({
        loading: true,
    });

    useEffect(() => {
        const t = fetch("/api/users/register/???") //

    }, []);

    return registerUser;
}