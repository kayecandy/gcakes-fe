import { useSession } from "@/components/common/hooks/useSession";
import { Person } from "@mui/icons-material";
import { Dialog } from "@mui/material";
import { FC, useEffect, useState } from "react";
import LoginForm from "../user/login/LoginForm";
import RegisterForm from "../user/register/RegisterForm";
import { COLOR_PALLETE } from "../ThemeProvider";
import MenuItem from "./MenuItem";

type AccountDialogMenuItemProps = {
  defaultActiveDialog?: "login" | "register";
};

export const AccountDialogMenuItem: FC<AccountDialogMenuItemProps> = ({
  defaultActiveDialog = "login",
}) => {
  const [activeDialog, setActiveDialog] = useState(defaultActiveDialog);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const session = useSession();

  useEffect(() => {
    if (session) {
      setOpen(false);
    }
  }, [session])

  return (
    <>
      <MenuItem
        sx={{
          mx: 0,
          px: 0,
          borderRadius: 50,
        }}
        href={session ? `/${session.currentUser.userid}/profile` : "#"}
        onClick={session ? undefined : handleOpen}
        data-testid="menuAccount"
      >
        <Person sx={{
          color: session ? COLOR_PALLETE[3] : COLOR_PALLETE[2]
        }} fontSize="large"></Person>
      </MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        onTransitionEnd={() => {
          if (!open) {
            setActiveDialog(defaultActiveDialog)
          }
        }}
        PaperProps={{
          sx: {
            background: "transparent",
            boxShadow: "none",
          },
        }}
        scroll="body"
      >
        {activeDialog === "login" ? (
          <LoginForm
            onRegisterClick={() => setActiveDialog("register")}
          ></LoginForm>
        ) : (
          <RegisterForm onLoginClick={()=>setActiveDialog("login")}></RegisterForm>
        )}
      </Dialog>
    </>
  );
};
