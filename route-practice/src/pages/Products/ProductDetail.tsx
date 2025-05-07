import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ProductItem } from "@/types/product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductItem | null>(null);
  useEffect(() => {
    const getProductById = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    getProductById();
  }, [id]);

  if (product === null) return null;

  return (
    <div>
      <h1 className="text-3xl">{product.title}</h1>
      <div className="mt-5">
        <p>{product.description}</p>
        <span>{product.category}</span>
        <ul>
          {product.reviews.map((r, index) => (
            <li key={index} className="my-3">
              <Card>
                <CardHeader className={cn("flex justify-between")}>
                  <span>{r.reviewerName}</span>
                  <span className="text-sm text-gray-500">
                    {r.reviewerEmail}
                  </span>
                </CardHeader>
                <CardContent>
                  <p>{r.comment}</p>
                </CardContent>
                <CardFooter>
                  <Badge variant={"outline"}>{r.rating}</Badge>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
