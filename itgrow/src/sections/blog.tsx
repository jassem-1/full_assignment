/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";

type Blog = {
  id: number;
  title: string;
  content: string;
  description: string;
  date: string;
  image: string;
};

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data: Blog[] = await response.json();
        setBlogs(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (error) {
    return <p className="text-red-500">Error loading blogs: {error}</p>;
  }

  return (
    <section
      id="blog"
      className="w-full max-w-5xl mx-auto px-3 sm:p-6 md:p-8 py-16 flex flex-col justify-center items-center jost-font gap-6"
    >
      <h2 className="text-4xl text-center">From The Blog</h2>
      <h3>Stories, Tips, and Inspiration</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
        {isLoading ? (
          <div className="w-full flex justify-center items-center mt-6">
            <div className="loader"></div>
          </div>
        ) : (
          blogs.map((blog) => (
            <div key={blog.id} className="border max-w-72 rounded-lg shadow-md">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-fill rounded-md"
              />
              <div className="flex flex-col justify-center items-start p-6 ">
                <p className="mt-2 text-xs text-gray-500">
                  {new Date(blog.date).toLocaleDateString()}
                </p>
                <p className="mt-2 text-sm text-blue-950">{blog.description}</p>
                <p className="mt-2 text-sm text-gray-600">
                  {blog.content.slice(0, 100)}...
                </p>
                <p className="text-[#6138BD] mt-3 text-xs">Continue Reading</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
