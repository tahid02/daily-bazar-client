import { AuthAction } from 'redux/actions/authAction';
import { ActionType } from 'redux/actionTypes';
import AuthService from 'services/AuthService';
import { Dispatch } from 'react';

export const login = (payload: { email: string; password: string }) => {
  return (dispatch: Dispatch<AuthAction>) => {
    AuthService.login(payload).then((data) => {
      dispatch({
        type: ActionType.LOG_IN,
        payload: data,
      });
    });
  };
};
