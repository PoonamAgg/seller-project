import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const AddUser = () => {
  const [productId, setProductId] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [productname, setProductName] = useState("");
  const [user, setUser] = useState([]);

  
  useEffect(() => {
    const localStorageKeys = Object.keys(localStorage);
    const loadedItems = [];

    for (let i = 0; i < localStorageKeys.length; i++) {
      const key = localStorageKeys[i];
      const itemDetailsString = localStorage.getItem(key);
      const updatedItemDetails = itemDetailsString ? JSON.parse(itemDetailsString) : null;
      if (updatedItemDetails) {
        loadedItems.push(updatedItemDetails);
      }
    }

    setUser(loadedItems);
  }, []);

  const idHandler = (e) => {
    setProductId(e.target.value);
  };
  const priceHandler = (e) => {
    setSellingPrice(e.target.value);
  };

  const nameHandler = (e) => {
    setProductName(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const enteredCategory = e.target.options.value;

    const obj = {
      id: productId,
      price: sellingPrice,
      name: productname,
      category: enteredCategory,
    };
    setUser([...user, obj]);

    localStorage.setItem(productId, JSON.stringify(obj));

    setProductId("");
    setProductName("");
    setSellingPrice("");
  };

  const deleteProduct = (id) => {
    const updatedUser = user.filter((item) => item.id !== id);
    setUser(updatedUser);
    localStorage.removeItem(id);
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <label>Product ID: </label>
        <input
          type="number"
          placeholder="Enter ID..."
          onChange={idHandler}
          value={productId}
        />

        <label>Selling Price: </label>
        <input
          type="text"
          placeholder="Enter the selling of product.."
          onChange={priceHandler}
          value={sellingPrice}
        />

        <label>Product Name:</label>
        <input
          type="text"
          placeholder="Enter Product name..."
          onChange={nameHandler}
          value={productname}
        />

        <label>Choose Category:</label>
        <select id="options">
          <option value="SkinCare Product">SkinCare</option>
          <option value="Electronics">Electronics</option>
          <option value="Food">Food</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
      <ItemList user={user} delete={deleteProduct} />
    </div>
  );
};

export default AddUser;
