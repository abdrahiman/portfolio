import { getAnalytics } from "./umami";

export let getGithub = async () => {
  try {
    const me = await fetch("https://api.github.com/users/abdrahiman");
    const repos = await fetch(
      "https://api.github.com/users/abdrahiman/repos?per_page=100"
    );

    const meJson = await me.json();
    const reposJson = await repos.json();
    const mine = reposJson?.filter((repo: any) => !repo?.fork);
    const stars = mine?.reduce(
      (acc: any, curr: any) => acc + curr?.stargazers_count,
      0
    );
    return { followers: meJson?.followers, stars };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return { followers: null, stars: null };
  }
};

export let getwakatime = async () => {
  try {
    const resp = await fetch(
      "https://wakatime.com/api/v1/users/current/all_time_since_today",
      {
        headers: {
          Authorization: `Basic ${process.env.WAKATIME_KEY || ""}`,
        },
      }
    );
    const response: any = await resp.json();
    return response?.data?.text || "";
  } catch (error) {
    console.error("Error fetching Wakatime data:", error);
    return "";
  }
};

export let getviews = async () => {
  try {
    const resp = await getAnalytics();

    return resp || "";
  } catch (error) {
    console.error("Error fetching or updating views data:", error);
    return "";
  }
};
