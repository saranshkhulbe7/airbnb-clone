import React from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";

function Banner() {
  return (
    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[900px]">
      <Image
        src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        layout="fill"
        objectFit="cover"
      />
      <Fade bottom>
        <div className="absolute top-1/2 w-full text-center">
          <p className="text-sm sm:text-xl">Not Sure where to go? Perfect.</p>
          <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
            I'm flexible
          </button>
        </div>
      </Fade>
    </div>
  );
}

export default Banner;
