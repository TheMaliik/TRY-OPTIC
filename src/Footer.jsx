function Footer() {
  return (
    <footer className="flex flex-col pb-14 mt-36 w-full bg-green-800 max-md:mt-10 max-md:max-w-full">
      {/* Banner */}
      <div className="flex flex-col px-12 w-full max-md:px-5 max-md:max-w-full">
        <div className="px-16 py-20 text-5xl font-black text-center text-green-800 uppercase bg-green-200 tracking-[3.15px] max-md:px-5 max-md:text-3xl">
          CHANGEONS VOTRE PROPRE CONCEPTION DE LUNETTES MAINTENANT
        </div>

        {/* Table Layout for Contact, Location, and Socials */}
        <div className="overflow-x-auto mt-9">
          <table className="w-full border-collapse text-white text-lg uppercase max-md:text-sm">
            <thead>
              <tr className="text-left">
                <th className="p-4  ">Contactez-nous</th>
                <th className="p-4  ">Notre Location</th>
                <th className="p-4  ">Suivez-nous sur</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-left">
                <td className="p-4  ">
                  (+216) 71 999 999 <br />
                  mail@esprit.tn
                </td>
                <td className="p-4  ">Ariana, El Ghazela</td>
                <td className="p-4  ">@UIX</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Banner Image */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/88b1bacaeb1dc626b2c7898d1ed3371b309a5fd8c1c09c06679d6b7763460f87?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
        alt="Footer banner"
        className="object-contain self-center mt-20 w-full rounded-none max-w-[1340px] max-md:mt-10 max-md:max-w-full"
      />
    </footer>
  );
}

export default Footer;
