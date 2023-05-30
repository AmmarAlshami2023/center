import React from "react";
import classes from "./Product.module.css";

function Product(props) {
  const handleOnClick = () => {
    props.onClick();
  };
  const handleOnClickAdd = () => {
    props.onClick();
  };
  const handleOnClickRemove = () => {
    props.onClickRemove();
  };

  if (props.n) {
    return (
      <div className={classes.productBox}>
        <img
          src={props.img}
          className={props.n ? classes.imgSelect : classes.img}
          alt="for Product "
        />
        <div className={classes.textBox}>
          <h1 className={classes.text}>{props.title.slice(0, 29)}</h1>
        </div>
        <div className={classes.PriceBox}>
          <h2 className={classes.Price}>{props.price}JD</h2>
        </div>
        <div className={classes.buttonBox}>
          <button className={classes.buttonMin} onClick={handleOnClickRemove}>
            -
          </button>
          <div className={classes.counterBox}>
            <h3 className={classes.counterItem}> {props.n} </h3>
          </div>
          <button className={classes.buttonPlse} onClick={handleOnClickAdd}>
            +
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.productBox}>
        <img
          src={props.img}
          className={props.n ? classes.imgSelect : classes.img}
          alt="background"
        />
        <div className={classes.textBox}>
          <h1 className={classes.text}>{props.title.slice(0, 29)}</h1>
        </div>

        <div className={classes.PriceBox}>
          <h2 className={classes.Price}>{props.price}JD</h2>
        </div>

        <div className={classes.buttonBox}>
          <button
            className={classes.button}
            onClick={(event) => {
              if (event.target.tagName === "BUTTON") {
                handleOnClick();
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
