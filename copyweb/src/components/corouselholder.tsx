"use client";

import React, { useState } from "react";
import Image from "next/image"; // Ensure you have the correct import for Image component from your library

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import { Icons } from "./ui/icons";

interface corouselProps {
  maxLength: number;
}

export default function Corousel({ maxLength }: corouselProps) {
  const [Index, SetIndex] = useState(0);

  function indexNext(maxLength: number) {
    if (Index < maxLength - 1) {
      SetIndex(Index + 1);
    } else {
      SetIndex(0);
    }
  }

  function indexPrev(maxLength: number) {
    if (Index < 1) {
      SetIndex(maxLength - 1);
    } else {
      SetIndex(Index - 1);
    }
  }

  function f_SetIndex(target: number) {
    SetIndex(target);
  }

  // I'm trying this to return bool
  function ifSelected(target: number) {
    if (Index === target) {
      return true;
    } else {
      return false;
    }
  }
  const a = () => {
    alert("yay");
  };

  return (
    <Carousel className="relative">
      <CarouselContent>
        <CarouselItem>
          <button onClick={() => indexNext(3)} className="absolute right-5 top-1/2 z-20 rounded-full bg-gray-600 font-black text-gray-400">
            <Icons target="sharpchevright" size="32"></Icons>
          </button>
          <button onClick={() => indexPrev(3)} className="absolute left-10 top-1/2 z-20 rounded-full bg-gray-600 font-black text-gray-400">
            <Icons target="sharpchevleft" size="32"></Icons>
          </button>

          <div className="absolute bottom-1 left-1/2 z-20">
            <div className="flex -translate-x-64 gap-1">
              <button
                onClick={() => f_SetIndex(0)}
                className={cn("pl-20 text-gray-700 opacity-80 hover:text-gray-200", ifSelected(0) ? "text-white" : "text-gray-700")}
              >
                <Icons target="line" size="100"></Icons>
              </button>
              <button
                onClick={() => f_SetIndex(1)}
                className={cn("text-gray-700 opacity-80 hover:text-gray-200", ifSelected(1) ? "text-white" : "text-gray-700")}
              >
                <Icons target="line" size="100"></Icons>
              </button>
              <button
                onClick={() => f_SetIndex(2)}
                className={cn("pr-20 text-gray-700 opacity-80 hover:text-gray-200", ifSelected(2) ? "text-white" : "text-gray-700")}
              >
                <Icons target="line" size="100"></Icons>
              </button>
            </div>
          </div>
          <div className="h-[1000px] w-full">
            <Image className="object-cover" src={"/images/corousel/" + Index + ".jpg"} alt="image" fill></Image>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
function currentIndex() {
  return <div></div>;
}

// it should work by the left-1/2 but I think there are magic number it moving to not mid so I just add translate it lil bit more after moved to the mid

//<a data-slide="prev" href="#mogo-slider" class="left carousel-control-left no-decoration hidden-xs"><i class="fa fa-chevron-left"></i></a>
/*
      <div className="h-[1000px] w-full">
              <Image className="object-cover" src={"/images/corousel/" + index.toString() + ".jpg"} alt="image" fill></Image>
            </div>    
*/
//Archive
/*
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="h-[1000px] w-full">
                <Image className="object-cover" src={"/images/" + index + ".jpg"} alt="image" fill></Image>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
*/
/*
 h-[1200px]
   <div className="h={200} w-full">
    <Image src={/images/${index}.jpg} alt="image" fill />
  </div>
// fit don't work it shows no error but shows nothing
<img src={"/images/" + index + ".jpg"} alt="image" ></img>
<img src={"/images/" + index + ".jpg"} className="" alt="image" /><></>
<Image src="/images/goji3.gif" alt="image" className="absolute object-cover" fill />
*/
