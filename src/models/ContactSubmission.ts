export interface ContactSubmission {
  id?: number;
  full_name: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  product_id?: number | null;
  created_at?: string;
}
