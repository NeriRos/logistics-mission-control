export interface Chat {
  message: string;
  from: string;
  to: string;
  date: Date;
  id?: string;
}