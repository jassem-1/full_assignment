/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import comment from "../assets/logos/comment.svg";

type Testimonial = {
  id: number;
  name: string;
  message: string;
  avatarUrl: string;
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/testimonials");
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto p-3 sm:p-6 md:p-8 flex flex-col justify-center items-center jost-font gap-6 mt-32 sm:mt-0">
      <h2 className="text-4xl text-center">Testimonials</h2>
      <h3>Hear what my clients have to say</h3>

      <div className="w-full">
        {isLoading ? (
          <div className="w-full flex justify-center items-center mt-6">
            <div className="loader"></div>
          </div>
        ) : error ? (
          <p className="text-red-500 text-center mt-6">
            Error loading testimonials: {error}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6 mt-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-6 border rounded-lg shadow-md flex justify-center items-center flex-col gap-2"
              >
                <Image src={comment} alt={comment} width={30} height={30} />
                <p className="mt-2 text-sm text-gray-600 text-center">
                  {t.message}
                </p>
                <div className="flex mt-2 gap-2">
                  {[...Array(4)].map((_, index) => (
                    <FaStar key={index} className="text-violet-500" />
                  ))}
                </div>
                <div className="h-24 w-24 rounded-full overflow-hidden">
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-center">
                  {t.name}
                </h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
