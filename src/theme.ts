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
        text: "#E0DFE4",
        background: "#1D1D1D",
        primary: "#F9826C",
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
