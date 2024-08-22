// pages
import Index1 from "../pages/Startuplanding/Index1"
import Index from "../pages/contact/Index"
import Service from "../pages/service/Index"
import Index2 from "../pages/Applanding/Index2"
import Index3 from "../pages/blog/Index3"
import Index4 from "../pages/Agencylanding/Index4"
import Index5 from "../pages/Businesslanding/Index5"
import Index6 from "../pages/Booklanding/Index6"
import Index7 from "../pages/Interior/Index7"
import Index8 from "../pages/Constructionlanding/Index8"
import Index9 from "../pages/index/Index9"
import Index10 from "../pages/Photographer/Index10"
import Index11 from "../pages/GYM/Index11"
import About from "../pages/about/About"

const routes = [

    { path: "/", component: <Index9 /> },
    { path: "/blog", component: <Index3 /> },
    { path: "/about", component: <About /> },
    { path: "/contact", component: <Index /> },
    { path: "/service", component: <Service /> },


    // Startup-Landing
    { path: "/startup-landing", component: <Index1 /> },

    // App-Landing
    { path: "/app-landing", component: <Index2 /> },

    // Agency-Landing
    { path: "/agency-landing", component: <Index4 /> },

    // Business-Landing
    { path: "/business-landing", component: <Index5 /> },

    // Book-Landing
    { path: "/book-landing", component: <Index6 /> },

    // InteriorDesign-Landing
    { path: "/interior-design-landing", component: <Index7 /> },

    // Construction-Landing
    { path: "/construction-landing", component: <Index8 /> },

    // Photographer-Landing
    { path: "/photographer-landing", component: <Index10 /> },

    // Gym-Landing
    { path: "/gym-landing", component: <Index11 /> },

]

export { routes };