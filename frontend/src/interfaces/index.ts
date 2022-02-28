export interface SignupInterface {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  showPassword?: boolean;
}

export interface LoginInterface {
  password: string;
  email: string;
  showPassword?: boolean;
}

export interface UserStateInterface {
  isAuth: boolean;
  user: string;
}

export interface PersonalInterface {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  about: string;
  id?: string;
}
