import { useContext, useRef } from "react";
import CartModal from "./CartModal";
import { CartContext } from "../store/shopping-cart-context";

export default function Header() {
  const { items, updateItemQuantity } = useContext(CartContext);
  const modal = useRef();
  const cartQuantity = items.length;
  function handleOpenCartClick() {
    modal.current.open();
  }
  let modelActions = <button>Close</button>;
  if (cartQuantity > 0) {
    modelActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }
  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modelActions} />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
