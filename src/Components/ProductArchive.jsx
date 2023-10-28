import ProductCard from "./ProductCard";

const ProductArchive = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductArchive;
