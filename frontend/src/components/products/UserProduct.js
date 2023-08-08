import React, { useState } from 'react';
import style from '../../components/style.css';
import data from './Data';

function UserProduct() {
  const [userData] = useState(data);

  return (
    <div className={style.parent}>
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
              <p className="btn btn-primary">Add to Cart</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProduct;
