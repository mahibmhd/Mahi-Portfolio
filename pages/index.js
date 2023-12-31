import Head from 'next/head';
import { Inter } from 'next/font/google';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { useState } from "react";
import { Container } from "postcss";
import mahdev from "public/mahdev.png";
import { useSpring } from 'react-spring';
import DownloadLink from '/components/Download';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>

      <Head>
        <title>Mahlet Demeke Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className=" font-burtons text-xs">developedbymahi</h1>
            <ul className="flex pr-20">
              <li className="font-bold text-xl px-3 hover:text-[#52c1b4] hover:border-b-4 border-white duration-300 ease-linear cursor-pointer"> Home</li>
              <li className="font-bold text-xl px-3 hover:text-[#52c1b4] hover:border-b-4 border-white duration-300 ease-linear cursor-pointer">About</li>
              <li className="font-bold text-xl px-3 hover:text-[#52c1b4] hover:border-b-4 border-white duration-300 ease-linear cursor-pointer">Services</li>
              <li className="font-bold text-xl px-3 hover:text-[#52c1b4] hover:border-b-4 border-white duration-300 ease-linear cursor-pointer">Contact</li>
            </ul>
            <ul className="flex items-start">
              <li>
                < BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <div className=" text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-white md:text-3xl cursor-pointer hover:[#52c1b4]">
              Mahlet Demeke
            </h2>
            <h3 className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content needs. Join me down below and let's get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillGithub className=" hover:text-gray-900 cursor-pointer" onClick={() => window.open("https://github.com/mahibmhd")} />
              <AiFillTwitterCircle className=" hover:text-gray-900 cursor-pointer" onClick={() => window.open("https://twitter.com/MahletDemeke6")} />
              <AiFillLinkedin className="hover:text-white cursor-pointer" onClick={() => window.open("https://linkedin.com/in/mahlet-demeke-271ab7230")} />
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden mt-20 ">
               {/* <img src={mahdev.src} width={350} height={200}  />  */}
              {/* <Image 
          src={mahdev}
          style={{
            objectFit:"cover" ,
            layout:"fill"
          }}
          /> */}
           {/* <img src={mahdev.src}
           width={350}
           height={200}
           style={{
            objectFit:"cover",
            layout:"fill"
           }} /> */}
           
            </div>
          </div>
          <div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
          {/* <div>
          <DownloadLink> Download Resume</DownloadLink>
          </div> */}
           


        
        
      <a href="../public/documents/Mahi's_CV.pdf" download className=" flex-initial bg-teal-700 text-white hover:text-gray-300 py-2 px-4 rounded">
        Download Resume
      </a>

          </div>
          <div className="lg:flex gap-20">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10  dark:bg-white flex-1">
              <h3 className="text-lg font-bold pt-8 pb-2 text-blue-900 ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Adobe Creative</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 justify-self-start py-1">Canva</p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1">
              <h3 className="text-lg font-bold pt-8 pb-2 text-blue-900 ">
                Code your dream Project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600"> Languages I Use</h4>
              <p className="text-gray-800 py-1">JavaScript, ReactTailwind</p>
              <p className="text-gray-800 py-1">NodeJs, Spring Boot</p>
              <p className="text-gray-800 py-1">C#</p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1">
              <h3 className="text-lg font-bold pt-8 pb-2  text-blue-900">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
            </div>
          </div>
        </section>
        <section className="py-40">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use. I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-blue-300 ">
            I offer from a wide range of services, including brand design, programming and teaching.
            </p>
            <p className=" text-center leading-8 dark:text-gray-200 pt-36 font-mono text-lg mb-10">
              "Copyright ©2023 All rights reserved | This Website is made by Mahlet Demeke "
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
