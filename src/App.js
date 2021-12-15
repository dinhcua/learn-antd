import { Layout } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import BestProvide from './components/BestProvide';
import AboutUs from './components/AboutUs';
import Featured from './components/Featured';
import Partner from './components/Partner';
import Cities from './components/Cities';
import Testimonials from './components/Testimonials';
import Subscribe from './components/Subscribe';
import FooterEnd from './components/FooterEnd';

const { Header, Footer } = Layout;
function App() {
  return (
    <Layout>
      <Header className='bg'>
        <NavBar />
        <Hero />
      </Header>
      <BestProvide />
      <AboutUs />
      <Featured />
      <Partner />
      <Cities />
      <Testimonials />
      <Footer className='Footer'>
        <Subscribe />
        <FooterEnd />
      </Footer>
    </Layout>
  );
}

export default App;
