import ViewForm from "@/components/page/product/view/ViewForm";
import { useRouter } from "next/router";

export default function ViewPage() {

    const router = useRouter();

    return (
        <ViewForm productId={router.query.productId} />
    )
}