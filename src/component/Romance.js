import React from 'react';

const Romance = () => {
    const movies = [
        {
            name: 'Me Before You',
            des: 'Louisa Clark accepts the job of being a caretaker of Will Traynor, a rigid man who has paralysis. However, her life transforms as the two, gradually, form a bond and later fall in love.',
            image: './assets/card 21.jpg',
            trailor: 'https://youtu.be/T0MmkG_nG1U',
        },
        {
            name: "One Day",
            des: "Dexter and Emma decide to meet every year on 15 July and see where they stand in life. Over a period of 18 years, they feel that they have more to share in common than the people around them.",
            image: './assets/card 22.jpg',
            trailor: 'https://youtu.be/zVuuooZqVaU',
        },
        {
            name: "The NoteBook",
            des: "Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from dementia, on a daily basis out of his notebook.",
            image: './assets/card 23.jpg',
            trailor: 'https://youtu.be/BjJcYdEOI0k',
        },
        {
            name: "The Age Of Adeline",
            des: "Adaline Bowman (Blake Lively) has miraculously remained a youthful 29 years of age for nearly eight decades, never allowing herself to get close to anyone lest they discover her secret.",
            image: './assets/card 24.jpg',
            trailor: 'https://youtu.be/w7pYhpJaJW',
        },
        {
            name: "After",
            des: "The After film series consists of American romantic-dramas based on the Anna Todd authored After novels. The plot centers around the positive and negative experiences of a romantic relationship between a young couple named Tessa and Hardin",
            image: './assets/card 25.jpg',
            trailor: 'https://youtu.be/baeusCkoMjU',
        },
        {
            name: "A Walk to Remember",
            des: "Landon is assigned community service after getting in trouble. His punishment also involves participating in the spring play, during which he falls in love with Jamie, the reverend's daughter.",
            image: './assets/card 26.jpg',
            trailor: 'https://www.youtube.com/watch?v=k3B2XBcp7vA',
        },
        {
            name: "Dear John",
            des: "John is a soldier who loves Savannah, a college student. He re-enlists post the 9/11 attack but the two continue to be in touch over letters. Fate tests their love many times over the next few years.",
            image: './assets/card 27.jpg',
            trailor: 'https://www.youtube.com/watch?v=r0fq5dd0C60',
        },
        {
            name: "Safe Haven",
            des: "A mysterious young woman arrives in Southport, North Carolina, and falls in love with a widowed store owner. However, her dark past intrudes in her new life.",
            image: './assets/card 28.jpg',
            trailor: 'https://www.youtube.com/watch?v=p4vhm3_-3VM',
        },
        {
            name: "The Longest Ride",
            des: "The spark between Luke and Sophia fades away owing to their conflicting career paths. Subsequently, an older man, Ira, tries to show them the rewards of resolving relationship barriers.",
            image: './assets/card 29.jpg',
            trailor: 'https://www.youtube.com/watch?v=FUS_Q7FsfqU',
        },
        {
            name: "The Lucky One",
            des: "After returning from the Iraq war, a lonely and dejected Marine tries to track down a woman who he believed was his lucky charm. While staying with her family, he finally finds peace.",
            image: './assets/card  30.jpg',
            trailor: 'https://www.youtube.com/watch?v=9w8lE83oYeM',
        }

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

export default Romance;