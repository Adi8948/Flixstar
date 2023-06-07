import React, { Component } from 'react'

export default class News extends Component {
    render() {
        let {title,description,imgUrl,NewsUrl,author,date}=this.props;
        return (
            <div>
                <div className="newscard my-1">
                    <img src={!imgUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvKB_eY0mCqpsAAMjGMIEqgX05oVTG9kHbQ&usqp=CAU":imgUrl}alt="Card Image"/>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <a rel="noreferrer" href={NewsUrl} target='_blank'className="btn btn-sm btn-dark">Read more</a>
                        <p className='card-text'><small className='text-muted'> by {author? author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                </div>
            </div>
        )
    }
}
