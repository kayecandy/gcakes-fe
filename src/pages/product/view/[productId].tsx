import ViewForm from "@/components/page/product/view/ViewForm";
import { useRouter } from "next/router";

export default function ViewPage() {
    const router = useRouter();
    if (!router.isReady) {
        return <div data-testid="viewProductEmpty"></div>
    }
    return (
        <ViewForm productId={router.query.productId as string} />
    )
}
