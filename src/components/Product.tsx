import { Router, useNavigate } from "react-router-dom";

interface ProductProps {
  id: number;
  name: string;
  imgPath: string;
  imgURL: string;
  description: string;
}

function Product({ id, name, imgPath, imgURL, description }: ProductProps) {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate(`/scavenger/product=${id}`)}
        className="border-1 border-white"
      >
        <p>{name}</p>
        <p>{imgPath}</p>
        <p>{description}</p>
      </div>
    </>
  );
}
export default Product;
