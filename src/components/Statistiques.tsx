import React, { useEffect, useRef, useState } from "react";
import image1 from "../images/Frame 97.png"
import image2 from "../images/Frame 98.png"
import image3 from "../images/Frame 99.png"
import image4 from "../images/Frame 100.png"

// Helper hook to detect if element is in viewport
function useInView(ref: React.RefObject<HTMLElement>) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref]);

    return isIntersecting;
}

// Animated number component
function AnimatedNumber({ target, duration = 1500 }: { target: number, duration?: number }) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = target / (duration / 16);
        let raf: number;

        function animate() {
            start += increment;
            if (start < target) {
                setValue(Math.floor(start));
                raf = requestAnimationFrame(animate);
            } else {
                setValue(target);
            }
        }
        animate();
        return () => cancelAnimationFrame(raf);
    }, [target, duration]);

    return <span>{value}+</span>;
}

const Statistiques = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const inView = useInView(sectionRef);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    // Target numbers
    const stats = [
        { img: image1, value: 222, label: "Chiens rescapés" },
        { img: image2, value: 333, label: "chats sauvés" },
        { img: image3, value: 676, label: "équidés secourus" },
        { img: image4, value: 357, label: "Animaux en danger" },
    ];

    return (
        <>
            <div ref={sectionRef} className="relative bg-[#852c00] w-full h-auto">
                <div className="itemsContainer">
                    {stats.map((stat, idx) => (
                        <div className="statisticItem" key={stat.label}>
                            <div>
                                <img src={stat.img} alt="" />
                                <span style={{ display: "inline-block", minWidth: "4ch", textAlign: "right" }}>
                                    {hasAnimated ? (
                                        <AnimatedNumber target={stat.value} />
                                    ) : (
                                        <span>0+</span>
                                    )}
                                </span>
                            </div>
                            <h1>{stat.label}</h1>
                        </div>
                    ))}
                </div>                
            </div>
        </>
    );
};

export default Statistiques;