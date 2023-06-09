import Image from "next/image";
import { BadgeCheck } from "lucide-react";

import { Button } from "./ui/button";

const lists = [
  "Self-hostable",
  "No Tracking",
  "No Data Collection",
  "No Analytics",
];
const Brand = () => {
  return (
    <section className="rounded-lg px-5 py-4 bg-slate-50 dark:bg-muted">
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
        M-OAuth
      </h1>
      <div className="grid md:grid-cols-3 items-end">
        <div className="col-span-2 "> 
          <p className="text-md ml-2 text-muted-foreground">
            Generate access tokens for {" "}
            <a
              href="https://akkoma.social/"
              className="text-primary underline-offset-4 hover:underline"
            >
              Akkoma
            </a>
            ,{" "}
            <a
              href="https://pleroma.social/"
              className="text-primary underline-offset-4 hover:underline"
            >
              Pleroma
            </a>
            ,{" "}
            <a
              href="https://joinmastodon.org/"
              className="text-primary underline-offset-4 hover:underline"
            >
              Mastodon
            </a>
            ,{" "}
            {/* <a
              href="https://misskey-hub.net/"
              className="text-primary underline-offset-4 hover:underline"
            >
              Misskey
            </a>{" "} */}
            APIs with ease.
          </p>
          <a href="https://github.com/Sevichecc">
            <Button variant="link" className="rounded-full p-2">
              <Image
                src="/avatar.jpg"
                width="15"
                height="15"
                alt="Github"
                className="mr-2 rounded-full"
              />
              @SevicheCC
            </Button>
          </a>
          <a href="https://github.com/Sevichecc/m-oauth">
            <Button variant="link" className="rounded-full p-2">
              <Image
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
                width="15"
                height="15"
                alt="Github"
                className="mr-2 dark:invert"
              />
              Github
            </Button>
          </a>
          <a href="https://git.kongwoo.icu/SevicheCC/m-oauth">
            <Button variant="link" className="rounded-full p-2">
              <Image
                src="/forgejo.svg"
                width="15"
                height="15"
                alt="Codeberg"
                className="mr-2 dark:invert"
              />
              Forgejo
            </Button>
          </a>
        </div>
          <ul className="flex flex-col gap-2 mb-2 justify-self-end">
            {lists.map((list) => (
              <li className="flex items-center gap-2" key={list}>
                <BadgeCheck className="-mt-[2px] h-5 w-5 stroke-green-600 dark:stroke-green-500" />
                {list}
              </li>
            ))}
          </ul>
      </div>
    </section>
  );
};
export default Brand;
