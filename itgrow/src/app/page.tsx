import { redirect } from "next/navigation";
import { auth } from "../../auth";
import Navbar from "@/components/navbar";
import Hero from "@/sections/hero";
import About from "@/sections/about";
import Offer from "@/sections/offer";
import Testimonials from "@/sections/testimonial";
import Blogs from "@/sections/blog";
import MyWork from "@/sections/mywork";
import Plans from "@/sections/plans";
import Contact from "@/sections/contact";

export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen w-full justify-center bg-white flex">
      <Navbar isLoggedIn={!!session} />
      <div className="w-full flex-col flex justify-center pt-16">
        <Hero />
        <div className="bg-[#F7F8FA]">
          <About />
        </div>
        <Offer />
        <Testimonials />
        <MyWork />
        <Plans />
        <Blogs />
        <div className="bg-[#11204D]">
          <Contact />
        </div>
      </div>
    </main>
  );
}
