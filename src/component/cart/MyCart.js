import React from "react";
import classes from "./MyCart.module.css";
function MyCart(props) {
  return (
    <div className={classes.cartItemBox}>
      <div>
        <img src={props.img} className={classes.imgOnCart} alt="background" />
      </div>

      <div>
        <h5>{props.title}</h5>
      </div>
      <div className={classes.buttonBox}>
        <button className={classes.button} onClick={props.onClick}>
          Remove
        </button>
        <h5>{props.price}JD</h5>
      </div>
    </div>
  );
}

export default MyCart;
