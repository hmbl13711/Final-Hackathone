import React, { useState } from 'react';
import data from './Data';
import "./Product.css"
import Modal from 'react-modal';
// import Navbar from '../navbar/Navbar';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Products = () => {
  const [products, setProduct] = useState(data);
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [isEdit ,setEdit]= useState(null) 

  const productSubmitHandler = () => {
    if(!(title && category && description && price && imageURL )){
      alert("All the values are required")
      return
    }
    const newProduct = {
      id: Math.round(Math.random() * 2575),
      title: title,
      category: category,
      description: description,
      price: price,
      image: imageURL,
    };

    setProduct([newProduct, ...products]);
    onModalCloseHandler();
  };

  const deleteProductHandler = (id) => {
    const userResponse = window.confirm("are you sure?")
    if (userResponse===false){
      return null
      
    }
    const filteredProducts = products.filter((item) => item.id !== id);
    setProduct(filteredProducts);
  };
  const productUpdateHandler=()=>{
    const userResponse = window.confirm ('are you sure?')
    if (userResponse===false){
      onModalCloseHandler()
      return (null)
    }
    const updateProduct= {
      id: isEdit,
    title: title,
    category: category,
    description: description,
    price: price,
    image: imageURL
  }

  const updatedProducts=products.map((item)=>{
    if(item.id=== isEdit){
      return updateProduct
    }
    else{
      return item

    }
    })
    setProduct(updatedProducts);
    onModalCloseHandler();                         
    
  }
  const editProductHandler = (item) => {
    // Add your edit functionality here
    
   setTitle(item.title)
   setDescription(item.description)
   setCategory(item.category)
   setPrice(item.price)
   setImageURL(item.image)
   setModalVisible(true)
   setEdit(item.id)
  };
  const onModalCloseHandler=()=>{
    setTitle(null)
   setDescription(null)
   setCategory(null)
   setPrice(null)
   setImageURL(null)
   setModalVisible(false)
   setEdit(null)


  }

  return (
    <div>
      {/* <Navbar/> */}
      <h1>Products List</h1>
      <button className='my-button' onClick={() => setModalVisible(true)}>Add Product</button>
      <div style={{ padding: 20 }}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td><b>{item.id}</b></td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td><b>{item.price}</b></td>
                <td><img style={{ width: 50 }} src={item.image} alt="dfs" /></td>
                <td><button className='my-button' onClick={() => deleteProductHandler(item.id)}>Delete</button>
                  <button className='my-button' onClick={() => editProductHandler(item)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal
          isOpen={modalVisible}
          onRequestClose={onModalCloseHandler}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className='outerAddForm'>
            <div className='innerAddForm'>
              {isEdit ? <h1>Update Product</h1>
              :
              <h1>Add New Product</h1>}
              <button id='closeFormBtn' onClick={() =>onModalCloseHandler()}><b>✖</b></button>

              <div className='formInput'>
                <label htmlFor=""><b>Title:</b></label><br />
                <input type="text"  value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter the Title' /><br /><br />
                <label htmlFor=""><b>Category:</b></label><br />
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Enter the Category' /><br /><br />
                <label htmlFor=""><b>Description:</b></label><br />
                <input type="text"  value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter the Description' /><br /><br />
                <label htmlFor=""><b>Price:</b></label><br />
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter the Price' /><br /><br />
                <label htmlFor=""><b>Image:</b></label><br />
                <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} placeholder='Enter the Image URL' /><br /><br />
                
                {isEdit ? <button onClick={productUpdateHandler}>Update</button>
                :
                <button className='my-button' onClick={ productSubmitHandler}>Submit</button>}



                
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Products;
