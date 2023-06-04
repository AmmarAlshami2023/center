import React from "react";
import classes from "./Product.module.css";

function Product({ numberOfItem, item, onClick, onClickRemove }) {
  if (numberOfItem) {
    return (
      <div className={classes.productBox}>
        <img
          src={item.image}
          className={numberOfItem ? classes.imgSelect : classes.img}
          alt="for Product "
        />
        <div className={classes.textBox}>
          <h1 className={classes.text}>{item.title.slice(0, 29)}</h1>
        </div>
        <div className={classes.PriceBox}>
          <h2 className={classes.Price}>{item.price}JD</h2>
        </div>
        <div className={classes.buttonBox}>
          <button className={classes.buttonMin} onClick={onClickRemove}>
            -
          </button>
          <div className={classes.counterBox}>
            <h3 className={classes.counterItem}> {numberOfItem} </h3>
          </div>
          <button className={classes.buttonPlse} onClick={onClick}>
            +
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.productBox}>
        <img
          src={item.image}
          className={numberOfItem ? classes.imgSelect : classes.img}
          alt="background"
        />
        <div className={classes.textBox}>
          <h1 className={classes.text}>{item.title.slice(0, 29)}</h1>
        </div>

        <div className={classes.PriceBox}>
          <h2 className={classes.Price}>{item.price}JD</h2>
        </div>

        <div className={classes.buttonBox}>
          <button
            className={classes.button}
            onClick={(event) => {
              if (event.target.tagName === "BUTTON") {
                onClick();
              }
            }}
          >
            add
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
