import { Billing,Testimonials, Business, CardDeal, Clients, CTA, Footer, Stats, Navbar, Hero } from "./components";
import style from "./style"

const App = () => {
  return <div className="bg-primary w-full overflow-hidden">
    <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}> 
          <Navbar/>
        </div>
    </div>

    <div className={`${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}> 
        <Hero/>
        </div>
    </div>

    <div className={`${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.paddingX} ${style.boxWidth}`}> 
          <Stats></Stats>
          <Business></Business>
          <Billing></Billing>
          <CardDeal></CardDeal>
          <Testimonials></Testimonials>
          <Clients></Clients>
          <CTA></CTA>
          <Footer></Footer>
        </div>
    </div>


  </div>;
};

export default App;
