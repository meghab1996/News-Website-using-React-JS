import React, { useEffect,useState } from 'react'


import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

 const [articles, setArticles] = useState([])
 const [loading, setLoading] = useState(true)
 const [page, setPage] = useState(1)
 const [totalResults, setTotalResults] = useState(0)
//  document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)}  - NewMonkey App`
 
 const updateNews= async()=>{
  props.setProgress(10);
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
  
  setLoading(true)
  let data =await fetch(url);
  props.setProgress(70);
  let parsedData = await data.json()
  console.log(parsedData);
  setArticles(parsedData.articles)
  setTotalResults(parsedData.totalResults)
  setLoading(false)
 
  props.setProgress(100);

}


useEffect(() => {
  document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)}  - NewMonkey App`
  updateNews();},[]

)



const handlePreviousClick=async()=>{


setPage(page-1)
updateNews()

}



const handleNextClick= async()=>{


setPage(page+1)
updateNews()
}

const fetchMoreData = async() => {
  setPage(page+1)
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6a68745466a7416ea5a4a727dc86c08a&page=${page+1}&pageSize=${props.pageSize}`
  
  let data =await fetch(url);
  let parsedData = await data.json()
  console.log("fetch more data")
  console.log(parsedData);
  setArticles(articles.concat(parsedData.articles))
  setTotalResults(parsedData.totalResults)
  
};

 


  
    return (
      <>
        <h1 className="text-center" style={{margin:'40px 0px',  marginTop:'70px'}}>News Monkey-Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h1>
        {console.log(loading)}
        {loading && <Spinner/>}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !==totalResults}
            loader={<Spinner/>}
          >
            <div className="container">
        <div className="row my-3">
        { articles.map((ele)=>{
            return <div className="col-md-4" key={ele.url}>
            <NewsItem  title={ele.title?ele.title.slice(0,45):""} description={ele.description?ele.description.slice(0,88):""}
             imageurl={ele.urlToImage?ele.urlToImage:"https://www.xda-developers.com/files/2022/08/CoverScreen-OS-1.jpg"}
             newsurl={ele.url}  author={ele.author} date={ele.publishedAt} source={ele.source.name} bgColor={props.bgColor}/>
            </div>

        })}
        </div>
        </div>
        </InfiniteScroll>
       
      </>
    )
  
}


News.defaultProps = {
  country: 'in',
  pageSize:8,
  category:"sports",
  bgColor:"White"
}

News.propTypes = {
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
  bgColor:PropTypes.string
}

export default News
