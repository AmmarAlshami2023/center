import React from "react";
import classes from "./Header.module.css";
import CartButton from "../cart/CartButton";
import { useSelector } from "react-redux";

function Header({ onClick }) {
  const count = useSelector((state) => state.cart.item.length);

  return (
    <header className={classes.headers}>
      <div className={classes.bar}>
        <div className={classes.titleBox}>
          <h1 className={classes.title}>CENTER</h1>
        </div>
        <div className={classes.cartBox}>
          <CartButton onClick={onClick} count={count} />
        </div>
      </div>
    </header>
  );
}

export default Header;
