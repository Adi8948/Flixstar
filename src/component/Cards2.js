import React  from 'react';
import { useRef } from 'react';

export default function Cards2() {
    const cardContainerRef = useRef(null);

    const scrollRight = () => {
        const container = cardContainerRef.current;
        container.scrollLeft += container.offsetWidth - 200;
    };

    const scrollLeft = () => {
        const container = cardContainerRef.current;
        container.scrollLeft -= container.offsetWidth + 200;
    };

  return (
    <>
    <h1 className="title">Scifi</h1>
            <div className="movies-list">
                <button className="pre-btn" onClick={scrollLeft}>
                    <img src="./assets/pre.png" alt="" />
                </button>
                <button className="nxt-btn" onClick={scrollRight}>
                    <img src="./assets/nxt.png" alt="" />
                </button>
                <div className="card-container" ref={cardContainerRef}>
                    {/* Card 1 */}
                    <div className="card">
                <img src="./assets/card 1.jpg" className="card-img" alt=""/>
                <div className="card-body">
                    <h2 className="name">Avatar the way of water</h2>
                    
                    <button className="watchlist-btn" id="Trailor" onClick={()=>window.open('https://youtu.be/d9MyW72ELq0')}>watch Trailor</button>
                </div>
            </div>
            <div className="card">
                <img src="./assets/card 2.jpg" className="card-img" alt=""/>
                <div className="card-body">
                    <h2 className="name">Spider-Man no Way home</h2>
                    <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/JfVOs4VSpmA')}>watch Trailor</button>
                </div>
            </div>
            <div className="card">
                <img src="./assets/card 3.jpg" className="card-img" alt=""/>
                <div className="card-body">
                    <h2 className="name">Thor:Love and Thunder</h2>
                    <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/Go8nTmfrQd8')}>watch Trailor</button>
                </div>
            </div>
            <div className="card">
                <img src="./assets/card 4.jpg" className="card-img" alt=""/>
                <div className="card-body">
                    <h2 className="name">Black Panther: Wakanda Forever</h2>
                    <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/_Z3QKkl1WyM')}>watch Trailor</button>
                </div>
            </div>
            <div className="card">
                <img src="./assets/card 5.jpeg" className="card-img" alt=""/>
                <div className="card-body">
                    <h2 className="name">Avengers:EndGame</h2>
                    <button className="watchlist-btn"  onClick={()=>window.open('https://youtu.be/TcMBFSGVi1c')}>watch Trailor</button>
                </div>
            </div>
            <div className="card">
                <img src="./assets/card 6.jpg" className="card-img" alt=""/>
                <div className="card-body">
                    <h2 className="name">Annihilation</h2>
                    <button className="watchlist-btn" onClick={()=>window.open('https://www.youtube.com/watch?v=89OP78l9oF0')}>watch Trailor</button>
                </div>
            </div>
            <div className="card">
                <img src="./assets/card 7.jpg" className="card-img" alt=""/>
                <div className="card-body">
                    <h2 className="name">Color Out Of Space</h2>
                    <button className="watchlist-btn" onClick={()=>window.open('https://www.youtube.com/watch?v=RfYAXMwCpk0')}>watch Trailor</button>
                </div>
            </div>
            <div className="card">
                <img src="./assets/card 8.jpg" className="card-img" alt=""/>
                <div className="card-body">
                    <h2 className="name">Independence Day: Resurgence</h2>
                    <button className="watchlist-btn" onClick={()=>window.open('https://www.youtube.com/watch?v=LbduDRH2m2M')}>watch Trailor</button>
                </div>
            </div>
            <div className="card">
                <img src="./assets/card 9.jpg" className="card-img" alt=""/>
                <div className="card-body">
                    <h2 className="name">Independence Day</h2>
                    <button className="watchlist-btn" onClick={()=>window.open('https://www.youtube.com/watch?v=B1E7h3SeMDk')}>watch Trailor</button>
                </div>
            </div>
            <div className="card">
                <img src="./assets/card 10.jpg" className="card-img" alt=""/>
                <div className="card-body">
                    <h2 className="name">The Day After Tomorrow</h2>
                    <button className="watchlist-btn" onClick={()=>window.open('https://www.youtube.com/watch?v=Ku_IseK3xTc')}>watch Trailor</button>
                </div>
            </div>
                </div>
            </div>
            </>
  )
}
