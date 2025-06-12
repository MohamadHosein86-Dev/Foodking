import { Session } from "inspector/promises";

export interface PropsType{
    children:React.ReactNode
}
export interface ExtendedSession extends Session {
  accessToken: string;
  refreshToken: string;
}