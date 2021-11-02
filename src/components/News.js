import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "COP26: World leaders promise to end deforestation by 2030 - BBC News",
            "description": "More than 100 nations including Brazil, Russia and Indonesia are expected to sign COP26's first major deal.",
            "url": "https://www.bbc.com/news/science-environment-59088498",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/96B4/production/_121308583_gettyimages-1173062100-1.jpg",
            "publishedAt": "2021-11-02T07:57:26Z",
            "content": "By Georgina RannardBBC News\r\nImage source, Getty Images\r\nImage caption, Trees are often cut down to create grazing land to feed the world's hunger for meat\r\nMore than 100 world leaders will promise t… [+8061 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "https://www.engadget.com/about/editors/mariella-moon",
            "title": "'Squid Game' cryptocurrency collapses in a $3 million scam | Engadget - Engadget",
            "description": "A cryptocurrency inspired by Squid Game enticed enough investors to see its value soar to over $2,800, before its creators cashed out and vanished..",
            "url": "https://www.engadget.com/squid-game-cryptocurrency-scam-073957132.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-11/5396e290-3ba6-11ec-b7b0-a7fef2d57060",
            "publishedAt": "2021-11-02T07:42:44Z",
            "content": "A cryptocurrency inspired by Squid Game successfully enticed enough investors to see its value soar to over $2,800... before its creators cashed out and vanished. The cryptocurrency called $SQUID, wh… [+1343 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Ryan Browne",
            "title": "Fortnite to shut down in China as Beijing intensifies video game crackdown - CNBC",
            "description": "The Chinese version of Fortnite, \"Fortress Night,\" will shut down on Nov. 15.",
            "url": "https://www.cnbc.com/2021/11/02/fortnite-to-shut-down-in-china-amid-video-game-crackdown.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106969008-1635833577037-gettyimages-1137224423-ChinaFlagStudio_4611.jpeg?v=1635833695",
            "publishedAt": "2021-11-02T07:23:34Z",
            "content": "Fortnite is calling it quits in China.\r\nThe wildly popular battle-royale game, developed by Epic Games, will shut down its local Chinese version on Nov. 15, according to an update on its website.\r\nUs… [+1561 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Japan's Joker assailant wanted to \"kill lots of people\"-police - Reuters",
            "description": "A drifter who admired the Joker from Batman and dressed as him to carry out a Halloween attack on a Tokyo train \"wanted to kill lots of people\" and planned his moves over months, buying a knife to use in the internet, police and media said on Tuesday.",
            "url": "https://www.reuters.com/world/asia-pacific/japans-joker-assailant-wanted-kill-lots-people-police-2021-11-02/",
            "urlToImage": "https://www.reuters.com/resizer/IxWIQBFHSG2E5g16m6-PqSqEsw4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5HRFIV4YRFLLHEUT4NIJWZ3CYU.jpg",
            "publishedAt": "2021-11-02T06:52:00Z",
            "content": "Kyota Hattori, 24, who was arrested on suspicion of a knife, arson and acid attack incident on the Keio Line train on Halloween day on October 31, 2021, is escorted to the prosecutor's office from th… [+2557 chars]"
        } , 
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Lora Kolodny, Michael Wayland",
            "title": "Elon Musk says Tesla has not signed contract with Hertz yet - CNBC",
            "description": "Last week, the electric automaker's market cap hit $1 trillion after Hertz said it would order 100,000 Teslas by the end of 2022.",
            "url": "https://www.cnbc.com/2021/11/02/elon-musk-says-tesla-has-not-signed-contract-with-hertz-yet.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106926995-1628885360355-elon2.jpg?v=1634674400",
            "publishedAt": "2021-11-02T04:19:52Z",
            "content": "Tesla CEO Elon Musk said on Monday night that his electric vehicle company has yet to sign a contract with rental car company Hertz. The tweet from Musk seemingly contradicted a prior announcement an… [+3624 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian staff reporter",
            "title": "Struggling Kansas City Chiefs scrabble past New York Giants to reach .500 - The Guardian",
            "description": "Harrison Butker hit a pair of fourth-quarter field goals and the Kansas City Chiefs scrambled their way to a 20-17 comeback win",
            "url": "https://amp.theguardian.com/sport/2021/nov/01/kansas-city-chiefs-new-york-giants-nfl-monday-night-football",
            "urlToImage": "https://i.guim.co.uk/img/media/d5e68503ca598de938b657715710400baecc747c/0_128_3840_2304/master/3840.jpg?width=620&quality=85&auto=format&fit=max&s=7fd55d2a430633babfcb736eb78e8e20",
            "publishedAt": "2021-11-02T03:36:00Z",
            "content": "NFL<ul><li>New York Giants 17-20 Kansas City Chiefs</li><li>Chiefs offense continues to splutter in hard-fought win</li></ul>\r\nHarrison Butker hit a pair of fourth-quarter field goals, including the … [+3300 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Tom Tapp",
            "title": "30,000 Visitors Locked Inside Shanghai Disneyland For Hours By Chinese Government After 1 Positive Covid Case - Deadline",
            "description": "One woman who visited Shanghai Disneyland on Saturday either later tested positive for Covid or came into contact with someone who had it, according to reports. As a result, more than 30,000 visitors were locked in the park Sunday by Chinese government offici…",
            "url": "https://deadline.com/2021/11/shanghai-disneyland-visitors-locked-in-covid-1234866167/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2055/03/Shanghai-Disneyland.jpg?w=1000",
            "publishedAt": "2021-11-02T03:03:00Z",
            "content": "One woman who visited Shanghai Disneyland on Saturday either later tested positive for Covid or came into contact with someone who had it, according to reports. As a result, more than 30,000 visitors… [+2422 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "Brian Mann",
            "title": "A California court says drug companies aren't liable for the state's opioid crisis - NPR",
            "description": "In a ruling issued late Monday, state superior court Judge Peter J. Wilson found the companies, including Johnson &amp; Johnson, aren't \"legally liable\" for the opioid crisis.",
            "url": "https://www.npr.org/2021/11/01/1051321580/california-judge-drug-companies-opioid-crisis-allergan-endo-johnson-teva",
            "urlToImage": "https://media.npr.org/assets/img/2021/11/01/gettyimages-1233004651_wide-612d1bd24016193faeaf3b3db90c6d5df51e37c1.jpg?s=1400",
            "publishedAt": "2021-11-02T02:48:50Z",
            "content": "In a ruling issued late Monday, Orange County Superior Court Judge Peter J. Wilson found the companies, including Johnson &amp; Johnson, aren't \"legally liable\" for the opioid crisis.\r\nSOPA Images/Li… [+2285 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Taiyler Simone Mitchell",
            "title": "Rep. Cori Bush blasts Sen. Manchin's opposition to the reconciliation bill - Business Insider",
            "description": "The Build Back Better reconciliation bill focuses on, in part, climate change solutions along with child and medical care. Manchin is a key holdout.",
            "url": "https://www.businessinsider.com/rep-bush-manchin-opposition-bbb-anti-black-child-woman-immigrant-2021-11",
            "urlToImage": "https://i.insider.com/61808edf1037b10018154e25?width=1200&format=jpeg",
            "publishedAt": "2021-11-02T02:40:09Z",
            "content": "Following a Monday press conference, where Sen. Joe Manchin said he needed \"more clarity\" on the Biden administration's Build Back Better framework, Rep. Cori Bush called him out in a statement for b… [+2661 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Charles Trepany",
            "title": "Hailey Bieber reveals 'very sad' time in relationship with husband Justin: 'We didn't speak' - USA TODAY",
            "description": "Hailey Bieber is getting candid about her relationship with Justin Bieber — including a rough patch where they didn't speak to one another.",
            "url": "https://www.usatoday.com/story/entertainment/celebrities/2021/11/01/hailey-bieber-reveals-she-and-justin-used-not-speaking-terms/6242926001/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2021/09/14/USAT/37296924-6905-4f23-8cf6-db695beb0ec6-GTY_1340142925.jpg?crop=2750,1547,x1,y293&width=1600&height=800&fit=bounds",
            "publishedAt": "2021-11-02T02:17:19Z",
            "content": "Justin Bieber and Hailey Baldwin celebrated their nuptials with a wedding. Stars like Kendall Jenner and Justine Skye were in attendance.\r\nUSA TODAY\r\nHailey Bieber is getting candid about her relatio… [+3473 chars]"
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Henry J. Gomez",
            "title": "Trump hails Glenn Youngkin as 'fantastic guy' in last-minute phone rally on eve of Va. election - NBC News",
            "description": "Donald Trump made a brief cameo Monday night in Glenn Youngkin's campaign for governor of Virginia, telling voters that the Republican will \"do a job like nobody can do.\"",
            "url": "https://www.nbcnews.com/politics/elections/trump-hails-glenn-youngkin-fantastic-guy-last-minute-phone-rally-n1282929",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_44/3516453/211101-donald-trump-ac-841p.jpg",
            "publishedAt": "2021-11-02T01:52:00Z",
            "content": "Former President Donald Trump made a brief cameo Monday night in Glenn Youngkin's campaign for governor of Virginia, telling voters that the Republican is a \"fantastic guy\" who will \"do a job like no… [+4140 chars]"
        },
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "Monique Beals",
            "title": "McConnell blasts potential payments to separated migrant families | TheHill - The Hill",
            "description": "Senate Minority Leader Mitch McConnell (R-Ky.) on Monday criticized President Joe Biden's potenti...",
            "url": "https://thehill.com/policy/international/579531-mcconnell-blasts-potential-payments-to-separated-migrant-families",
            "urlToImage": "https://thehill.com/sites/default/files/mcconnellmitch_102621gn5_lead.jpg",
            "publishedAt": "2021-11-02T01:46:21Z",
            "content": "\"Honestly, this absurd idea feels like a satirical policy proposal that Republicans would have invented to make a parody out of the radical left. Oh, and the next thing you know, theyll be sending ou… [+2895 chars]"
        },
        
    ]

    // This is our constructor : will construct the cards //
    constructor() {
        super();
        console.log("Hello i am a constructor ")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2 className=" my-3">News-Top headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4">
                            <NewsItem  title={element.title.slice(0,45)} description={element.description.slice(0,88)} Imageurl={element.urlToImage} Newsurl={element.url} />
                        </div>
                    })}
                </div>
            </div>



        )

    }
}

export default News
