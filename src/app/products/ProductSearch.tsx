'use client';

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

const ProductSearch = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        const params = new URLSearchParams(searchParams);

        if (term) {
            params.set('filter', term);
        } else {
            params.delete('filter');
        }

        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="w-full">
            <Input className="w-full" type="text" placeholder="Search..." onChange={handleSearch} />
        </div>
    );
};

export default ProductSearch;