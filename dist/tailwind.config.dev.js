"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "album-cover": "url('/panic-panini-album.jpg')",
        "incoming-shows": "url('/gallery/band-images/group.JPEG')",
        "hero-pattern": "url('/pattern.png')"
      },
      fontFamily: {
        fkscreamerUpright: ["FKScreamer-Upright", "sans-serif"],
        permanentMarker: ["Permanent Marker", "sans-serif"],
        //to je prej bil glavni za naslove
        poppins: ["Poppins", "sans-serif"],
        rockSalt: ["Rock Salt", "sans-serif"],
        newKidz: ["var(--font-new-kidz)", "sans-serif"]
      },
      colors: {
        "flou-orange": "#df8622",
        "yellow-btn-primary": "#ffc621",
        "medium-gray": "#bebebe",
        "full-black": "#0f0f0f"
      },
      ringColor: {
        DEFAULT: "#df8622"
      },
      boxShadow: {
        "centered-shadow": "0px 0px 19px 4px rgba(0,0,0,0.1)"
      },
      fontSize: {
        headingNormal: ["3.75rem", "30px"],
        albumName: ["2.5rem", "30px"],
        headingMobile: ["2.7rem", "32px"],
        textNormal: ["24px", "28px"],
        textMobile: ["18px", "20px"]
      }
    }
  },
  plugins: []
};