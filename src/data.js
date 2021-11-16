//next
import nextDesktop from "./images/portfolio/desktop/next.png";
import nextTablet from "./images/portfolio/tablet/next.png";
import nextMobile from "./images/portfolio/mobile/next.png";

//Portfolio
import portDesktop from "./images/portfolio/desktop/DesktopPortFolioProject.png";
import portTablet from "./images/portfolio/tablet/TabletPortFolioProject.png";
import portMobile from "./images/portfolio/mobile/MobilePortFolioProject.png";

//Invoice
import invoiceDesktop from "./images/portfolio/desktop/InvoiceProjectDesktop.png";
import invoiceTablet from "./images/portfolio/tablet/InvoiceProjectTablet.png";
import invoiceMobile from "./images/portfolio/mobile/InvoiceProjectMobile.png";

//colors
import colorDesktop from "./images/portfolio/desktop/color.png";
import colorTablet from "./images/portfolio/tablet/color.png";
import colorMobile from "./images/portfolio/mobile/color.png";

//AudioPhile
import FinishedAudioPhileDesktop from "./images/portfolio/desktop/Finished-AudioPhile.png";
import FinishedAudioPhileTablet from "./images/portfolio/tablet/Finished-AudioPhile.png";
import FinishedAudioPhileMobile from "./images/portfolio/mobile/Finished-AudioPhile.png";

//Budget
import FinishedbudgetDesktop from "./images/portfolio/desktop/Finished-budget.png";
import FinishedbudgetTablet from "./images/portfolio/tablet/Finished-budget.png";
import FinishedbudgetMobile from "./images/portfolio/mobile/Finished-budget.png";

//loop
import FinishedLoopDesktop from "./images/portfolio/desktop/Finished-Loop.png";
import FinishedLoopTablet from "./images/portfolio/tablet/Finished-Loop.png";
import FinishedLoopMobile from "./images/portfolio/mobile/Finished-Loop.png";

//Crowded
import FinishedCrowdedDesktop from "./images/portfolio/desktop/Finshed-Crowded.png";
import FinishedCrowdedTablet from "./images/portfolio/tablet/Finshed-Crowded.png";
import FinishedCrowdedMobile from "./images/portfolio/mobile/Finshed-Crowded.png";

//Designo
import FinishedDesignoDesktop from "./images/portfolio/desktop/Finshed-Designo.png";
import FinishedDesignoTablet from "./images/portfolio/tablet/Finshed-Designo.png";
import FinishedDesignoMobile from "./images/portfolio/mobile/Finshed-Designo.png";

//Room
import FinishedRoomDesktop from "./images/portfolio/desktop/Finshed-Room.png";
import FinishedRoomTablet from "./images/portfolio/tablet/Finshed-Room.png";
import FinishedRoomMobile from "./images/portfolio/mobile/Finshed-Room.png";

//TODO
import FinishedTODODesktop from "./images/portfolio/desktop/Finshed-TODO.png";
import FinishedTODOTablet from "./images/portfolio/tablet/Finshed-TODO.png";
import FinishedTODOMobile from "./images/portfolio/mobile/Finshed-TODO.png";

//Battery
import BatteryChecker from "./images/portfolio/mobile/Battery.png";

//studentId
//import StudentId from "./images/portfolio/mobile/StudentId.png";

//carwash
import carwash from "./images/portfolio/mobile/Gee-Man-CarWash.png";

//file
import file from "./images/portfolio/mobile/File.png";

//workspace
import workspace from "./images/portfolio/mobile/workspace.png";

//cryptoVerse
import cryptoVerse from "./images/portfolio/mobile/cryptoverse.PNG";

//Country Rest
import country from "./images/portfolio/mobile/country.PNG";

import Reservation from "./images/portfolio/mobile/Reservation.PNG";

