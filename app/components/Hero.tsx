import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import { Search } from "lucide-react";

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

const Hero = async () => {
  const data = await getData();
  return (
    <section className="mx-auto px-4 sm:px-6 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <div className="mb-8 w-full h-12 relative lg:hidden block">
            <input
              type="text"
              className="w-full flex h-full pl-6 bg-gray-100 
                        border border-gray-400 rounded-full
                        outline-none focus:border-black"
              placeholder="Search Item"
            />
            <div
              className="flex justify-center absolute top-0 
              bottom-0 my-auto right-1 h-5/6 w-16 rounded-full 
            bg-black items-center cursor-pointer"
            >
              <Search className="text-white" />
            </div>
          </div>
          <h1 className="mb-4 text-2xl font-bold text-black sm:text-3xl md:mb-8 md:text-5xl">
            Shop For All You Need In One Place!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 md:text-lg">
            Do you desire a seamless and a hitch-free shopping experience?
            Desire no more because you are in the right place.
          </p>
        </div>
        <div className="relative mb-12 flex justify-center items-center w-full md:mb-16 lg:w-2/3">
          <div
            className="relative left-12 top-12 z-10 -ml-12 
            overflow-hidden rounded-lg bg-gray-100 shadow-lg 
            md:left-16 md:top-16 lg:ml-0"
          >
            <Image
              src={urlFor(data.image1).url()}
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
              src={urlFor(data.image2).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-72 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Men"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Fashion
          </Link>
          <Link
            href="/Women"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Gadgets
          </Link>
          <Link
            href="/Teens"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Electronics
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
