import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
import Product from "./products/Product";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../component/store/ReduxSlice";
import MyItemOnCart from "./cart/MyItemOnCart";
import { useNavigate } from "react-router";
import Header from "./header/Header";
function Home() {
  //this piece of code for use state for popup and put items on array
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);

  //this line of code for navigate to detail page
  const navigate = useNavigate();

  //this piece of code for use redux toolkit hooks
  const cartItems = useSelector((state) => state.cart.item);
  const dispatch = useDispatch();

  //this piece of code for count id on cart
  const itemsCount = {};
  const arryOfIds = cartItems.map((itemOnCart) => itemOnCart.id);
  arryOfIds.forEach((index) => {
    return (itemsCount[index] = (itemsCount[index] || 0) + 1);
  });

  //this piece of code for do http request fetch for get data from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  //this piece of code to open cart Popup
  function openPopup() {
    setIsCartOpen(true);
  }

  //this piece of code to close cart Popup
  function closePopup() {
    setIsCartOpen(false);
  }

  //this piece of code to return cart Popap
  return (
    <div>
      <div className={isCartOpen ? classes.modal : classes.hide}>
        <div>
          <h2 className={classes.modal__header}>Cart</h2>
        </div>
        <button className={classes.btn__close_modal} onClick={closePopup}>
          &times;
        </button>

        <div className={classes.myItemOnCart}>
          {
            //this piece of code to return items on cart
            cartItems.map((piece) => {
              return (
                <div>
                  <MyItemOnCart
                    key={piece.id}
                    piece={piece}
                    onClick={() => {
                      dispatch(removeFromCart(piece.id));
                    }}
                  />
                </div>
              );
            })
          }
        </div>
      </div>
      <div>
        <Header onClick={openPopup} />
      </div>

      <div className={classes.containerItem}>
        {
          //this piece of code to map state All item
          products.map((item) => {
            return (
              //All item has detail page
              <div
                key={item.id}
                onClick={(event) => {
                  if (event.target.tagName !== "BUTTON") {
                    navigate(`/productItem/${item.id}/`);
                  }
                }}
              >
                <Product
                  item={item}
                  key={item.id}
                  numberOfItem={itemsCount[item.id]}
                  onClick={() => {
                    dispatch(addToCart(item));
                  }}
                  onClickRemove={() => {
                    dispatch(removeFromCart(item.id));
                  }}
                />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
export default Home;
