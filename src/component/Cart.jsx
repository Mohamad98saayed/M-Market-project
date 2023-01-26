import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Cart() {
  const [num, setNum] = React.useState(1);

  const state = useSelector((state) => state.handleCart);

  const cartProducts = state.map((p) => {
    p.qty = num;
    return (
      <div className="row mb-5">
        <div className="col-md-4">
          <img src={p.image} alt={p.title} height="200px" width="180px" />
        </div>
        <div className="col-md-4">
          <h3>{p.title}</h3>
          <p className="lead fw-bold">
            {p.qty} X {p.price} = {p.qty * p.price} USD
          </p>
          <button
            className="btn btn-outline-dark me-4"
            onClick={() => {
              setNum((prevNum) => prevNum - 1);
              //   p.qty = num;
            }}
          >
            <i className="fa fa-minus"></i>
          </button>
          <button
            className="btn btn-outline-dark me-4"
            onClick={() => {
              setNum((prevNum) => prevNum + 1);
              //   p.qty = num;
            }}
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
    );
  });

  return <div className="container mt-5 ">{cartProducts}</div>;
}
