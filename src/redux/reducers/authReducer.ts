import { AuthAction } from 'redux/actions/authAction';
import { IAuthData } from 'types';
import { ActionType } from 'redux/actionTypes';

export const authReducer = (
  state: IAuthData | null = null,
  action: AuthAction
): IAuthData | null => {
  switch (action.type) {
    case ActionType.LOG_IN:
      return action.payload;

    case ActionType.LOG_OUT:
      return null;

    default:
      return state;
  }
};
