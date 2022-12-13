/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.svelte",
  ],
  theme: {
    extend: {
      width: {
        '90': '22.5rem',
        '128': '32rem'
      }
    },
  },
  daisyui: {
      themes: [
        {
          georgie: {
            "primary": "#ca8a04",
            "secondary": "#3f6212",
            "accent": "#bef264",
            "neutral": "#7c2d12",
            "base-100": "#f59e0b",
            "info": "#0ea5e9",
            "success": "#36D399",
            "warning": "#facc15",
            "error": "#ef4444",
          },
        },
        "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
      ],
  },
  plugins: [
    require('daisyui')
  ],
}