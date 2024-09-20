import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
// import Cart from "./components/Cart/Cart";
import "./App.css";

const App = () => {
  const [card, setCard] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  const handleAddCart = (pd) => {
    const isExists = cart.find((p) => p.id == pd.id);
    if (!isExists) {
      setCart([...cart, pd]);
    } else {
      alert("Cart already exists");
    }
  };
  const handleRemove = (id) => {
    const removeItem = cart.filter((item) => item.id != id);
    setCart(removeItem);
  };

  return (
    <>
      <div className="flex  mt-20 mb-48">
        <div className="w-2/3 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10mb-36 ">
          {card.map((item) => (
            <Card
              key={item.id}
              product={item}
              handleAddCart={handleAddCart}
            ></Card>
          ))}
        </div>
        <div className="cart-container w-1/3">
          <div className="cart">
            <h3 className="text-xl font-bold mb-14">Total Added product: {card.length}</h3>

            <div className="cart-items grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-between">
              <h5 className="text-xl font-semibold">Name</h5>
              <h5  className="text-xl font-semibold " >Price</h5>
            </div>
            <div className="added-item ">
              {cart.map((cp) => (
                <>
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-between"> 
                <p>{cp.title.slice(0, 25)}</p>
                <p className="">{cp.price}</p>
                </div>
                  <button className="btn btn-accent" onClick={(e) => handleRemove(cp.id)}>remove</button>
                </>
              ))}
            
                <div className="mt-14">
            
                <h1 className="text-2xl font-bold text-black">Total Price: 0</h1>
                </div>
            </div>
          </div>
        </div>
      
 

        {/* <div className="w-1/3 ">
    {
      cart.map((cp)=>(
        <Cart add={cp} >
           <>  <p>{cp.title.slice(0, 25)}</p></>
        </Cart>
      ))
    }
     </div> */}

      </div>
   

    </>
  );
};

export default App;
