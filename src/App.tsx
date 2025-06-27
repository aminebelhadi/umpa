import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Adoption from './pages/Adoption';
import HomePage from './pages/Homepage';
import Single_Animal from './pages/Single_Animal';
import Contactez_nous from './pages/Contactez_nous';
import QuiSommeNous from './pages/QuiSommeNous';
import Blog from './pages/Blog';
import DonationPage from './components/Donation/DonationPage';
import Donation from './pages/Donation';
import BlogPostDetail from './components/Blog/BlogPostDetail';
import EventDetail from './components/Blog/EventDetail';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/single_animal_page" element={<Single_Animal/>}/>
        <Route path="/contactez_nous" element={<Contactez_nous/>}/>
        <Route path="/QuiSommeNous" element={<QuiSommeNous />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/donation" element={<Donation />} />
        <Route path="/blog/:id" element={<BlogPostDetail />} />
        <Route path="/events/:id" element={<EventDetail />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
