import React, { useEffect , useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
const News = (props) => {

    // These are the state updates for the functional based components //
    
   const [articles , setArtices] = useState([])
   const [loading , setLoading] = useState(true)
   const [page , setPage] = useState(1)


    // This is our constructor : will construct the cards //
    // constructor() {
    //     super();
    //     console.log("Hello i am a constructor ")
    //     this.state = {
    //         page : 1 , 
    //         articles: [],
    //         loading: true
    //     }
    
    // }


    // Defining our event handlers //
    
    const handlePrevClick = async () => {  
        // console.log("previous");
        this.setState({
            page : this.state.page - 1, // Incrementing the page //
            // articles: parsedData.articles
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}country=${props.country}&apiKey=6a6b787c519a4d56930d8ba4f5c08949&page=${this.state.page}&pageSize=${props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);   // Waiting for our URL to be fetched //
        let parsedData = await data.json()   // The data will be in the form of json //
        // console.log(parsedData) Just for demonstration //
        this.setState({
            // page : this.state.page - 1, // Incrementing the page //
            articles: parsedData.articles , 
            loading : false
        })
 

    }

    const handleNextClick = async () => {
        // console.log("Next")
        this.setState({
            page : this.state.page + 1, // Incrementing the page //
            // articles: parsedData.articles
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6a6b787c519a4d56930d8ba4f5c08949&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);   // Waiting for our URL to be fetched //
        let parsedData = await data.json()   // The data will be in the form of json //
        // console.log(parsedData) Just for demonstration //
        this.setState({
            // page : this.state.page + 1, // Incrementing the page //
            articles: parsedData.articles , 
            loading: false
        })

    }


    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    const  componentDidMount  = async() => {  // This runs after render //   // Using the promise return here with the help of async and await //
        // console.log("cdm"); Just for demonstration purpose //
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6a6b787c519a4d56930d8ba4f5c08949&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url)   // Waiting for our URL to be fetched //
        let parsedData = await data.json()   // The data will be in the form of json //
        // console.log(parsedData) Just for demonstration //
        console.log(parsedData);
        this.setState({
            // page : this.state.page , 
            articles: parsedData.articles , 
            loading : false
        })
    }
    
        // console.log("render");

        return (
            <div className="container my-3 ">
                <h1 className="text-center">News - Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4">
                            <NewsItem  title={element.title?element.title:""} description={element.description?element.description: ""} Imageurl={element.urlToImage} Newsurl={element.url} author={element.author} date={element.publishedAt}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" class="btn btn-sm btn-danger" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button type="button" class="btn btn-sm btn-success" onClick = {this.handleNextClick}>Next &rarr; </button>
                </div>
            </div>



        )

    
}

export default News

News.defaultProps = {
    country : 'in' , 
    pageSize : 9 , 
    category : 'general'
}

News.propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number , 
    category : PropTypes.string
}





// business
// entertainment
// generalhealth
// science
// sports
// technology