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

export type BlogContentItem =
| { link: string; type?: "text" } 
| { type: "comment"; author: string; post: string };
export interface BlogBox {
  id: number;
  titel: string;
  contens: BlogContentItem[];
}