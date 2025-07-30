import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const splitHero = new SplitText(".title", { type: "chars,words" });
    const splitParagraph = new SplitText(".subtitle", { type: "lines" });

    gsap.from(splitHero.chars, {
      yPercent: 120,
      duration: 1.8,
      ease: "expo.Out",
      stagger: 0.06,
    });

    gsap.from(splitParagraph.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      stagger: 0.2,
      delay: 1,
    });

    const startValue = isMobile ? "center 50%" : "center 50%";
    const endValue = isMobile ? "266.5% bottom" : "bottom 0%";

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title"> Baked </h1>
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Fluffy. Frosted. Fabulous.</p>
              <p className="subtitle leading-22">
                A Slice of Sunshine <br /> on your Plate
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle whitespace-pre-line">
                Our classic chocolate cake is layered with velvety ganache and
                finished with a glossy glaze. Rich, refined, and meant for
                indulgent moments.
              </p>
              <a
                href="#cocktails"
                className="font-semibold opacity-80 2xl:text-start text-center hover:text-yellow"
              >
                View Cakes
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0 ">
        <video
          className="absolute inset-0 w-full h-full object-cover video top-0"
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output.mp4"
        />
      </div>
    </>
  );
};

export default Hero;
