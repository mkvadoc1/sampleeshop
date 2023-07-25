import React, { useContext } from 'react'
import ProductsContext from '../ProductsContext'
import "./Product.css"


const Products = () => {
    const { products, addToCart } = useContext(ProductsContext)

    return (
        <div className='all-products'>
            {products.map((oneProduct) => {
                const { id, title, description, category, image, price, rating } = oneProduct
                return <div className='one-product' key={id}>
                    <div className='title'>
                        <img src={image} alt={description} />
                        <h4>{title}</h4>
                    </div>
                    <div className='description'>{description} </div>
                    <p className="category">{category}</p>
                    <p className="rating">Rating rate: {rating.rate}</p>
                    <p className="rating">Rating count:{rating.count}</p>
                    <p className="price">Price: {price} €</p>

                    <button onClick={() => addToCart(oneProduct)}>Add to cart</button>
                </div>
            })
            }

        </div>
    )
}

export default Products