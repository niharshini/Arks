import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    property1: {
      options: ["default", "variant-5", "with-arrow", "variant-3", "variant-4"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
    exploreClassName: {},
    text: "EXPLORE",
    arrowSmallRight: "https://c.animaapp.com/1hVqgpfT/img/arrow-small-right-1-3.svg",
  },
};
