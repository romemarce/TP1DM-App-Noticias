export interface IError {
  isError: boolean;
  title?: string;
  code?: number;
  message: string;
}
export const initIError: IError = {
  isError: false,
  message: '',
};

export interface IProfile {
  isLoggedIn: boolean;
}

export const initIProfile:IProfile = {
  isLoggedIn: false,
};

export interface IMenuList {
  path: string,
  name: string,
  icon?: string
}
export const initIMenuList:IMenuList = {
  name: '',
  path: '',
  icon: ''
}