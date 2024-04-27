import { SearchParams } from "@/lib/types";
import ProductCreation from "./ProductCreationSheet";
import ProductPanel from "./ProductPanel";
import ProductSearch from "./ProductSearch";


type Props = {
    searchParams: SearchParams;
};

const ProductsPage = ({ searchParams }: Props) => {
    return (
        <div className="min-h-screen flex flex-col gap-4 p-6 w-full">
            <section>
                <ProductCreation />
            </section>
            <section>
                <ProductSearch />
            </section>
            <section>
                <ProductPanel searchParams={searchParams} />
            </section>
        </div>
    );
};

export default ProductsPage;