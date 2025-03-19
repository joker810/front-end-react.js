import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer'; // Import the Footer
import Home from './components/pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';

// const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Services = () => <h2>Services Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

function App() {
  const navLinks = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Services', url: '/services' },
    { text: 'Contact', url: '/contact' },
  ];

  const socialLinks = [
    { platform: 'Facebook', url: 'https://facebook.com' },
    { platform: 'Twitter', url: 'https://twitter.com' },
    { platform: 'Instagram', url: 'https://instagram.com' },
  ];

  const contactInfo = {
    email: 'info@mysite.com',
    phone: '+91-123-456-7890',
    address: '123 Street, Mumbai, India',
  };

  return (
    <Router>
      <div className="App">
        <Header logoText="MySite" navLinks={navLinks} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer
          navLinks={navLinks}
          socialLinks={socialLinks}
          contactInfo={contactInfo}
        />
      </div>
    </Router>
  );
}

export default App;