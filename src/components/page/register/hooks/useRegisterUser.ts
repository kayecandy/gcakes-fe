import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { ApiResponse } from "@/types/api-response";
import { User } from "@/types/user";

export const useRegisterUser = (): [
  ApiResponse<User[]>,
  Dispatch<SetStateAction<ApiResponse<User[]>>>
] => {
  const [registerUser, setRegisterUser] = useState<ApiResponse<User[]>>({
    loading: true,
  });

  useEffect(() => {
    const t = fetch("/api/users/register/user");
  }, []);

  /*
    useEffect(() => {

    }, [registerUser])*/

  return [registerUser, setRegisterUser];
};
