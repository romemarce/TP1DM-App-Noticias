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

export interface IUser {
  name: string
}

export const initIUser:IUser = {
  name: ''
}

export interface IPost {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
}

export interface IAuthLogin {
  email: string,
  password: string
}

export interface IUserProfile {
  email: string,
  name: string,
  news: {
    category: string
  }
}