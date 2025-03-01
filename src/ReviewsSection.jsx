
import ReviewCard from "./ReviewCard";

function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "Margot Robbie",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a280c02f1cae8eedcf54faee955e2338f3e410999d4f025f1814989cc3d25d44?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f",
      rating: 5,
      comment:
        "J'ai adoré mon expérience d'achat ! L'essayage virtuel en réalité augmentée m'a permis de trouver la paire parfaite sans quitter ma maison. Les lunettes sont magnifiques et la qualité est au rendez-vous !",
    },
    {
      id: 2,
      name: "Michael B. Jordan",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bb8133df60d45324b69e070e5296e003505fe783d4564c50f33195d4cba6af4c?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f",
      rating: 4,
      comment:
        "Très bonne expérience d'achat dans l'ensemble. L'essayage virtuel par AR est vraiment pratique et m'a aidé à visualiser les montures sur mon visage. Je mets juste un bémol sur le service client, qui pourrait être un peu plus réactif.",
    },
    {
      id: 3,
      name: "Karol sevilla",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4fe46eaa4e6bef2bb0059f8c221e4869f4a345372a0112c5c1ab9a223b2d4a4f?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f",
      rating: 5,
      comment:
        "Les lunettes que j'ai commandées sont confortables et esthétiques, mais la livraison a pris plus de temps que prévu.",
    },
  ];

  return (
    <section>
      <h2 className="text-center mt-20 ml-14 text-4xl font-black text-green-800 uppercase tracking-[2.8px] max-md:mt-10 max-md:max-w-full">
        What people say about us
      </h2>

      <div className="flex flex-col pt-2 pr-1.5 pb-12 pl-14 mt-12 bg-white border border-solid border-black border-opacity-40 max-md:pl-5 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a79cc579b390309f916377586e3ba118a8aac7d8653752ada6b33a71011a130a?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
          alt="Quote icon"
          className="object-contain self-end aspect-square w-[22px]"
        />

        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      
       
      <div className="flex flex-wrap gap-5 justify-between self-end mt-3.5 max-w-full w-[880px] max-md:mr-1.5">
        <div className="text-9xl font-black text-zinc-100 max-md:text-4xl "></div>
        <button className="self-start px-16 py-5 text-base font-semibold tracking-widest text-center uppercase bg-green-800 text-zinc-300 max-md:px-5">
          See more reviews
        </button>
      </div>







     
      <h2 className="text-center mt-20 ml-14 text-4xl font-black text-green-800 uppercase tracking-[2.8px] max-md:mt-10 max-md:max-w-full">
        YOU MAY ALSO LIKE
      </h2>
    </section>
  );
}

export default ReviewsSection;
