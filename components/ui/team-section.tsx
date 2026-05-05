"use client";

import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface AnimatedTeamSectionProps {
  title: string;
  description: string;
  members: TeamMember[];
  className?: string;
}

const getCardState = (index: number, total: number) => {
  const centerIndex = (total - 1) / 2;
  const distanceFromCenter = index - centerIndex;

  const x = distanceFromCenter * 90;
  const y = Math.abs(distanceFromCenter) * -30;
  const rotate = distanceFromCenter * 12;

  return { x, y, rotate };
};

const AnimatedTeamSection = React.forwardRef<
  HTMLDivElement,
  AnimatedTeamSectionProps
>(({ title, description, members, className, ...props }, ref) => {
  const controls = useAnimation();

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const setRefs = React.useCallback(
    (node: HTMLDivElement | null) => {
      inViewRef(node);

      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    },
    [inViewRef, ref]
  );

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const desktopItemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      x: 0,
      y: 0,
      rotate: 0,
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      x: getCardState(i, members.length).x,
      y: getCardState(i, members.length).y,
      rotate: getCardState(i, members.length).rotate,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12,
      },
    }),
  };

  const mobileItemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 16,
      },
    },
  };

  return (
    <section
      ref={setRefs}
      className={cn(
        "w-full overflow-hidden bg-background py-14 md:py-20 lg:pt-28 lg:pb-20",
        className
      )}
      {...props}
    >
      <div className="container mx-auto flex flex-col items-center px-4 text-center">
        <h2 className="mb-4 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>

        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-xl">
          {description}
        </p>

        {/* Mobile Layout */}
        <motion.div
          className="mt-10 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:hidden"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {members.map((member, index) => (
            <motion.div
              key={`mobile-${member.name}-${index}`}
              variants={mobileItemVariants}
              className="rounded-2xl border border-border bg-background p-2 shadow-lg"
            >
              <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="px-1 pb-2 pt-3 text-center">
                <h3 className="text-sm font-semibold leading-tight text-foreground">
                  {member.name}
                </h3>

                <p className="mt-1 text-xs font-medium leading-relaxed text-muted-foreground">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop / Tablet Fanned Layout */}
        <motion.div
          className="relative mt-24 hidden w-full items-center justify-center md:flex"
          style={{ minHeight: "340px" }}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {members.map((member, index) => {
            const zIndex =
              members.length -
              Math.abs(index - (members.length - 1) / 2);

            return (
              <motion.div
                key={`desktop-${member.name}-${index}`}
                custom={index}
                variants={desktopItemVariants}
                style={{ zIndex }}
                whileHover={{
                  scale: 1.1,
                  zIndex: 99,
                  transition: {
                    type: "spring" as const,
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                className="group absolute w-36 cursor-pointer lg:w-44"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-background bg-muted shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="pointer-events-none mt-3 translate-y-3 rounded-2xl border border-border bg-background/95 px-3 py-3 text-center opacity-0 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-sm font-semibold leading-tight text-foreground md:text-base">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-muted-foreground md:text-sm">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
});

AnimatedTeamSection.displayName = "AnimatedTeamSection";

export { AnimatedTeamSection };