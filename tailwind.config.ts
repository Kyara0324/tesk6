import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src-app/**/*.{js,ts,jsx,tsx}", // 경로를 프로젝트 구조에 맞게 수정
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
