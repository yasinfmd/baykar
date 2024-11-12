import images from "@/app/utils/images";
import icons from "@/app/utils/icons";
import Link from "next/link";
import Image from "next/image";
import './style.css'

const BestOfBest = () => {
  const bestProducts = [
    {
      categoryType: "BestOfBest",
      title: "The Best of the Best",
      products: [
        {
          title: "Product 1",
          subTitle: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
          image: images.productOne,
          id: 1,
        },
        {
          title: "Product 2",
          subTitle: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
          image: images.productTwo,
          id: 2,
        },
        {
          title: "Product 3",
          subTitle: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
          image: images.productThree,
          id: 3,
        },
      ],
    },
  ];

  return (
      <section className="w-full h-auto bg-[#0F172A] py-10">
        {bestProducts.map((product, index) => (
            <div
                className="container mx-auto p-5 lg:p-20 flex flex-col gap-10 lg:gap-20 overflow-hidden"
                key={index}
            >
              <div className="flex flex-col lg:flex-row gap-5 items-center justify-between text-white">
                <h1 className="text-3xl lg:text-6xl font-extrabold lg:w-9/12">{product.title}</h1>
                <Link
                    href="/"
                    className="p-3 px-10 text-lg font-medium border-2 border-white rounded-lg"
                >
                  Sign Up Now
                </Link>
              </div>

              <div className="relative flex flex-col lg:flex-row gap-10 items-center justify-center">
                <div className="lg:shape-1 absolute sm:shape-1"></div>
                <div className="lg:shape-2 absolute sm:shape-2"></div>
                <div className="lg:shape-3 absolute sm:shape-3"></div>
                <div className="lg:shape-4 absolute sm:shape-4"></div>
                <div className="lg:shape-5 absolute sm:shape-5"></div>
                {product.products.map((product) => (
                    <div
                        className="w-11/12  lg:w-[397px] z-10 h-[472px] flex flex-col justify-between items-center rounded-sm overflow-hidden shadow-box">
                      <div className="w-full h-[220px]">
                        <Image src={product.image} alt="" className="w-full h-full object-cover"/>
                      </div>
                      <div className="text-white flex flex-col items-start gap-4 w-11/12">
                        <h1 className="text-2xl leading-[26.4px] font-bold">{product.title}</h1>
                        <p className="text-lg font-normal leading-7">{product.subTitle}</p>
                      </div>
                      <div className="flex w-full justify-center items-center h-[120px] p-8 ">
                        <Link
                            href=""
                            className="h-[56px] flex justify-center gap-4 w-10/12 cursor-pointer p-4 text-xl font-medium leading-6 border-white text-white border-2 rounded-lg "
                        >
                          <img src={icons.basket} alt=""/>
                          Buy Now
                        </Link>
                      </div>
                    </div>
                ))}
              </div>
            </div>
        ))}
      </section>
  );
};

export default BestOfBest;