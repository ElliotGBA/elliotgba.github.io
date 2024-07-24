import { useState, useEffect, useRef } from "react";

const useIntersectionObserver = (options) => {
    const [isVisible, setVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, options);
        
        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return [ref, isVisible];
}

export default useIntersectionObserver;