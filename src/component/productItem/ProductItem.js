import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import classes from "./ProductItem.module.css";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/ReduxSlice";
import Header from "../header/Header";

function ProductItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState(0);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Header />
      <div className={classes.container}>
        <div>
          <img
            className={classes.imgBox}
            src={product.image}
            alt="for Product item "
          />
        </div>
        <div className={classes.boxInfo}>
          <div className={classes.titleBox}>
            <h2>{product.title}</h2>
          </div>
          <div className={classes.categoryBox}>
            <p>
              <strong>category:</strong> {product.category}
            </p>
          </div>
          <div className={classes.descriptionBox}>
            <p>{product.description}</p>
          </div>
          <div className={classes.priceBox}>
            <p>{product.price}JD</p>
          </div>
          <div className={classes.buttonBox}>
            <button
              className={classes.button}
              onClick={() => {
                dispatch(addToCart(product));
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
