import Link from "next/link";
import SearchInput from "./SearchInput";
import HeroImageSection from "./HeroImageSection";

const Hero = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <SearchInput
            style="mb-8 rounded-l-full w-full h-12 relative 
            lg:hidden block overflow-hidden"
            inputStyle="search-input w-full flex h-full pl-6 pr-20
            border relative border-gray-400 rounded-full
            outline-none focus:border-black"
          />
          <h1 className="mb-4 text-2xl font-bold text-black sm:text-3xl md:mb-8 md:text-5xl">
            Shop For All You Need In One Place!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 md:text-lg">
            Do you desire a seamless and a hitch-free shopping experience?
            Desire no more because you are in the right place.
          </p>
        </div>
        <HeroImageSection />
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
