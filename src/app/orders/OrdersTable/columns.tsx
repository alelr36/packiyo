"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link";

enum OrderStatus {
    PENDING = 'Pending',
    CANCELLED = 'Cancelled'
}

export type Order = {
    id: string;
    attributes: {
        number: string;
        status: OrderStatus;
    };
};

export const columns: ColumnDef<Order>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'attributes.number',
        header: 'Number',
    },
    {
        accessorKey: 'attributes.status_text',
        header: 'Status',
    },
    // {
    //     accessorKey: 'attributes.shipping',
    //     header: 'Shipping',
    // },
    // {
    //     accessorKey: 'attributes.tax',
    //     header: 'Tax',
    // },
    // {
    //     accessorKey: 'attributes.discount',
    //     header: 'Discount',
    // },
    // {
    //     accessorKey: 'attributes.ready_to_ship',
    //     header: 'Ready to Ship',
    // },
    // {
    //     accessorKey: 'attributes.is_wholesale',
    //     header: 'Wholesale',
    // },
    // {
    //     accessorKey: 'attributes.allow_partial',
    //     header: 'Allow partial',
    // },
    {
        accessorKey: 'attributes.ordered_at',
        header: 'Ordered at',
        cell: ({ getValue }) => {
            const date = getValue() as string;
            return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
        }
    },
    {
        accessorKey: 'attributes.updated_at',
        header: 'Updated at',
        cell: ({ getValue }) => {
            const date = getValue() as string;
            return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
        }
    },
    // {
    //     accessorKey: 'attributes.fulfilled_at',
    //     header: 'Fulfilled at',
    // },
    {
        accessorKey: 'attributes.cancelled_at',
        header: 'Cancelled at',
        cell: ({ getValue }) => {
            const date = getValue() as string;
            return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
        }
    },
    // {
    //     accessorKey: 'attributes.hold_until',
    //     header: 'Hold until',
    // },
    // {
    //     accessorKey: 'attributes.ship_before',
    //     header: 'Ship before',
    // },
    // {
    //     accessorKey: 'attributes.external_id',
    //     header: 'External ID',
    // },
    // {
    //     accessorKey: 'attributes.packing_note',
    //     header: 'Packing note',
    // },
    {
        accessorKey: 'attributes.shipping_method_name',
        header: 'Shipping method name',
    },
    // {
    //     accessorKey: 'attributes.shipping_method_code',
    //     header: 'Shipping method code',
    // },
    {
        accessorKey: 'attributes.tote',
        header: 'Tote',
    },
    {
        accessorKey: 'attributes.tags',
        header: 'Tags',
    },
    {
        accessorKey: 'attributes.created_at',
        header: 'Created at',
        cell: ({ getValue }) => {
            const date = getValue() as string;
            return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
        }
    },
    {
        accessorKey: 'id',
        header: 'Open Order',
        cell: ({ getValue }) => {
            const id = getValue() as string;
            return <Link className="underline text-blue-700" href={`/orders/${id}`}>Link &#128279;</Link>
        }
    },
];