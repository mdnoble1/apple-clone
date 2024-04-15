import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useRef, useState } from "react";
import { yellowImg } from "../utils/Index";
import * as THREE from "three";

// npm i three @react-three/drei @react-three/fiber

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iphone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "FFE7B9", "6F6C64"],
    img: yellowImg,
  });

  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // 3d model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  useGSAP(() => {
    gsap.to("#heading", { opacity: 1, y: 0 });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        {/* text content of section  */}
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>
        {/* container of 3d model  */}
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            {/* small model  */}
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            ></ModelView>
            {/* large model  */}
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            ></ModelView>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
