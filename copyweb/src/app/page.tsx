import Head from "next/head";
import Image from "next/image";
import { Icon } from "lucide-react";

import Corousel from "@/components/corouselholder";
import GraphicPannel from "@/components/graphicspannel";
import NewsPannel from "@/components/newspannel";
import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { PageTopBtn } from "@/components/ui/misc";

import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Corousel maxLength={3} />
      <NewsPannel />
      <GraphicPannel />
      <SingleImage />
      <Map />
      <SNSpage />
    </div>
  );
}

/*
   <NewsPannel />
      <GraphicPannel />
      <SingleImage />
      <Map />
      <SNSpage />
*/

export function SingleImage() {
  return (
    <div className="relative h-[1100px] w-full bg-blue-400">
      <Image src="/images/CraftsSquare.jpeg" alt="image" className="object-cover" fill />
    </div>
  );
}

export function Map() {
  return (
    <div className="relative">
      <div className="relative grayscale">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.35855255661!2d136.9073680763519!3d35.17261495774502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600370d6fc51f1ef%3A0x4f4cd7c1c2fc584f!2z44CSNDYxLTAwMDUg5oSb55-l55yM5ZCN5Y-k5bGL5biC5p2x5Yy65p2x5qGc77yR5LiB55uu77yR77yQ4oiS77yZIOOCouODvOOCr-aghOODl-ODqeOCtuODk-ODq-ODh-OCo-ODs-OCsCA5Zg!5e0!3m2!1sja!2sjp!4v1719979010021!5m2!1sja!2sjp"
          width="100%"
          height="600"
          loading="lazy"
        ></iframe>
      </div>
      <div className="absolute right-1/2 top-4 flex flex-col text-black">
        <p className="text-4xl">ACCESS</p>
        <p className="text-xl">アクセス</p>
      </div>
      <p className="flex- absolute bottom-16 left-1/3 flex gap-1 bg-white text-black">
        〒461-0005 愛知県名古屋市東区東桜1丁目10-9 栄プラザビル9F
      </p>
      <p className="flex- absolute bottom-8 right-1/2 flex gap-1 bg-white text-black">TEL.052-684-6357 / FAX.052-684-6358.</p>
    </div>
  );
}

export function SNSpage() {
  return (
    <div>
      <div className="flex h-48 w-full flex-col justify-between bg-white md:flex-row">
        <div className="white m-auto w-full">
          <div className="relative flex flex-col items-center">
            <div className="font-bebasneue_bold text-[42px]">FOLLOW US ON</div>
            <div className="absolute bottom-0 text-[9px]">最新情報はSNSでチェック</div>
          </div>
        </div>
        <div className="h-full w-1 border-2 border-black opacity-40"></div>
        <div className="m-auto w-full bg-blue-100">
          <div className="flex justify-center">
            <div>{/*Spacer*/}</div>
            <section className="flex gap-12 md:gap-8">
              <a href="https://x.com/CRAFTSinc">
                <Icons target="twitter" size="50"></Icons>
              </a>
              <a href="https://www.facebook.com/atCRAFTS">
                <Icons target="facebook2" size="55"></Icons>
              </a>
              <a href="https://instagram.com/crafts.inc">
                <Icons target="instagram" size="50"></Icons>
              </a>
              <a href="https://www.youtube.com/channel/UCXRfDUI7cdvUlCJszFgwzLA">
                <Icons target="youtube" size="50"></Icons>
              </a>
              <div>{/*Spacer*/}</div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
<p className="inline-block bg-white text-sm">〒461-0005 愛知県名古屋市東区東桜1丁目10-9 栄プラザビル9F</p>
<p className="inline-block bg-white text-sm"></p>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.35855255661!2d136.9073680763519!3d35.17261495774502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600370d6fc51f1ef%3A0x4f4cd7c1c2fc584f!2z44CSNDYxLTAwMDUg5oSb55-l55yM5ZCN5Y-k5bGL5biC5p2x5Yy65p2x5qGc77yR5LiB55uu77yR77yQ4oiS77yZIOOCouODvOOCr-aghOODl-ODqeOCtuODk-ODq-ODh-OCo-ODs-OCsCA5Zg!5e0!3m2!1sja!2sjp!4v1719979010021!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */
// I'm passing map because lack of API-key for google but I think it's made using https://snazzymaps.com/my-maps

/*
so If you used a relative and most of the object you had is an absolute you will need to mostly put relative from now 
 <div className="h-[1100px] w-full bg-blue-400">
        <Image src="/images/CraftsSquare.jpeg" alt="image" className="object-cover" fill />
</div>
    <div className="relative h-[1100px] w-full bg-amber-500">
      <Image src="/images/goji3.gif" alt="image" className="absolute object-cover" fill />
<Image src="/images/goji3.gif" alt="image" className="absolute object-cover" fill />
<div className="h-[1000px] w-full">
        <Image src={"/images/CraftsSquare.jpeg"} alt="image" fill></Image>
      </div>
       <div className="h-[1000px] w-full">
                <Image className="object-cover" src={`/images/1.jpg`} alt="image" fill></Image>
</div>
*/
