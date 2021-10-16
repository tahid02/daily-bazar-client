import { IProduct } from 'types';
import { ActionType } from 'redux/actionTypes';
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
