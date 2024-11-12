import "./style.css";
import images from "@/app/utils/images";
import icons from "@/app/utils/icons";
import Link from "next/link";
import Image from "next/image";
const JOIN_TEXTS=[
  {
    description: "Est et in pharetra magna adipiscing ornare aliquam.",
  },
  {
    description: "Tellus arcu sed consequat ac velit ut eu blandit.",
  },
  {
    description: "Ullamcorper ornare in et egestas dolor orci.",
  },
];
const Join = () => {
  return (
    <section className="overflow-hidden 2xl:overflow-visible md:h-[850px]  w-full h-auto lg:h-[816px] flex flex-col lg:justify-center justify-start items-center p-5 lg:p-0">
      <div className="join-box sm:join-box lg:join-box flex flex-col lg:flex-row justify-start items-center align-middle  p-[32px] lg:p-[80px]">
        <div className="w-full  lg:w-6/12  flex flex-col items-center lg:items-start lg:justify-center justify-start gap-6 h-auto lg:h-full">
          <h1 className="lg:font-extrabold lg:text-[56px] lg:leading-[61.6px] text-start text-[32px] leading-[35.5px] font-bold">
            Why Join Us
          </h1>
          <div className="flex flex-col items-start  justify-normal gap-2">
            {JOIN_TEXTS.map((item, index) => {
              return (
                <p
                  key={index}
                  className="flex flex-row w-full items-center lg:justify-start justify-center gap-2 text-lg leading-6  lg:text-xl lg:leading-9 font-normal"
                >
                  <span>
                    <Image src={icons.check} alt="" />
                  </span>
                  {item.description}
                </p>
              );
            })}
          </div>
          <Link
            href={"/"}
            className="z-10 p-3 cursor-pointer px-5 text-lg font-medium leading-6 border-[#78350F] text-[#78350F]  border-2 rounded-lg "
          >
            Sign Up Now
          </Link>
        </div>
        <div className="lg:w-6/12 md:mt-32  w-full mt-10 lg:mt-0 lg:h-full  h-[234px] flex flex-col justify-center items-center lg:justify-center  lg:items-center relative">
          <div className="shape sm:shape"></div>
          <div className="shape sm:shape"></div>
          <div className="shape sm:shape"></div>
          <div className="shape sm:shape"></div>
          <div className="shape sm:shape"></div>
          <div className="shape sm:shape"></div>
          <div className="shape sm:shape"></div>
          <div className="z-20 md:ml-20">
            <div className="bg-white rounded-[20px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <div className="w-full h-4 lg:h-10 gap-2 p-3 lg:p-[12px]  flex flex-row items-center justify-start">
                <div className="rounded-full w-2 h-2 bg-[#E11D48]"></div>
                <div className="rounded-full w-2 h-2 bg-[#FBBF24]"></div>
                <div className="rounded-full w-2 h-2 bg-[#22C55E]"></div>
              </div>
              <div>
                <Image
                    src={images.peopleSneakers}
                    alt=""
                    className="p-2 rounded-xl "
                />
                <Image
                    src={icons.play}
                    alt=""
                    className="absolute  w-4/12 top-[35%] left-[35%] md:left-[40%] md:top-[0%] lg:w-auto lg:top-[30%] lg:left-[45%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
