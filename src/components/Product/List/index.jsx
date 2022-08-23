import ProductDemo from "../Demo";

const ProductList = ({productList}) => {
    return (
        <>
            {productList.map(product => (
                <ProductDemo key={product.id} {...product}/>
            ))}
        </>
    )
}

export default ProductList;