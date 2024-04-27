import { Label } from "@/components/ui/label"

import { fetchProduct } from "@/lib/actions";
import { redirect } from 'next/navigation';

import ProductEditSheet from "./ProductEditSheet";
import ProductDeleteDialog from "./ProductDeleteDialog";

type Props = {
    productId?: string;
};

const ProductDetails = async ({ productId }: Props) => {
    if (!productId) {
        return null;
    }

    const product = await fetchProduct(productId);

    if (!product) {
        redirect('/products');
    }

    return (
        <div className="grow p-4 relative">
            <div className="absolute right-2 flex gap-2">
                <ProductDeleteDialog product={product} />
                <ProductEditSheet product={product} />
            </div>
            <div>{product.id}</div>
            {Object.entries(product.attributes).map(([key, value]) => <div><Label>{key}</Label>: <Label className="font-light">{value as string}</Label></div>)}
        </div>
    );
};

export default ProductDetails;