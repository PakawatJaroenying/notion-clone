"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl">
        Your Ideas , Organized & Accessible & Accessible
        <span className="underline"></span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl">
        Jotion is the connected workspace where <br />
        you can shape your company future.
      </h3>
      <Button>
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
