

function ReviewCard({ review }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const starImage =
        i < rating
          ? "https://cdn.builder.io/api/v1/image/assets/TEMP/1522c3a296ba9e0bc760ebe81fa42ffb88f664e0743f23e55681d43e8d975cdc?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
          : "https://cdn.builder.io/api/v1/image/assets/TEMP/ba96b22d2d8a6beca800d8d3428154727d21be7f14640808efc2891554e5d321?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f";
      stars.push(
        <img
          key={i}
          src={starImage}
          alt={i < rating ? "Filled star" : "Empty star"}
          className="object-contain shrink-0 w-6 aspect-[1.33]"
        />
      );
    }
    return stars;
  };

  return (
    <article
      className={`px-3.5 pt-1.5 pb-4 mt-${
        review.id === 1 ? "4" : "8"
      } mr-7 bg-white border border-solid border-black border-opacity-50 max-md:mr-2.5 max-md:max-w-full`}
    >
      <div className="flex flex-wrap gap-5 justify-between items-start w-full max-md:max-w-full">
        <div className="flex gap-3.5 mt-1.5 text-base tracking-wider text-black uppercase">
          <img
            src={review.avatar}
            alt={`${review.name} avatar`}
            className="object-contain shrink-0 rounded-3xl aspect-[1.32] w-[45px]"
          />
          <p className="my-auto basis-auto">{review.name}</p>
        </div>
        <div className="flex">{renderStars(review.rating)}</div>
      </div>
      <p className="mt-3.5 mr-20 ml-8 text-base font-light tracking-wider text-black uppercase max-md:mr-2.5 max-md:max-w-full">
        {review.comment}
      </p>
    </article>
  );
}

export default ReviewCard;
