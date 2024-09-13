"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";
import productImage from "@/assets/product-image.png";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-medium tracking-tighter md:text-6xl">
          Elevate your SEO efforts
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-lg tracking-tight text-white/70 md:text-xl">
          Whether for small businesses or large enterprises, our AI-powered tool
          has transformed how companies tackle SEO.
        </p>
        <div className="mt-10 flex flex-col gap-3 lg:flex-row">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className="flex items-center gap-2.5 rounded-xl border border-white/15 p-2.5 lg:flex-1"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/15">
                <DotLottiePlayer src={tab.icon} className="h-5 w-5" autoplay />
              </div>
              <div className="font-medium">{tab.title}</div>
              {tab.isNew && (
                <div className="rounded-full bg-[#8c44ff] px-2 py-0.5 text-xs font-semibold text-black">
                  new
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-white/20 p-2.5">
          <div
            className="aspect-video rounded-lg border border-white/20 bg-cover"
            style={{
              backgroundImage: `url(${productImage.src})`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
