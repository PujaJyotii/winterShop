import { Button, Modal } from "react-bootstrap";
import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../Redux/CartSlice";

function Cart(props) {
  let cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  let totalA = cart.reduce(
    (total, item) => item.price * item.quantity + total,
    0
  );
  let addHandler = async (el) => {
    let index = cart.findIndex((item) => item.name === el.name);
    if (index === -1) {
      let obj = { ...el, quantity: 1 };
      console.log(obj);
      try {
        let resp = await fetch(
          "https://winter-shop-b31e1-default-rtdb.firebaseio.com/cart.json",
          {
            method: "POST",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!resp.ok) {
          throw new Error(resp.status);
        }
        let data = await resp.json();
        dispatch(cartAction.add({ ...el, quantity: 1, id: data.name }));
      } catch (err) {
        console.log(err);
      }
    } else {
      let obj = { ...cart[index], quantity: cart[index].quantity + 1 };
      try {
        let resp = await fetch(
          `https://winter-shop-b31e1-default-rtdb.firebaseio.com/cart/${cart[index].id}.json`,
          {
            method: "PUT",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!resp.ok) {
          throw new Error(resp.status);
        }
        let data = await resp.json();
        console.log(data);
        dispatch(cartAction.add(el));
      } catch (error) {
        console.log(error);
      }
    }
  };
  let subHandler = async (el) => {
    let index = cart.findIndex((item) => item.name === el.name);
    if (cart[index].quantity === 1) {
      try {
        let resp = await fetch(
          `https://winter-shop-b31e1-default-rtdb.firebaseio.com/cart/${cart[index].id}.json`,
          {
            method: "DELETE",

            headers: { "Content-Type": "application/json" },
          }
        );
        if (!resp.ok) {
          throw new Error(resp.status);
        }
        dispatch(cartAction.reduce(el));
      } catch (err) {
        console.log(err);
      }
    } else {
      let obj = { ...cart[index], quantity: cart[index].quantity - 1 };
      try {
        let resp = await fetch(
          `https://winter-shop-b31e1-default-rtdb.firebaseio.com/cart/${cart[index].id}.json`,
          {
            method: "PUT",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!resp.ok) {
          throw new Error(resp.status);
        }
        let data = await resp.json();
        console.log(data);
        dispatch(cartAction.reduce(el));
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <Modal show={props.show} onHide={props.onHide} className={classes.box}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {cart.map((el) => (
              <li key={el.name}>
                <div className={classes.boxI}>
                  <div className={classes.box1}>
                    <div>{el.name}</div>
                    <div>Price:{el.price}</div>
                  </div>
                  <div className={classes.box2}>
                    <div
                      className={classes.box3}
                      onClick={() => addHandler(el)}
                    >
                      +
                    </div>
                    <div>x{el.quantity}</div>
                    <div
                      className={classes.box3}
                      onClick={() => subHandler(el)}
                    >
                      -
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer className={classes.box5}>
          <div>
            <div className={classes.box4}>TotalAmount : Rs.{totalA}</div>
          </div>
          <div>
            <Button
              variant="dark"
              onClick={props.onHide}
              style={{ margin: "3px" }}
            >
              Close
            </Button>
            <Button variant="danger">Purchase</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
