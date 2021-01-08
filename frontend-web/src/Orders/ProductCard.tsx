import {Product} from "./types";
import {formatPrice} from "./helpers";

type ProductCardProps = {
    product: Product
    onSelectProduct: (product: Product) => void;
    isSelected: boolean
}

function ProductCard({ product, onSelectProduct, isSelected }: ProductCardProps) {
    return (
        <div
            className={`order-card-container ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelectProduct(product)}
        >

            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img src={product.imageUri} alt={product.name} className="order-card-image"/>
            <h3 className="order-card-price">
                {formatPrice(product.price)}
            </h3>
            <div className="order-card-description">
                <h3>
                    Descrição
                    <p>
                        {product.description}
                    </p>
                </h3>
            </div>
        </div>
    )
}

export default ProductCard;
