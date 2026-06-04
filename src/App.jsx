import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import PageWrapper from './components/layout/PageWrapper'

// Route-level code splitting — each page is a separate JS chunk
const Home               = lazy(() => import('./pages/Home'))
const About              = lazy(() => import('./pages/About'))
const Specialities       = lazy(() => import('./pages/Specialities'))
const SpecialityDetail   = lazy(() => import('./pages/SpecialityDetail'))
const Doctors            = lazy(() => import('./pages/Doctors'))
const DoctorProfile      = lazy(() => import('./pages/DoctorProfile'))
const Appointments       = lazy(() => import('./pages/Appointments'))
const PatientInformation = lazy(() => import('./pages/PatientInformation'))
const Facilities         = lazy(() => import('./pages/Facilities'))
const PatientStories     = lazy(() => import('./pages/PatientStories'))
const Blog               = lazy(() => import('./pages/Blog'))
const BlogPost           = lazy(() => import('./pages/BlogPost'))
const Contact            = lazy(() => import('./pages/Contact'))
const NotFound           = lazy(() => import('./pages/NotFound'))

// Minimal page-transition loader — matches site background, no layout flash
const PageLoader = () => (
  <div className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-novara-bg">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-[3px] border-novara-primary/20 border-t-novara-accent rounded-full animate-spin" />
    </div>
  </div>
)

function App() {
  const location = useLocation();

  return (
    <PageWrapper>
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/"                    element={<Home />} />
          <Route path="/about"               element={<About />} />
          <Route path="/specialities"        element={<Specialities />} />
          <Route path="/specialities/:slug"  element={<SpecialityDetail />} />
          <Route path="/doctors"             element={<Doctors />} />
          <Route path="/doctors/:slug"       element={<DoctorProfile />} />
          <Route path="/appointments"        element={<Appointments />} />
          <Route path="/patient-information" element={<PatientInformation />} />
          <Route path="/facilities"          element={<Facilities />} />
          <Route path="/patient-stories"     element={<PatientStories />} />
          <Route path="/blog"                element={<Blog />} />
          <Route path="/blog/:slug"          element={<BlogPost />} />
          <Route path="/contact"             element={<Contact />} />
          <Route path="*"                    element={<NotFound />} />
        </Routes>
      </Suspense>
    </PageWrapper>
  )
}

export default App
