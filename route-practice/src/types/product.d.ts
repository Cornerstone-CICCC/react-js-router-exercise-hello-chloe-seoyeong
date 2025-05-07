export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
}

export interface ProductItem extends Product {
  availabilityStatus: string;
  reviews: [
    {
      rating: number;
      comment: string;
      reviewerName: string;
      reviewerEmail: string;
    }
  ];
}
