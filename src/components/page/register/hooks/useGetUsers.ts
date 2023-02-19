import {
    useState,
    useEffect,
} from "react";

import { ApiResponse } from "@/types/api-response";
import { User } from "@/types/user";


export const useGetUsers = () => {
    const [getUsers, setGetUsers] = useState<
        ApiResponse<User[]>
    >({
        loading: true,
    });

    useEffect(() => {
        const t = fetch("/api/users/getUsers")
            .then(async (res) => {
                if (!res.ok) {
                    throw await res.json();
                }

                return res.json().then((result) => {
                    console.log(result);

                    setGetUsers({
                        loading: false,
                        value: result,
                    });
                });
            })
            .catch((error) => {
                console.log("errored", error);

                setGetUsers({
                    loading: false,
                    error,
                });
            });
    }, []);

    return getUsers;
}