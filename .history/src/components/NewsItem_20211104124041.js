import React, { Component } from 'react'
export class NewsItem extends Component {

  render() {
    let { title, description, Imageurl, Newsurl , author  , date } = this.proprops;
    return (
      <div className="my-3 ">
        <div className="card" style={{ width: "18 rem" }}>
          <img src={!Imageurl ? "https://akm-img-a-in.tosshub.com/indiatoday/images/mediamanager/livetv_share.png" : Imageurl} className="card-img-top" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small class="text-muted"> By {author} on {date} </small></p>
          <a href={Newsurl} className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
          </div >
        )
  }
}

export default NewsItem
