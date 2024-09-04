import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#8653FF',
        customPink: '#00DAE5',
        darkBlue: '#534988',
        customOrange: '#FF9580',
        cardbg: '#EDE9FA',
        purple: '#D2C7F3',
        blue:'#5553C4',
        darkpurple:'#685AAD',
        purpleBtn:'#DBCAFF',
        btnbg:'#9184F0',
        questionbg:'#EDE8FA',
        lightpurple:'#9B85C8',
        formpurple:'#8458F8',
        lightgray:'#534988',
        lightblue:'#635BFF',
        reviewbg:'#DAD1F2'
      },
      fontFamily: {
        roboto: ['roboto'],
        azonix:['azonix'],
        roboto_medium:['roboto_medium']
      },
    },
    screens: {
      'mb': {'min': '280px', 'max': '1000px'},
      'tb': {'min': '600px', 'max': '1000px'},
      'lg':{'min':'1000px','max':'1366px'},
      'xl':{'min':'1366px','max':'1600px'},
      '2xl':{'min':'1600px'},
      'sm-default': '640px',
        'md-default': '768px',
        'lg-default': '1024px',
        'xl-default': '1280px',
        '2xl-default': '1536px',
    },
    fontFamily: {
      // roboto: ['Roboto-Condensed', 'sans-serif'],
      azonix:['azonix'],
      roboto_medium:['roboto_medium']
    },
  },
  plugins: [],
};
export default config;
