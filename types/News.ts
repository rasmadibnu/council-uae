import type { UserPreview } from "./User";

export interface News {
  id?: number;
  title?: string;
  content?: string;
  published?: boolean;
  author?: UserPreview;
  created_by?: number;
  category_id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
