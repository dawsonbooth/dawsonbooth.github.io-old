import { base as preset } from "@theme-ui/presets";
import { merge } from "theme-ui";

export default merge(preset, {
  initialColorModeName: "light",
  colors: {
    text: "#212121",
    background: "#FFFFFF",
    primary: "#E24F47",
    modes: {
      dark: {
        text: "#C8D1D9",
        background: "#0D1117",
        primary: "#D2A8FF",
      },
      deep: {
        text: "#F0F5F9",
        background: "#232639",
        primary: "#EE9AFF",
      },
    },
  },
  cards: {
    primary: {
      border: "1px solid",
      borderColor: "text",
    },
  },
  styles: {
    a: {
      textDecoration: "none",
      ":hover": {
        textDecoration: "underline",
      },
    },
  },
});
