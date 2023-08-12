import React, { useState } from 'react';
import style from '../../components/style.css';
import data from './Data';
import Cart from './Cart'
function UserProduct() {
  const [userData] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    if (!cartItems.find((cartItem) => cartItem.id === item.id))
     {
      setCartItems([...cartItems, item]);
    }
    console.log(item,"cart button item");

    

    

  };
  const CartdeleteHandler = (id) => {
    const userResponse = window.confirm("are you sure?")
    if (userResponse===false){
      return null
      
    }
    const filteredProducts = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredProducts);
  };
  

  return (
    <div className={style.parent}>
<div style={{backgroundColor:"aquamarine"}}>
  
  {cartItems ? <h1>Your Cart Items</h1> : <h1>No Product Add In Your Card</h1>  }
<tbody >
            {cartItems.map((item, index) => (
              
              <tr key={index}>
                <td style={{padding:"20px"}}><b>{item.id}</b></td>
                <td style={{padding:"20px"}}>{item.title}</td>
                {/* <td>{item.category}</td> */}
                {/* <td>{item.description}</td> */}
                <td style={{padding:"20px"}}><b>{item.price}</b></td>
                <td style={{padding:"30px"}}><img style={{ width: 50 }} src={item.image} alt="dfs" /></td>
                <td><button className='my-button' onClick={() => CartdeleteHandler(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>

          </div>
      <h2 className='text-center my-5'>Explore Products</h2>
      <div className={style.input}>
        <div className="container my-2 input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Products by Name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              Search
            </span>
          </div>
        </div>
      </div>
      <h2 className='text-center my-5'>Products</h2>
      
      <div className='container d-flex mb-2 flex-wrap gap-4 justify-content-center'>
        {userData.map((item, index) => (
          <div className="card" style={{ width: '25rem' }} key={index}>
            <img
              style={{ width: '25rem', height: '15rem' }}
              className="card-img-top"
              src={item.image}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p>
                <b>{item.price}</b>
              </p>
              <button type='submit' className="btn btn-primary" onClick={() => addToCart(item)}>Add to Cart</button>


            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 && <Cart />}
    </div>
  );
}

export default UserProduct;
