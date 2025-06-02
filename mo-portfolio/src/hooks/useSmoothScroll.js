import { useCallback } from "react";

const useSmoothScroll = () => {
    const scrollToSection = useCallback((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth'});
        }
    }, []);

    return scrollToSection;
};

export default useSmoothScroll;