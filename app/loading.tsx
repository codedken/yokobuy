import Image from "next/image";

const Loading = ({ on }: { on: boolean }) => {
  return (
    <div
      className={`w-screen h-screen fixed ${on ? "flex" : "hidden "} 
            top-0 left-0 bg-black/90 z-50 gap-4 items-center justify-center`}
    >
      <Image
        src="/yokobuy_logo.png"
        alt="yokobuy_logo"
        width={100}
        height={100}
        className="w-32 h-32"
      />
      <div
        className="w-20 h-20 border-8 border-gray-500 
              border-t-white animate-spin rounded-full"
      />
    </div>
  );
};

export default Loading;
