import { Icon } from "lucide-react";

import { Icons } from "./ui/icons";

export default function Footer() {
  return (
    <footer>
      <div className="flex h-14 w-full items-center justify-between bg-black text-white">
        <div>{/*spacer*/}</div>
        <section className="w-33 flex h-[35px] flex-row items-center gap-4 border-2 border-white bg-gray-500">
          <a className="pl-2">
            <Icons target="envelope" size="22"></Icons>
          </a>
          <p className="font-[30px]font-bebasneue_bold">CONTACT</p>
        </section>
        <section>
          <p className="">© 2008 CRAFTS inc.</p>
        </section>
        <div>{/*spacer*/}</div>
      </div>
    </footer>
  );
}
