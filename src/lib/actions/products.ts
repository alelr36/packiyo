'use server';

import { revalidatePath } from 'next/cache';
import api from '@/lib/api';
import { ProductSchema } from '@/lib/types';

export async function fetchProducts(name?: string) {
    const url = !!name
        ? `https://staging1.internal1.packiyo.com/api/v1/products?filter[id]=${name}%`
        : 'https://staging1.internal1.packiyo.com/api/v1/products';

    const request = await api.get(url);
    const result = await request.json();
    console.log('_______________________________________', result)
    console.log('_______________________________________', url)

    return result.data;
}

export async function fetchProduct(productId: string) {
    const request = await api.get(`https://staging1.internal1.packiyo.com/api/v1/products/${productId}`);

    const result = await request.json();

    return result.data;
}

export async function createProduct(newProduct: unknown) {
    const result = ProductSchema.safeParse(newProduct);

    if (!result.success) {
        return {
            error: 'ERROR!'
        };
    }

    const body = {
        data: {
            type: 'products',
            attributes: result.data.attributes,
            relationships: {
                customer: {
                    data: {
                        type: 'customers',
                        id: '16'
                    }
                }
            }
        }
    };

    await api.post('https://staging1.internal1.packiyo.com/api/v1/products', body);

	revalidatePath('/products');
};

export async function updateProduct(product: unknown) {
    const result = ProductSchema.safeParse(product);

    if (!result.success) {
        return {
            error: 'ERROR!'
        };
    }

    const body = {
        data: {
            type: 'products',
            ...result.data
        }
    };

    await api.patch(`https://staging1.internal1.packiyo.com/api/v1/products/${result.data.id}`, body);

	revalidatePath('/products');
};

export async function deleteProduct(productId: string) {
    await api.delete(`https://staging1.internal1.packiyo.com/api/v1/products/${productId}`);

    revalidatePath('/products');
}