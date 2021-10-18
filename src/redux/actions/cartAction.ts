import { IProduct } from 'types';
import { ActionType } from 'redux/actionTypes';
import { type } from 'os';
export const addToCart = (payload: IProduct) => {
  return {
    type: ActionType.ADD_TO_CART,
    payload,
  };
};
export const removeFromCart = (id: String) => {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload: id,
  };
};
export const clearTheCart = () => {
  return {
    type: ActionType.CLEAR_THE_CART,
    payload: '',
  };
};

export type CartAction =
  | ReturnType<typeof addToCart>
  | ReturnType<typeof removeFromCart>
  | ReturnType<typeof clearTheCart>;

// Output of type CartAction while hovering over it
//  type CartAction = {
//     type: ActionType;
//     payload: IProduct;
// } | {
//     type: ActionType;
//     payload: String;
// } | {
//     type: ActionType;
//     payload: string;
// }
