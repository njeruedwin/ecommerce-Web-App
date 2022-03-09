import React, { Component } from "react";
import { Link } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import styled from "styled-components";
import "./card.css";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Card = ({ product, adminPage = false, homePage = false }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Container>
      <div>
        <div className="col-md-4 my-3">
          <div className="card-view">
            <div className="card-body">
              <div class="card-container">
                <div>
                  <img
                    className="card-image"
                    src={`/uploads/${product.fileName}`}
                    alt="product"
                  />
                </div>

                <div>
                  <div class="product">
                    <h1>{product.productName}</h1>
                    <h2>Ksh.{product.productPrice}</h2>
                    <p class="desc">
                      {product.productDesc.length > 60
                        ? product.productDesc.substring(0, 60) + "..."
                        : product.productDesc.substring(0, 60)}
                    </p>
                    {adminPage && (
                      <>
                        <Link
                          to={`/admin/edit/product/${product._id}`}
                          type="button"
                          className="btn btn-secondary btn-sm mr-1 my-1"
                        >
                          <i className="far fa-edit pr-1"></i>
                          Edit
                        </Link>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => dispatch(deleteProduct(product._id))}
                        >
                          <i className="far fa-trash-alt pr-1"></i>
                          Delete
                        </button>
                      </>
                    )}

                    {homePage && (
                      <>
                        <Link
                          style={{ color: "teal" }}
                          to={`/product/${product._id}`}
                          type="button"
                        >
                          View Product
                        </Link>
                        <div class="buttons">
                          <button class="add" onClick={handleAddToCart}>
                            Add to Cart
                          </button>
                          <button class="like">
                            <span>♥</span>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;
