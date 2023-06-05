import React from "react";
import classes from "./MyCart.module.css";
function MyItemOnCart({ piece = {}, onClick }) {
  return (
    <div className={classes.cartItemBox}>
      <div>
        <img
          src={piece.image}
          className={classes.imgOnCart}
          alt="for product"
        />
      </div>
      <div className={classes.title}>
        <p>{piece.title}</p>
      </div>
      <div className={classes.buttonBox}>
        <button
          className={classes.button}
          onClick={() => {
            onClick();
          }}
        >
          Remove
        </button>
        <h5>{piece.price}JD</h5>
      </div>
    </div>
  );
}

export default MyItemOnCart;
