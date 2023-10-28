import { Link } from "react-router-dom";
import ProductArchive from "../ProductArchive";
import ProductCard from "../ProductCard";
import SectionHeading from "../Sectionheading";

const ProductsSection = () => {
  return (
    <section className="space-y-8">
      <SectionHeading
        subTitle="Popular Products"
        title="Browse Our Products"
        className="items-center text-center max-w-xl mx-auto"
      >
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </SectionHeading>
      <ProductArchive />
      <div className="text-center">
        <Link
          to="/products"
          className="btn btn-bordered inline-block hover:btn-primary"
        >
          More Products
        </Link>
      </div>
    </section>
  );
};

export default ProductsSection;
