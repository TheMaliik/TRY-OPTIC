import PromoBanner from "./PromoBanner";
import Header from "./Header";
import ReviewForm from "./ReviewForm";
import Footer from "./Footer";

function Review() {
  return (
    <main className="flex overflow-hidden flex-col items-center bg-white">
      <PromoBanner />
      <Header />
      <ReviewForm />
      <Footer />
    </main>
  );
}

export default Review;
