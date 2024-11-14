import Image from "next/image";
import { useState } from "react";

// Gallery Data
const galleryData = [
  {
    date: "14th Nov 2022",
    images: ["/images/day1.jpg"],
    description: "The first time I asked you out on a date. We watched black panther 2, and you would not stop yapping throughout the movie. Little did I know I was about to fall in love with this yapper.",
  },
  {
    date: "8th Dec 2022",
    images: ["/images/day2.jpg"],
    description: "Our first time clubbing together. We were living in our own bubble the whole night (and may or may not have been the eyesore to everyone else👀)",
  },
  {
    date: "14th Feb 2023",
    images: ["/images/val1.jpeg", "/images/valbe.jpeg"],
    description: "Our first valentines date! We went to acid bar and listened to our favourite songs🎤",
  },
  {
    date: "4th Mar 2023",
    images: ["/images/ani.jpeg"],
    description: "Our first concert together. Listening to Anirudh's love songs with you in my arms:)",
  },
  {
    date: "4th Apr 2023",
    images: ["/images/form.jpeg", "/images/prom2.jpeg"],
    description: "Formal Dinner! We could not get a proper photo for the life of us. Special mention to Tembusu college for matchmaking the coolest couple",
  },
  {
    date: "4th/13th May 2023",
    images: ["/images/bday.jpeg", "/images/bdayka.jpeg"],
    description: "Celebrating each other's birthdays (and first time meeting your mom). Mindblown by the atas sushi, and had to sneak in a quick peck when we were taking your bday photos ;)",
  },
  {
    date: "3rd Aug 2023",
    images: ["/images/sang2.jpeg", "/images/sang.jpeg"],
    description: "Performing on stage together! Hearsay off stage and on stage chemistry were off the charts",
  },
  {
    date: "14th Nov 2023",
    images: ["/images/ani11.jpeg", "/images/anik.jpeg", "/images/anim.jpeg"],
    description: "Our first anniversary together:) We ordered so much we could barely finish the food towards the end, but it was bussin",
  },
  {
    date: "14th Feb 2024",
    images: ["/images/val24.jpeg", "/images/ani112.jpeg"],
    description: "Valentines 2024! Stargazing at fortcanning has to be one of my favourite memories of us together ⭐",
  },
  {
    date: "21st Jul 2024",
    images: ["/images/jb.jpeg"],
    description: "First overseas trip to JB! Although most of the time we were panicking for MGC, but the massage was worth it. Can't wait for our May escapade",
  },
  {
    date: "13th Aug 2024",
    images: ["/images/ldr.jpeg", "/images/ld2.jpeg"],
    description: "The begining of our 5 month LDR ✈️. A tough season for both us, but made me realise how much more I miss you when your not there. On the bright side, the LDR is almost ending! First stop Shabu",
  },

];
function Gallery() {
  return (
    <section className="gallery-section">
      <Header />
      {galleryData.map((item, index) => (
        <GalleryItem key={index} item={item} index={index} />
      ))}
      <Header2 />
    </section>
  );
}

function GalleryItem({ item, index }: { item: any; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  return (
    <div className={`gallery-item ${index % 2 === 0 ? "even" : "odd"}`}>
      <div className="gallery-image">
        <Image
          src={item.images[currentImageIndex]}
          alt={`Event on ${item.date} - Image ${currentImageIndex + 1}`}
          className="image"
          layout="responsive"
          width={800}
          height={600}
        />
        {item.images.length > 1 && (
          <div className="carousel-controls">
            <button className="carousel-button" onClick={handlePrev}>
              &#8592; {/* Left Arrow */}
            </button>
            <button className="carousel-button" onClick={handleNext}>
              &#8594; {/* Right Arrow */}
            </button>
          </div>
        )}
      </div>
      <div className="gallery-content">
        <h2 className="gallery-date">{item.date}</h2>
        <p className="gallery-description">{item.description}</p>
      </div>
    </div>
  );
}


function Header() {
  return (
    <header className="gallery-header">
      <h1>Happy 2nd Year Anniversary, Kaavi!!</h1>
      <p>
        Every moment together with you has been special. Here’s a walk through some of
        our favorite memories and milestones that have shaped our story.
      </p>
    </header>
  );
}

function Header2() {
  return (
    <header className="gallery-header">
      <h1> Let us write our future together</h1>
      <p>
        Looking back at our 2 years together, there has not been a single moment I regret. I have loved spending every moment with you, from winning at mario kart to making cringey tiktoks. I am grateful to have crossed paths with you, my partner in crime, confidante and emotional support. I genuinely cannot wait to see what the future has in store for us. Love you di.
      </p>
    </header>
  );
}


export default Gallery;
