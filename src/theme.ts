export const initialColorModeName = "lite";

export const colors = {
  text: "#000",
  background: "#fff",
  primary: "#33e",
  secondary: "#a0c",
  accent: "#f0a",
  muted: "#f6f6ff",
  gray: "#444",
  lightgray: "#cfcfd3",
  modes: {
    dark: {
      text: "#fff",
      background: "#000",
      primary: "#0ff",
      secondary: "#b0f",
      accent: "#f0b",
      muted: "#111",
      gray: "#999",
      lightgray: "#444",
    },
    atlassian: {
      text: "#172B4D",
      background: "#FFFFFF",
      primary: "#0052CC",
      secondary: "#00B8D9",
      accent: "#6554C0",
      muted: "#091E42",
      gray: "#5E6C84",
      lightgray: "#B3BAC5",
    },
    eva: {
      text: "#FFFFFF",
      background: "#222B45",
      primary: "#3366FF",
      secondary: "#37A0FC",
      accent: "#6CD824",
      muted: "#091A7A",
      gray: "#CDD6E3",
      lightgray: "#EDF1F7",
    },
    gray: {
      text: "#fff",
      background: "hsl(270, 30%, 14%)",
      primary: "hsl(180, 100%, 60%)",
      secondary: "hsl(270, 100%, 60%)",
      accent: "hsl(300, 100%, 60%)",
      muted: "hsl(270, 50%, 8%)",
      gray: "hsl(270, 50%, 70%)",
      lightgray: "hsl(270, 50%, 30%)",
    },
    hack: {
      text: "hsl(120, 100%, 75%)",
      background: "hsl(120, 20%, 10%)",
      primary: "hsl(120, 100%, 40%)",
      secondary: "hsl(120, 50%, 40%)",
      accent: "hsl(120, 100%, 90%)",
      muted: "hsl(120, 20%, 7%)",
      gray: "hsl(120, 20%, 40%)",
      lightgray: "hsl(120, 20%, 20%)",
    },
    pink: {
      text: "hsl(350, 80%, 10%)",
      background: "hsl(350, 100%, 90%)",
      primary: "hsl(350, 100%, 50%)",
      secondary: "hsl(280, 100%, 50%)",
      accent: "hsl(280, 100%, 20%)",
      muted: "hsl(350, 100%, 88%)",
      gray: "hsl(350, 40%, 50%)",
      lightgray: "hsl(350, 60%, 80%)",
    },
  },
};

export const variants = {
  nav: {
    margin: 5
  },
};

export default {
  initialColorModeName,
  colors,
  variants,
};
