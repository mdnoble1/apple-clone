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
      delay: 1.5,
    });
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
      <div>
        
      </div>
    </section>
  );
};

export default Hero;
