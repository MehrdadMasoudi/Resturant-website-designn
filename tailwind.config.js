module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        slidein: {
          "100%" : {transform: "translatex(0%)"}
        }
      },
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        darkpink: "hsl(2deg 17% 28%)",
        darkViolet: "hsl(257, 27%, 26%)",
        pinkyRed: "hsl(2deg 28% 40%)",
        red: "hsl(0, 87%, 67%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%) ",
        darkBlue: "hsl(249deg 19% 14%)",
        darkBlue1: "hsl(229deg 19% 18%)",
        darkBlue2: "hsl(216, 53%, 9%)",
        darkBlue3: "hsl(219, 30%, 18%)",
        accentCyan: "hsl(176, 68%, 64%)",
        accentBlue: "hsl(198, 60%, 50%)",
        lightRed: "hsl(0, 100%, 63%)",
        lightIvory: "hsl(11deg 75% 66%)",
      },
      fontFamily: {},
      spacing: {
        180: "32rem",
        190: "33rem",
        200: "34rem",
      },
      backgroundImage: (theme) => ({}),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
