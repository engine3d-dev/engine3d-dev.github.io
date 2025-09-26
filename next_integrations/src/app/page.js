import Image from "next/image";
import Hero from './components/sections/hero';
import Basic from './components/sections/basic';
import Nav from './components/nav'

export default function Home() {
  return (
    <div className="">
        <Nav/>
        <Hero/>
        <Basic/>
    </div>
  );
}
