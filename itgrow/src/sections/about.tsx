import React from "react";
import camera from "../assets/images/camera.svg";
import award from "../assets/logos/award.svg";
import Image from "next/image";
function About() {
  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto p-3 sm:p-6 md:p-8 flex flex-col jost-font gap-6"
    >
      <div className="flex md:flex-row flex-col items-center gap-8">
        <div className="relative w-[300px] md:w-[400px] h-[300px] lg:h-[500px]">
          {" "}
          <Image
            src={camera}
            alt="Photo 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 flex-1 flex flex-col justify-between h-full p-4">
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-sm md:text-xl lg:text-2xl font-semibold mb-2">
              About Me
            </h1>
            <p className="text-xs font-light text-gray-600 mb-4">
              Capturing Moments, Exploring Worlds, and Crafting Stories
            </p>
            <div className="flex text-xs md:text-sm lg:text-xl flex-col justify-start items-start gap-8 font-normal text-[#11204DB2]">
              <p>
                With a passion for storytelling through lenses, words, and
                scientific discovery, I bring a unique blend of artistry and
                curiosity to every project I undertake. As a photographer,
                zoologist, and writer, I see the world as a canvas filled with
                endless stories waiting to be told.
              </p>
              <p>
                From documenting the beauty of wildlife in its natural habitat
                to crafting compelling narratives, my work is inspired by the
                wonders of nature, human creativity, and the power of
                innovation.
              </p>
              <p>Let’s create something extraordinary together</p>
            </div>
          </div>
          <div className="flex justify-start items-start gap-3 pt-2 mt-2 px-3">
            <div className="relative w-[120px] h-[120px]">
              <Image src={award} alt="Award" objectFit="cover" />{" "}
            </div>

            <div className="flex flex-col justify-start items-start">
              <h1 className="text-[#11204D] font-medium">
                International Photography
              </h1>
              <h1 className="text-[#11204D] font-medium">Awards 2016</h1>
              <p className=" text-[#11204DB2] font-normal text-base">
                Recipient of Excellence in Wildlife and Nature Photography
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
