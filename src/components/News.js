import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
    
    // This is our constructor : will construct the cards //
    constructor() {
        super();
        console.log("Hello i am a constructor ")
        this.state = {
            articles: [],
            loading: false
        }
    
    }
    async componentDidMount() {  // This runs after render //
        // console.log("cdm"); Just for demonstration purpose //
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6a6b787c519a4d56930d8ba4f5c08949"
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles: parsedData.articles})
    }
    render() {
        console.log("render");
        return (
            <div className="container my-3">
                <h2 className=" my-3">News-Top headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4">
                            <NewsItem  title={element.title?element.title:""} description={element.description?element.description: ""} Imageurl={element.urlToImage} Newsurl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                <button type="button" class="btn btn-outline-warning">Previous</button>
                <button type="button" class="btn btn-outline-info">Next</button>
                </div>
            </div>



        )

    }
}

export default News
