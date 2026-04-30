"use client";

import Image from "next/image";
import React, { CSSProperties, useId, useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BookCharterSheet from "../BookCharterSheet";

gsap.registerPlugin(ScrollTrigger);

const BACK_IMAGE = "/images/bg.png";
const HOUSE_IMAGE = "/images/aircraft.png";
const SMOKE_IMAGE = "/images/smoke.png";
const CLOUD_IMAGE = "/images/cloud.png";

const BRAND_TEXT = "AvPlat";

const BRAND_VIEWBOX_W = 1700;
const BRAND_VIEWBOX_H = 560;
const BRAND_TEXT_X = "50%";
const BRAND_TEXT_Y = "58%";
const BRAND_TEXT_LENGTH = 1320;
const BRAND_FONT_SIZE = 330;

const brandTextStyle: CSSProperties = {
  fontWeight: 800,
  fontSize: BRAND_FONT_SIZE,
  letterSpacing: "-0.025em",
};

type BrandWordProps = {
  refProp?: React.Ref<SVGTextElement>;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  opacity?: number;
  className?: string;
};

function BrandWord({
  refProp,
  fill = "transparent",
  stroke = "none",
  strokeWidth = 0,
  opacity = 1,
  className = "",
}: BrandWordProps) {
  return (
    <text
      ref={refProp}
      className={className}
      x={BRAND_TEXT_X}
      y={BRAND_TEXT_Y}
      textAnchor="middle"
      dominantBaseline="middle"
      textLength={BRAND_TEXT_LENGTH}
      lengthAdjust="spacingAndGlyphs"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      paintOrder="stroke fill"
      opacity={opacity}
      style={brandTextStyle}
    >
      {BRAND_TEXT}
    </text>
  );
}

function AvPlatMaskedSVG({ className = "" }: { className?: string }) {
  const rawId = useId();
  const maskId = `avplat-mask-${rawId.replace(/:/g, "")}`;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${BRAND_VIEWBOX_W} ${BRAND_VIEWBOX_H}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <mask id={maskId}>
          <rect width="100%" height="100%" fill="black" />
          <BrandWord fill="white" />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
        <image
          href={BACK_IMAGE}
          x="0"
          y="0"
          width={BRAND_VIEWBOX_W}
          height={BRAND_VIEWBOX_H}
          preserveAspectRatio="xMidYMid slice"
        />

        <image
          href={HOUSE_IMAGE}
          x="120"
          y="-12"
          width="1460"
          height="700"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>
    </svg>
  );
}

