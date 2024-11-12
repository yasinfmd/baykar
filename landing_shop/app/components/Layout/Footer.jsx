import Link from 'next/link';
import icons from "@/app/utils/icons";
import Image from "next/image";

const MENUS = [
  { name: "Product", path: "/" },
  { name: "Pricing", path: "/" },
  { name: "Overview", path: "/" },
  { name: "Browse", path: "/" },
  { name: "Accessibility", path: "/" },
  { name: "Five", path: "/" },
  { name: "Solutions", path: "/" },
  { name: "Brainstorming", path: "/" },
  { name: "Ideation", path: "/" },
  { name: "Wireframing", path: "/" },
  { name: "Research", path: "/" },
  { name: "Design", path: "/" },
  { name: "Support", path: "/" },
  { name: "Contact us", path: "/" },
  { name: "Developers", path: "/" },
  { name: "Documentation", path: "/" },
  { name: "Integrations", path: "/" },
  { name: "Reports", path: "/" },
];

const SOCIAL_MEDIA = [
  { name: "Youtube", icon: icons.youtube, path: "https://www.youtube.com/" },
  { name: "Facebook", icon: icons.facebook, path: "https://www.facebook.com" },
  { name: "Twitter", icon: icons.twitter, path: "https://twitter.com" },
  { name: "Instagram", icon: icons.instagram, path: "https://www.instagram.com" },
  { name: "LinkedIn", icon: icons.linkedin, path: "https://www.linkedin.com" },
];

const Footer = () => {
  return (
      <footer className="h-auto lg:h-[486px] flex flex-col gap-5 lg:gap-16 lg:p-[80px]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-16 pt-16 lg:pt-0">
          {[0, 6, 12].map((startIndex) => (
              <ul
                  key={startIndex}
                  className="h-auto lg:h-[272px] w-full lg:w-72 flex flex-col gap-3 lg:gap-0 items-center lg:items-start"
              >
                {MENUS.slice(startIndex, startIndex + 6).map((item) => (
                    <li key={item.name}>
                      <Link href={item.path}>{item.name}</Link>
                    </li>
                ))}
              </ul>
          ))}

          <div className="h-auto lg:h-[272px] w-full lg:w-72 flex flex-col gap-10 items-center lg:items-start">
            <div className="flex flex-col gap-5 items-center lg:items-start">
              <p>Get the App</p>
              <Link href="">
                <Image src={icons.appStore} alt="Download from App Store" />
              </Link>
              <Link href="">
                <Image src={icons.googlePlay} alt="Download from Google Play" />
              </Link>
            </div>
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <h4>Follow us</h4>
              <ul className="flex gap-4">
                {SOCIAL_MEDIA.map((item) => (
                    <li key={item.name}>
                      <Link href={item.path}>
                        <Image src={item.icon} alt={`${item.name} icon`} />
                      </Link>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t gap-7 lg:gap-2 p-10 lg:py-5 flex flex-col lg:flex-row justify-between w-full">
          <p className="text-center lg:text-start text-base lg:text-lg font-normal">
            Collers © 2023. All rights reserved.
          </p>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-2 items-center lg:items-end w-full lg:w-auto">
            <ul className="flex gap-5 items-center">
              <li>
                <Link href="">Terms</Link>
              </li>
              <li>
                <Link href="">Privacy</Link>
              </li>
              <li>
                <Link href="">Contact</Link>
              </li>
            </ul>
            <button className="flex items-center gap-2">
              <Image src={icons.globe} alt="Language selection" />
              <span className="text-base font-normal">En</span>
            </button>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
