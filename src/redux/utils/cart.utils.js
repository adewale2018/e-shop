export const addItemToCart = (cartItems, itemToAdd) => {
  const itemExisting = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (itemExisting) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemId) =>
  cartItems.filter((cartItem) => cartItem.id !== itemId);

export const deleteItemFromCart = (cartItems, itemToDelete) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToDelete.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === itemToDelete.id
      ? {...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
