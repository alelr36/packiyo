'use client';

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { createProduct, updateProduct } from "@/lib/actions";
import { ProductSchema, Product } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
    onSuccess?: () => void;
    existingProduct?: Product;
}

const ProductForm = ({ existingProduct, onSuccess }: Props) => {
    const isEditMode = !!existingProduct;

    const values = isEditMode ? existingProduct : undefined;
    
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<Product>({
        values,
        resolver: zodResolver(ProductSchema)
    });

    const onSubmit: SubmitHandler<Product> = async (product) => {
        const callback = isEditMode ? updateProduct : createProduct;
        const response = await callback(product);

        if (response?.error) {
            console.log('ERROR!');
        } else {
            if (onSuccess) { 
                onSuccess();
            }
            reset();
        }
    };


    const hasErrors = !!errors?.attributes

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
                {hasErrors && <p className="text-red-500 text-xs">Please fix present errors</p>}
                <Input {...register('attributes.sku')} type="text" placeholder="sku" />
                <Input {...register('attributes.name')} type="text" placeholder="name" />
                <Input {...register('attributes.price')} type="number" placeholder="price" step=".01" />
                <Textarea {...register('attributes.notes')} placeholder="notes" />
                <Input {...register('attributes.width')} type="text" placeholder="width" />
                <Input {...register('attributes.height')} type="text" placeholder="height" />
                <Input {...register('attributes.length')} type="text" placeholder="length" />
                <Input {...register('attributes.weight')} type="text" placeholder="weight" />
                <Input {...register('attributes.barcode')} type="text" placeholder="barcode" />
                <Input {...register('attributes.value')} type="text" placeholder="value" />
                <Input {...register('attributes.customs_price')} type="text" placeholder="customs_price" />
                <Input {...register('attributes.customs_description')} type="text" placeholder="customs_description" />
                <Input {...register('attributes.country_of_origin')} type="text" placeholder="country_of_origin" />
                <Input {...register('attributes.tags')} type="text" placeholder="tags" />
            </div>
            <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Loading' : 'Save'}</Button>
        </form> 
    );
};

export default ProductForm;