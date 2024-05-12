import React from "react";
import Card from "@/components/Card";
import { useState } from "react";
import products from "../../mockData/products";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const [newArrivals, setNewArrivals] = useState(products);
  const handleLike = (event) => {
    const updatedArrival = newArrivals.map((item) =>
      item.id == event.target.id ? { ...item, liked: !item.liked } : item
    );
    setNewArrivals(updatedArrival);
  };

  return (
    <div className="absolute top-0 w-full font-Montserrat">
      <div className="flex min-h-screen flex-col items-center justify-center p-20 bg-fixed bg-ski-img bg-cover w-full bg-no-repeat relative">
        <div className="relative z-10 flex flex-col gap-2 text-center justify-center items-center pt-20">
          <h1 className="text-white text-6xl font-extrabold">
            Jolt Sport Project
          </h1>
          <p className="text-sm text-white">
            Introducing our latest collection designed specifically for outdoor
            enthusiasts. Features a range of high-
            <br />
            performance outwear with a range of bold and vibrant colors and
            patterns to chose from.
          </p>
        </div>
        <div className="relative z-10 pt-20">
          <button className="bg-white w-fit px-8 py-3 rounded-3xl justify-self-end">
            Shop now
          </button>
        </div>
      </div>
      <div className="absolute h-screen w-full bg-black top-0 opacity-60"></div>
      <div className="h-[150dvh] flex flex-col items-center py-6">
        <h1 className="text-4xl font-normal">New Arrivals</h1>
        <p className="text-sm text-gray-600 pt-1">
          Our new arrivals are built to withstand your activities while keeping
          you looking your best!
        </p>
        <div className="grid grid-cols-4 grid-rows-2 h-full w-full gap-3 p-10">
          {newArrivals.map(
            ({ id, img, name, price, isLimited, liked, rating }) => (
              <Card
                key={id}
                id={id}
                img={img}
                name={name}
                price={price}
                isLimited={isLimited}
                liked={liked}
                handleLike={handleLike}
                rating={rating}
              />
            )
          )}
        </div>
        <div>
          <button className="bg-black text-white px-8 py-3 rounded-2xl">
            See All
          </button>
        </div>
      </div>
      <div className="h-[75dvh] w-full py-6 px-10 grid grid-cols-3 gap-8">
        <div className="h-full w-full col-span-2 rounded-lg  bg-promotion-img bg-cover bg-no-repeat"></div>
        <div className="h-full w-full">
          <h3 className="text-4xl font-medium">
            Find Your Perfect Look at Jolt's Stylish New on Tokyo
          </h3>
          <p className="text-gray-600 py-6">
            Welcome to the newest Jolt outlet in Shibuya, Japan! Step into our
            stylish and trendy score and discover the latest fashion and
            apparel. Come and experience the unique and vibrant atmosphere
          </p>
          <div>
            <h4 className="text-lg font-bold">Come and Enjoy sale!</h4>
            <h2 className="text-7xl font-semibold py-6">50%</h2>
            <button className="bg-black rounded-3xl px-5 py-2 text-white">
              See on Maps
            </button>
          </div>
        </div>
      </div>
      <div className="h-screen py-14 px-10">
        <div className="flex flex-col items-center py-8 mb-2">
          <h1 className="text-4xl font-normal">Feautured Collections</h1>
          <p className="text-sm text-gray-600 pt-1">
            Dare to mix and match! Check our collections to level up your
            fashion game
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 h-full w-full text-white gap-6">
          <div className="h-full w-full flex justify-center items-center bg-shoe-img bg-cover bg-no-repeat bg-center rounded-lg">
            <h2 className="font-bold text-2xl">FootWear</h2>
          </div>
          <div className="h-full w-full row-span-2 bg-jacket-img bg-no-repeat bg-cover bg-center flex justify-center items-center grayscale rounded-lg">
            <h2 className="font-bold text-2xl">Jacket</h2>
          </div>
          <div className="h-full w-full flex justify-center items-center bg-no-repeat bg-cover bg-center bg-accessories-img rounded-lg">
            <h2 className="font-bold text-2xl">Accesories</h2>
          </div>
          <div className="h-full w-full row-span-2 flex flex-col text-center justify-center items-center bg-no-repeat bg-cover bg-headwear-img grayscale rounded-lg">
            <h2 className="font-bold text-2xl">HeadWear</h2>
            <p className="text-sm">
              Check our cool headwear collections.
              <br />
              Get Disc 10% on New Season!
            </p>
            <button className="bg-white text-black rounded-3xl px-5 py-2 mt-10">
              Discover
            </button>
          </div>
          <div className="h-full w-full row-span-2 flex justify-center items-center bg-no-repeat bg-cover bg-bottom-img grayscale rounded-lg">
            <h2 className="font-bold text-2xl">Bottoms</h2>
          </div>
          <div className="h-full w-full flex justify-center items-center bg-no-repeat bg-cover bg-bag-img grayscale bg-center rounded-lg">
            <h2 className="font-bold text-2xl">Bags</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
