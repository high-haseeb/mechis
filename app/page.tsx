import Navbar from "@/components/Logo";
import First from "@/components/sections/First"
import Seconed from "@/components/sections/Seconed"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="overflow-hidden p-0 m-0 w-screen">
      <Navbar />
      <First/>
      <Seconed/>
      <Footer/>
    </main>
  );
}
