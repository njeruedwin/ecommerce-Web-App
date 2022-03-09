import React, { useEffect } from "react";
import { showLoading } from "../helpers/loading";
import Card from "./Card";
import Slideshow from "./Slideshow.jsx";
import { getNewArrivals } from "../redux/actions/filterActions";
import { getProductsByCount } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Categories from "./Categories";
import Announcement from "./Announcement";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewArrivals());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductsByCount());
  }, [dispatch]);

  const { newArrivals } = useSelector((state) => state.filters);
  const { products } = useSelector((state) => state.products);
  const { loading } = useSelector((state) => state.loading);

  return (
    <div>
      <Announcement />
      <Slideshow />
      {loading ? (
        <div className="text-center">{showLoading()}</div>
      ) : (
        <>
          <br />
          <div className="container">
            <Categories />
            <h3>New Arrivals</h3>
            <div className="row">
              {newArrivals &&
                newArrivals.map((newArrival) => (
                  <Card
                    key={newArrival._id}
                    product={newArrival}
                    homePage={true}
                  />
                ))}
            </div>
          </div>
          <Newsletter />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Home;
