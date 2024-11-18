"use client";
import React, { useContext, useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import NewsCard from "../components/NewsCard";
import axios from "axios";
import { CategoryContext } from "@/CategoryContext";
import fixNames from "@/utils";

export default function page() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("*"); 
  const { lan, setLan } = useContext(CategoryContext);
  const {sour,setSour} =useContext(CategoryContext)
  const [selectedCard, setSelectedCard] = useState(false)

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }
  const handleCloseModal = () => {
    setSelectedCard(false);
  };

  const fetchEverything = async (searchTerm) => {
    const key = "dc5ab85cd64f44f5abd51c8c10ef366f";
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${searchTerm}&language=${lan}&sources=${sour}&pageSize=60&apiKey=${key}`
    );
    return response.data.articles;
  };


  useEffect(() => {
    try {
      fetchEverything(query).then((data) => {
        setNews(data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [lan, query,sour]);

  const names = [
    "Arabic", "German", "English", "Spanish",
    "French", "Hebrew", "Italian", "Dutch",
    "Norwegian", "Portuguese", "Russian",
    "Swedish", "Urdu", "Chinese"
]



  return (
    <div className="w-full min-h-screen bg-bright-turquoise-950">
      <h1 className="text-bright-turquoise-100 text-center font-semibold text-3xl pt-4">
        Here you can review all the news around the world
      </h1>
      <h2 className="text-yellow-500 font-semibold text-center text-xl pt-4">Language Selected: {fixNames(lan)}</h2>
      <h2 className="text-yellow-500 font-semibold text-center text-xl pt-4">Source Selected: {sour?sour:"no source selected"}</h2>
      
      <SearchInput onSearch={setQuery} />
      <div className="container max-w-screen-xl flex justify-center mx-auto">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-7 px-3">
          {news.map((item, index) => (
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
          ))}
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
  );
}