export default function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const outlineTextRef = useRef<SVGTextElement | null>(null);
  const outlineGlowRef = useRef<SVGTextElement | null>(null);

  const [isCharterSheetOpen, setIsCharterSheetOpen] = useState(false);
  const [hasUserOpened, setHasUserOpened] = useState(false);
  const [autoTriggered, setAutoTriggered] = useState(false);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const outlineText = outlineTextRef.current;
    const outlineGlow = outlineGlowRef.current;

    if (!root || !outlineText || !outlineGlow) return;

    const ctx = gsap.context(() => {
      const textLength = outlineText.getComputedTextLength();

      gsap.set([outlineText, outlineGlow], {
        strokeDasharray: textLength,
        strokeDashoffset: textLength,
      });

      gsap.set(".hero-copy", {
        opacity: 1,
        y: 0,
        force3D: true,
      });

      gsap.set(".house-wrap", {
        yPercent: 18,
        scale: 0.985,
        force3D: true,
      });

      gsap.set(".outline-wrap", {
        opacity: 0,
        force3D: true,
      });

      gsap.set(".masked-wrap", {
        opacity: 0,
        force3D: true,
      });

      gsap.set(".wash-layer", {
        opacity: 0,
      });

      gsap.set(".base-fade", {
        opacity: 1,
      });

      gsap.set(".fog-soft", {
        opacity: 0.86,
        yPercent: 18,
        force3D: true,
      });

      gsap.set(".fog-heavy", {
        opacity: 0,
        yPercent: 26,
        force3D: true,
      });

      gsap.set(".top-mist-left", {
        opacity: 0.28,
        xPercent: 0,
        force3D: true,
      });

      gsap.set(".top-mist-right", {
        opacity: 0.28,
        xPercent: 0,
        force3D: true,
      });

      gsap.set(".bottom-fog-img", {
        xPercent: 0,
        yPercent: 0,
        scale: 1.03,
        force3D: true,
      });

      gsap.set(".bottom-fog-img-heavy", {
        xPercent: 0,
        yPercent: 0,
        scale: 1.06,
        force3D: true,
      });

      gsap.set(".hero-cta-floating", {
        opacity: 0,
        y: 24,
        scale: 0.92,
        pointerEvents: "none",
        force3D: true,
      });

      gsap.to(".bottom-fog-img", {
        xPercent: 3.5,
        yPercent: -2,
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".bottom-fog-img-heavy", {
        xPercent: -4.5,
        yPercent: -3,
        duration: 10,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      tl.to(".house-wrap", { yPercent: -9, scale: 1.085, duration: 0.34 }, 0.08);

      tl.to(".hero-copy", { opacity: 0.55, duration: 0.08 }, 0.03);
      tl.to(".top-mist-left", { xPercent: -10, opacity: 0.16, duration: 0.14 }, 0.03);
      tl.to(".top-mist-right", { xPercent: 10, opacity: 0.16, duration: 0.14 }, 0.03);

      tl.to(".hero-copy", { opacity: 0, y: -18, duration: 0.1 }, 0.12);
      tl.to(".fog-soft", { yPercent: 7, opacity: 0.94, duration: 0.14 }, 0.12);

      tl.to(".outline-wrap", { opacity: 1, duration: 0.04 }, 0.18);

      tl.to([outlineText, outlineGlow], { strokeDashoffset: textLength * 0.84, duration: 0.12 }, 0.22);
      tl.to([outlineText, outlineGlow], { strokeDashoffset: textLength * 0.62, duration: 0.14 }, 0.36);
      tl.to([outlineText, outlineGlow], { strokeDashoffset: textLength * 0.34, duration: 0.14 }, 0.52);
      tl.to([outlineText, outlineGlow], { strokeDashoffset: 0, duration: 0.14 }, 0.68);

      tl.to(".wash-layer", { opacity: 0.24, duration: 0.1 }, 0.56);
      tl.to(".fog-heavy", { opacity: 0.54, yPercent: 12, duration: 0.12 }, 0.58);
      tl.to(".base-fade", { opacity: 0.6, duration: 0.12 }, 0.6);

      tl.to(".masked-wrap", { opacity: 1, duration: 0.14 }, 0.82);
      tl.to(".outline-wrap", { opacity: 0, duration: 0.08 }, 0.84);

      tl.to(".base-fade", { opacity: 0.18, duration: 0.14 }, 0.9);
      tl.to(".wash-layer", { opacity: 0.12, duration: 0.12 }, 0.9);
      tl.to(".fog-soft", { yPercent: -16, scale: 1.06, duration: 0.14 }, 0.9);
      tl.to(".fog-heavy", { opacity: 1, yPercent: -8, scale: 1.14, duration: 0.14 }, 0.9);

tl.set(".hero-cta-floating", { pointerEvents: "auto" }, 0.32);
tl.to(
  ".hero-cta-floating",
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.12,
    ease: "power3.out",
  },
  0.32
);
    }, root);

    return () => ctx.revert();
  }, []);

 useEffect(() => {
  const handleScroll = () => {
    if (hasUserOpened || isCharterSheetOpen || autoTriggered) return;

    const section = rootRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

   
    if (rect.bottom <= windowHeight * 1.1) {
      setAutoTriggered(true); 
      setIsCharterSheetOpen(true);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [hasUserOpened, isCharterSheetOpen, autoTriggered]);

  return (
    <>
      <section ref={rootRef} className="hero-root">
        <div className="hero-sticky">
          <div className="hero-stage">
            <div className="hero-back base-fade">
              <Image
                src={BACK_IMAGE}
                alt=""
                fill
                priority
                className="hero-back-img"
                sizes="100vw"
              />
            </div>

            <div className="sun-glow base-fade" />

            <div className="house-holder base-fade">
              <div className="house-wrap">
                <Image
                  src={HOUSE_IMAGE}
                  alt=""
                  fill
                  priority
                  className="house-img"
                  sizes="100vw"
                />
              </div>
            </div>

            <div className="top-mist top-mist-left">
              <Image
                src={CLOUD_IMAGE}
                alt=""
                fill
                className="mist-img"
                sizes="30vw"
              />
            </div>

            <div className="top-mist top-mist-right">
              <Image
                src={CLOUD_IMAGE}
                alt=""
                fill
                className="mist-img"
                sizes="30vw"
              />
            </div>

            <div className="hero-copy">
              <div className="hero-copy-inner">
                <h1 className="hero-title">Luxury in Air <br></br> Personalised</h1>
               
              </div>
            </div>

            <div className="brand-layer outline-wrap">
              <svg
                className="brand-svg"
                viewBox={`0 0 ${BRAND_VIEWBOX_W} ${BRAND_VIEWBOX_H}`}
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid meet"
              >
                <BrandWord
                  refProp={outlineGlowRef}
                  fill="transparent"
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth={5.5}
                />

                <BrandWord
                  refProp={outlineTextRef}
                  fill="transparent"
                  stroke="rgba(255,255,255,0.96)"
                  strokeWidth={1.8}
                />
              </svg>
            </div>

            <div className="brand-layer masked-wrap">
              <AvPlatMaskedSVG className="brand-svg" />
            </div>

            <div className="hero-cta hero-cta-floating">
              <button
                type="button"
                className="hero-button bg-[#213e76]"
                 onClick={() => {
  setIsCharterSheetOpen(true);
  setHasUserOpened(true);
}}
              >
                <span>Book a Charter</span>

                <svg
                  className="hero-button-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="m20.78 12.531-6.75 6.75a.75.75 0 1 1-1.06-1.061l5.47-5.47H3.75a.75.75 0 1 1 0-1.5h14.69l-5.47-5.469a.75.75 0 1 1 1.06-1.061l6.75 6.75a.75.75 0 0 1 0 1.061"
                  />
                </svg>
              </button>
            </div>

            <div className="wash-layer" />

            <div className="bottom-fog fog-soft">
              <Image
                src={SMOKE_IMAGE}
                alt=""
                fill
                className="bottom-fog-img"
                sizes="100vw"
              />
            </div>

            <div className="bottom-fog fog-heavy">
              <Image
                src={SMOKE_IMAGE}
                alt=""
                fill
                className="bottom-fog-img bottom-fog-img-heavy"
                sizes="100vw"
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          .hero-root {
            position: relative;
            height: 240vh;
            background: #dcebf7;
          }

          .hero-sticky {
            position: sticky;
            top: 0;
            height: 100vh;
            overflow: hidden;
          }

          .hero-stage {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #dcebf7;
            contain: paint;
            isolation: isolate;
          }

          .hero-back,
          .sun-glow,
          .hero-copy,
          .brand-layer,
          .wash-layer,
          .bottom-fog {
            position: absolute;
            inset: 0;
          }

          .hero-back {
            z-index: 1;
            transform: translateZ(0);
            backface-visibility: hidden;
          }

          .hero-back-img {
            object-fit: cover;
            object-position: center center;
            transform: translateZ(0);
            backface-visibility: hidden;
          }

          .sun-glow {
            z-index: 3;
            pointer-events: none;
            background:
              radial-gradient(circle at 13% 76%, rgba(255, 189, 118, 0.62) 0%, rgba(255, 189, 118, 0.22) 16%, rgba(255, 189, 118, 0) 34%),
              radial-gradient(circle at 26% 54%, rgba(255, 225, 206, 0.12) 0%, rgba(255, 225, 206, 0) 24%);
          }

          .house-holder {
            position: absolute;
            left: 50%;
            bottom: -20vh;
            transform: translateX(-50%);
            width: min(92vw, 1500px);
            aspect-ratio: 16 / 9;
            height: auto;
            z-index: 4;
            pointer-events: none;
          }

          .house-wrap {
            position: relative;
            width: 100%;
            height: 100%;
            transform-origin: center bottom;
            will-change: transform, opacity;
            transform: translateZ(0);
            backface-visibility: hidden;
          }

          .house-img {
            object-fit: contain;
            object-position: center center;
            transform: translateZ(0);
            backface-visibility: hidden;
          }

          .hero-copy {
            z-index: 8;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 7vh;
            pointer-events: none;
            will-change: transform, opacity;
          }

          .hero-copy-inner {
            width: min(1460px, calc(100% - 56px));
            text-align: center;
            position: relative;
          }

          .hero-title {
            margin: 80px 0 0 0;
            color: #213e76;
            font-size: clamp(3.2rem, 8.9vw, 5rem);
            line-height: 1;
            font-weight: 700;
          }

          .hero-cta {
            display: flex;
            justify-content: center;
            will-change: transform, opacity;
          }

.hero-cta-floating {
  position: absolute;
  padding: 230px 0 0 0;
  left: 50%;
  top: 72%;
  transform: translate(-50%, -50%);
  z-index: 20;
  pointer-events: none;
}

@media (max-width: 1024px) {
  .hero-cta-floating {
    top: 80%;
  }
}

@media (max-width: 768px) {
  .hero-cta-floating {
    top: 76%;
  }
}

@media (max-width: 480px) {
  .hero-cta-floating {
    top: 78%;
  }
}
          .hero-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
            min-width: 230px;
            height: 58px;
            padding: 0 30px;
            border: 0;
            border-radius: 999px;
            background: #213e76;
            color: #fff;
            font-size: 0.98rem;
            font-weight: 600;
            letter-spacing: -0.02em;
            cursor: pointer;
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.14);
          }

          .hero-button-icon {
            width: 18px;
            height: 18px;
            flex: 0 0 18px;
          }

          .top-mist {
            position: absolute;
            top: 8vh;
            width: min(23vw, 340px);
            height: 16vh;
            z-index: 9;
            pointer-events: none;
            mix-blend-mode: screen;
            will-change: transform, opacity;
          }

          .top-mist-left {
            left: 10vw;
          }

          .top-mist-right {
            right: 10vw;
            transform: scaleX(-1);
          }

          .mist-img {
            object-fit: cover;
            object-position: center center;
            filter: blur(2px);
            opacity: 0.74;
          }

          .brand-layer {
            z-index: 7;
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
            will-change: transform, opacity;
            transform: translateZ(0);
            backface-visibility: hidden;
            padding-inline: 2vw;
          }

          .brand-svg {
            width: min(94vw, 1540px);
            height: auto;
            overflow: visible;
            transform: translateZ(0);
            backface-visibility: hidden;
          }

          .wash-layer {
            z-index: 6;
            pointer-events: none;
            background:
              linear-gradient(
                to bottom,
                rgba(220, 235, 247, 0.82) 0%,
                rgba(220, 235, 247, 0.42) 36%,
                rgba(220, 235, 247, 0.14) 68%,
                rgba(220, 235, 247, 0.03) 100%
              );
          }

          .bottom-fog {
            z-index: 10;
            pointer-events: none;
            left: -10%;
            right: -10%;
            width: 120%;
            top: auto;
            will-change: transform, opacity;
            transform: translateZ(0);
            backface-visibility: hidden;
          }

          .fog-soft {
            bottom: -5vh;
            height: 44vh;
          }

          .fog-heavy {
            z-index: 11;
            bottom: -10vh;
            height: 58vh;
          }

          .bottom-fog-img {
            object-fit: cover;
            object-position: center bottom;
            filter: blur(2.6px);
            opacity: 0.95;
            transform: translateZ(0);
            backface-visibility: hidden;
            will-change: transform;
          }

          .bottom-fog-img-heavy {
            filter: blur(3px);
            opacity: 1;
            will-change: transform;
          }

          @media (min-width: 1600px) {
            .house-holder {
              width: min(84vw, 1560px);
              height: min(102vh, 1040px);
              bottom: -19vh;
            }

            .brand-svg {
              width: min(92vw, 1620px);
            }
          }

          @media (max-width: 1280px) {
            .hero-root {
              height: 220vh;
            }

            .hero-copy-inner {
              width: min(1360px, calc(100% - 48px));
            }

            .house-holder {
              width: min(90vw, 1380px);
              height: 92vh;
              bottom: -16vh;
            }

            .brand-svg {
              width: min(96vw, 1440px);
            }
          }

          @media (max-width: 1024px) {
            .hero-root {
              height: 210vh;
            }

            .hero-copy {
              padding-top: 8.5vh;
            }

            .hero-title {
              font-size: clamp(2.8rem, 10vw, 6.2rem);
            }

            .house-holder {
              width: min(100vw, 1240px);
              height: 88vh;
              bottom: -14vh;
            }

            .brand-svg {
              width: min(102vw, 1320px);
            }

            .top-mist {
              width: min(28vw, 260px);
              top: 10vh;
            }
          }

          @media (max-width: 768px) {
            .hero-root {
              height: 190vh;
            }

            .hero-copy {
              padding-top: 8vh;
            }

            .hero-copy-inner {
              width: calc(100% - 28px);
            }

            .hero-title {
              font-size: clamp(2.4rem, 12vw, 5.2rem);
            }

            .hero-button {
              min-width: 210px;
              height: 52px;
              padding: 0 24px;
              font-size: 0.94rem;
            }

            .house-holder {
              width: 128vw;
              max-width: none;
              aspect-ratio: 16 / 9;
              height: auto;
              bottom: -2vh;
            }

            .brand-svg {
              width: 116vw;
            }

            .top-mist {
              width: 28vw;
              height: 12vh;
              top: 12vh;
            }

            .top-mist-left {
              left: 2vw;
            }

            .top-mist-right {
              right: 2vw;
            }

            .fog-soft {
              height: 42vh;
            }

            .fog-heavy {
              height: 52vh;
            }
          }

          @media (max-width: 480px) {
            .hero-root {
              height: 175vh;
            }

            .hero-title {
              font-size: clamp(2.15rem, 13.8vw, 4.2rem);
              letter-spacing: -0.07em;
            }

            .house-holder {
              width: 145vw;
              max-width: none;
              aspect-ratio: 16 / 9;
              height: auto;
              bottom: 0vh;
            }

            .brand-svg {
              width: 132vw;
            }

            .top-mist {
              width: 30vw;
              top: 13vh;
            }
          }
        `}</style>
      </section>

      <BookCharterSheet
        isOpen={isCharterSheetOpen}
        onClose={() => setIsCharterSheetOpen(false)}
      />
    </>
  );
}