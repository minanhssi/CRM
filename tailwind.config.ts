import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        display: ["Montserrat", "Roboto", "sans-serif"],
      },
      boxShadow: {
        "landing-md": "0 2px 4px -1px rgba(0,0,0,0.06), 0 4px 6px -1px rgba(0,0,0,0.10)",
        "landing-lg": "0 4px 6px -2px rgba(0,0,0,0.05), 0 10px 15px -3px rgba(0,0,0,0.10)",
        "landing-xl": "0 10px 10px -5px rgba(0,0,0,0.04), 0 20px 25px -5px rgba(0,0,0,0.10)",
      },
      colors: {
        landing: {
          bg: "#f8fbff",
          surface: "#ffffff",
          ink: "#1f1f1f",
          "primary-50": "#eff5fe",
          "primary-200": "#bbcae1",
          "primary-400": "#5c7dae",
          "primary-500": "#204983",
          "primary-600": "#1a3a69",
          "secondary-100": "#feefe5",
          "secondary-400": "#f88533",
          "secondary-500": "#f66600",
          "secondary-600": "#c55200",
          "yellow-300": "#ffcb2e",
          "yellow-400": "#ffbf00",
          line: "#e7edf5",
        },
        brand: {
          primary: "#0092FF",
          interaction: "#108EE9",
          action: "#204983",
          "action-hover": "#1a3a69",
          "action-soft": "#eff5fe",
        },
        blue: {
          1: "#F0F5FF", 2: "#D2E0FA", 3: "#ADD2FF", 4: "#8CC8FF",
          5: "#40A9FF", 6: "#1890FF", 7: "#096DD9", 8: "#0050B3",
          9: "#003A8C", 10: "#002766",
        },
        red: {
          1: "#FFF1F0", 2: "#FFCCC7", 3: "#FFA39E", 4: "#FF7875",
          5: "#FF4D4F", 6: "#F5222D", 7: "#CF1322",
        },
        green: {
          1: "#F6FFED", 2: "#D9F7BE", 3: "#B7EB8F", 4: "#95DE64",
          5: "#73D13D", 6: "#52C41A", 7: "#389E0D",
        },
        gold: {
          1: "#FFFBE6", 2: "#FFF1B8", 3: "#FFE58F", 4: "#FFD666",
          5: "#FFC53D", 6: "#FAAD14", 7: "#D48806",
        },
        orange: {
          1: "#FFF7E6", 2: "#FFD8BF", 3: "#FFBB96", 4: "#FF9C6E",
          5: "#FF7A45", 6: "#FA541C", 7: "#D4380D",
        },
        purple: {
          1: "#F9F0FF", 2: "#EBD7FA", 3: "#D3ADF7", 4: "#B37FEB",
          5: "#9254DE", 6: "#722ED1",
        },
        gray: {
          1: "#FFFFFF", 2: "#FAFAFA", 3: "#F5F5F5", 4: "#F0F0F0",
          5: "#D9D9D9", 6: "#BFBFBF", 7: "#8C8C8C", 8: "#595959",
          9: "#434343", 10: "#262626", 11: "#141414", 12: "#000000",
        },
        sidebar: { bg: "#1a3a5c", active: "#2a4f7a", hover: "#234872" },
      },
    },
  },
  plugins: [],
};

export default config;
