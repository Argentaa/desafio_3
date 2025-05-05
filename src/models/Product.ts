export interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number;
  stock: number;
  category_id: number;
  main_image_url: string | null;
  created_at: string;
}

export interface ProductWithImages extends Product {
  images: ProductImage[];
  category?: string;
}

export interface ProductImage {
  id: number;
  product_id: number;
  image_url: string;
  is_main: boolean;
}
