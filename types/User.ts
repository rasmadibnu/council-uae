export interface User {
  id?: number;
  username: string;
  name?: string;
  password: string;
  cretedAt?: Date;
  UpdatedAt?: Date;
}

export type UserPreview = Omit<User, "password">;
