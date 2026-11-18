"use client";

import { useEffect, useId, useRef, useState } from "react";
import { METER_LEVELS, WORDMARK_KEYS, WORDMARK_SHAPES, WORDMARK_VIEWBOX, type WordmarkShape } from "./wordmark-shapes";

const WORDMARK = "/assets/logo/jazzhq-wordmark-white.svg";
const LED_COLORS = ["#9484ff", "#45d89c"]; // violet = hit letter, green = neighbour echo
const BEAT_MS = 850; // the beat settles after this long without new input

function Shape({ shape }: { shape: WordmarkShape }) {
  if (shape.tag === "path") return <path d={shape.d} />;
  if (shape.tag === "polygon") return <polygon points={shape.points} />;
  return <circle cx={shape.cx} cy={shape.cy} r={shape.r} />;
}

// Giant closing wordmark.
// - Scroll reveal (unchanged): a dark copy is always visible; the bright copy is
//   revealed bottom → top by a soft mask as the wordmark scrolls into view.
// - Equalizer (from jazzhq-equalizer.html): when the visitor moves onto a letter,
//   violet LED bars pulse inside it and its neighbours give a smaller, delayed
//   green echo; Q pulses its coloured rings. Only the visitor's own input plays a
//   beat (mouse enter, tap or keyboard), and it is silent.
export function FooterWordmark() {
  const ref = useRef<HTMLDivElement>(null);
  const uid = useId();
  const [beat, setBeat] = useState({ key: -1, count: 0 });
  const settle = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.classList.add("is-scroll-reveal");

    // Blend band of the soft mask (must match --band in footer.css).
    const BAND = 32;
    let frame = 0;
    let current = -1;
    let target = 0;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 as the wordmark starts entering; 1 only once it is ~fully visible (page bottom).
      const start = vh * 0.98;
      const end = vh - rect.height * 0.96;
      target = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
    };
    const paint = () => {
      frame = 0;
      // Light easing toward the scroll position; settles within a few frames.
      current = current < 0 ? target : current + (target - current) * 0.18;
      if (Math.abs(target - current) < 0.002) current = target;
      // Band starts fully below the logo (0) and has passed the top at 1.
      el.style.setProperty("--reveal", `${(current * (100 + BAND) - BAND).toFixed(2)}%`);
      if (current !== target) frame = requestAnimationFrame(paint);
    };
    const onScroll = () => { measure(); if (!frame) frame = requestAnimationFrame(paint); };

    onScroll();
    // Re-measure once the wordmark has its real height.
    const imgs = Array.from(el.querySelectorAll("img"));
    imgs.forEach((img) => img.addEventListener("load", onScroll));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      imgs.forEach((img) => img.removeEventListener("load", onScroll));
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => () => window.clearTimeout(settle.current), []);

  const play = (key: number) => {
    window.clearTimeout(settle.current);
    setBeat((value) => ({ key, count: value.count + 1 }));
    settle.current = window.setTimeout(() => setBeat((value) => ({ ...value, key: -1 })), BEAT_MS);
  };

  const rings = WORDMARK_SHAPES.filter((shape) => shape.kind === "ring");

  return (
    <div ref={ref} className="site-footer__wordmark-reveal" role="group" aria-label="JazzHQ interactive wordmark">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="site-footer__wordmark site-footer__wordmark--base" src={WORDMARK} alt="" aria-hidden="true" />
      <svg className="site-footer__wordmark site-footer__wordmark--reveal" viewBox={WORDMARK_VIEWBOX} aria-hidden="true" focusable="false">
        <defs>
          {WORDMARK_KEYS.map(({ shape }, index) => (
            <clipPath key={shape} id={`${uid}-clip-${index}`}><Shape shape={WORDMARK_SHAPES[shape]} /></clipPath>
          ))}
          {LED_COLORS.map((color, index) => (
            <pattern key={color} id={`${uid}-led-${index}`} width="4" height="2.5" patternUnits="userSpaceOnUse">
              <rect width="3.45" height="1.95" rx=".3" fill={color} />
            </pattern>
          ))}
        </defs>
        {WORDMARK_KEYS.map(({ name, shape, left, right }, index) => {
          const hit = beat.key === index;
          const echo = beat.key >= 0 && Math.abs(beat.key - index) === 1;
          return (
            <g key={name}>
              {/* Re-keyed on every beat so the animation restarts. */}
              <g key={beat.count} className={hit ? "mark-hit" : echo ? "mark-echo" : undefined}>
                <g className="mark-body"><Shape shape={WORDMARK_SHAPES[shape]} /></g>
                {name === "Q" ? (
                  <g className="mark-speaker">
                    <g fill="#fff"><Shape shape={WORDMARK_SHAPES[0]} /></g>
                    {rings.map((ring) => ring.kind === "ring" && (
                      <g key={ring.color} fill={ring.paint === "stroke" ? "none" : ring.color} stroke={ring.paint === "stroke" ? ring.color : undefined} strokeWidth="2">
                        <Shape shape={ring} />
                      </g>
                    ))}
                  </g>
                ) : (hit || echo) && (
                  <g clipPath={`url(#${uid}-clip-${index})`} className="mark-meter">
                    {Array.from({ length: Math.ceil((right - left) / 4) + 1 }, (_, column) => {
                      const level = METER_LEVELS[(column + index * 3) % METER_LEVELS.length];
                      return (
                        <rect key={column} className="mark-column" x={Math.floor(left / 4) * 4 + column * 4} y={56 - level} width="4" height={level}
                          fill={`url(#${uid}-led-${echo ? 1 : 0})`} style={{ "--lag": `${(echo ? 75 : 0) + (column % 4) * 12}ms` } as React.CSSProperties} />
                      );
                    })}
                  </g>
                )}
              </g>
            </g>
          );
        })}
      </svg>
      <div className="mark-keys">
        {WORDMARK_KEYS.map(({ name, left, right }, index) => (
          <button key={name} type="button" aria-label={`Pulse ${name}`} style={{ width: `${((right - left) / 382) * 100}%` }}
            onPointerEnter={(event) => { if (event.pointerType === "mouse") play(index); }}
            onClick={() => play(index)} />
        ))}
      </div>
    </div>
  );
}
