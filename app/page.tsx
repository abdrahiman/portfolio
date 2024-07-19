import { ProjectsSection } from "./components/projects";
import { Rammetto_One } from "next/font/google";
import { getGithub, getviews, getwakatime } from "./utils/stats";
import { Header } from "./components/header";
import { Stats } from "./components/stats";

const Rammetto = Rammetto_One({ subsets: ["latin"], weight: "400" });

export default async function Home() {
  const techs = [
    "flutter",
    "python",
    "cpp",
    "sass",
    "react",
    "svelte",
    "nextjs",
    "nestjs",
    "express",
    "tailwindcss",
    "figma",
    "vim",
    "git",
  ];
  let followers, stars, wakatime, views;

  try {
    ({ followers, stars } = await getGithub());
    wakatime = await getwakatime();
    views = await getviews();
  } catch (error) {
    console.error("Error in data fetching:", error);
    // Set default or fallback values
    followers = null;
    stars = null;
    wakatime = "";
    views = "";
  }
  return (
    <>
      <Header font={Rammetto} />
      <ProjectsSection />
      <div className="stats my-12">
        <h2 className={Rammetto.className + " text-lg max-md:text-base mb-4"}>
          Technologies i have used recently
        </h2>
        <div className="flex flex-row gap-4 max-md:gap-2 flex-wrap max-md:scale-90">
          {techs.map(t=>(
            <img key={t} src={"https://skillicons.dev/icons?i="+t} />
          ))}
        </div>
      </div>
      <Stats
        font={Rammetto}
        followers={followers}
        stars={stars}
        wakatime={wakatime}
        views={views}
      />
      <hr className="bg-gradient-to-tl from-purple-700/50 to-rose-400/50 h-[1.8px] border-none" />
      <footer className="flex w-full justify-between item-center text-sm mt-4 max-md:scale-90">
        <p>Devleoped with ❤️ in Morocco.</p>
        <p>copyright © 2024.</p>
      </footer>
    </>
  );
}
