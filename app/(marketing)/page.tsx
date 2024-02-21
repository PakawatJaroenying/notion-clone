import React from "react";
import { Heading } from "./_component/heading";
import Heroes from "./_component/heroes";
import Footer from "./_component/footer";

function MarketingPage() {
  return (
    <div className="min-h-full flex flex-col">
      <div
        className="flex flex-col items-center justify-center 
      md:justify-start text-center gap-y-8 flex-1 px-6 pb-10"
      >
        <Heading />
        <Heroes />
        <Footer/>
      </div>
    </div>
  );
}

export default MarketingPage;
