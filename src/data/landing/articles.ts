import {ImageDirection, SectionType} from "../../@types/landing";

const articles: Array<SectionType> = [
  {
    title: "Earth is warming, and we're the cause. ",
    subTitle: "Let's act now to reduce greenhouse gas emissions and protect the planet for future generations.",
    image: "static/images/explore_re_8l4v.svg",
    imageDirection: ImageDirection.LEFT
  },
  {
    title: "Earth is running a fever and the cause is clear ",
    subTitle: "Earth is running a fever and the only prescription is to reduce carbon emissions and embrace renewable energy sources.",
    image: "static/images/friendship_mni7.svg",
    imageDirection: ImageDirection.RIGHT
  },
  {
    title: "Every time we burn fossil fuels.",
    subTitle: "We're adding to the blanket of carbon dioxide that's trapping heat in our atmosphere and causing climate change.",
    image: "static/images/japan_ubgk.svg",
    imageDirection: ImageDirection.LEFT
  },
  {
    title: "Green Plant Initiative",
    subTitle: "Promoting a greener future by empowering individuals and communities to plant, protect, and preserve greenery",
    image: "static/images/nature_m5ll.svg",
    imageDirection: ImageDirection.RIGHT
  }
];

export default articles;
