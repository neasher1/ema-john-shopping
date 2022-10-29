import { getStoredCart } from "../utilities/fakedb";

export const ProductsAndCardLoaders = async () => {
    //get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    //get cart
    const saveCard = getStoredCart();
    const initialCart = [];
    for (const id in saveCard) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = saveCard[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return { products, initialCart };
}