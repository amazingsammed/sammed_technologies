import Header from "@/app/_component/header";
import About from "@/app/_component/about";
import HomePage from "@/app/_component/home";
import Services from "@/app/_component/services";
import Allothers from "@/app/_component/allothers";
import Portfolio from "@/app/_component/portfolio";
import Clients from "@/app/_component/clients";
import Myfooter from "@/app/_component/myfooter";
import Ourteam from "@/app/_component/ourteam";

export default function Home() {
  return (
   <div >
     <Header/>
       <HomePage/>
       <About/>
       <Services/>
       <Portfolio/>
       <Clients/>
       <Ourteam/>
       <Allothers/>
       <Myfooter/>
   </div>
      );
}
