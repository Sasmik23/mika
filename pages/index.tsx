import { useState, useEffect } from "react";
import Image from "next/image";

// Sample gallery data
const galleryData = [
  {
    date: "14th Nov 2022",
    image: "/images/day1.jpg",
    description: "Wakanda Forever",
  },
  {
    date: "14th Feb 2024",
    image: "/images/day2.jpg",
    description: "-",
  }
];

export default function AnniversaryPage() {
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [showGallery, setShowGallery] = useState<boolean>(false);

  useEffect(() => {
    const targetDate = new Date("2024-11-14T12:00:00+08:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setShowGallery(true);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${hours} hours ${minutes} minutes ${seconds} seconds`);
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="app-background">
      {!showGallery ? (
        <main className="countdown-container">
          <h1>Countdown to Our Special Day ❤️</h1>
          <h2>{timeLeft}</h2>
        </main>
      ) : (
        <Gallery />
      )}
    </div>
  );
}

function Gallery() {
  return (
    <section className="gallery-section">
      <h1 className="gallery-heading">🎉 Our Journey 🎉</h1>
      <div className="gallery-container">
        {galleryData.map((item, index) => (
          <div
            key={index}
            className={`gallery-item ${index % 2 === 0 ? "even" : "odd"}`}
          >
            <div className="gallery-content">
              <h2 className="gallery-date">{item.date}</h2>
              <p className="gallery-description">{item.description}</p>
            </div>
            <div className="gallery-image">
              <Image
                src={item.image}
                alt={`Event on ${item.date}`}
                width={500}
                height={500}
                className="image"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
