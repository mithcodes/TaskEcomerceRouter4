import "../App.css";

const Cart = ({ cart }) => {
 
  const { state } = AppState();
  const cartElements = state.cart;

  let total = cartElements.reduce((sum, e) => {
    return sum + e.quantity * e.price;
  }, 0);

  function handleClick() {
    cart((prev) => !prev);
  }

  return (
    <div className="cart">
      <button onClick={handleClick}>X</button>
      <h1>Cart</h1>
      <div className="cart_Item">
        <h3>Item</h3>
        <h3>Price</h3>
        <h3>Qunatity</h3>
      </div>
      {cartElements.map((e) => {
        return (
          <div className="cart_Item">
            <div>{e.title}</div>
            <div>$ {e.price}</div>
            <div>{e.quantity}</div>
          </div>
        );
      })}
     <div className="cart_Item total">
        <h4>Total</h4>
        <h4>${total}</h4>
        <div>
          <button>Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;