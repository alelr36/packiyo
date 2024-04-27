'use server';
import api from '@/lib/api';

export async function fetchOrders() {
    const request = await api.get('https://staging1.internal1.packiyo.com/api/v1/orders');

    const result = await request.json();

    return result.data;
}

export async function fetchOrder(orderId: string) {
    const request = await api.get(`https://staging1.internal1.packiyo.com/api/v1/orders/${orderId}`);

    const result = await request.json();

    return result.data;
}

