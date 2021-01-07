import ProductCard from "./ProductCard";
import {Product} from "./types";

type ProductsListProps = {
    products: Product[]
}

function ProductsList({products}: ProductsListProps) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-itens">
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    )
}

export default ProductsList;
