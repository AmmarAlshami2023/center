import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
import CartButton from "./cart/CartButton";
import Product from "./products/Product";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  addToCart,
  removeFromCart,
  decrement,
  // incrementItem,
  // decrementItem,
} from "../component/store/ReduxSlice";
import MyCart from "./cart/MyCart";

function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const count = useSelector((state) => state.counter.value);
  const cartItem = useSelector((state) => state.counter.item);
  // const itemCounter = useSelector((state) => state.counter.itemCounter);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  const myCart = cartItem.map((pice) => {
    return (
      <MyCart
        title={pice.title}
        key={pice.id}
        price={pice.price}
        img={pice.image}
        onClick={() => {
          dispatch(removeFromCart(pice.id));
          dispatch(decrement());
        }}
      />
    );
  });
  const item = products.map((items) => {
    // items.prototype.itemCounter = 0;
    return (
      <Product
        title={items.title}
        key={items.id}
        price={items.price}
        img={items.image}
        id={items.id}
        // itemCounter={items.itemCounter}
        onClick={() => {
          dispatch(increment());
          dispatch(addToCart(items));
          // dispatch(incrementItem());
        }}
        onClickRemove={() => {
          dispatch(removeFromCart(items.id));
          dispatch(decrement());
          // dispatch(decrementItem());
        }}
      />
    );
  });

  function openPopup() {
    setIsCartOpen(true);
  }
  function closePopup() {
    setIsCartOpen(false);
  }

  if (isCartOpen) {
    return (
      <div className={classes.home}>
        <div className={classes.modal}>
          <button className={classes.btn__close_modal} onClick={closePopup}>
            &times;
          </button>
          <h2 className={classes.modal__header}>Cart</h2>
          <div className={classes.myItemOnCart}>{myCart}</div>
        </div>

        <div className={[classes.overlay, classes.hidden]}></div>
      </div>
    );
  }
  return (
    <div className={classes.home}>
      <header className={classes.headers}>
        <div className={classes.bar}>
          <div>
            <p className={classes.title}>CENTER</p>
          </div>

          <div className={classes.cartBox}>
            <CartButton onClick={openPopup} count={count} />
          </div>
        </div>
      </header>
      <div className={classes.containerItem}>{item}</div>
    </div>
  );
}

export default Home;
