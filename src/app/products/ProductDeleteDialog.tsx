'use client';
import { Dialog, DialogTrigger, DialogContent, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import { deleteProduct } from "@/lib/actions";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type Props = {
    product: Product;
}

const ProductDeleteDialog = ({ product }: Props) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const { handleSubmit, formState: { isSubmitting } } = useForm();

    const onSubmit = async () => {
        await deleteProduct(product?.id || '');
        setOpen(false);
        router.replace('/products')
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Delete</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogDescription>
                    <div>Are you sure you want to delete this product?</div>
                    <div>{product.attributes.name} - SKU : {product.attributes.sku}</div>
                </DialogDescription>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Button disabled={isSubmitting} type="submit">Confirm</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ProductDeleteDialog;