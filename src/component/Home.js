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
} from "../component/store/ReduxSlice";
import MyCart from "./cart/MyCart";
import { useNavigate } from "react-router";
function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const count = useSelector((state) => state.counter.value);
  const cartItem = useSelector((state) => state.counter.item);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItemId = useSelector((state) => state.counter.counterItem);

  const hi = {};
  cartItemId.forEach((i) => {
    return (hi[i] = (hi[i] || 0) + 1);
  });

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
          dispatch(decrement());
          dispatch(removeFromCart(pice.id));
        }}
      />
    );
  });

  const item = products.map((items) => {
    return (
      <div
        onClick={(event) => {
          if (event.target.tagName !== "BUTTON") {
            navigate(
              `/productItem/${items.id}/${items.title}/${items.description}/
              ${items.price}/${items.category}/${items.image.substr(29, 1000)}`
            );
          }
        }}
      >
        <Product
          title={items.title}
          key={items.id}
          price={items.price}
          img={items.image}
          id={items.id}
          n={hi[items.id]}
          onClick={() => {
            dispatch(increment());
            dispatch(addToCart(items));
          }}
          onClickRemove={() => {
            dispatch(removeFromCart(items.id));
            dispatch(decrement());
          }}
        />
      </div>
    );
  });
  function openPopup() {
    setIsCartOpen(true);
  }
  function closePopup() {
    setIsCartOpen(false);
  }
  return (
    <div className={isCartOpen ? classes.pupapOpen : classes.home}>
      <div className={isCartOpen ? classes.modal : classes.hide}>
        <button className={classes.btn__close_modal} onClick={closePopup}>
          &times;
        </button>
        <h2 className={classes.modal__header}>Cart</h2>
        <div className={classes.myItemOnCart}>{myCart}</div>

        <div className={[classes.overlay, classes.hidden]}></div>
      </div>

      <header className={classes.headers}>
        <div className={classes.bar}>
          <div className={classes.titleBox}>
            <h1 className={classes.title}>CENTER</h1>
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
