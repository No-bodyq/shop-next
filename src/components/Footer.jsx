import React from "react";
import Link from "next/link";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="h-[110dvh] mt-14 flex justify-center flex-col">
      <div className="mt-40 py-20 w-full bg-center flex items-center justify-center flex-col bg-footer-img bg-cover bg-no-repeat text-white relative">
        <div className="flex items-center flex-col">
          <h2 className="relative z-10 font-bold text-2xl">
            Sign Up to Our Newsletter
          </h2>
          <p className="relative z-10 ">
            Get the Latest Beauty Secrets and Trends. Sign Up for our Newsletter
            and stay informed about all things Beauty
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
  );
}
