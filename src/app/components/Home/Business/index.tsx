import Image from "next/image";

const Business = () => {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* TEXT CONTENT */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-[#01111E] leading-[1.1] tracking-tight mb-8">
                Make better business decisions with Ocean Bridge.
              </h2>
              <p className="text-xl text-black/50 leading-relaxed mb-10">
                Customers see texts fast, which reduces missed appointments and
                keeps your operations running at peak efficiency. Real-time
                tracking for real-world results.
              </p>

              {/* Optional: Simple Stats or Trust Badge */}
              <div className="flex items-center gap-4 py-4 border-t border-black/5">
                <div className="text-[#01111E] font-bold text-2xl">98%</div>
                <div className="text-black/40 text-sm leading-tight uppercase tracking-widest">
                  Average <br /> Open Rate
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE CONTENT */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Subtle decorative background blob for "Beauty" */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

              <Image
                src="/images/business/business.png"
                alt="Ocean Bridge Business Analytics"
                width={450} // Increased for high-density screens
                height={550}
                priority
                className="relative z-10 w-auto h-auto max-w-full rounded-2xl shadow-2xl shadow-black/5 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
