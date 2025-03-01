

function Footer() {
  return (
    <footer className="flex flex-col pb-14 mt-36 w-full bg-green-800 max-md:mt-10 max-md:max-w-full">
      <div className="flex z-10 flex-col px-12 mt-0 w-full max-md:px-5 max-md:max-w-full">
        <div className="px-16 py-20 text-5xl font-black text-center text-green-800 uppercase bg-green-200 tracking-[3.15px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
          CHANGEONS VOTRE PROPRE CONCEPTION DE LUNETTES MAINTENANT
          <br />
        </div>
        <div className="flex flex-wrap gap-5 justify-between items-start mt-9 w-full text-2xl font-extrabold tracking-widest text-white uppercase max-w-[1278px] max-md:max-w-full">
          <h3>Contactez-nous</h3>
          <h3 className="mt-3.5">notre LOCATION</h3>
          <h3>suivez-nous sur</h3>
        </div>
        <div className="flex gap-8 self-end mt-2.5 mr-52 whitespace-nowrap max-md:mr-2.5">
          <span className="text-3xl text-white"></span>
          <span className="self-start text-base text-white">UIX</span>
        </div>
      </div>
      <div className="flex flex-col ml-14 w-full max-w-[1164px] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between mr-8 w-full max-w-[1134px] max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-2">
            <span className="self-start text-xl font-black text-white"></span>
            <address className="text-base text-white w-[427px] not-italic">
              (+216)71 999 999
              <br />
              mail@esprit.tn
            </address>
          </div>
          <div className="flex gap-3.5 self-start mt-1.5">
            <span className="text-xl font-black text-white"></span>
            <p className="my-auto text-base text-white basis-auto">
              Ariana ,El Ghazela
            </p>
          </div>
          <div className="flex gap-8 my-auto whitespace-nowrap">
            <span className="text-3xl text-white"></span>
            <p className="my-auto text-base text-white">@UIX</p>
          </div>
        </div>
        <div className="flex gap-8 self-end mt-1.5 whitespace-nowrap">
          <span className="text-3xl text-white"></span>
          <p className="text-base text-white">UIX.esprit</p>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/88b1bacaeb1dc626b2c7898d1ed3371b309a5fd8c1c09c06679d6b7763460f87?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
        alt="Footer banner"
        className="object-contain self-center mt-20 w-full rounded-none max-w-[1340px] max-md:mt-10 max-md:max-w-full"
      />
    </footer>
  );
}

export default Footer;
