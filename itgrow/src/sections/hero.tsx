"use client";

import React, { useEffect } from "react";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";
import Image from "next/image";
import pic1 from "../assets/images/1.png";
import pic2 from "../assets/images/2.png";
import pic3 from "../assets/images/3.png";
import pic4 from "../assets/images/4.png";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

declare global {
  interface JQuery {
    owlCarousel(options?: OwlCarouselOptions): JQuery;
  }

  interface OwlCarouselOptions {
    loop?: boolean;
    margin?: number;
    nav?: boolean;
    autoplay?: boolean;
    autoplayTimeout?: number;
    responsive?: {
      [key: number]: {
        items: number;
      };
    };
  }
}

function Hero() {
  useEffect(() => {
    // Initialize Owl Carousel
    $(".owl-carousel").owlCarousel({
      loop: true, // Enable infinite looping
      margin: 15, // Set space between items
      nav: false, // Show navigation arrows
      dots: false, // Hide pagination dots
      autoplay: true, // Enable autoplay
      autoplayTimeout: 1000, // Set autoplay delay to 3 seconds
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
      },
    });
  }, []);

  return (
    <section
      id="home"
      className="w-full max-w-5xl mx-auto p-3 sm:p-6 md:p-8 flex flex-col jost-font gap-6"
    >
      <div className="flex md:flex-row flex-col justify-center items-start w-full gap-6 p-4">
        <div className="p-2 text-left">
          <h1 className="text-4xl md:text-6xl font-light mb-4">
            Hello
            <br />
            I’m{" "}
            <span className="text-violet-950 font-semibold">Alycia Carey</span>
          </h1>
          <p className="text-2xl flex flex-col justify-start items-start gap-2 font-medium">
            <span className="text-[#6138BD]">Photographer</span>
            <span className="text-[#6038bdd5]">Zoologist</span>
            <span className="text-[#7638bd94]">Writer</span>
          </p>
        </div>

        <div className="w-full md:w-1/2  ">
          <div className="owl-carousel owl-theme ">
            <div>
              <Image src={pic1} alt="Photo 1" width={500} height={500} />
            </div>
            <div>
              <Image src={pic2} alt="Photo 2" width={500} height={500} />
            </div>
            <div>
              <Image src={pic3} alt="Photo 3" width={500} height={500} />
            </div>
            <div>
              <Image src={pic4} alt="Photo 4" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 flex flex-col justify-start items-start gap-2">
        <p className="text-xl font-light p-2">
          I help our clients create <span className="font-medium">brands</span>,
          build digital <span className="font-medium">products</span> and{" "}
          <span className="font-medium">services</span>, innovate, find
          opportunities and validate ideas.
        </p>
        <div className="flex justify-start items-center gap-3">
          <p className="">Follow me on</p>
          <div className=" pl-5 border-t border-gray-500 flex w-20"></div>
          <div className="flex space-x-4">
            <div className="border p-2 rounded-xl border-gray-300">
              <AiFillInstagram className="text-xl cursor-pointer" />
            </div>{" "}
            <div className="border p-2 rounded-xl border-gray-300">
              <FaFacebook className="text-xl cursor-pointer" />{" "}
            </div>
            <div className="border p-2 rounded-xl border-gray-300">
              <FaLinkedinIn className="text-xl cursor-pointer" />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
