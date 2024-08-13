import { useState } from "react";
import Card from "./components/Card.jsx";
import  {products}  from "./data/data.js";
import NavBar from "./components/NavBar.jsx";
const App = () => {
  const [totalProduct, setTotalProduct] = useState(products)
  const [cart, setCart] = useState([])
  return (
    <div>
      <NavBar />
      <h1 className="text-center mt-5">Listado de frutas</h1>
      <div className="container d-flex flex-wrap gap-3">
        {totalProduct.map((item) => (
          <Card key={item.id} item={item} setCart={setCart} cart={cart} />
        ))}
      </div>
      <hr />
      <h1 className="text-center mt-5">Elemento del Carrito</h1>
      {cart.map((item) => (
        <p key={item.id}>{item.name} - ${item.price}</p>
      ))}
    </div>
  );
};

export default App;
