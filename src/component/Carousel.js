import React, { useState, useEffect } from 'react';

const Carousel = () => {
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
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const createSlide = (currentIndex) => {
    const { name, des, image, trailor } = movies[currentIndex];
    const Trailor = () => {
      window.open(trailor)
    }
    return (
      <div className="slider" key={currentIndex}>
        <div className="slide-content">
          <h2 className="movie-title">{name}</h2>
          <p className="movie-des">{des}</p>
          <button className=" CarTrailer" onClick={Trailor}>watch Trailor</button>
        </div>
        <img src={image} alt="Slider" />

      </div>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }
    // eslint-disable-next-line
    , []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {Array.from({ length: 3 }).map((_, index) => {
          const currentIndex = (slideIndex + index) % movies.length;
          return createSlide(currentIndex);
        })}

      </div>
    </div>
  );
};

export default Carousel;
