export interface IProduct {
    // target: HTMLInputElement;
    forEach: any;
    filter(arg0: (a: any) => any): IProduct;
    price: any;
    category: string;
    total: number;
    productId?: number,
    productTitle: string,
    productPrice: number,
    productCategory: string,
    productDescription: string,
    productImage: string
}
