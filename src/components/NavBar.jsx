import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CSSPlugin } from "gsap/CSSPlugin";

import { navLinks } from "../../constants/index.js";

gsap.registerPlugin(CSSPlugin);

const NavBar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        scrub: true,
      },
    });

    navTween.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "#22222280",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/images/cake-logo.png"
            alt="logo"
            className="h-[64px] w-[64px]"
          />
          <p>Velvet Crumbs</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
