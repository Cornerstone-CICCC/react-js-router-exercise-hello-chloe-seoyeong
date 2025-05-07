import type { ProductDetail } from "@/types/product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDetail | null>(null);
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
      <div>
        <p>{product.description}</p>
        <span>{product.category}</span>
        <ul>
          {product.reviews.map((r, index) => (
            <li key={index}>
              <p>{r.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
