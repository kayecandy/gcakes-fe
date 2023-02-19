import RegisterSection from "@/components/page/register/RegisterSection";
import { Container, Typography } from "@mui/material";

export default function RegisterPage() {
    return (
        <>
            <Container
                sx={{
                    pt: 13,
                    pb: 5,
                }}
                maxWidth="lg"
            >
                <Typography sx={{ mb: 3 }} variant="h2">
                    Testing Register Page!
                </Typography>
                <RegisterSection></RegisterSection>
            </Container>
        </>
    );
}