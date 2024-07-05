"use client";

import Image from "next/image";
import { Ghost } from "lucide-react";

import { Button } from "./ui/button";

export default function GraphicPannel() {
  function a() {
    alert("pressed");
  }

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative h-[1200px] w-full bg-amber-500">
      <Image src="/images/goji3.gif" alt="image" className="object-cover" fill />
      <Image src="/images/cov.png" alt="image" className="object-cover" fill />
      <div className="absolute right-1/2 top-12 text-white">
        <a className="font-bebasneue_bold text-[36px] font-bold">COMPUTER GRAPHICS</a>
        <a className="absolute left-16 top-11 text-[13px]">CG制作事業</a>
        <Button
          variant={"ghost"}
          onClick={scrollTop}
          className="font-bebasneue_bold absolute left-5 top-[480px] w-[200px] text-[40px] text-xl text-white hover:bg-transparent hover:text-white"
        >
          VIEW OUR SHOW REEL
        </Button>
        <a href="https://www.youtube.com/channel/UCXRfDUI7cdvUlCJszFgwzLA">
          <Image className="absolute left-[50px] top-[200px]" src={`/images/youtube.png`} alt="image" width={150} height={150}></Image>
        </a>
      </div>
      <div className="absolute left-1/4 top-[700px] flex space-x-10 text-white">
        <div className="">
          <h3 className="text-xl">CG•VFX制作の力で多くの人に夢と感動を。</h3>
          <br />
          <p className="min-w-10 overflow-auto">
            ゲーム、映画、広告、遊技機などの CG・VFX 制作の企画・制作を行っています。
            <br />
            創業以来 9 年間、様々な CG 制作、VFX 制作に関わる事によって
            <br />
            様々なコンテンツに適した制作 ・開発をご提供させて頂きます。
          </p>
          <br />
          <a className="text-blue-700 hover:text-black" href="https://www.at-crafts.com/services#service-cg">
            クラフツのCG制作事業について詳しく
          </a>
        </div>
        <Image className="rounded-sm border-4 border-neutral-300" src={`/images/gojimesh.jpg`} alt="image" width={300} height={100}></Image>
      </div>
    </div>
  );
}

// 元々、　ghost ボタンに、設定があり、、面倒の為。触れているときも白にした編集
