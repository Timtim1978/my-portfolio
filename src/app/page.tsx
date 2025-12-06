import Navbar from '@/app/home/partials/navbar';
import Hero from '@/app/home/partials/hero';
import ServicesMarquee from '@/app/home/partials/services-marquee';
import AboutMe from './home/partials/about-me';
import Tools from './home/partials/tools';
import AtypicalFrontend from './home/partials/atypical-frontend';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesMarquee />
      <AboutMe />
      <Tools />
      <AtypicalFrontend />
    </div>
  );
};

export default Home;
