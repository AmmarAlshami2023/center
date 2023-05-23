import React, { useState } from "react";
import classes from "./Product.module.css";
function Product(props) {
  const [isSelected, setIsSelected] = useState(false);
  const [itemCounter, setItemCounter] = useState(0);
  const handleOnClick = () => {
    setIsSelected(true);
    props.onClick();
    setItemCounter((n) => {
      return (n += 1);
    });
  };
  const handleOnClickAdd = () => {
    setItemCounter((n) => {
      return (n += 1);
    });
    setIsSelected(true);
    props.onClick();
  };
  const handleOnClickRemove = () => {
    if (itemCounter === 1) {
      setIsSelected(false);
    }
    setItemCounter((n) => {
      return (n -= 1);
    });
    props.onClickRemove();
  };
  if (isSelected) {
    return (
      <div className={classes.productBox}>
        <img
          src={props.img}
          className={
            isSelected && itemCounter !== 0 ? classes.imgSelect : classes.img
          }
          alt="background"
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
            <h3 className={classes.counterItem}> {itemCounter} </h3>
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
          className={
            isSelected && itemCounter !== 0 ? classes.imgSelect : classes.img
          }
          alt="background"
        />

        <div className={classes.textBox}>
          <h1 className={classes.text}>{props.title.slice(0, 29)}</h1>
        </div>

        <div className={classes.PriceBox}>
          <h2 className={classes.Price}>{props.price}JD</h2>
        </div>

        <div className={classes.buttonBox}>
          <button className={classes.button} onClick={handleOnClick}>
            add
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
