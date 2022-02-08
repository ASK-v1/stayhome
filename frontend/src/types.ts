export interface SignupInterface {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  showPassword: boolean;
}

export interface LoginInterface {
  password: string;
  email: string;
  showPassword: boolean;
}
