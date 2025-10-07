import { Hero } from "@/components/sections/hero";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { OurApproach } from "@/components/sections/our-approach";
import { GetInTouch } from "@/components/sections/get-in-touch";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <OurApproach />
      <GetInTouch />
    </>
  );
}