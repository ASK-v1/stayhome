/* eslint-disable @typescript-eslint/indent */
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
  rooms: any;
  room: any;
  cities: any;
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
  minPrice: number;
  maxPrice: number;
  entirePlace: boolean;
  privateRoom: boolean;
  hotelRoom: boolean;
  sharedRoom: boolean;
  wifi: boolean;
  kitchen: boolean;
  parking: boolean;
  washer: boolean;
  dryer: boolean;
  tv: boolean;
  pool: boolean;
  iron: boolean;
  balcony: boolean;
}

export interface BecomeHostTypeInterface {
  entirePlace: boolean;
  privateRoom: boolean;
  hotelRoom: boolean;
  sharedRoom: boolean;
}

export interface BecomeHostLocationInterface {
  country: string;
  street: string;
  city: string;
  state: string;
  apt: string;
}

export interface BecomeHostGuestInterface {
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}

export interface BecomeHostAmenityInterface {
  wifi: boolean;
  free: boolean;
  tv: boolean;
  microwave: boolean;
  bathtub: boolean;
  iron: boolean;
  pool: boolean;
  kitchen: boolean;
  refrigerator: boolean;
  washer: boolean;
  dryer: boolean;
  coffee: boolean;
  aid: boolean;
  hangers: boolean;
  balcony: boolean;
  freezer: boolean;
}

export interface GuestsInterface {
  adults: number;
  children: number;
  infants: number;
}
