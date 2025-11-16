import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Timeline from "./Timeline";
import Quiz from "./Quiz";
import QuizPage from "./QuizPage";
import ARSection from "./ARsection";
import Pricing from "./Pricing";
import Upload from "./Upload";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Myths from "./MythsMysteries";
import VidGallery from "./VideoGallery";
import About from "./About";
import Donation from "./Donation";
import ModelViewer from "./ModelViewer"; // Assuming you still need this
import Login from "./Login";
import Signup from "./Signup";
import Success from "./Success";
import Cancel from "./Cancel";
import ProfilePage from "./ProfilePage";
import PrehistoricEra from "./PreHistoricEra";
import AncientEra from "./AncientEra";
import ClassicalEra from "./ClassicalEra";
import MedievalEra from "./MedievalEra";
import RenaissanceEra from "./RenaissanceEra";
import HumanTapestry from "./HumanTapestry";
import ModernEra from "./ModernEra";
import AuthProvider from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import ArtifactRecognition from "./ArtifactRecognition";
import { useFocusManagement } from "../hooks/useFocusManagement";
import "../App.css";

// Component to handle focus management for each route
const FocusManager = ({ children }) => {
  const containerRef = useFocusManagement();

  return (
    <div ref={containerRef} tabIndex="-1" style={{ outline: 'none' }}>
      {children}
    </div>
  );
};

// Component to redirect to static HTML page
const WorldExploreRedirect = () => {
  useEffect(() => {
    // Redirect to the static HTML page
    window.location.href = '/world_exp.html';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontSize: '18px',
      color: '#666'
    }}>
      Redirecting to World Explore...
    </div>
  );
};

const HomePage = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              {/* --- Main Landing Page Route --- */}
              <Route
                path="/"
                element={
                  <FocusManager>
                    <>
                      <Hero />
                      <Features />
                      <Timeline />
                      <Quiz />
                      <ARSection />
                      <Pricing />
                      <Upload />
                    </>
                  </FocusManager>
                }
              />

              {/* --- Gallery Route - Curator and Archaeologist only --- */}
              <Route path="/gallery" element={
                <ProtectedRoute allowedRoles={['curator', 'archaeologist']}>
                  <FocusManager>
                    <Gallery />
                  </FocusManager>
                </ProtectedRoute>
              } />

              {/* --- Model Viewer Route - All authenticated users --- */}
              <Route path="/viewer/:modelId" element={
                <ProtectedRoute allowedRoles={['explorer', 'archaeologist', 'curator']}>
                  <FocusManager>
                    <ModelViewer />
                  </FocusManager>
                </ProtectedRoute>
              } />

              {/* --- Quiz Route - Limited access for Explorer --- */}
              <Route path="/quiz" element={
                <ProtectedRoute allowedRoles={['curator']}>
                  <FocusManager>
                    <Quiz />
                  </FocusManager>
                </ProtectedRoute>
              } />

              {/* --- Myths Route - All authenticated users --- */}
              <Route path="/myths" element={
                <ProtectedRoute allowedRoles={['archaeologist', 'curator']}>
                  <FocusManager>
                    <Myths />
                  </FocusManager>
                </ProtectedRoute>
              } />

              {/* --- Donation Route - All authenticated users --- */}
              <Route path="/donation" element={
                <ProtectedRoute allowedRoles={['explorer', 'archaeologist', 'curator']}>
                  <FocusManager>
                    <Donation />
                  </FocusManager>
                </ProtectedRoute>
              } />

              {/* --- Video Gallery Route - Curator only --- */}
              <Route path="/vidgallery" element={
                <ProtectedRoute allowedRoles={['curator']}>
                  <FocusManager>
                    <VidGallery />
                  </FocusManager>
                </ProtectedRoute>
              } />

              {/* --- Artifact Recognition Route - Curator only --- */}
              <Route path="/artifact" element={
                <ProtectedRoute allowedRoles={['curator']}>
                  <FocusManager>
                    <ArtifactRecognition />
                  </FocusManager>
                </ProtectedRoute>
              } />

              {/* --- Profile Route - All authenticated users --- */}
              <Route path="/profile" element={
                <ProtectedRoute allowedRoles={['explorer', 'archaeologist', 'curator']}>
                  <FocusManager>
                    <ProfilePage />
                  </FocusManager>
                </ProtectedRoute>
              } />

              {/* --- World Explore Route - Archaeologist and Curator only --- */}
              <Route path="/worldExplore" element={
                <ProtectedRoute allowedRoles={['archaeologist', 'curator']}>
                  <FocusManager>
                    <WorldExploreRedirect />
                  </FocusManager>
                </ProtectedRoute>
              } />

              <Route path="/human-tapestry" element={
                <ProtectedRoute allowedRoles={['archaeologist', 'curator']}>
                  <FocusManager>
                    <HumanTapestry />
                  </FocusManager>
                </ProtectedRoute>
              } />

              <Route path="/about" element={
                    <About />
              } />

              {/* --- Quiz Page Route - Limited access for Explorer --- */}
              <Route path="/quizpage" element={
                <ProtectedRoute allowedRoles={['explorer', 'archaeologist', 'curator']}>
                  <FocusManager>
                    <QuizPage />
                  </FocusManager>
                </ProtectedRoute>
              } />

              {/* --- Authentication Routes - No protection needed --- */}
              <Route path="/login" element={
                <FocusManager>
                  <Login />
                </FocusManager>
              } />
              <Route path="/signup" element={
                <FocusManager>
                  <Signup />
                </FocusManager>
              } />
              <Route path="/success" element={
                <FocusManager>
                  <Success />
                </FocusManager>
              } />
              <Route path="/cancel" element={
                <FocusManager>
                  <Cancel />
                </FocusManager>
              } />

              {/* --- Era Routes - Restricted for Explorer --- */}
              <Route path="/prehistoricera" element={
                <ProtectedRoute allowedRoles={['explorer', 'archaeologist', 'curator']}>
                  <FocusManager>
                    <PrehistoricEra />
                  </FocusManager>
                </ProtectedRoute>
              } />
              <Route path="/ancientera" element={
                <ProtectedRoute allowedRoles={['explorer', 'archaeologist', 'curator']}>
                  <FocusManager>
                    <AncientEra />
                  </FocusManager>
                </ProtectedRoute>
              } />
              <Route path="/classicalera" element={
                <ProtectedRoute allowedRoles={['archaeologist', 'curator']}>
                  <FocusManager>
                    <ClassicalEra />
                  </FocusManager>
                </ProtectedRoute>
              } />
              <Route path="/medievalera" element={
                <ProtectedRoute allowedRoles={['archaeologist', 'curator']}>
                  <FocusManager>
                    <MedievalEra />
                  </FocusManager>
                </ProtectedRoute>
              } />
              <Route path="/renaissanceera" element={
                <ProtectedRoute allowedRoles={['archaeologist', 'curator']}>
                  <FocusManager>
                    <RenaissanceEra />
                  </FocusManager>
                </ProtectedRoute>
              } />
              <Route path="/modernera" element={
                <ProtectedRoute allowedRoles={['archaeologist', 'curator']}>
                  <FocusManager>
                    <ModernEra />
                  </FocusManager>
                </ProtectedRoute>
              } />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default HomePage;
