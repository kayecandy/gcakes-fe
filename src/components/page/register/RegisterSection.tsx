import { Container, Grid, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useGetUsers } from "./hooks/useGetUsers";

const RegisterSection: FC = () => {
    const getUsers = useGetUsers();

    return (
        <Container>
            {getUsers.loading ? (
                <Typography variant="subtitle1">
                    Loading...
                </Typography>
            ) : getUsers.value ? (
                <Grid container>
                    {getUsers.value.map((user) => (
                        <Grid key={user.userid} item xs={3}>
                            <Typography variant="subtitle1">
                                {user.userid}
                            </Typography>
                            <Typography variant="subtitle1">
                                {user.password}
                            </Typography>
                            <Typography variant="subtitle1">
                                {user.email}
                            </Typography>
                            <Typography variant="subtitle1">
                                {user.admin}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography variant="subtitle1">
                    Errored.
                </Typography>
            )}
        </Container>
    );
};

export default RegisterSection;