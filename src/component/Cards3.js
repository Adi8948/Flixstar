import React  from 'react';
import { useRef } from 'react';

export default function Cards3() {
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
    <div>
    <h1 className="title">Romance</h1>
    <div className="movies-list">
        <button className="pre-btn" onClick={scrollLeft}>
            <img src="./assets/pre.png" alt="" />
        </button>
        <button className="nxt-btn" onClick={scrollRight}>
            <img src="./assets/nxt.png" alt="" />
        </button>
        <div className="card-container" ref={cardContainerRef}>
        <div className="card">
        <img src="./assets/card 21.jpg" className="card-img" alt=""/>
        <div className="card-body">
            <h2 className="name">Me Before You</h2>
            <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/T0MmkG_nG1U')}>watch Trailor</button>
        </div>
    </div>
    <div className="card">
        <img src="./assets/card 22.jpg" className="card-img" alt=""/>
        <div className="card-body">
            <h2 className="name">One Day</h2>
            <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/zVuuooZqVaU')}>watch Trailor</button>
        </div>
    </div>
    <div className="card">
        <img src="./assets/card 23.jpg" className="card-img" alt=""/>
        <div className="card-body">
            <h2 className="name">The NoteBook</h2>
            <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/BjJcYdEOI0k')}>watch Trailor</button>
        </div>
    </div>
    <div className="card">
        <img src="./assets/card 24.jpg" className="card-img" alt=""/>
        <div className="card-body">
            <h2 className="name">The Age Of Adeline</h2>
            <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/w7pYhpJaJW')}>watch Trailor</button>
        </div>
    </div>
    <div className="card">
        <img src="./assets/card 25.jpg" className="card-img" alt=""/>
        <div className="card-body">
            <h2 className="name">After</h2>
            <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/baeusCkoMjU')}>watch Trailor</button>
        </div>
    </div>
    <div className="card">
        <img src="./assets/card 26.jpg" className="card-img" alt=""/>
        <div className="card-body">
            <h2 className="name">A Walk to Remember</h2>
            <button className="watchlist-btn" onClick={()=>window.open('https://www.youtube.com/watch?v=k3B2XBcp7vA')}>watch Trailor</button>
        </div>
    </div>
    <div className="card">
        <img src="./assets/card 27.jpg" className="card-img" alt=""/>
        <div className="card-body">
            <h2 className="name">Dear John</h2>
            <button className="watchlist-btn" onClick={()=>window.open('https://www.youtube.com/watch?v=r0fq5dd0C60')}>watch Trailor</button>
        </div>
    </div>
    <div className="card">
        <img src="./assets/card 28.jpg" className="card-img" alt=""/>
        <div className="card-body">
            <h2 className="name">Safe Haven</h2>
            <button className="watchlist-btn" onClick={()=>window.open('https://www.youtube.com/watch?v=p4vhm3_-3VM')}>watch Trailor</button>
        </div>
    </div>
    <div className="card">
        <img src="./assets/card 29.jpg" className="card-img" alt=""/>
        <div className="card-body">
            <h2 className="name">The Longest Ride</h2>
            <button className="watchlist-btn" onClick={()=>window.open('https://www.youtube.com/watch?v=FUS_Q7FsfqU')}>watch Trailor</button>
        </div>
    </div>
    <div className="card">
        <img src="./assets/card  30.jpg" className="card-img" alt=""/>
        <div className="card-body">
            <h2 className="name">The Lucky One</h2>
            <button className="watchlist-btn" onClick={()=>window.open('https://www.youtube.com/watch?v=9w8lE83oYeM')}>watch Trailor</button>
        </div>
    </div>
        </div>
    </div>
</div>
  )
}






// import React, { useRef } from 'react';

// const CardCarousel = () => {
//     const cardContainerRef = useRef(null);

//     const scrollRight = () => {
//         const container = cardContainerRef.current;
//         container.scrollLeft += container.offsetWidth - 200;
//     };

//     const scrollLeft = () => {
//         const container = cardContainerRef.current;
//         container.scrollLeft -= container.offsetWidth + 200;
//     };

//     return (
//         <div>
//             <h1 className="title">Romance</h1>
//             <div className="movies-list">
//                 <button className="pre-btn" onClick={scrollLeft}>
//                     <img src="./assets/pre.png" alt="" />
//                 </button>
//                 <button className="nxt-btn" onClick={scrollRight}>
//                     <img src="./assets/nxt.png" alt="" />
//                 </button>
//                 <div className="card-container" ref={cardContainerRef}>
//                 <div className="card">
//                 <img src="./assets/card 21.jpg" className="card-img" alt=""/>
//                 <div className="card-body">
//                     <h2 className="name">Me Before You</h2>
//                     <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/M7XM597XO94')}>watch Trailor</button>
//                 </div>
//             </div>
//             <div className="card">
//                 <img src="./assets/card 22.jpg" className="card-img" alt=""/>
//                 <div className="card-body">
//                     <h2 className="name">One Day</h2>
//                     <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/M7XM597XO94')}>watch Trailor</button>
//                 </div>
//             </div>
//             <div className="card">
//                 <img src="./assets/card 23.jpg" className="card-img" alt=""/>
//                 <div className="card-body">
//                     <h2 className="name">The NoteBook</h2>
//                     <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/M7XM597XO94')}>watch Trailor</button>
//                 </div>
//             </div>
//             <div className="card">
//                 <img src="./assets/card 24.jpg" className="card-img" alt=""/>
//                 <div className="card-body">
//                     <h2 className="name">The Age Of Adeline</h2>
//                     <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/M7XM597XO94')}>watch Trailor</button>
//                 </div>
//             </div>
//             <div className="card">
//                 <img src="./assets/card 25.jpg" className="card-img" alt=""/>
//                 <div className="card-body">
//                     <h2 className="name">After</h2>
//                     <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/M7XM597XO94')}>watch Trailor</button>
//                 </div>
//             </div>
//             <div className="card">
//                 <img src="./assets/card 26.jpg" className="card-img" alt=""/>
//                 <div className="card-body">
//                     <h2 className="name">A Walk to Remember</h2>
//                     <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/M7XM597XO94')}>watch Trailor</button>
//                 </div>
//             </div>
//             <div className="card">
//                 <img src="./assets/card 27.jpg" className="card-img" alt=""/>
//                 <div className="card-body">
//                     <h2 className="name">Dear John</h2>
//                     <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/M7XM597XO94')}>watch Trailor</button>
//                 </div>
//             </div>
//             <div className="card">
//                 <img src="./assets/card 28.jpg" className="card-img" alt=""/>
//                 <div className="card-body">
//                     <h2 className="name">Safe Haven</h2>
//                     <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/M7XM597XO94')}>watch Trailor</button>
//                 </div>
//             </div>
//             <div className="card">
//                 <img src="./assets/card 29.jpg" className="card-img" alt=""/>
//                 <div className="card-body">
//                     <h2 className="name">The Longest Ride</h2>
//                     <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/M7XM597XO94')}>watch Trailor</button>
//                 </div>
//             </div>
//             <div className="card">
//                 <img src="./assets/card  30.jpg" className="card-img" alt=""/>
//                 <div className="card-body">
//                     <h2 className="name">The Lucky One</h2>
//                     <button className="watchlist-btn" onClick={()=>window.open('https://youtu.be/M7XM597XO94')}>watch Trailor</button>
//                 </div>
//             </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CardCarousel;
