import React, { Component } from 'react'
import Newsitem from './Newsitem';

export class News extends Component {
  articles =  [
    {
      "source": {
        "id": null,
        "name": "Livemint"
      },
      "author": "Livemint",
      "title": "Go First airline says 'no definite timeline' for resumption of operations, informs DGCA | Mint - Mint",
      "description": "In a reply to DGCA, Go First airline said they have no definite timeline for the resumption of operations yet: DGCA",
      "url": "https://www.livemint.com/news/india/go-first-airline-says-no-definite-timeline-for-resumption-of-operations-informs-dgca-11684845271399.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2023/05/23/600x338/GO-FIRST-CRISIS-PRATT-0_1684846901056_1684846925966.JPG",
      "publishedAt": "2023-05-23T12:37:01Z",
      "content": "Go First airlines has informed Directorate General of Civil Aviation (DGCA) that they do not have a definite timeline yet on the resumption of operations. Go First stopped flying on 3 May.  Meanwhile… [+2231 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Livemint"
      },
      "author": "Livemint",
      "title": "Wipro expands GoogleCloud partnership to advance enterprise adoption of Generative AI | Mint - Mint",
      "description": "Wipro will also train 20,000 associates on Google Cloud’s generative AI technologies",
      "url": "https://www.livemint.com/companies/news/wipro-expands-googlecloud-partnership-to-advance-enterprise-adoption-of-generative-ai-11684839931402.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2023/05/23/600x338/2-0-118582691-Wipro-4C-0_1681805278712_1684842992485.jpg",
      "publishedAt": "2023-05-23T11:56:57Z",
      "content": "IT major Wipro Limited on Tuesday announced an expanded partnership with Google Cloud to bring its advanced generative artificial intelligence (AI) capabilities to clients across the globe.Wipro will… [+1536 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "60,000 IT Sector Contract Workers Lost Jobs In A Year: Recruitment Body - NDTV",
      "description": "Nearly 60,000 outsourced contract workers lost jobs in the information technology sector in the year ending in March as jobs for flexi workers hired through contractors by companies shrank 7.7% from a year earlier, a recruitment body said.",
      "url": "https://www.ndtv.com/india-news/60-000-it-sector-contract-workers-lost-jobs-in-a-year-recruitment-body-4059165",
      "urlToImage": "https://c.ndtvimg.com/2023-05/te9i2te8_it-industry-generic-reuters_625x300_23_May_23.jpg",
      "publishedAt": "2023-05-23T11:29:47Z",
      "content": "Hiring in the manufacturing, logistics, and retail sectors remained strong\r\nNew Delhi: Nearly 60,000 outsourced contract workers lost jobs in the information technology sector in the year ending in M… [+1934 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Dsij.in"
      },
      "author": "Kiran Shroff",
      "title": "Shares below Rs 100: Only buyers were seen in these stocks on May 23 - Dalal Street Investment Journal",
      "description": "On Tuesday, at 03:30 pm, indices were trading flat with the BSE Sensex Index up 0.03 per cent at 61,981.79 and the NSE Nifty-50 Index up 0.18 per cent at 18,348.",
      "url": "https://www.dsij.in/dsijarticledetail/shares-below-rs-100-only-buyers-were-seen-in-these-stocks-on-may-23-30589",
      "urlToImage": "https://www.dsij.in/Portals/0/EasyDNNnews/30589/Low-price-stocks-in-upper-circuit2.jpg",
      "publishedAt": "2023-05-23T11:07:46Z",
      "content": "About 1,775 shares have advanced, 1,733 declined and 116 are unchanged on BSE.  \r\nOn Tuesday, at 03:30 pm, indices were trading flat with the BSE Sensex Index up 0.03 per cent at 61,981.79 and the NS… [+1431 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Livemint"
      },
      "author": "Livemint",
      "title": "Dixon Tech Q4 Results: Net profit rises 27% to ₹80 crore, dividend declared | Mint - Mint",
      "description": "The company's revenue from operations in the January-March quarter stood at  ₹3,065.5 crore, posting a rise of 3.8 per cent, compared to  ₹2,953 crore in the year-ago period.",
      "url": "https://www.livemint.com/market/stock-market-news/dixon-tech-q4-results-net-profit-rises-27-to-rs-80-crore-dividend-declared-11684839220228.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2023/05/23/600x338/EconomyPixabay_1683518454636_1684839457145.jpg",
      "publishedAt": "2023-05-23T11:06:57Z",
      "content": "Dixon Technologies announced its Q4FY23 results on May 23, reporting a net profit of 80.6 crore, registering a growth of 27.7 per cent, compared to 63.1 crore in the corresponding quarter last year. … [+1742 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "Investor Rajiv Jain's GQG Ups Adani Stake By About 10% For $3.5 Billion Bet - NDTV",
      "description": "Mr Jain said the value of GQG's Adani holdings was close to $3.5 billion. He didn't specify which companies he bought into or what part of the investment value came from direct purchases and rallies in Adani shares.",
      "url": "https://www.ndtv.com/india-news/gqgs-jain-raises-adani-stake-by-about-10-for-3-5-billion-bet-4058568",
      "urlToImage": "https://c.ndtvimg.com/2023-02/hn2r84io_rajiv-jain-bloomberg_625x300_22_February_23.jpg",
      "publishedAt": "2023-05-23T11:01:00Z",
      "content": "Mr Jain said the value of GQG's Adani holdings was close to $3.5 billion.\r\nVeteran investor Rajiv Jain's GQG Partners LLC has raised its stake in billionaire Gautam Adani's conglomerate by about 10% … [+2398 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "US vs China: Chip War Escalates as Beijing Bans Micron | Vantage with Palki Sharma - Firstpost",
      "description": "US vs China: Chip War Escalates as Beijing Bans Micron | Vantage with Palki SharmaChina has banned US chipmaker Micron's products. It says Micron's chips pos...",
      "url": "https://www.youtube.com/watch?v=vu7_LD_pJ8g",
      "urlToImage": "https://i.ytimg.com/vi/vu7_LD_pJ8g/maxresdefault.jpg",
      "publishedAt": "2023-05-23T11:00:48Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Moneycontrol"
      },
      "author": "Ameya Joshi",
      "title": "Indian carriers not even carrying half the international traffic from India - Moneycontrol",
      "description": "IndiGo continues to be the largest carrier with a 15.79 percent share in international traffic in Q1 of 2023. It was followed by Air India with 12.6 percent. Emirates, which has been at the forefront of lobbying for more seats to India, was third and carried …",
      "url": "https://www.moneycontrol.com/news/business/indian-carriers-not-even-carrying-half-the-international-traffic-from-india-10646011.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2020/05/flightsaeroplaneflightaviation-770x433.jpg",
      "publishedAt": "2023-05-23T10:54:39Z",
      "content": "Directorate General of Civil Aviation (DGCA) data on international traffic in the January-March quarter of 2023 threw up some interesting numbers. Indian carriers had a share of 43.86 percent of Inte… [+4581 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Vidya Sreedhar",
      "title": "Ashok Leyland Q4 Results: PAT falls 17% YoY to Rs 751 crore, sales rise 33% - The Economic Times",
      "description": "Ashok Leyland, a commercial vehicles manufacturer, recorded a 17% decline YoY in net profit to INR751.41 crore during the March quarter despite reporting a rise in revenue. Raw material expenses contributed significantly to the total expenses, surging to INR8…",
      "url": "https://economictimes.indiatimes.com/markets/stocks/earnings/ashok-leyland-q4-results-pat-falls-17-yoy-to-rs-751-crore-sales-rise-33/articleshow/100446748.cms",
      "urlToImage": "https://img.etimg.com/thumb/msid-100446705,width-1070,height-580,imgsize-35184,overlay-etmarkets/photo.jpg",
      "publishedAt": "2023-05-23T10:35:00Z",
      "content": "MUMBAI - Commercial vehicles maker Ashok Leyland on Tuesday reported a nearly 17% year-on-year (YoY) drop in net profit for the quarter ended March to Rs 751.41 crore, despite a rise in revenue. Tota… [+2671 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Zee Business"
      },
      "author": "ZeeBiz WebTeam",
      "title": "Share Market HIGHLIGHTS: Nifty 2 pts shy of 18,350, Sensex left with 18 pts gain as financial stocks - Zee Business",
      "description": "Share Market HIGHLIGHTS: The S&P BSE Sensex ended flat at 61,982 levels, up 18 points on May 22,",
      "url": "https://www.zeebiz.com/market-news/live-updates-live-updates-nifty-live-sensex-anil-singhvi-india-share-market-q4-results-bpcl-shree-cement-ashok-leland-indiabulls-housing-dixon-tech-dow-live-gold-rate-rupee-dollar-inr-usd-236468",
      "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/05/23/243610-share-market-pti.jpg",
      "publishedAt": "2023-05-23T10:28:10Z",
      "content": "Shares of Kajaria Ceramics rose as much as 1.34 per cent or Rs 16.7 to hit a high of Rs 1,262.9 apiece on the BSE in the early trade on May 23, Tuesday. The stock had hit a 52-week high and low of Rs… [+711 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Prachi Ahluwalia",
      "title": "Simple One electric scooter launched with 212 km range: Price starts at Rs 1.45 lakh - Indiatimes.com",
      "description": "Electric Bike News: Simple Energy has finally launched the Simple One electric scooter at a starting price of Rs 1.45 lakh (ex-showroom, Bengaluru). The Super EV- Simple",
      "url": "https://timesofindia.indiatimes.com/auto/electric-bikes/simple-one-electric-scooter-launched-with-212-km-range-price-starts-at-rs-1-45-lakh/articleshow/100443986.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-100444456,width-1070,height-580,imgsize-1033036,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2023-05-23T09:41:00Z",
      "content": "Maruti Suzuki Jimny India launch next week: Booking amount, specs, features and more"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Bloomberg",
      "title": "Indian banks are set for a profit boost on Rs 2000 notes withdrawal - The Economic Times",
      "description": "The withdrawal of Indias highest-value currency note will boost Indian banks' lending margins by leading to growth in deposits and lowering the cost of funds, according to a note from Axis Mutual Fund, which also suggests the measure could boost deposits by a…",
      "url": "https://economictimes.indiatimes.com/markets/stocks/earnings/indian-banks-are-set-for-a-profit-boost-on-rs-2000-notes-withdrawal/articleshow/100443970.cms",
      "urlToImage": "https://img.etimg.com/thumb/msid-100444553,width-1070,height-580,imgsize-138280,overlay-etmarkets/photo.jpg",
      "publishedAt": "2023-05-23T09:40:00Z",
      "content": "A key metric of profitability for Indian banks, lending margins, is set to get a boost as the nations decision to withdraw its highest-value currency note bolsters bank deposits.The Reserve Bank of I… [+1455 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GaadiWaadi.com"
      },
      "author": "Surendhar M",
      "title": "Maruti Suzuki Jimny Off-Road Test On Tough Terrains - Video - GaadiWaadi.com",
      "description": "Here you can see the off-road test of the Maruti Suzuki Jimny performed by us in Dehradun; market launch on June 6",
      "url": "https://gaadiwaadi.com/maruti-suzuki-jimny-off-road-test-on-tough-terrains-video/",
      "urlToImage": "https://gaadiwaadi.com/wp-content/uploads/2023/05/wjcy5xktmpm.jpg",
      "publishedAt": "2023-05-23T09:38:00Z",
      "content": "Maruti Suzuki India Limited (MSIL) will officially launch the Jimny in the domestic market on June 7, 2023. The lifestyle off-road SUV has a huge following in the international markets and after a lo… [+1869 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Moneycontrol"
      },
      "author": "Haripriya Suresh",
      "title": "Infosys unveils AI-first offering Topaz, sees huge interest from clients - Moneycontrol",
      "description": "Infosys’ efforts in AI come a time when technology demand is slowing down in its major markets such as the US and Europe.",
      "url": "https://www.moneycontrol.com/news/business/infosys-unveils-ai-first-offering-topaz-sees-huge-interest-from-clients-10645231.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/10/Infosys-770x433.jpg",
      "publishedAt": "2023-05-23T09:36:00Z",
      "content": "Software major Infosys on May 23 unveiled Topaz, a new offering that combines data analytics, artificial intelligence, and generative AI, signifying the growing importance of this fast-evolving techn… [+6211 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Moneycontrol"
      },
      "author": "Deepsekhar Choudhury",
      "title": "Deepinder Goyal’s ESOPs cost Zomato Rs 143 crore in second half of FY23 - Moneycontrol",
      "description": "Charges due to Zomato co-founder’s ESOPs accounted for 67.5% of the company’s ESOP costs during the period. Excluding KMPs, all other employees accounted for 26% — or Rs 55 crore — of the total ESOP charges in H2",
      "url": "https://www.moneycontrol.com/news/business/deepinder-goyals-esops-cost-zomato-rs-143-crore-in-second-half-of-fy23-10645221.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/04/Collage-Maker-08-Apr-2023-02-47-PM-4170-770x433.jpg",
      "publishedAt": "2023-05-23T09:26:01Z",
      "content": "Employee stock options (ESOPs) given to Zomato co-founder and CEO Deepinder Goyal cost the company Rs 143 crore in the second half of FY23 even as the company is trying to convince public market inve… [+3748 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "FXStreet"
      },
      "author": "Haresh Menghani",
      "title": "Gold Price Forecast: XAU/USD hangs near monthly low on modest US Dollar strength - FXStreet",
      "description": "Gold price remains under some selling pressure for the second successive day on Tuesday and drops back closer to its lowest level since early April du",
      "url": "https://www.fxstreet.com/news/gold-price-forecast-xau-usd-hangs-near-monthly-low-on-modest-us-dollar-strength-202305230913",
      "urlToImage": "https://editorial.fxstreet.com/images/Markets/Commodities/Metals/Gold/gold-coins-on-a-weight-scale-gm173237086-20246712_Large.jpg",
      "publishedAt": "2023-05-23T09:13:25Z",
      "content": "<ul><li>Gold price drops closer to its lowest level since early April amid modest US Dollar strength.</li><li>A combination of factors keeps the US bond yields elevated and underpins the Greenback.</… [+4085 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CarToq.com"
      },
      "author": "Utkarsh Deshmukh",
      "title": "Petrol pump refuses to accept Rs 2000 note: Makes two wheeler owner empty petrol tank [Video] - CarToq.com",
      "description": "In yet another peculiar move by the Government of India and the Reserve Bank of India, Rs 2000 notes have been instructed to be exchanged or deposited in accounts by September 30th. This sudden announcement, similar to demonetization, has created a commotion …",
      "url": "https://www.cartoq.com/petrol-pump-refuses-to-accept-rs-2000-note-makes-two-wheeler-owner-empty-petrol-tank/",
      "urlToImage": "https://www.cartoq.com/wp-content/uploads/2023/05/petrol-bunk-2000-rupee-note-not-accepted.jpg",
      "publishedAt": "2023-05-23T09:12:38Z",
      "content": "In yet another peculiar move by the Government of India and the Reserve Bank of India, Rs 2000 notes have been instructed to be exchanged or deposited in accounts by September 30th. This sudden annou… [+3204 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Shivendra Kumar",
      "title": "Vedanta Dividend History: How this mining major has rewarded investors over last 6 financial years - The Economic Times",
      "description": "Vedanta announces its first interim dividend of Rs 18.50 per equity share. May 30 has been fixed as the record date with the payout being Rs 6,877 crores. Over the past 5 financial years, Vedanta has paid out Rs 217.65 per share as a total dividend payout to …",
      "url": "https://economictimes.indiatimes.com/markets/stocks/news/vedanta-dividend-history-how-this-mining-major-has-rewarded-investors-over-last-5-financial-years/articleshow/100443659.cms",
      "urlToImage": "https://img.etimg.com/thumb/msid-100443646,width-1070,height-580,imgsize-56840,overlay-etmarkets/photo.jpg",
      "publishedAt": "2023-05-23T09:03:00Z",
      "content": "Mining major Vedanta has announced its first interim dividend of Rs 18.50 per equity share and has fixed May 30 as the record date. The payout by the company towards this will be Rs 6,877 crore, Veda… [+1842 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Livemint"
      },
      "author": "Livemint",
      "title": "BLS International dips after signing visa outsourcing contract with the Spanish government | Mint - Mint",
      "description": "Mid cap company BLS International Services opened today at  ₹177.40 apiece and went on to hit an intraday low of  ₹175.20 logging a dip of 0.31% during Tuesday's trading session.",
      "url": "https://www.livemint.com/companies/news/bls-international-dips-after-signing-visa-outsourcing-contract-with-the-spanish-government-11684832277870.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2023/05/23/600x338/sensex_1661846646875_1684832301652.jpg",
      "publishedAt": "2023-05-23T08:59:55Z",
      "content": "Mid cap company BLS International Services opened today at 177.40 apiece and went on to hit an intraday low of 175.20 logging a dip of 0.31% during Tuesday's trading session. This downward trend occu… [+2504 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Jenni Reid, Holly Ellyatt",
      "title": "Europe stocks lower with deal on U.S. debt ceiling still pending; Julius Baer down 8% - CNBC",
      "description": "European markets opened lower Tuesday as U.S. debt ceiling negotiations continue.",
      "url": "https://www.cnbc.com/2023/05/23/european-markets-live-updates-stocks-news-us-debt-ceiling.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107244974-1684793808072-d.jpg?v=1684815879&w=1920&h=1080",
      "publishedAt": "2023-05-23T08:26:00Z",
      "content": "Treasury Secretary Janet Yellen has just released a new letter to congressional leaders with updated guidance on the earliest date that the U.S. could be at serious risk of a debt default. \r\nThe date… [+1150 chars]"
    }
  ];
  constructor(){
    super();
    console.log("Hello");
    this.state = {
      articles:this.articles,
      loading: false
    };  
  }
  render() {
    return (
      <div>
        <div className="container my-4 ">
        <h2 id="headline" style={{textAlign:"center", marginTop:"70px",color:"white"}}> Top Big News of the Day</h2>
          <div className="row my-5" style={{marginTop:"200px"}} >
            {this.state.articles.map((element)=>{
              let desc = element.description.slice(0,2);
              console.log(desc);
              return <div key={element.url} className="col-md-4 d-flex justify-content-center align-items-center" style={{marginTop:"13vh"}}>
              <Newsitem title={element.title.slice(0,20)} description={element.description.slice(0,99)} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>   
            })}
            </div>
        </div>
       
   </div>
    )
  }
}

export default News