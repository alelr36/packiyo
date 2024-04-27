import { fetchProducts } from "@/lib/actions";
import { Product } from "@/lib/types";
import Link from "next/link";

type Props = {
    filter?: string;
};

export const ProductList = async ({ filter }: Props) => {
    const products: Product[] = await fetchProducts(filter);
    // const products: Product[] = await fetchProducts();

    if (!products) {
        return null;
    }

    // const filtered = !!filter
    //     ? products.filter((product) => product.attributes.name.toLowerCase().includes(filter.toLowerCase()))
    //     : products;

    return (
        <ul className="hidden md:flex flex-col p-2 min-w-[400px]">
            {products.map((product) => <li className="last:border-0 border-b-2 border-slate-400"><Link href={`?selectedProduct=${product.id}`}>{product.attributes.name} - {product.id} - {product.attributes.price}</Link></li>)}
        </ul>
    );
};

export default ProductList;