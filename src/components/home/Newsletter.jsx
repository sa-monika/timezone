import React from "react";

const Newsletter = () => {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <p className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold uppercase tracking-[0.3em] text-sm mb-2">
            Stay Updated
          </p>
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Newsletter
          </h2>
          <p className="mb-8">
            Be the first to know about new arrivals, exclusive offers, and
            insider content.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 text-white bg-secondary px-4 py-3 rounded-md placeholder:text-muted-white border border-[#2e2c26ec] focus:ring-1 focus:ring-white "
            />
            <button className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-700 text-black px-8 py-3 rounded-md font-body font-semibold tracking-wide hover:opacity-80 transition-opacity flex items-center gap-2">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
