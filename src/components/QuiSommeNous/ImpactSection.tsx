import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../../miniFramework.css";

// Animated number component (copied from Statistiques)
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

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const ImpactSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0 && !hasAnimated) {
                setHasAnimated(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasAnimated]);

    const impacts = [
        { value: 190, label: "Animaux secourus" },
        { value: 90, label: "Adoptions réussies" },
        { value: 120, label: "Bénévoles engagés" },
    ];

    return (
        <div className="marg-t-120" ref={sectionRef}>
            <div className="centering">
                <motion.h1
                    className="t marg-b-30"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    Notre impact jusqu’à aujourd’hui
                </motion.h1>
                <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
            {impacts.map((impact) => (
                <motion.div
                key={impact.label}
                className="flex flex-col gap-1 items-center justify-center rounded-xl shadow-xl bg-white p-8 min-h-[180px] w-full transition-transform hover:-translate-y-2 hover:shadow-2xl"
                variants={itemVariants}
                style={{
                    border: "1px solid #f3f3f3",
                }}
                >
                <span className="text-6xl font-extrabold text-[#89202D] mb-3">{hasAnimated ? <AnimatedNumber target={impact.value} /> : "0+"}</span>
                <p className="text-center text-[#89202D] text-lg font-semibold">{impact.label}</p>
                </motion.div>
            ))}
            </motion.div>
            </div>
        </div>
    );
};

export default ImpactSection;