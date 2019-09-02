export interface IConfig {
  id: number;
  region: string;
  role: string;
}

export interface IQuickList {
  id: number;
  value: string;
}

export interface IUser {
  id: number;
  userName: string;
  securityLevel: string;
  key: string;
  role: string;
}

export interface IComics {
  id: number;
  book: string;
  issueNumber: number;
  price: number;
}