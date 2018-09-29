
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

export const CHAT_STATUS = {
  NEW: 1,
  SENT: 2,
  READ: 3
};

export class Chat implements IChat {
  message: string;
  from: string;
  to: string;
  date: Date;
  time: string;
  id: string;
  status: number;
  statusIcon: string;
  isSupport: boolean;
  initial: boolean;

  constructor(text: string, from: string, to: string, date: Date, isSupport: boolean, initial: boolean) {
    this.message = text;
    this.from = from;
    this.to = to;
    this.date = date;
    this.isSupport = isSupport;
    this.initial = initial;

    this.time = date.toTimeString().split(" ")[0];
  }

  static newMessage(text: string, from: string, to: string, isSupport?: boolean) {
    return new Chat(text, from, to, new Date(), isSupport, false);
  }

  setInitial(initial: boolean) {
    this.initial = initial;
  }

  setId(id: string) {
    this.id = id;
  }

  setStatus(status: number) {
    if (status >= CHAT_STATUS.NEW && status <= CHAT_STATUS.SENT) {
      this.status = status;
      this.statusIcon = this.createStatusIcon(status);
    }
  }

  updateStatus(up: boolean) {
    if (!this.status) {
      this.status = CHAT_STATUS.NEW;
    }

    this.setStatus(up ? this.status++ : this.status--);
  }

  private createStatusIcon(status): string {
    let statusIcon = "";

    switch (status) {
      case CHAT_STATUS.SENT:
        statusIcon = "&#xf00c";
        break;
      case CHAT_STATUS.READ:
        statusIcon = "&#xf560";
        break;
      default:
        statusIcon = "";
        break;
    }

    return statusIcon;
  }
}
