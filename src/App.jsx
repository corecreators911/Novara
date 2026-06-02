import { Routes, Route, useLocation } from 'react-router-dom'
import PageWrapper from './components/layout/PageWrapper'
import Home from './pages/Home'
import About from './pages/About'
import Specialities from './pages/Specialities'
import SpecialityDetail from './pages/SpecialityDetail'
import Doctors from './pages/Doctors'
import DoctorProfile from './pages/DoctorProfile'
import Appointments from './pages/Appointments'
import PatientInformation from './pages/PatientInformation'
import Facilities from './pages/Facilities'
import PatientStories from './pages/PatientStories'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation();

  return (
    <PageWrapper>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/specialities" element={<Specialities />} />
        <Route path="/specialities/:slug" element={<SpecialityDetail />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:slug" element={<DoctorProfile />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/patient-information" element={<PatientInformation />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/patient-stories" element={<PatientStories />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageWrapper>
  )
}

export default App
