import {Product} from "./types";

type ProductCardProps = {
    product: Product
}

function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    return formatter.format(price);
}

function ProductCard({product}: ProductCardProps) {
    return (
        <div className="order-card-container">
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
