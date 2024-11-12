import React from "react";
import images from "@/app/utils/images";
import icons from "@/app/utils/icons";
import Link from "next/link";
import Image from "next/image";
const PRODUCT = [
  {
    title: "Collectible Sneakers",
    subtitle:
        "Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.",
    photo: images.sneakers,
    link: "/",
    videoUrl: "http://example.com/",
    id: 1,
    props: [
      {
        title: "Nibh viverra",
        description:
            "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
        icon: icons.cup,
        bgIcon: icons.triangle,
      },
      {
        title: "Cursus amet",
        description:
            "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
        icon: icons.hug,
        bgIcon: icons.triangletwo,
      },
      {
        title: "Ipsum fermentum",
        description:
            "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
        icon: icons.shape,
        bgIcon: icons.circle,
      },
    ],
  },
];

const PopularProduct = () => {

  return (
      <section className="flex flex-col pb-10 2xl:pb-0 w-full relative lg:h-[1000px] 2xl:h-[950px] justify-start items-start">
        <div className="sm:clip-circle lg:clip-triangle h-[900px] w-full absolute"></div>
        {PRODUCT.map((item, key) => (
            <main
                key={item.id || key}
                className="flex flex-col overflow-hidden px-3 2xl:flex-row w-full h-auto lg:h-[700px] 2xl:h-[583px] justify-start gap-10 lg:gap-40 items-center z-10"
            >
              <div className="flex flex-col w-auto max-w-[714px] h-auto lg:max-h-[257px] lg:items-start justify-between">
                <h1 className="text-center text-[56px] lg:text-7xl leading-[79.2px] font-extrabold">
                  {item.title}
                </h1>
                <h2 className="mt-10 font-normal text-lg leading-7 text-center lg:text-left">
                  {item.subtitle}
                </h2>
                <div className="flex items-center justify-center 2xl:justify-start w-full mt-6">
                  <Link
                      href={item.link}
                      className="p-3 px-5 text-lg font-medium leading-6 border-[#78350F] text-[#78350F] border-2 rounded-lg"
                  >
                    Sign Up Now
                  </Link>
                  <Link
                      href={item.videoUrl}
                      className="flex items-center gap-3 p-4 text-[#78350F] text-base leading-6"
                  >
                    <Image src={icons.playcircle} alt="Play" />
                    Watch Demo
                  </Link>
                </div>
              </div>
              <div className="bg-[#FBBF24] relative rounded-[50px] lg:-m-32 2xl:-m-16 h-[272px] w-[276px] lg:w-[367px] lg:h-[372px] flex justify-center items-center">
                <Image
                    src={item.photo}
                    className="object-cover -mt-24 lg:-mt-0"
                    alt="Product"
                />
              </div>
            </main>
        ))}
        <div className="flex flex-col lg:flex-row w-full md:px-5 2xl:px-0 gap-5 justify-around z-10 items-center mt-20 lg:mt-10 2xl:mt-20">
          {PRODUCT[0].props.map((prop, index) => (
              <div
                  key={index}
                  className="w-full lg:w-[374px] h-[205px] flex flex-col justify-around items-center lg:items-start"
              >
                <div className="relative">
                  <img src={prop.bgIcon} alt="" className="absolute left-7" />
                  <img src={prop.icon} alt="" />
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <h1 className="text-[20px] font-medium leading-[22px]">
                    {prop.title}
                  </h1>
                  <h2 className="text-lg max-w-[400px] font-normal leading-7 mt-4 text-center lg:text-left">
                    {prop.description}
                  </h2>
                </div>
              </div>
          ))}
        </div>
      </section>
  );
};

export default PopularProduct;
