"use client"
import axios from "axios";
import NewsCard from "./components/NewsCard";
import { useEffect, useState } from "react";

const fetchNews = async () => {
  const key = "fe5750ad7787462bb60c8acb598ae7dc"
  const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=general&apiKey=${key}`)
  return response.data.articles

}


export default function Home() {

  const [news, setNews] = useState([])

  useEffect(() => {
    try {

      fetchNews().then(data => {
        setNews(data)
      })
    } catch (error) {
      console.log(error.message)
    }

  }, [])

console.log(news)

  return (
    <>

      <div className="w-full min-h-screen flex flex-col gap-11 py-5 items-center bg-bright-turquoise-950 ">
        <h1 className="text-3xl text-bright-turquoise-50 font-semibold">
          DESTACADOS DE HOY
        </h1>
        <div className='container max-w-screen-xl flex justify-center mx-auto'>

          <div className=' grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-7 px-3'>
          {news.map((item, index) =>
            <NewsCard
            key={index}
            title = {item.title}
            image = {item?.urlToImage}
            source = {item.source.name}
            description = {item.description}
            url = {item.url}
            />
            )
          }
            
          </div>
        </div>


      </div>
      

    </>
  );
}
