import { User } from "./user";

export type Session = {
  accessToken: string;
  currentUser: User;
  expiration: Date;
}