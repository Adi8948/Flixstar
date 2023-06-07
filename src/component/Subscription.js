import React from 'react'

export default function Subscription() {
    return (
        <div>
            <div className="container common sub ">
                <h1 className="heading1">Subscribe now and Start streaming</h1>

                <div className="gif">
                    <img src="./assets/subscription.gif" alt="/" />
                </div>
            </div>

            <div className="container common sub1 ">
                <div className="container common ">
                    <h1 className="heading">Choose a Subscription Plan</h1>

                    <div className="plan">
                        <h2 className="plan-title">Premium Plan</h2>
                        <div className="plan-price">1499₹</div>
                        <div className="plan-duration">per month</div>
                    </div>
                   
                    <div className="features">
                        <div className="feature-item">
                            <i className="fa fa-check-circle"></i>
                            All content
                        </div>
                        <div className="feature-item">
                            <i className="fa fa-check-circle"></i>
                            Watch on TV and Laptop
                        </div>
                        <div className="feature-item">
                            <i className="fa fa-check-circle"></i>
                            Ad-free viewing experience
                        </div>
                        <div className="feature-item">
                            <i className="fa fa-check-circle"></i>
                            Max Video quality - 4k 2160p
                        </div>
                        <div className="feature-item">
                            <i className="fa fa-check-circle"></i>
                            Max audio quality - Dolby Atmos 
                        </div>
                    </div>

                    <a href="/Subscribe" className="cta-button">Subscribe Now</a>
                </div>
            </div>
        </div>
        
    )
}
