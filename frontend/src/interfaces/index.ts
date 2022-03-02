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

export interface FiltersInterface {
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  bathrooms: string;
  entirePlace: boolean;
  privateRoom: boolean;
  hotelRoom: boolean;
  sharedRoom: boolean;
  wifi: boolean;
  kitchen: boolean;
  parking: boolean;
  washer: boolean;
  dryer: boolean;
  gym: boolean;
  pool: boolean;
  iron: boolean;
  balcony: boolean;
}
