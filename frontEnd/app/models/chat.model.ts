export interface IChat {
  message: string;
  from: string;
  to: string;
  date: Date;
  time?: string;
  id?: string;
}
