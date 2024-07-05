import { Button } from "@/components/ui/button";

export default function NewsPannel() {
  return (
    <>
      <div className="relative">
        <div className="bg-white">
          <div className="flex justify-center">
            <div className="flex flex-col">
              <h1 className="text-center text-black">NEWS</h1>
              <p className="text-black">ニュース</p>
            </div>
          </div>
          <section className="mx-30 relative mx-20 flex justify-center">
            <div></div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <News path="01" date="UPDATE:2020.08.18" title="新型コロナウイルスに対する当面の弊社取り組みについてのご案内"></News>
              <News path="02" date="UPDATE:2017.10.23" title="制作実績更新 METoA VISION「Into the future」"></News>
              <News path="03" date="UPDATE:2017.10.23" title="製作実績更新　映画『土竜の唄 香港狂騒曲』"></News>
              <News path="04" date="UPDATE:2017.10.23" title="制作実績更新　RedAsh -GEARWORLD-"></News>
              <News path="05" date="UPDATE:2017.10.23" title="制作実績更新　CRコブラ〜追憶のシンフォニア〜"></News>
              <News path="06" date="UPDATE:2017.10.23" title="制作実績更新　『LORD of VERMILION Re:3』"></News>
            </div>
            <div></div>
          </section>
          <div className="flex justify-center">
            <div className="flex flex-col p-10">
              <MyBtn></MyBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface newsProps {
  path: string;
  date?: string;
  title?: string;
}

export function News({ path, date, title }: newsProps) {
  console.log("/images/news/" + path + ".jpg");

  return (
    <div className="bg-white">
      <div className="group relative h-[150px] w-[300px] overflow-hidden bg-blue-200">
        <div className="absolute bottom-0 flex h-full w-full translate-y-full transform items-center justify-center bg-black text-white opacity-50 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
          +
        </div>
      </div>
    </div>
  );
}

function MyBtn() {
  return (
    <Button variant={"ghost"} className="w-[200px] border-2 border-gray-100 text-gray-900 hover:bg-gray-300 hover:text-white">
      More
    </Button>
  );
}

/*
 <div className="relative">
          <img src={"/images/news/" + path + ".jpg"} className="h-auto w-full transition-all duration-300 hover:scale-90" alt="image" />
       </div>

          <div className="absolute top-0 z-10 h-[200px] w-full overflow-hidden bg-black opacity-100 hover:opacity-0"></div>
       
*/

/*
    <div className="bg-white">
      <div className="w-[100px] h-[100px] bg-blue-200 relative overflow-hidden group">
        <div className="absolute bottom-0 w-full h-full bg-black opacity-50 text-white flex items-center justify-center transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
          +
        </div>
      </div>
    </div>
 */

// prev Code //
/*
     <div className="h-50 w-[340] overflow-hidden bg-white">
      <div className="relative flex flex-col">
        <div className="">
          <img src={"/images/news/" + path + ".jpg"} className="h-[200px] w-full" alt="image" />
          <div className="absolute bottom-0 flex h-full w-full translate-y-full transform items-center justify-center bg-black text-white opacity-50 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
            +
          </div>
        </div>
        <div />
        <p className="bg-white font-TrebuchetMSRegular text-[12px] font-bold text-gray-500">{date}</p>
        <p className="line-clamp-1 overflow-hidden text-ellipsis bg-white text-xl font-extrabold">{title}</p>
      </div>
    </div>
    */
