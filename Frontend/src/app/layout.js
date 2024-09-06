
// import { Cabin } from "next/font/google";
import {Archivo} from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import Navbar from "./_components/navbar";


const cabin = Archivo({ subsets: ["latin"] });


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">

        <body className={cabin.className}>
          <Navbar/>
          
       <>{children} </> 
        <Footer/>
        </body>
    </html>
  );
}
