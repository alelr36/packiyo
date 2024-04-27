'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import ProductForm from "./ProductForm";
import { Product } from "@/lib/types";

type Props = {
    product: Product;
}

const ProductEditSheet = ({ product }: Props) => {
    const [open, setOpen] = useState(false);

    const onSuccess = () => {
        setOpen(false);
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button>Edit</Button>
            </SheetTrigger>

            <SheetContent className="overflow-scroll">
                <SheetHeader>
                    <SheetTitle>Edit Product</SheetTitle>
                    <SheetDescription>
                        SKU and name are mandatory fields.
                    </SheetDescription>
                </SheetHeader>
                <ProductForm existingProduct={product} onSuccess={onSuccess} />
            </SheetContent>
        </Sheet>
    );
};

export default ProductEditSheet;