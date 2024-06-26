import Image from "next/image";
import { client, urlFor } from "../lib/sanity";

const getData = async () => {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(
    query,
    {},
    {
      cache: "no-store",
    }
  );

  return data;
};
const HeroImageSection = async () => {
  const data = await getData();
  return (
    <div className="relative mb-12 flex justify-center items-center w-full md:mb-16 lg:w-2/3">
      <div
        className="relative left-12 top-12 z-10 -ml-12 
            overflow-hidden rounded-lg bg-gray-100 shadow-lg 
            md:left-16 md:top-16 lg:ml-0"
      >
        <Image
          src={urlFor(data.image1).url() || "/avatar_placeholder.png"}
          alt="Great Photo"
          className="h-full w-full object-cover object-center"
          width={500}
          height={500}
          priority
        />
      </div>
      <div
        className="overflow-hidden rounded-lg 
            bg-gray-100 shadow-lg"
      >
        <Image
          src={urlFor(data.image2).url() || "/avatar_placeholder.png"}
          alt="Great Photo"
          className="h-full w-full object-cover object-center"
          width={500}
          height={500}
          priority
        />
      </div>
    </div>
  );
};

export default HeroImageSection;
