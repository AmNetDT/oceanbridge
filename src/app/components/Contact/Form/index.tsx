"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phnumber: "",
    Message: "",
  });
  const [loader, setLoader] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== "",
    );
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phnumber: "",
      Message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/arshvasani9@gmail.com",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(formData),
        },
      );
      const data = await response.json();
      if (data.success) {
        setShowThanks(true);
        resetForm();
        setTimeout(() => setShowThanks(false), 5000);
      }
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -z-10 hidden lg:block" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Text Content */}
          <div className="lg:col-span-5">
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              Contact Us
            </h4>
            <h2 className="text-5xl lg:text-7xl font-black text-[#01111E] tracking-tighter leading-none mb-8">
              Let’s build <br />
              <span className="text-black/20">something great.</span>
            </h2>
            <p className="text-xl text-black/50 mb-10 leading-relaxed">
              Have questions about Ocean Bridge? Our team is here to help you
              scale your global communication.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Icon icon="tabler:mail" className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm text-black/40 uppercase font-bold tracking-wider">
                    Email us
                  </p>
                  <p className="text-[#01111E] font-medium">
                    hello@oceanbridge.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-7 bg-white lg:p-12 rounded-[2.5rem] lg:border border-black/5 lg:shadow-2xl lg:shadow-black/[0.03] relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fname"
                    className="block text-sm font-bold text-[#01111E] mb-2 px-1"
                  >
                    First Name
                  </label>
                  <input
                    id="fname"
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-[#01111E]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lname"
                    className="block text-sm font-bold text-[#01111E] mb-2 px-1"
                  >
                    Last Name
                  </label>
                  <input
                    id="lname"
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-[#01111E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-[#01111E] mb-2 px-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-[#01111E]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Phnumber"
                    className="block text-sm font-bold text-[#01111E] mb-2 px-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="Phnumber"
                    type="tel"
                    name="phnumber"
                    value={formData.phnumber}
                    onChange={handleChange}
                    placeholder="+1 234..."
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-[#01111E]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-[#01111E] mb-2 px-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="Message"
                  rows={4}
                  value={formData.Message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-[#01111E] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={!isFormValid || loader}
                className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl ${
                  !isFormValid || loader
                    ? "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none"
                    : "bg-[#01111E] text-white hover:bg-primary shadow-primary/20"
                }`}
              >
                {loader ? "Sending Message..." : "Send Message"}
              </button>
            </form>

            {/* Success Toast */}
            {showThanks && (
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-[2.5rem] z-20 flex flex-col items-center justify-center text-center p-12 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-200">
                  <Icon icon="tabler:check" className="text-4xl" />
                </div>
                <h3 className="text-3xl font-bold text-[#01111E] mb-2">
                  Message Sent!
                </h3>
                <p className="text-black/50">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
