import { useState, useEffect } from "react";

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState<string>("");

    useEffect(() => {
        const targetDate = new Date("2024-11-14T10:00:00+08:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                setTimeLeft("The countdown has ended! 🎉");
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`);
        };

        // Call immediately to avoid waiting for the first interval
        updateCountdown();

        const intervalId = setInterval(updateCountdown, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="countdown-container">
            <h1>Countdown to Our Special Day ❤️</h1>
            <h2>{timeLeft}</h2>
        </div>
    );
}
