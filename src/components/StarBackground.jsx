import { useState, useEffect} from "react";

// id, size, x, y, opacitym, animaionDuration // for each star
// id, size, x, y, opacitym, animaionDuration // for each  meteor

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
            generateMeteors();
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const generateStars = () => {
        const numStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = [];
        for (let i = 0; i < numStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100, // the 100 is for percentage
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5, // opacity between 0.5 and 1
                animationDuration: Math.random() * 5 + 2
            });
        }
        setStars(newStars);
    }

    const generateMeteors = () => {
        const numOfMeteors = 6;
        const newMeteors = [];
        for (let i = 0; i < numOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 5 + 1, // between 1 and 6
                x: Math.random() * 100, // the 100 is for percentage
                y: Math.random() * 50,
                delay: Math.random() * 15, // delay between 0 and 15 seconds
                animationDuration: Math.random() * 3 + 3 // between 3 and 6 seconds
            });
        }
        setMeteors(newMeteors);
    }
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: `${meteor.size * 30}px`,
                        height: `${meteor.size * 0.8}px`,
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        animationDelay: meteor.delay,
                        animationDuration: `${meteor.animationDuration}s`
                    }}
                />
            ))}
        </div>
    );
    
    
}