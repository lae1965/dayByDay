export enum Role {
  user = 'user',
  assistent = 'assistent'
}

export interface Message {
  role: Role
  message: string
}
