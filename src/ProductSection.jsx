
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

function ProductSection() {
  return (
    <section className="max-md:max-w-full space={50}">
      <div className="flex gap-5 max-md:flex-col">
        <ProductGallery />
        <ProductInfo />
      </div>
    </section>
  );
}

export default ProductSection;
