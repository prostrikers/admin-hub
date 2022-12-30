export interface Link {
  href: string;
  rel: string;
  method: string;
}

export interface UserId {
  _id: string;
  cid: string;
  email: string;
  firstName: string;
  lastName: string;
  profileImgUrl: string;
  bio: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface BookingId {
  _id: string;
  startTime: Date;
  endTime: Date;
  place: string;
  transactionId: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Amount {
  currency_code: string;
  value: string;
}

export interface DisplayData {
  brand_name: string;
}

export interface Payee {
  email_address: string;
  merchant_id: string;
  display_data: DisplayData;
}

export interface Name {
  full_name: string;
}

export interface Address {
  address_line_1: string;
  admin_area_2: string;
  admin_area_1: string;
  postal_code: string;
  country_code: string;
}

export interface Shipping {
  name: Name;
  address: Address;
}

export interface PurchaseUnit {
  reference_id: string;
  amount: Amount;
  payee: Payee;
  shipping: Shipping;
}

export interface Link2 {
  href: string;
  rel: string;
  method: string;
}

export interface Name2 {
  given_name: string;
  surname: string;
}

export interface Address2 {
  country_code: string;
}

export interface Payer {
  name: Name2;
  email_address: string;
  payer_id: string;
  address: Address2;
}

export interface PaypalResource {
  create_time: Date;
  purchase_units: PurchaseUnit[];
  links: Link2[];
  id: string;
  intent: string;
  payer: Payer;
  status: string;
}

export interface Meta {
  bookingId: BookingId;
  paypalResource: PaypalResource;
}

export interface ITransactionDetails {
  _id: string;
  paypalId: string;
  status: string;
  transactionType: string;
  links: Link[];
  userId: UserId;
  meta: Meta;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
