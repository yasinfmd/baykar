'use client'
import icons from "@/app/utils/icons";
import "./style.css";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {useRef} from "react";
import Image from "next/image";

const COMMENTS = [
    {
        username: "David Oshodi",
        comment: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
        department: "Manager",
        logo: icons.logoThree,
        avatar: icons.userThree,
    },
    {
        username: "Hellena John",
        comment: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
        department: "Co-founder",
        logo: icons.logoOne,
        avatar: icons.userTwo,
    },
    {
        username: "Hellen Jummy",
        comment: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
        department: "Team Lead",
        logo: icons.logoTwo,
        avatar: icons.userOne,
    },
    {
        username: "Hellena John",
        comment: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
        department: "Co-founder",
        logo: icons.logoOne,
        avatar: icons.userFour,
    },
    {
        username: "Charolette Hanlin",
        comment: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
        department: "Manager",
        logo: icons.logoThree,
        avatar: icons.userThree,
    },
    {
        username: "Ralph Edwards",
        comment: "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
        department: "Product Designer",
        logo: icons.logoFour,
        avatar: icons.userTwo,
    },
];

const Comments = () => {
    const swiperRef = useRef(null);
    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <section
            className="h-auto overflow-hidden relative lg:h-[732px] w-full p-0 flex flex-col gap-10 mt-14 mb-20 lg:mb-0 lg:mt-0">
            <div className="flex flex-row justify-center">
                <h1 className="text-[32px] leading-[35.2px] font-bold lg:text-[56px] w-full text-center lg:text-start lg:w-9/12 lg:font-extrabold lg:leading-[61.6px]">
                    Because they love us
                </h1>
                <div className="hidden lg:flex flex-row gap-4">
                    <button onClick={goPrev}>
                        <Image src={icons.back} alt=""/>
                    </button>
                    <button onClick={goNext}>
                        <Image src={icons.next} alt=""/>
                    </button>
                </div>
            </div>
            <div className="mx-auto relative z-0 w-full lg:w-[93%] overflow-visible">
                <div className="slider-bg absolute -z-10 w-full"></div>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    spaceBetween={16}
                    breakpoints={{
                        760: {
                            slidesPerView: 4,
                        },
                    }}
                    rewind={true}
                    ref={swiperRef}
                    className="mySwiper overflow-hidden flex flex-row z-10 mt-10 lg:-left-8 w-[2000px] lg:w-[1460px]"
                >
                    {COMMENTS.map((comment, key) => (
                        <SwiperSlide key={key}
                                     className="comments-box flex flex-col justify-around rounded-2xl p-5 bg-white">
                            <div>
                                <Image src={comment.logo} alt=""/>
                            </div>
                            <p className="text-base leading-[22px] md:text-2xl lg:text-2xl lg:leading-[38.4px] font-normal">
                                {comment.comment}
                            </p>
                            <div className="flex flex-row w-full justify-start items-center gap-2">
                                <Image src={comment.avatar} alt={"avatar"}/>
                                <div className="flex flex-col">
                                    <p className="text-lg leading-7 font-normal">
                                        {comment.username}
                                    </p>
                                    <p className="text-base leading-6 font-normal text-gray-600">
                                        {comment.department}
                                    </p>
                                    <p></p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Comments;
