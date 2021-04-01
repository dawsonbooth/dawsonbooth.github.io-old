import { base as preset } from "@theme-ui/presets";
import { merge } from "theme-ui";
import { lighten } from "polished";

export default merge(preset, {
  initialColorModeName: "light",
  colors: {
    text: "#212121",
    background: "#FFFFFF",
    primary: "#E24F47",
    muted: "#FFFFFF",
    modes: {
      dark: {
        text: "#E0DFE4",
        background: "#1D1D1D",
        primary: "#F9826C",
        muted: lighten(0.05, "#1D1D1D"),
      },
    },
  },
  styles: {
    a: {
      textDecoration: "none",
      ":hover": {
        textDecoration: "underline",
      },
    },
    h1: {
      textAlign: "center",
    },
  },
});
