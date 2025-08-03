import { Session } from "inspector/promises";

export interface PropsType{
    children:React.ReactNode
}

export interface ExtendedSession extends Session {
  accessToken: string;
  refreshToken: string;
}

export interface FaqsType {
  title: string;
  content: string;
}

export interface BlogDataType {
  id:number;
  title: string;
  desc: string;
  image:string
}
export interface IntrductionType{
  id:number
  title:string
  content:string
}

export type BlogContentItem =
| { link: string; type?: "text" } 
| { type: "comment"; author: string; post: string };
export interface BlogBox {
  id: number;
  Title: string;
  contens: BlogContentItem[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  inventory: number;
  price: string;
  restaurant: number;
  is_active: boolean;
  image: string;
  slug: string;
}
export interface Cart {
  data: Daum[];
  totalPrice: number;
}

export interface Daum {
  cart: number;
  product: Product;
  count: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  inventory: number;
  price: string;
  restaurant: number;
  is_active: boolean;
  image: string;
}

export interface BlogDataType {
  id: number;
  Title: string; 
  contens: (
    | { link: string }
    | { type: string; link?: string; author?: string; post?: string }
  )[];
}

export interface FoodMenuItemType {
  id: number;
  title: string;
  desc: string;
  price: string; 
}

export interface pagesMenuType {
  id: number;
  label:string;
  href: string;
}
