import React from 'react';

const Action = () => {
    const movies = [
        {
            name: 'John Wick: Chapter 3 – Parabellum',
            des: 'John Wick is declared excommunicado and a hefty bounty is set on him after he murders an international crime lord. He sets out to seek help to save himself from ruthless hitmen and bounty hunters.',
            image: './assets/card 11.jpg',
            trailor: 'https://youtu.be/M7XM597XO94',
        },
        {
            name: "The Gray Man",
            des: "When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague.",
            image: './assets/card 12.jpg',
            trailor: 'https://youtu.be/BmllggGO4pM',
        },
        {
            name: "Furious 7",
            des: "Dominic and his family are caught in a quagmire when Shaw's brother seeks bloody revenge. They must not only deal with their enemy but also save a crucial programme from falling into the wrong hands.",
            image: './assets/card 13.jpg',
            trailor: 'https://youtu.be/Skpu5HaVkOc',
        },
        {
            name: "Alita: Battle Angel",
            des: "Alita, a battle cyborg, is revived by Ido, a doctor, who realises that she actually has the soul of a teenager. Alita then sets out to learn about her past and find her true identity.",
            image: './assets/card 14.jpg',
            trailor: 'https://youtu.be/w7pYhpJaJW8',
        },
        {
            name: "Mission: Impossible - Fallout",
            des: "A group of terrorists plans to detonate three plutonium cores for a simultaneous nuclear attack on different cities. Ethan Hunt, along with his IMF team, sets out to stop the carnage.",
            image: './assets/card 15.jpg',
            trailor: 'https://youtu.be/wb49-oV0F78',
        },
        {
            name: "Baaghi 2",
            des: "When Neha's three-year-old daughter, Rhea, is kidnapped, she calls Ronny, her former boyfriend who is now an Indian army soldier. He remembers the promise he made to her and agrees	to save Rhea.",
            image: './assets/card 16.jpg',
            trailor: 'https://www.youtube.com/watch?v=F2lN25IayH8',
        },
        {
            name: "Pathan",
            des: "An Indian spy battles against the leader of a gang of mercenaries who have a heinous plot for his homeland.",
            image: './assets/card 17.jpg',
            trailor: 'https://www.youtube.com/watch?v=vqu4z34wENw',
        },
        {
            name: "Vikram Vedha",
            des: "A tough police officer sets out on a mission to track down and eliminate a gangster with a reputation as legendary as his own.",
            image: './assets/card 18.jpg',
            trailor: 'https://www.youtube.com/watch?v=hpwnlr-ZHB0',
        },
        {
            name: "What happened to Monday",
            des: "What Happened to Monday (known in several territories as Seven Sisters) is a 2017 dystopian science-fiction action thriller film directed by Tommy Wirkola and written by Max Botkin 	and Kerry Williamson. The film stars Noomi Rapace, Glenn Close and Willem Dafoe.",
            image: './assets/card 19.jpg',
            trailor: 'https://www.youtube.com/watch?v=hOiWSWLt-NA',
        },
        {
            name: "Commando",
            des: "The Chinese government incarcerates Karan, an Indian commando, accusing him of being an Indian spy, after he survives a plane crash in their territory. He must find a way to escape	the enemy camp.",
            image: './assets/card 20.jpg',
            trailor: 'https://www.youtube.com/watch?v=sLIs-4oM3m4',
        },
    ];

    const createSlide = (movie, index) => {
        const { name, des, image, trailor } = movie;

        return (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img src={image} className="d-block w-100" style={{ height: '550px' }} alt={`Slide ${index + 1}`} />
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

export default Action;