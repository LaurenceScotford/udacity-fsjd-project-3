export interface Product {
    id: string;
    name: string;
    price: number;
    url: string;
    description: string;
}

export interface ProductsState {
    products: Product[];
    selectedProductId: string | null;
    status: 'pending' | 'loading' | 'error' | 'success';
}
