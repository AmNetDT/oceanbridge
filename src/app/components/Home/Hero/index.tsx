import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-header pt-20 lg:pt-32 pb-14 lg:pb-24 overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* LEFT SIDE: Text Content */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center relative z-10">
            {/* Decorative Icon */}
            <Image
              src="/images/hero/star.svg"
              alt="star"
              width={95}
              height={97}
              className="absolute -top-10 left-0 opacity-10 -z-10 animate-pulse"
            />

            <div className="flex flex-col gap-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-midnight_text">
                Smarter Reach <br className="hidden md:block" /> Starts Here.
              </h1>
              <p className="text-black/75 text-lg md:text-xl font-normal max-w-lg mx-auto lg:mx-0">
                Reach thousands of customers instantly, track your ROI, and
                manage campaigns in one intuitive platform. With{" "}
                <strong>Ocean Bridge</strong>, your budget works harder.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Image Content */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[500px] lg:max-w-full">
              {/* Subtle Glow/Shadow behind image for "Brilliance" */}
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full -z-10 transform scale-75"></div>

              <Image
                src="/images/hero/banner-002.png"
                alt="Ocean Bridge Bulk SMS Dashboard"
                width={700}
                height={650}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl transform lg:hover:rotate-2 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
