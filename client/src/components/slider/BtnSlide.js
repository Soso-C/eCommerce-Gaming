import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function BtnSlider({ moveSlide, direction }) {
  return (
    <button
      className={`${
        direction === "next"
          ? "top-1/2 right-[20px] -translate-y-1/2"
          : "top-1/2 left-[20px] -translate-y-1/2"
      } h-[50px] w-[50px] absolute flex justify-center items-center cursor-pointer bg-black rounded-[50%] text-white opacity-95 hover:opacity-75`}
      onClick={moveSlide}
    >
      {direction === "next" ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
    </button>
  );
}
