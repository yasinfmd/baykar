'use client'
import icons from "@/app/utils/icons";
import images from "@/app/utils/images";
import "./style.css";
import Image from "next/image";

const COLLECTIONS = [
    {name: "Cras eget", category: "Cras eget", icon: icons.shieldCheck},
    {name: "Dolor pharetra", category: "Dolor pharetra", icon: icons.rocket},
    {name: "Amet, fringilla", category: "Amet, fringilla", icon: icons.screen},
    {name: "Amet nibh", category: "Amet nibh", icon: icons.podcast},
    {name: "Sed velit", category: "Sed velit", icon: icons.settings},
];
const Collection = () => {
    return (
        <section
            className="w-full relative overflow-hidden flex flex-col h-[722px] md:h-[800px] lg:h-[996px] py-0 lg:py-[80px] gap-3 lg:gap-10 justify-start items-center">
            <div className="flex flex-col justify-center gap-5 lg:gap-10 lg:items-start items-center w-10/12 z-20">
                <h1 className="text-[32px] text-center md:text-start leading-[35px] font-bold lg:text-[56px] lg:leading-[61.6px] lg:font-extrabold">
                    Grow your collection
                </h1>
                <p className="leading-[28.8px] text-center font-normal lg:text-start text-lg">
                    Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
                    amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
                    sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
                    proin neque placerat at bibendum quam tellus.
                </p>
            </div>

            <div
                className="w-full flex flex-col gap-4 lg:gap-0 lg:flex-row justify-center items-center h-[600px] md:h-[670px] lg:h-[556px] z-20">
                <div
                    className="flex flex-row lg:flex-col lg:h-full justify-start gap-10 lg:gap-5 p-5 lg:p-0 items-center lg:items-start overflow-x-scroll scrollbar-hidden lg:overflow-hidden w-[100%] lg:w-[256px] lg:pl-2">
                    <button
                        className="flex flex-row justify-center text-xl leading-6 font-medium items-center gap-4 min-w-[240px] lg:min-w-auto lg:w-full p-4 rounded-lg bg-white shadow-md"
                    >
                        <Image src={icons.search} alt=""/>
                        <p>Bibendum tellus</p>
                        <Image src={icons.right} alt="" className="hidden lg:flex"/>
                    </button>
                    {COLLECTIONS.map((collection, index) => (
                        <div
                            className="flex flex-row justify-start items-center gap-2 lg:gap-4 p-4 min-w-[240px] lg:min-w-auto lg:w-full text-xl leading-6 font-medium"
                            key={index}
                        >
                            <Image src={collection.icon} alt={collection.category}/>
                            <p>{collection.name}</p>
                        </div>
                    ))}
                </div>

                <div className="w-full lg:w-8/12 flex flex-col items-start pl-4 lg:pl-20 h-full justify-start">
                    <div
                        className="flex flex-col w-8/12 h-[48%] lg:w-10/12 lg:h-[80%] border-[5px] border-white bg-white rounded-[20px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                        <div
                            className="w-full h-4 lg:h-10 gap-2 p-3 lg:p-[12px]  flex flex-row items-center justify-start">
                            <div className="rounded-full w-2 h-2 bg-[#E11D48]"></div>
                            <div className="rounded-full w-2 h-2 bg-[#FBBF24]"></div>
                            <div className="rounded-full w-2 h-2 bg-[#22C55E]"></div>
                        </div>
                        <div><Image
                            src={images.peopleSneakers}
                            alt="people sneakers"
                            width="100%"
                            height="100%"
                            className="object-cover"
                        /></div>
                    </div>
                    <div
                        className="flex flex-col w-8/12 lg:w-10/12 -mt-[30%] lg:-mt-[36%] ml-[15%] h-[55%] lg:h-[80%] border-[5px] border-white bg-white rounded-[20px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                        <div
                            className="w-full h-4 lg:h-10 gap-2 p-3 lg:p-[12px]  flex flex-row items-center justify-start">
                            <div className="rounded-full w-2 h-2 bg-[#E11D48]"></div>
                            <div className="rounded-full w-2 h-2 bg-[#FBBF24]"></div>
                            <div className="rounded-full w-2 h-2 bg-[#22C55E]"></div>
                        </div>
                        <div>
                            <Image
                                src={images.productTwo}
                                alt="product two"
                                width="100%"
                                height="100%"
                                className="object-cover"
                            />

                        </div>
                    </div>
                    <div
                        className="flex flex-col w-3/12 h-[30%] ml-[70%] -mt-[35%] lg:-mt-[36%] lg:ml-[80%] lg:h-[50%] border-[5px] border-white bg-white rounded-[20px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
                    >
                        <div>
                            <Image
                                src={images.beg}
                                alt="beg"
                                width="100%"
                                height="100%"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Image
                src={icons.waveOne}
                alt="wave"
                className="absolute bottom-0 z-10 w-full"
            />
            <Image
                src={icons.waveThree}
                alt="wave"
                className="absolute bottom-0 z-10 w-full"
            />
            <Image
                src={icons.waveTwo}
                alt="wave"
                className="absolute bottom-0 z-10 w-full"
            />
        </section>
    );
};

export default Collection;
