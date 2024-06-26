import Image from "next/image";

const Loading = () => {
  return (
    <div
      className={`w-screen h-screen fixed flex transition-all
            top-0 left-0 bg-black/90 z-50 items-center justify-center`}
    >
      <div className="flex items-end">
        <Image
          src="/yokobuy_logo_white.png"
          alt="yokobuy_logo"
          width={100}
          height={100}
          className="sm:w-28 sm:h-20 w-16 h-12"
        />
        <div
          className="sm:w-6 sm:h-6 w-4 h-4 -ml-2 sm:border-4 border-2 border-white 
              border-t-gray-500 animate-spin rounded-full"
        />
      </div>
    </div>
  );
};

export default Loading;
