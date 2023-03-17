import { SX_MASKS } from "@/components/common/masks";
import { COLOR_PALLETE } from "@/components/page/ThemeProvider";
import ViewForm from "@/components/page/view/ViewForm";
import { Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function ViewPage() {

    const router = useRouter();

    return (
        <ViewForm productType={router.query.productType} />
    )
}