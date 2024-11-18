"use client"
import axios from "axios";
import NewsCard from "./components/NewsCard";
import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "@/CategoryContext";



export default function Home() {

  const [news, setNews] = useState([])
  const { category, setCategory } = useContext(CategoryContext)
  const [selectedCard, setSelectedCard] = useState(false)

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }
  const handleCloseModal = () => {
    setSelectedCard(false);
  };

  const fetchNews = async () => {
    const key = "dc5ab85cd64f44f5abd51c8c10ef366f"
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${key}`)
    return response.data.articles

  }

  useEffect(() => {
    try {

      fetchNews().then(data => {
        setNews(data)
      })
    } catch (error) {
      console.log(error.message)
    }

  }, [category])

  
  return (
    <>

      <div className="w-full min-h-screen flex flex-col gap-11 py-5 items-center bg-bright-turquoise-950 ">
        <h1 className="text-3xl text-center text-bright-turquoise-50 font-semibold">
          TOP NEWS ABOUT: <br />
          {category.toUpperCase()}
        </h1>
        <div className='container max-w-screen-xl flex justify-center mx-auto'>

          <div className=' grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-7 px-3'>
            {news.map((item, index) =>

              <NewsCard
                key={index}
                title={item.title}
                image={item?.urlToImage}
                source={item.source.name}
                description={item.description}
                url={item.url}
                item={item}
                handleCardClick={handleCardClick}
                selectedCard={selectedCard}
              />

            )

            }

          </div>
        </div>
        {selectedCard &&
          <div className="fixed  inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-bright-turquoise-100 p-5 rounded-lg  md:max-w-4xl  md:flex md:flex-col md:items-center">

              <NewsCard
                title={selectedCard.title}
                image={selectedCard.urlToImage}
                source={selectedCard.source.name}
                description={selectedCard.description}
                url={selectedCard.url}
                classname="md:max-w-none md:w-4/5"
              />

              <button
                className="mt-4 bg-red-500 mx-auto flex text-white p-2 rounded"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>

          </div>

        }


      </div>


    </>
  );
}
