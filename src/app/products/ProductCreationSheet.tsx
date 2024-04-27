'use client';
import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react";
import ProductForm from "./ProductForm";

const ProductCreationSheet = () => {
    const [open, setOpen] = useState(false);

    const onSuccess = () => {
        setOpen(false);
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline">New Product</Button>
            </SheetTrigger>

            <SheetContent className="overflow-scroll">
                <SheetHeader>
                    <SheetTitle>New Product</SheetTitle>
                    <SheetDescription>
                        SKU and name are mandatory fields.
                    </SheetDescription>
                </SheetHeader>
                <ProductForm onSuccess={onSuccess} />
            </SheetContent>
        </Sheet>
    );
};

export default ProductCreationSheet;