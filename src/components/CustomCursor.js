import React from "react";

const useMousePosition = async => {
    const [mousePosition, setMousePosition] = React.useState({ x: null, y: null });

    React.useEffect(() => {
        const updateMousePosition = ev => {
            setMousePosition({ x: ev.pageX, y: ev.pageY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return mousePosition;
};

const CustomCursor = async => {
    const { x, y } = useMousePosition();

    if (x === null || y === null) {
        return null;
    }

    return (
        <div
            className="absolute pointer-events-none"
            style={{
                left: x,
                top: y,
                width: 32,
                height: 32,
                borderRadius: '50%',
                border: '2px solid #818cf8',
                transform: 'translate(-50%, -50%)',
                zIndex: 99,
            }}
        />
    );
}

export default CustomCursor;
