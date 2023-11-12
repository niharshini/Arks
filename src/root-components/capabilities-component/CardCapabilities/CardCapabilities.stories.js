import { CardCapabilities } from ".";

export default {
  title: "Components/CardCapabilities",
  component: CardCapabilities,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
  },
};
