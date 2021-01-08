import ProductCard from "./ProductCard";
import {Product} from "./types";
import {checkIsSelected} from "./helpers";

type ProductsListProps = {
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product: Product) => void;
}

function ProductsList({ products, onSelectProduct, selectedProducts }: ProductsListProps) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-itens">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onSelectProduct={onSelectProduct}
                        isSelected={checkIsSelected(selectedProducts, product)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsList;
