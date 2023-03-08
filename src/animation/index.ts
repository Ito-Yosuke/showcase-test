export const useAnimation = () => {
    const bubble = (element: Element) => {
        element.animate(
            {
              borderRadius: [
                "50% 50% 50% 70%/50% 50% 70% 60%",
                "80% 30% 50% 50%/50%",
                "40% 40% 50% 40%/30% 50% 40% 80%"
              ]
            },
            {
              iterations: Infinity,
              direction: "alternate",
            duration: 3000
        }
        );
        
        element.animate(
            [
                { transform: 'rotate(0deg)' },
                { transform: 'rotate(360deg)' }
            ],
            {
                duration: 50000,
                easing: 'linear',
                iterations: Infinity
            }
            );
    };

    const changeColor = (element: Element, hue: number) => {
        var color = "hsl(" + hue + ", 100%, 50%)";
        let el = element as HTMLElement
        el.style.backgroundColor = color;
    }

    return {
            bubble,
            changeColor
    };
};
    