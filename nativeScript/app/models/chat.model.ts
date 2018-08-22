export interface IChat {
  message: string;
  from: string;
  to: string;
  date: Date;
  time?: string;
  id?: string;
  status?: number;
  statusIcon?: string;
  isSupport?: boolean;
  initial?: boolean;
}
