import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import { db } from "./firebase";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("oders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <div className="orders">
      <h1> Your Orders </h1>

      <div className="orders__orders">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
        <h1 className="bye"> This page is Down due to payment processor in </h1>
        <p> <h1> 👋👋👋</h1> </p>
      </div>
    </div>
  );
}

export default Orders;
