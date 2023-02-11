import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { threshold: 0 });

    useEffect(() => {
        if (inView) {
            const interval = setInterval(() => {
                setCount((c) => {
                    if (c >= number) {
                        clearInterval(interval);
                        return c;
                    }
                    return c + 1;
                });
            }, 5);

            return () => {
                clearInterval(interval);
            };
        }
    }, [inView, number]);

    return (
        <div ref={ref} className="text-5xl font-medium text-center">
            {count}
        </div>
    );
};

const FourColumnCounter = () => {
    return (
        <div className="grid bg-green-500 min-h-32 text-white md:top-60 h-32 justify-center items-center relative grid-cols-4 gap-4">
            <Counter number={100} />
            <Counter number={200} />
            <Counter number={300} />
            <Counter number={400} />
        </div>
    );
};
export default FourColumnCounter
