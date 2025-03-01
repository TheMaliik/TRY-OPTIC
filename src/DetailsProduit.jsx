
import PromoBanner from "./PromoBanner";
import Header from "./Header";
import ProductSection from "./ProductSection";
import SizeChart from "./SizeChart";
import ReviewsSection from "./ReviewsSection";
import ProductCatalog from "./ProductCatalog";
import Footer from "./Footer";

function DetailsProduit() {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <PromoBanner />
      <Header />

      <h1 className="self-center mt-24 text-4xl font-bold text-center text-black uppercase tracking-[4px] max-md:mt-10 max-md:max-w-full">
        aBOUT THIS ITEM
      </h1>

      <section className="flex flex-col px-20 mt-40 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <ProductSection />
        <SizeChart />
        <ReviewsSection />
      </section>

      <ProductCatalog />
      <Footer />
    </main>
  );
}

export default DetailsProduit;
