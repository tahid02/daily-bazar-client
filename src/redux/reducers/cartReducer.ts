import { CartAction } from './../actions/cartAction';
import { IProduct } from 'types';
import { ActionType } from 'redux/actionTypes';

// interface IAction  {
//     type:string;
//     payload?:any
// }

// here action type should be this type alias
// type CartAction = {
//     type: ActionType;
//     payload: IProduct;
// } | {
//     type: ActionType;
//     payload: String;
// } | {
//     type: ActionType;
//     payload: string;
// }

// we can create this type alias using ReturnType:
// export type CartAction =
//   | ReturnType<typeof addToCart> // this will return the return type of addToCart function
//   | ReturnType<typeof removeFromCart>
//   | ReturnType<typeof clearTheCart>;

// export const cartReducer = (state:IProduct[] = [],action:IAction)=>{
export const cartReducer = (state: IProduct[] = [], action: CartAction) => {
  // smart approach for declaring the type of action
  switch (action.type) {
    case ActionType.ADD_TO_CART: {
      return [...state, action.payload];
    }

    case ActionType.REMOVE_FROM_CART: {
      const newState = state.filter(
        (product) => product._id !== action.payload
      );
      return newState;
    }

    case ActionType.CLEAR_THE_CART: {
      return [];
    }
    default: {
      return state;
    }
  }
};
