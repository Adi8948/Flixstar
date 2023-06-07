import React, { Component } from 'react'
import News from './News'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from './Spinner'
export class NewsItems extends Component {
   
    static defaultProps={
        Country :'in',
        pageSize:2,
        Category:'general'
    }
    static propTypes={
        Country: PropTypes.string,
        pageSize: PropTypes.number,
        Category: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            Article: [],
            loading: false,
            page: 1,

        }
    }
    async updateNews(){
         //let url = `https://newsapi.org/v2/everything?q=india&from=2023-04-25&sortBy=publishedAt&apiKey=559502a359ff4ae9bab6a3c9608d66c0&page=1&pagesize=
        // ${this.props.pageSize}`;
        let url1=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=d2d79cc94e834277a2f5607c0f9f31ea&page=1&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url1);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            Article: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => { 
        let url1 = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=d2d79cc94e834277a2f5607c0f9f31ea&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url1);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            Article: this.state.Article.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            
            page: this.state.page + 1
        })
    }

    render() {
        return (
            <div className='container my-3 '>
                <h1 className='text-center headline'style={{margin:'90px'}}>MovieNews - Top  Headlines</h1>
                <InfiniteScroll
                style={{overflow:("hidden")}}
                    dataLength={this.state.Article.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.Article !== this.state.totalResults}
                    loader={<Spinner />}>

                <div className="row ">
                    {!this.state.loading && this.state.Article.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <News title={element.title?element.title:""} description={element.description?element.description:""} 
                            imgUrl={element.urlToImage} NewsUrl={element.url} author={element.author} date={element.publishedAt}/>
                        </div>
                    })}

                </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default NewsItems
