import { Link } from "react-router-dom";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import productImg1 from "./../assets/images/products/1.png";
import Rating from "react-rating";

const ProductCard = () => {
  const link = `/product/`;
  return (
    <article className="border rounded-lg p-5 space-y-4 hover:border-primary text-center">
      <Link className="block rounded-lg bg-bgGray text-center p-5" to={link}>
        <img className="inline w-52 object-contain" src={productImg1} alt="" />
      </Link>
      <Rating
        initialRating={4.5}
        emptySymbol={<AiOutlineStar />}
        fullSymbol={<AiFillStar />}
        className="text-orange-600 text-xl"
      />
      <Link className="block" to={link}>
        <h4 className="text-2xl leading-none">Car Engine Plug</h4>
      </Link>
      <p className="font-bold text-primary">Price : $20.00</p>
    </article>
  );
};

export default ProductCard;
