/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  safelist:[
    {
      pattern: /(w|h|ml)-.+/,
    },{
      pattern:/text-(2xl|xl|3xl)/
    },{
      pattern:/bg-(textPrimary|slate-100|primary)/
    }
  ],
  theme: {
    fontFamily:{
      'mant':["Mantou Sans"],
      'inter':["Inter"]
    },
    extend: {
      colors:{
        "primary":"#0D2562",
        "textColor":'#3D3D3D',
        "lightColor":"#FEFBF3",
        "orangeColor":"#FFB086",
        "blueColor":'#8CB5DB',
        "greenColor" : '#749C74'
      },

    },
  },
  plugins: [],
}

