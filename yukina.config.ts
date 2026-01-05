import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "see you in sekai",
  subTitle: "Rui's Portfolio",
  brandTitle: "Rui",

  description: "CPP IA 1",

  site: "https://rui-portfolio.vercel.app/",

  locale: "en", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/chisachii",
    },
  ],

  username: "@chisachii",
  sign: "the place where dreams begin ☆",
  avatarUrl: "https://i.pinimg.com/736x/a2/cf/c3/a2cfc3703834d4d1f3a31261322a02e1.jpg",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/chisachii",
    },
    {
      icon: "mingcute:linkedin-line",
      link: "https://linkedin.com/in/heidiyungruixuan",
    },
    {
      icon: "mingcute:instagram-line",
      link: "https://www.instagram.com/ruixuannnnn_/",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://static.wikitide.net/projectsekaiwiki/thumb/b/b7/Saki_40_trained_art.png/1920px-Saki_40_trained_art.png",
    "https://static.wikitide.net/projectsekaiwiki/thumb/a/a3/Saki_28_trained_art.png/1920px-Saki_28_trained_art.png",
    "https://static.wikitide.net/projectsekaiwiki/thumb/d/d7/Saki_23_trained_art.png/1920px-Saki_23_trained_art.png",
    "https://static.wikitide.net/projectsekaiwiki/thumb/a/a0/Saki_21_trained_art.png/1920px-Saki_21_trained_art.png",
    "https://static.wikitide.net/projectsekaiwiki/thumb/6/62/Saki_16_trained_art.png/1920px-Saki_16_trained_art.png",
    "https://static.wikitide.net/projectsekaiwiki/thumb/3/30/Saki_10_trained_art.png/1920px-Saki_10_trained_art.png",
    "https://static.wikitide.net/projectsekaiwiki/thumb/e/e0/Saki_9_trained_art.png/1920px-Saki_9_trained_art.png",
    "https://static.wikitide.net/projectsekaiwiki/thumb/4/4a/Saki_41_trained_art.png/1920px-Saki_41_trained_art.png",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
