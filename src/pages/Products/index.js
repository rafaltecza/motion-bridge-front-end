import { GetProductsList } from './GetProductsList'

const ProductsPage = (props) => {
    return (
        <>
            <GetProductsList {...props}/>
        </>
    );
}

export default ProductsPage;