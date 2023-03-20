import { useState } from "react";
import { Navigate } from "react-router-dom";
import "../assets/styles/form.css";

function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [files, setFiles] = useState("");
  const [quantity, setQuantity] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [addProduct, setAddProduct] = useState(false);
  const [addNotProduct, setAddNotProduct] = useState(false);

  async function createNewProduct(e) {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("description", description);
    data.set("price", price);
    data.set("quantity", quantity);
    data.set("file", files[0]);

    const response = await fetch("http://localhost:5000/product", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
      setAddProduct(true);
    } else setAddNotProduct(true);
  }

  if (redirect) {
    return <Navigate to={"/productRegister"} />;
  }
  return (
    <div className="formRegister">
      <h1>ADD A PRODUCT</h1>
      <form onSubmit={createNewProduct}>
        <input
          type="title"
          placeholder={"Title"}
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <input
          type="summary"
          placeholder={"Description"}
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <input
          type="quantity"
          placeholder={"Quantity"}
          value={quantity}
          onChange={(ev) => setQuantity(ev.target.value)}
        />
        <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
        <input
          value={price}
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button style={{ marginTop: "5px" }}>Add nex product</button>
        {addProduct ? (
          <div style={{ color: "green" }}>Product added successfully</div>
        ) : null}
        {addNotProduct ? (
          <div style={{ color: "red" }}>
            Error product does not added, please retry
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default CreateProduct;
