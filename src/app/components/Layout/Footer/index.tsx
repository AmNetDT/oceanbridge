import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

interface links {
  link: string;
}

interface socialLinks {
  imgSrc: string;
  link: string;
}

const socialLinksData: socialLinks[] = [
  {
    imgSrc: "fa-brands:facebook-f",
    link: "www.facebook.com",
  },
  {
    imgSrc: "fa6-brands:instagram",
    link: "www.instagram.com",
  },
  {
    imgSrc: "fa6-brands:twitter",
    link: "www.twitter.com",
  },
];

const navLinks: links[] = [
  {
    link: "Product",
  },
  {
    link: "Pricing",
  },
  {
    link: "Features",
  },
];

const Footer = () => {
  return (
    // UPDATED: Changed bg-midnight_text to a rich, dark cyan gradient matched to logo tone.
    // Added an inline style for the subtle wave pattern.
    <div
      className="bg-[#01111E] bg-gradient-to-br from-[#021d33] to-[#01111E] border-t border-t-white/10"
      style={{
        backgroundImage: 'url("/images/footer/wave-pattern.svg")',
        backgroundSize: "600px auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
      }}
    >
      {/* Constraints are set to xl max-width for premium spacing */}
      <div className="mx-auto max-w-7xl pt-16 px-4 sm:px-6 lg:px-8 pb-10">
        {/* MAIN FOOTER GRID: Structure is simplified for clean mobile stacking */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-12 items-center mb-16">
          {/* COLUMN-1: Logo Section */}
          <div className="md:col-span-12 lg:col-span-4 flex justify-center lg:justify-start items-center">
            <div className="flex shrink-0 items-center">
              {/* Note: In a real app, you'd probably use a white version. For this demo, I will use a high-opacity version of the provided logo. */}
              <Image
                src="/images/logo/logo-white.png" // Assume this is a white-only version of image_22.png
                alt="Ocean Bridge Logo"
                width={250} // Slightly larger for better readability
                height={65}
                className="opacity-95" // Make it slightly translucent for depth
              />
            </div>
          </div>

          {/* COLUMN-2: Navigation Links (Text/Product links) */}
          <div className="md:col-span-12 lg:col-span-5 flex items-center justify-center lg:justify-start mt-6 lg:mt-0">
            {/* Added md:flex-row to stack text links on very small screens, md+ for horizontal */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-start">
              {navLinks.map((items, i) => (
                <div key={i}>
                  <Link
                    href="/"
                    className="text-lg md:text-xl font-medium text-white/90 hover:text-[#00cfff] flex items-center justify-center lg:justify-start transition duration-300"
                  >
                    {items.link}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN-3: Social Links */}
          <div className="md:col-span-12 lg:col-span-3 mt-8 lg:mt-0">
            <div className="flex gap-4 lg:justify-end justify-center">
              {socialLinksData.map((items, i) => (
                <Link href={items.link} key={i}>
                  {/* Frosted Glass effect and slightly bigger hover state */}
                  <div className="bg-white/10 backdrop-blur-sm h-14 w-14 shadow-xl text-base rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-[#00cfff]/60 hover:scale-110 transition-all duration-300">
                    <Icon icon={items.imgSrc} className="text-3xl" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Legal & Copyright. Simplified constraints for mobile */}
        <div className="pt-10 md:flex flex-wrap items-center justify-between border-t border-t-white/10 text-center md:text-start">
          <h4 className="w-full md:w-auto text-lg md:text-base font-normal text-white opacity-60 mb-6 md:mb-0">
            {/* Set the date dynamically */}
            {new Date().getFullYear()}. All rights reserved by{" "}
            <Link
              href="https://getnextjstemplates.com/"
              className="hover:text-[#00cfff] transition duration-300 font-medium"
            >
              Ocean Bridge
            </Link>
          </h4>

          {/* Adjusted mobile spacing on privacy/terms */}
          <div className="w-full md:w-auto flex gap-6 md:gap-5 justify-center md:justify-end items-center">
            <h4 className="opacity-60 text-lg md:text-base font-normal text-white hover:opacity-100 transition duration-300">
              <Link href="/" target="_blank">
                Privacy policy
              </Link>
            </h4>
            <div className="h-5 bg-white opacity-60 w-0.5"></div>
            <h4 className="opacity-60 text-lg md:text-base font-normal text-white hover:opacity-100 transition duration-300">
              <Link href="/" target="_blank">
                Terms & conditions
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
