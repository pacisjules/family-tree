import React from 'react';
import ContentSlider from '@/app/components/ContentSlider';
import Link from 'next/link';

const slidesData = [
    {
      image: 'https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg',
      title: 'Get Free Account!',
      description: 'Your free account lets you start a tree, search for family records, and more.',
    },
    {
      image: 'https://www.w3schools.com/w3css/img_lights.jpg',
      title: 'Family Access',
      description: 'Your free account lets you start a tree, search for family records, and more. Give us a little info about your family, so we can help you learn more',
    },

    {
        image: 'https://www.w3schools.com/w3css/img_lights.jpg',
        title: 'Iyali',
        description: 'Your free account lets you start a tree, search for family records, and more.Give us a little info about your family, so we can help you learn moreDiscover new Iyali to see how far back your family goes',
      },


      {
        image: 'https://www.w3schools.com/w3css/img_lights.jpg',
        title: 'Iyali',
        description: 'Your free account lets you start a tree, search for family records, and more. Give us a little info about your family, so we can help you learn moreDiscover new Iyali to see how far back your family goesGet hints to help you learn your Iyali stories',
      },
    // Add more slides as needed
  ];


const Intro = () => {
    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column"
        }}>
            <ContentSlider slides={slidesData} />
            <br/>

                <Link href={"/questionnaire/AddNames"}>
                <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-1.5 px-6 rounded-sm transition-all mr-5 w-60 h-16">
                 Get Started.
                </button>
                </Link>
        </div>
    );
}

export default Intro;
