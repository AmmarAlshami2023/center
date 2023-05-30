import React from "react";
import classes from "./MyCart.module.css";
function MyCart(props) {
  return (
    <div className={classes.cartItemBox}>
      <div>
        <img
          src={
            props.img.includes("https://fakestoreapi.com/img/")
              ? props.img
              : "https://fakestoreapi.com/img/" + props.img
          }
          className={classes.imgOnCart}
          alt="background"
        />
      </div>

      <div className={classes.title}>
        <p>{props.title}</p>
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
