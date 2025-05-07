import { useEffect, useState } from "react";
import type { Product } from "../../types/product";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(`https://dummyjson.com/products`);
      const data = await res.json();
      setProducts(data.products);
    };
    getProducts();
  }, []);
  return (
    <div>
      <h1 className="text-5xl">ProductsList</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id} className="my-2">
            <Link to={`/products/${p.id}`}>
              <Card>
                <CardHeader>
                  <CardTitle>{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{p.description}</CardDescription>
                  <div className="flex justify-between mt-3">
                    <Badge>{p.category}</Badge>
                    <span>{p.price}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
