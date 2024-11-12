import React from "react";
import icons from "@/app/utils/icons";
import images from "@/app/utils/images";
import "./style.css";
import Image from "next/image";

const Map = () => {
    return (
        <section
            className="h-[717px] w-full bg-[#78350F] p-[80px] overflow-hidden relative flex flex-col justify-center items-center">
            <div>
                <Image
                    src={icons.world}
                    alt=""
                    className=" w-full scale-[6] md:scale-[2] sm:pl-52 lg:pl-28 lg:scale-100 pl-28  h-full object-cover "
                />
                <div
                    className="top-[3%] z-10 left-[16.5%] lg:left-[15%] 2xl:left-[18.3%]  absolute flex flex-col  items-center">
                    <div
                        className="w-[256px] h-[200px] p-1 bg-white rounded-[20px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
                    >

                        <div>
                            <Image
                                src={images.sneakersDouble}
                                alt="sneakers"
                                className="h-[190px]  w-full object-cover rounded-xl"
                            />
                        </div>
                    </div>
                    <div
                        className="w-8/12 h-[54px] rounded-b-lg bg-[#E2E8F0] flex flex-col justify-center items-center triangle-bottom">
                        <p className="text-sm leading-5 font-normal w-10/12">
                            Emma Simpson collected one pair of Cool Shoes.
                        </p>
                    </div>
                </div>
                <div
                    className="w-full left-[1%] top-[45%] lg:left-[7%] 2xl:left-[5%] text-white lg:top-[40%] absolute z-50 flex flex-col justify-center items-center ">
                    <h1 className="text-5xl font-extrabold leading-[52px] lg:text-[96px] lg:leading-[105px] lg:font-extrabold ">
                        11,658,467
                    </h1>
                    <h1 className="text-[32px] leading-9 font-bold lg:text-[56px] lg:leading-[61px] lg:ont-extrabold">
                        Shoes Collected
                    </h1>
                </div>
                <span
                    className=" border-[#A3E635] border-[3px] bg-[#D9F99D] w-8 h-8 rounded-full absolute  top-[38%] left-[50%] lg:top-[38%] md:left-[34%] lg:left-[26.1%] 2xl:left-[28%]"></span>
                <span
                    className=" border-[#A3E635] border-[3px] w-6 h-6 rounded-full absolute top-[48%] left-[60%] lg:top-[47%] md:left-[39.5%] lg:left-[33%]"></span>
                <span
                    className=" border-[#A3E635] border-[3px] absolute rounded-full w-8 h-8 top-[48%] left-[65%] hidden xl:flex lg:top-[29%] lg:left-[40%]"></span>
                <span
                    className=" border-[#A3E635] border-[3px] absolute rounded-full w-4 h-4 top-[48%] left-[65%] hidden sm:flex md:left-[59.5%] md:top-[19.5%] lg:top-[18%] lg:left-[46.5%]"></span>
                <span
                    className=" border-[#A3E635] border-[3px] absolute rounded-full w-6 h-6 top-[30%] left-[89%] lg:top-[75%] md:left-[54.5%] lg:left-[39%]"></span>
                <span
                    className=" border-[#A3E635] border-[3px] absolute rounded-full w-4 h-4 top-[48%] left-[65%] hidden xl:flex lg:top-[65%] lg:left-[40%]"></span>
                <span
                    className=" border-[#A3E635] border-[3px] absolute rounded-full w-8 h-8 top-[48%] left-[65%] hidden sm:flex md:left-[80.5%] md:top-[63.5%] lg:top-[65%] lg:left-[58%]"></span>
                <span
                    className=" border-[#A3E635] border-[3px] absolute rounded-full w-6 h-6 left-[85%] top-[65%] lg:top-[72%] md:left-[54.5%] lg:left-[83%] 2xl:left-[79.3%]"></span>
                <span
                    className=" border-[#A3E635] border-[3px] absolute rounded-full w-6 h-6 left-[65%] lg:top-[53%] hidden xl:flex  lg:left-[74%] 2xl:left-[72%]"></span>
                <span
                    className=" border-[#A3E635] border-[3px] absolute rounded-full w-4 h-4 left-[65%] lg:top-[53%] hidden xl:flex  lg:left-[83%] 2xl:left-[78%]"></span>
            </div>
        </section>
    );
};

export default Map;
