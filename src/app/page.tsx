import Header from "@/app/_component/header";
import About from "@/app/_component/about";
import HomePage from "@/app/_component/home";
import Services from "@/app/_component/services";
import Allothers from "@/app/_component/allothers";

export default function Home() {
  return (
   <main >
     <Header/>
       <HomePage/>
       <About/>
       <Services/>
       <Allothers/>
   </main>
      );
}