const projects = [
  {
    id: 1,
    category: "HTML",
    title: "The Next Website",
    lang: ["HTML", "CSS", "JS"],
    url: "https://github.com/Aycom366/The-Next-Website",
    live: "https://the-next-website.vercel.app/",
    slug: "next-website",
    info: "This Project was made back then when I Started my Web Design. It was made to actually text my css layout grids. and of cause, it responsive across all web surfer devices.\nThis was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.\nThis Project was done to perfect setting down of reponsiveness in a website.",
    images: {
      mobil: nextMobile,
      tablet: nextTablet,
      desktop: nextDesktop,
    },
  },
  {
    id: 2,
    category: "HTML",
    title: "The Color Website",
    lang: ["HTML", "CSS", "JS"],
    url: "https://github.com/Aycom366/Color-Website",
    live: "https://color-website.vercel.app/",
    slug: "color-website",
    info: "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.\nThis Project was done to perfect setting down of reponsiveness in a website.",
    images: {
      mobil: colorMobile,
      tablet: colorTablet,
      desktop: colorDesktop,
    },
  },
  {
    id: 3,
    category: "React",
    title: "Tip Calculator",
    lang: ["HTML", "CSS", "REACT"],
    url: "https://github.com/Aycom366/React-Tip-Calculator",
    live: "https://react-tip-calculator.vercel.app/",
    slug: "tip-website",
    info: "A simple Tip Calculator that calculates tip amount for various percentages of the cost of the service, and also provides a total amount that includes the tip.\nThis Project was done to perfect setting down of reponsiveness in a website.",
    images: {
      mobil: FinishedbudgetMobile,
      tablet: FinishedbudgetTablet,
      desktop: FinishedbudgetDesktop,
    },
  },
  {
    id: 4,
    category: "React",
    title: "AudioPhile E-Commerce",
    lang: ["HTML", "CSS", "REACT"],
    url: "https://github.com/Aycom366/Audiophile-Ecommerce-Website",
    live: "http://audiophile-ecommerce-website-blush.vercel.app/",
    slug: "audiophile-website",
    info: "A Fully fledged E-Commerce developed using React Framework. AudioPhile sells gadgets like Heaphones, EarPhones, Speakers of all models",
    images: {
      mobil: FinishedAudioPhileMobile,
      tablet: FinishedAudioPhileTablet,
      desktop: FinishedAudioPhileDesktop,
    },
  },
  {
    id: 5,
    category: "HTML",
    title: "Loop Studio",
    lang: ["HTML", "CSS", "JS"],
    url: "https://github.com/Aycom366/Loop-Studio",
    live: "http://loop-studio-aycom366.vercel.app/  ",
    slug: "loop-website",
    info: "A Fully fledged E-Commerce developed using React Framework. AudioPhile sells gadgets like Heaphones, EarPhones, Speakers of all models",
    images: {
      mobil: FinishedLoopMobile,
      tablet: FinishedLoopTablet,
      desktop: FinishedLoopDesktop,
    },
  },
  {
    id: 6,
    category: "HTML",
    title: "CrowdFunding",
    lang: ["HTML", "CSS", "JS"],
    url: "https://github.com/Aycom366/CrowfundingProject",
    live: "http://crowfunding-project.vercel.app/ ",
    slug: "crowd-website",
    info: "CrowdFunding Project is the practice of funding a project or venture by raising small amounts of money from a large number of people, typically via the Internet. Design Challenge By Frontend Mentor, Coded by me",
    images: {
      mobil: FinishedCrowdedMobile,
      tablet: FinishedCrowdedTablet,
      desktop: FinishedCrowdedDesktop,
    },
  },
  {
    id: 7,
    category: "React",
    title: "Designo Multi-Page",
    lang: ["HTML", "CSS", "REACT"],
    url: "https://github.com/Aycom366/Designo-Multi-Page-Website",
    live: "https://designo-multipage-wesbite.netlify.app/",
    slug: "designo-website",
    info: "Designo is basically a multi-page website exploring the use of the LeafLet map Libraries",
    images: {
      mobil: FinishedDesignoMobile,
      tablet: FinishedDesignoTablet,
      desktop: FinishedDesignoDesktop,
    },
  },
  {
    id: 8,
    category: "HTML",
    title: "Room Studio",
    lang: ["HTML", "CSS", "JS"],
    url: "https://github.com/Aycom366/Designo-Multi-Page-Website",
    live: "https://designo-multipage-wesbite.netlify.app/",
    slug: "room-website",
    info: "Room Studio is made to basically test my css layout skills as well as javascript. A slider made with Javascript and auto changing button prev and next functinalities.",
    images: {
      mobil: FinishedRoomMobile,
      tablet: FinishedRoomTablet,
      desktop: FinishedRoomDesktop,
    },
  },
  {
    id: 9,
    category: "HTML",
    title: "Todo List",
    lang: ["HTML", "CSS", "JS"],
    url: "https://github.com/Aycom366/TodoDrag",
    live: "http://todo-drag.vercel.app/",
    slug: "todo-website",
    info: "A Todo list is simply an app made to automate what you will either be doing for the week or for the day.\nData are being saved on localstorage and this app also has the ability to reorder rows.",
    images: {
      mobil: FinishedTODOMobile,
      tablet: FinishedTODOTablet,
      desktop: FinishedTODODesktop,
    },
  },
  {
    id: 10,
    category: "C#",
    title: "Battery Alarm",
    lang: ["C#"],
    url: "https://github.com/Aycom366/BatteryAlarm",
    slug: "battery",
    info: "Battery Alarm is a desktop app made to automate the removal of charger when plugged in.\nThe way it works goes thus: if a laptop or a desktop is being charged and the battery is now fully charged. i.e battery is now 100%, This software then alarms you to unplug the system from whatever powersource it being plugged to.",
    images: {
      mobil: BatteryChecker,
    },
  },
  {
    id: 11,
    category: "VB",
    title: "File Security",
    lang: ["VB.Net"],
    url: "https://github.com/Aycom366/Folder-encryption-decryption",
    slug: "file",
    info: "File Security is a desktop app that encourages file and folde securities.\nThis app basically encrypts file, lock files and folders, hides file and folders.",
    images: {
      mobil: file,
    },
  },
  {
    id: 12,
    category: "C#",
    title: "Employee Monitoring System",
    lang: ["C#"],
    url: "https://github.com/comeriver/workplace",
    live: "https://workplace.comeriver.com/",
    slug: "keyLog",
    info: "This is software is basically developed to track and monitor the activities of an employee in an organization.\nThis Project was developed when I was an Intern in Comeriver.com. For more information check the live url icon to learn more about how to use this app.",
    images: {
      mobil: workspace,
    },
  },
  {
    id: 13,
    category: "VB",
    title: "Car Wash System",
    lang: ["VB", " Report Viewer"],
    url: "https://github.com/Aycom366/car-wash",
    slug: "carwash",
    info: "A Car wash management system developed to automate individuals or companies that wants to automate their Car Wash Companies.\nThis software keeps tracks of car being brought in for washing and also calculates report either daily or weekly or monthly.",
    images: {
      mobil: carwash,
    },
  },
  {
    id: 14,
    category: "React",
    title: "Temitayo",
    lang: ["Html", "React", "Context API"],
    url: "https://github.com/Aycom366/Temitayo-Portfolio",
    slug: "temitayo",
    info: "My Portfolio's Website made using React and Context Api including formspree as my endpoint for receivingg emails.",
    images: {
      mobil: portMobile,
      tablet: portTablet,
      desktop: portDesktop,
    },
  },
  {
    id: 15,
    category: "React",
    title: "Invoice App",
    lang: ["React", "Redux", "Context API"],
    url: "https://github.com/Aycom366/Invoices",
    live: "https://invoices-beta.vercel.app/",
    slug: "invoice",
    info: "This Project was made to cement my knowledge in using Redux for state management including Formik to handle Forms States and Data.\nThis Project has the ability to create, read back into inputs, delete invoice including creating dynamic inputs and validations. Localstorage is used to save invoices created and also get the current theme selected by users. The switch to light and dark theme is not excluded",
    images: {
      mobil: invoiceMobile,
      tablet: invoiceTablet,
      desktop: invoiceDesktop,
    },
  },
  {
    id: 16,
    category: "React",
    title: "CryptoVerse",
    lang: ["React", "Redux toolkit", "Ant Design"],
    url: "https://github.com/Aycom366/cryptoverse",
    live: "https://cryptoverse-seven.vercel.app/",
    slug: "cryptoverse",
    info: "Cryptoverse is basically a crypto website build using react toolkit.",
    images: {
      mobil: cryptoVerse,
    },
  },
  {
    id: 17,
    category: "React",
    title: "Country",
    lang: ["React", "Context API", "Tailwind"],
    url: "https://github.com/Aycom366/country-rest",
    live: "https://country-rest.vercel.app/",
    slug: "country",
    info: "This project fetches and display information about current country including neighbouring",
    images: {
      mobil: country,
    },
  },
  {
    id: 18,
    category: "Typescript",
    title: "Reservation",
    lang: ["React", "Redux Toolkit", "Typescript"],
    url: "https://github.com/Aycom366/Reservation-Toolkit-Typescript",
    live: "https://reservation-toolkit-typescript.vercel.app/",
    slug: "reserve",
    info: "This project fetches and display information about current country including neighbouring",
    images: {
      mobil: Reservation,
    },
  },
];

export default projects;
