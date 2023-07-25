import React, { useEffect, useState } from 'react'
import ProductBox from './components/productContent/ProductBox';
import ProductsContext from './components/ProductsContext';
import './App.css'
import CartBox from './components/cartContent/CartBox';

const App = () => {

  //Api GetAllProduct
  const urlAllProducts = 'https://fakestoreapi.com/products';

  //products state
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState([]);

  const addToCart = (oneProduct) => {
    const ProductExist = cartList.find(item => item.id === oneProduct.id);

    if (ProductExist) {
      setCartList(
        cartList.map(item =>
          item.id === oneProduct.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartList([...cartList, {
        ...oneProduct,
        quantity: 1
      }]);
    }
  };
  console.log(cartList)


  useEffect(() => {
    fetch(urlAllProducts)
      .then((response) => response.json())
      .then(data => setProducts(data))
  }, [])


  return (
    <ProductsContext.Provider value={{ products, addToCart, cartList }}>
      <div className='dashboard'>
        <ProductBox />
        <CartBox />
      </div>
    </ProductsContext.Provider>

  )
}

export default App