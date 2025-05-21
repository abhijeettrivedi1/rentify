"use client"

import Image from 'next/image'
import Nav from "./components/navbar"
import { reviews } from './components/data';
import Review from './components/reviews';
import HowToUse from './components/howtouse';

import Footer from  './components/footer';

export default function App() {
  return (
    <>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Image 
          src="/image.png"
          alt="Example image"
          width={500}
          height={300}
        />
        
        <p style={{ alignContent:'center' ,textAlign: 'center', marginTop: '1.5rem', maxWidth: '700px', fontSize: '1.15rem', lineHeight: '1.7' }}>
          Welcome to our all-in-one rental platform, where flexibility meets trust. Whether you’re looking to rent a camera for a day, a bicycle for a week, or furniture for a month, we’ve got you covered. Our platform allows you to list and rent a wide range of items with complete peace of mind. Every transaction is backed by our assurance policy, ensuring safety, security, and satisfaction for both parties. Start exploring now and experience the freedom of renting—any item, for any duration, anytime.
        </p>
      
      </div>

      <Review/>
      <HowToUse/>
      
      
      
      
    </>
  );
}
