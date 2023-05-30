import React from "react";
import { useNavigate } from "react-router";
import classes from "./ProductItem.module.css";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { increment, addToCart } from "../store/ReduxSlice";

function ProductItem(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div>
      <header className={classes.headers}>
        <div className={classes.bar}>
          <div className={classes.titleBox}>
            <h1 className={classes.title}>CENTER</h1>
          </div>
        </div>
      </header>
      <div className={classes.container}>
        <div>
          <img
            className={classes.imgBox}
            src={`https://fakestoreapi.com/img/${params.image}`}
            alt=" for Product item "
          />
        </div>
        <div className={classes.boxInfo}>
          <div className={classes.titleBox}>
            <h2>{params.title}</h2>
          </div>
          <div className={classes.categoryBox}>
            <p>
              <strong>category:</strong> {params.category}
            </p>
          </div>
          <div className={classes.discriptionBox}>
            <p>{params.description}</p>
          </div>
          <div className={classes.priceBox}>
            <p>{params.price}JD</p>
          </div>
          <div className={classes.buttonBox}>
            <button
              className={classes.button}
              onClick={() => {
                dispatch(increment());
                dispatch(addToCart(params));
                navigate("/");
              }}
            >
              ADD TO CART
            </button>
          </div>
          <div className={classes.buttonCloseBox}>
            <button
              className={classes.buttonClose}
              onClick={() => navigate("/")}
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
