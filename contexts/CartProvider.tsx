import { createContext, ReactElement, useContext } from "react";
import CartItem from "../models/cartItem";

export const CartContext = createContext<CartItem[] | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)

  if (typeof context === "undefined") {
    throw Error('useCart must be used within CartContextProvider')
  }

  return context
}

type CartProviderProps = {
  cart: CartItem[],
  children: ReactElement
}

export const CartProvider = ({ cart, children }: CartProviderProps) => {
  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  )
}