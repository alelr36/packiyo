import { Suspense } from 'react';
import ProductDetails from './ProductDetails';
import { ProductList } from './ProductList';
import { SearchParams } from '@/lib/types';

type Props = {
    searchParams: SearchParams;
}

const ProductPanel = ({ searchParams }: Props) => {

    return (
        <div className="flex shadow-2xl rounded-xl border-2 border-slate-700">
            <ProductList filter={searchParams.filter} />

            <Suspense key={searchParams.selectedProduct} fallback={<div>Loading...</div>}>
                <ProductDetails productId={searchParams.selectedProduct} />
            </Suspense>
        </div>
    );
};

export default ProductPanel;