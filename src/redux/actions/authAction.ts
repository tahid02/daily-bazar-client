import { IAuthData } from 'types';
import { ActionType } from 'redux/actionTypes';
interface ILogInAction {
  type: ActionType.LOG_IN;
  payload: IAuthData;
}
interface ILogOutAction {
  type: ActionType.LOG_OUT;
}

export type AuthAction = ILogInAction | ILogOutAction;
