import Image from "next/image";

const aboutData = [
    {
        name: "Mikhil",
        image: "/images/mik.jpeg", // Replace with your image path
        description: "Oru sopplangi",
    },
    {
        name: "Kaaviya",
        image: "/images/kaav.jpeg", // Replace with your image path
        description: "hot psycho",
    },
];


export default function AboutPage() {
    return (
        <div className="about-background">
            <header className="about-header">
                <h1>About Us</h1>
            </header>
            <section className="about-section">
                {aboutData.map((person, index) => (
                    <div key={index} className="about-card">
                        <div className="image-container">
                            <Image
                                src={person.image}
                                alt={`Picture of ${person.name}`}
                                width={200}
                                height={200}
                                className="round-image"
                            />
                        </div>
                        <h2>{person.name}</h2>
                        <p>{person.description}</p>
                    </div>
                ))}
            </section>
            <section className="projects-section">
                <h2>Upcoming Projects (tbc)</h2>

            </section>
        </div>
    );
}
