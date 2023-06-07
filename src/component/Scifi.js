import React from 'react';

const Scifi = () => {
    const movies = [
        {
            name: 'Avatar the way of water',
            des: 'Jake Sully and Ney tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.',
            image: './assets/card 1.jpg',
            trailor: 'https://youtu.be/d9MyW72ELq0',
        },
        {
            name: "Spider-Man no Way home",
            des: "Spider-Man seeks the help of Doctor Strange to forget his exposed secret identity as Peter Parker. However, Stranges spell goes horribly wrong, leading to unwanted guests entering their universe.",
            image: './assets/card 2.jpg',
            trailor: 'https://youtu.be/JfVOs4VSpmA',
        },
        {
            name: "Thor:Love and Thunder",
            des: "Thor embarks on a journey unlike anything he ever faced a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods.",
            image: './assets/card 3.jpg',
            trailor: 'https://youtu.be/Go8nTmfrQd8',
        },
        {
            name: "Black Panther: Wakanda Forever",
            des: "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter.",
            image: './assets/card 4.jpg',
            trailor: 'https://youtu.be/_Z3QKkl1WyM',
        },
        {
            name: "Avengers:EndGame",
            des: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
            image: './assets/card 5.jpeg',
            trailor: 'https://youtu.be/TcMBFSGVi1c',
        },
        {
            name: "Annihilation",
            des: "Lena, a biologist and former soldier, joins a mission to uncover what happened to her husband inside Area X -- a sinister and mysterious phenomenon that is expanding across the American coastline.",
            image: './assets/card 6.jpg',
            trailor: 'https://www.youtube.com/watch?v=89OP78l9oF0',
        },
        {
            name: "Color Out Of Space",
            des: "After a meteorite lands in the front yard of their farm, Nathan Gardner and his family find themselves battling a mutant extraterrestrial organism that infects their minds and bodies, transforming their quiet rural life into a technicolor nightmare.",
            image: './assets/card 7.jpg',
            trailor: 'https://www.youtube.com/watch?v=RfYAXMwCpk0',
        },
        {
            name: "Independence Day: Resurgence",
            des: "Twenty years after an alien invasion, the Earth is again attacked by the same species. This time, a few fearless men and women take on the responsibility to save the planet.",
            image: './assets/card 8.jpg',
            trailor: 'https://www.youtube.com/watch?v=LbduDRH2m2M',
        },
        {
            name: "Independence Day",
            des: "An alien race destroys major cities of the world with their advanced weaponry. However, a geek, a pilot, the US President and a group of ragtag survivors unite to save mankind from annihilation.",
            image: './assets/card 9.jpg',
            trailor: 'https://www.youtube.com/watch?v=B1E7h3SeMDk',
        },
        {
            name: "The Day After Tomorrow",
            des: "When a sudden worldwide storm begins to plunge the entire planet into a new ice age, paleoclimatologist Jack Hall undertakes a dangerous trek to New York City to save his son from the disaster.",
            image: './assets/card 10.jpg',
            trailor: 'https://www.youtube.com/watch?v=Ku_IseK3xTc',
        },
    ];

    const createSlide = (movie, index) => {
        const { name, des, image, trailor } = movie;

        return (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img src={image} className="d-block w-100" style={{ objectFit: 'cover', height: '550px' }} alt={`Slide ${index + 1}`} />
                <div className="carousel-caption d-none d-md-block">
                    <h5>{name}</h5>
                    <p>{des}</p>
                    <button className="CarTrailer" onClick={() => window.open(trailor)}>
                        Watch Trailer
                    </button>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="container mb-3" style={{ marginTop: '6.5rem' }}>
                <div id="carouselExampleIndicators" className="carousel slide" style={{ width: '100%', margin: '0 auto' }}>
                    <div className="carousel-indicators">
                        {movies.map((_, index) => (
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={index}
                                className={index === 0 ? 'active' : ''}
                                aria-current={index === 0}
                                aria-label={`Slide ${index + 1}`}
                                key={index}
                            ></button>
                        ))}
                    </div>
                    <div className="carousel-inner">
                        {movies.map((movie, index) => createSlide(movie, index))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div></div></>
    );
};

export default Scifi;