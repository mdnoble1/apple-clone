import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils/Index";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760 ){
      setVideoSrc(smallHeroVideo);
    }else{
      setVideoSrc(heroVideo);
    }
  }


  useEffect( () => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    }
  }, [])

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });

    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2.6,
    })
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      {/* video part  */}
      <div className="h-5/6 w-full flex-col flex-center">
        <p id="hero" className="hero-title">
          iphone 15 Pro
        </p>
        <div className="w-9/12 md:w-10/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4"/>
          </video>
        </div>
      </div>
      {/* call to action part  */}
      <div id="cta"
      className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
