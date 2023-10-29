import Rating from "react-rating";
import avatar from "./../assets/images/avatar1.jpeg";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import quoteIcon from "./../assets/icons/quote.svg";

const Testimonial = () => {
  return (
    <div className="p-5 border rounded-lg space-y-4">
      <div
        style={{
          backgroundImage: `url('${quoteIcon}')`,
        }}
        className="flex items-center gap-3 bg-no-repeat bg-right-top bg-contain"
      >
        <img
          className="w-12 h-12 object-cover rounded-full border-2"
          src={avatar}
          alt=""
        />
        <div className="">
          <h5>Awlad Hossain</h5>
          <p>Businessman</p>
        </div>
      </div>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.{" "}
      </p>
      <Rating
        initialRating={4.5}
        emptySymbol={<AiOutlineStar />}
        fullSymbol={<AiFillStar />}
        className="text-orange-600 text-xl"
      />
    </div>
  );
};

export default Testimonial;
