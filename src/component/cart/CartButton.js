import React from "react";
import CartIcon from "./CartIcon";
import classes from "./Cart.module.css";
function CartButton(props) {
  // this piece of code for return cart Button on header
  return (
    <div className={classes.buttonBox}>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{props.count}</span>
      </button>
    </div>
  );
}

export default CartButton;
