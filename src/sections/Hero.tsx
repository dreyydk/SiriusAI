import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";

export const Hero = () => {
  return (
    <section
      className="relative flex h-[492px] items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:h-[800px]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-purple-500 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,68,255)] md:h-96 md:w-96"></div>
      <div className="absolute left-1/2 top-1/2 h-[344px] w-[344px] -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-20 md:h-[580px] md:w-[580px]">
        <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-full top-1/2 inline-flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white">
          <div className="h-2 w-2 rounded-full bg-white"></div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 h-[444px] w-[444px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20 md:h-[780px] md:w-[780px]"></div>
      <div className="absolute left-1/2 top-1/2 h-[544px] w-[544px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white opacity-20 md:h-[980px] md:w-[980px]">
        <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-full top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
      </div>
      <div className="container relative mt-16">
        <h1 className="bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-clip-text text-center text-8xl font-semibold tracking-tighter text-transparent md:text-[168px] md:leading-none">
          Sirius
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-center text-lg text-white/70 md:text-xl">
          Sirius is your all-in-one solution to elevate your visibility with the
          power of AI. Stay optimized, stay ahead.
        </p>
        <div className="mt-5 flex justify-center">
          <Button>Join Waitlist</Button>
        </div>
      </div>
    </section>
  );
};
