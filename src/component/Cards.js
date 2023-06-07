import React from 'react';
import { useRef } from 'react';


export default function Cards() {
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
            <div>
                <h1 className="title">Action</h1>
                <div className="movies-list">
                    <button className="pre-btn" onClick={scrollLeft}>
                        <img src="./assets/pre.png" alt="" />
                    </button>
                    <button className="nxt-btn" onClick={scrollRight}>
                        <img src="./assets/nxt.png" alt="" />
                    </button>
                    <div className="card-container" ref={cardContainerRef}>
                        {/* Card 1 */}
                        <div className="card" >
                            <img src="./assets/card 11.jpg" className="card-img" alt="" />
                            <div className="card-body">
                                <h2 className="name">John Wick</h2>
                                {/* <h6 className="des">John Wick is declared excommunicado and a hefty bounty is set 
                                on him after....</h6> */}
                                <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/M7XM597XO94')}>watch Trailor</button>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="card" >
                            <img src="./assets/card 12.jpg" className="card-img" alt="" />
                            <div className="card-body">
                                <h2 className="name">The Gray Man</h2>
                                <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/BmllggGO4pM')}>watch Trailor</button>
                            </div>
                        </div>
                        <div className="card" >
                            <img src="./assets/card 13.jpg" className="card-img" alt="" />
                            <div className="card-body">
                                <h2 className="name">Furious 7</h2>
                                <button className="watchlist-btn"onClick={()=>window.open('https://youtu.be/Skpu5HaVkOc')}>watch Trailor</button>
                            </div>
                        </div>
                        <div className="card" >
                            <img src="./assets/card 14.jpg" className="card-img" alt="" />
                            <div className="card-body">
                                <h2 className="name">Alita: Battle Angel</h2>
                                <button className="watchlist-btn"onClick={()=>window.open('https://youtu.be/w7pYhpJaJW8')}>watch Trailor</button>
                            </div>
                        </div>
                        <div className="card" >
                            <img src="./assets/card 15.jpg" className="card-img" alt="" />
                            <div className="card-body">
                                <h3 className="name">Mission: Impossible-Fallout</h3>
                                <button className="watchlist-btn"onClick={()=>window.open('https://youtu.be/wb49-oV0F78')}>watch Trailor</button>
                            </div>
                        </div>
                        <div className="card" >
                            <img src="./assets/card 16.jpg" className="card-img" alt="" />
                            <div className="card-body">
                                <h2 className="name">Baaghi 2 -</h2>
                                <button className="watchlist-btn"onClick={()=>window.open('https://www.youtube.com/watch?v=F2lN25IayH8')}>watch Trailor</button>
                            </div>
                        </div>
                        <div className="card" >
                            <img src="./assets/card 17.jpg" className="card-img" alt="" />
                            <div className="card-body">
                                <h2 className="name">Pathan</h2>
                                <button className="watchlist-btn"onClick={()=>window.open('https://www.youtube.com/watch?v=vqu4z34wENw')}>watch Trailor</button>
                            </div>
                        </div>
                        <div className="card" >
                            <img src="./assets/card 18.jpg" className="card-img" alt="" />
                            <div className="card-body">
                                <h2 className="name">Vikram Vedha -</h2>
                                <button className="watchlist-btn"onClick={()=>window.open('https://www.youtube.com/watch?v=hpwnlr-ZHB0')}>watch Trailor</button>
                            </div>
                        </div>
                        <div className="card" >
                            <img src="./assets/card 19.jpg" className="card-img" alt="" />
                            <div className="card-body">
                                <h2 className="name">What happened to Monday</h2>
                                <button className="watchlist-btn"onClick={()=>window.open('https://www.youtube.com/watch?v=hOiWSWLt-NA')}>watch Trailor</button>
                            </div>
                        </div>
                        <div className="card" >
                            <img src="./assets/card 20.jpg" className="card-img" alt="" />
                            <div className="card-body">
                                <h2 className="name">Commando</h2>
                                <button className="watchlist-btn"onClick={()=>window.open('https://www.youtube.com/watch?v=sLIs-4oM3m4')}>watch Trailor</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}