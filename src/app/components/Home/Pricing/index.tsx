"use client";
import { Icon } from "@iconify/react/dist/iconify.js";

const Pricing = () => {
  const rates = [
    {
      title: "Standard Route",
      desc: "Ideal for alerts and notifications.",
      price: "8.43",
      type: "Alphanumeric",
      note: "DND may apply",
      features: ["All Operators", "Basic Support", "Instant Delivery"],
    },
    {
      title: "Premium Brand",
      desc: "High priority for marketing & OTPs.",
      price: "10.43",
      type: "Template/Brand",
      note: "High throughput",
      popular: true,
      features: [
        "Verified Sender ID",
        "Priority Routing",
        "Whitelisted Delivery",
      ],
    },
    {
      title: "Enterprise Gold",
      desc: "The gold standard for high-stakes messaging.",
      price: "500.00",
      type: "Exclusive Route",
      note: "Premium route quality",
      features: ["Dedicated Support", "Global Coverage", "Zero Latency"],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 lg:py-32 bg-[#F8FAFC] relative overflow-hidden"
    >
      {/* Dynamic Background Blurs for 'Beauty' */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Minimalist Header */}
        <div className="max-w-3xl mb-20">
          <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Pricing Strategy
          </h4>
          <h2 className="text-5xl lg:text-7xl font-black text-[#01111E] leading-tight tracking-tighter mb-8">
            Simple rates. <br />
            <span className="text-black/20">No surprises.</span>
          </h2>
          <p className="text-xl text-black/50 max-w-xl leading-relaxed">
            Ocean Bridge scales with you. From a few hundred texts to millions,
            our pricing remains transparent and competitive.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rates.map((rate, i) => (
            <div
              key={i}
              className={`relative p-10 rounded-[2.5rem] transition-all duration-500 bg-white border ${
                rate.popular
                  ? "border-primary shadow-2xl scale-105 z-20"
                  : "border-black/5 hover:border-black/10 shadow-xl shadow-black/[0.02]"
              }`}
            >
              {rate.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1 rounded-full text-sm font-bold tracking-wide shadow-lg shadow-primary/30">
                  MOST POPULAR
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#01111E] mb-2">
                  {rate.title}
                </h3>
                <p className="text-black/40 text-sm leading-relaxed">
                  {rate.desc}
                </p>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-lg font-bold text-[#01111E]">₦</span>
                <span className="text-5xl font-black text-[#01111E] tracking-tighter">
                  {rate.price}
                </span>
                <span className="text-black/30 font-medium">/sms</span>
              </div>

              <div className="space-y-4 mb-10">
                {rate.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon
                        icon="tabler:check"
                        className="text-primary text-xs"
                      />
                    </div>
                    <span className="text-black/60 text-sm font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-black/5">
                <div className="flex items-center justify-between text-xs font-bold text-black/30 uppercase tracking-widest mb-6">
                  <span>Sender ID:</span>
                  <span className="text-[#01111E]">{rate.type}</span>
                </div>

                <button
                  className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
                    rate.popular
                      ? "bg-primary text-white hover:bg-[#01111E] shadow-xl shadow-primary/20"
                      : "bg-slate-100 text-[#01111E] hover:bg-[#01111E] hover:text-white"
                  }`}
                >
                  Choose Plan
                </button>
              </div>

              <p className="text-center text-[10px] text-black/20 mt-4 uppercase tracking-tighter">
                * {rate.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
