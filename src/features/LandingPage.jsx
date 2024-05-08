import React from "react";
import Card from "@/components/Card";
import { useState } from "react";
import Link from "next/link";
import products from "../../mockData/products";

export default function LandingPage() {
  const [newArrivals, setNewArrivals] = useState(products);
  const handleLike = (event) => {
    const updatedArrival = newArrivals.map((item) =>
      item.id == event.target.id ? { ...item, liked: !item.liked } : item
    );
    setNewArrivals(updatedArrival);
  };
  const d = new Date();
  let year = d.getFullYear();
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
          {newArrivals.map(({ id, img, name, price, isLimited, liked }) => (
            <Card
              key={id}
              id={id}
              img={img}
              name={name}
              price={price}
              isLimited={isLimited}
              liked={liked}
              handleLike={handleLike}
            />
          ))}
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
          <div className="h-full w-full bg-blue-500 flex justify-center items-center bg-no-repeat bg-cover bg-center bg-accessories-img rounded-lg">
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
          <div className="h-full w-full row-span-2 bg-blue-500 flex justify-center items-center bg-no-repeat bg-cover bg-bottom-img grayscale rounded-lg">
            <h2 className="font-bold text-2xl">Bottoms</h2>
          </div>
          <div className="h-full w-full bg-blue-500 flex justify-center items-center bg-no-repeat bg-cover bg-bag-img grayscale bg-center rounded-lg">
            <h2 className="font-bold text-2xl">Bags</h2>
          </div>
        </div>
      </div>
      <div className="h-[110dvh] mt-14 flex justify-center flex-col">
        <div className="mt-40 py-20 w-full bg-center flex items-center justify-center flex-col bg-footer-img bg-cover bg-no-repeat text-white relative">
          <div className="flex items-center flex-col">
            <h2 className="relative z-10 font-bold text-2xl">
              Sign Up to Our Newsletter
            </h2>
            <p className="relative z-10 ">
              Get the Latest Beauty Secrets and Trends. Sign Up for our
              Newsletter and stay informed about all things Beauty
            </p>
          </div>
          <div className="flex relative z-10 gap-10 mt-6">
            <input
              placeHolder="Your Email"
              className="rounded-3xl px-4 text-opacity-100 bg-black opacity-70 text-white w-80 border-gray-500 border-2 placeholder-white"
            />
            <button className="bg-white w-fit text-black px-7 py-2 rounded-3xl justify-self-end">
              <p className="font-medium">Submit</p>
            </button>
          </div>
          <div className="absolute h-full w-full bg-black opacity-60"></div>
        </div>
        <div className="h-full w-full bg-[#121212] px-8 pt-8 pb-1">
          <div className="grid grid-cols-7 w-full justify-between text-white">
            <div className="w-full col-span-2">
              <h1 className="text-5xl font-bold">Jolt</h1>
              <p className="mt-2">
                Experience the Great Outdoors in Style
                <br /> with Jolt's. Shop now and gear up for
                <br /> adventure in Jolt!
              </p>
            </div>
            <div className="grid grid-cols-5 col-span-5">
              <div>
                <h2 className="text-lg">Categories</h2>
                <ul className="mt-2 text-gray-500">
                  <li>
                    <Link href="/">Jackets</Link>
                  </li>
                  <li>
                    <Link href="/">Shirts</Link>
                  </li>
                  <li>
                    <Link href="/">Knit</Link>
                  </li>
                  <li>
                    <Link href="/">T-shirts</Link>
                  </li>
                  <li>
                    <Link href="/">Bottoms</Link>
                  </li>
                  <li>
                    <Link href="/">Accessories</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg">Customer Care</h2>
                <ul className="mt-2 text-gray-500">
                  <li>
                    <Link href="/">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/">Shipping</Link>
                  </li>
                  <li>
                    <Link href="/">Order Status</Link>
                  </li>
                  <li>
                    <Link href="/">Return & Exchange</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg">Company</h2>
                <ul className="mt-2 text-gray-500">
                  <li>
                    <Link href="/">Privacy</Link>
                  </li>
                  <li>
                    <Link href="/">Guides</Link>
                  </li>
                  <li>
                    <Link href="/">Term of Conditions</Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 flex justify-end">
                <ul className="flex gap-5">
                  <li>
                    <Link
                      href="https://web.facebook.com/profile.php?id=100075522342205"
                      target="_blank"
                    >
                      <img src="facebook.svg" className="h-5 w-5" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/no_body.q/"
                      target="_blank"
                    >
                      <img src="instagram.svg" className="h-5 w-5" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/channel/UC6XnMQqZaWOKNE2l1QDu_Bw"
                      target="_blank"
                    >
                      <img src="youtube.svg" className="h-5 w-5" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/No_bodyn" target="_blank">
                      <img src="x.svg" className="h-5 w-5" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-10 pt-4 text-white">
            <p>Call Us On🔹12332476</p>
            <p>USD$ | English</p>
          </div>
          <div className="flex justify-center text-white pt-4">
            ©{year} Jolt Studio, Inc - All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}
