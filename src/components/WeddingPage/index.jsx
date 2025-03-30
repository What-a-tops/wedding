import { lazy, Suspense, useRef } from "react";
import Navbar from "../Navbar/index.jsx";
import ScrollToTop from "../ScrollToTop/index.jsx";
import Footer from "../Footer/index.jsx";
import Loading from "../Loading/index.jsx";
const VideoPlayer = lazy(() => import("../VideoPlayer/index.jsx"));
const Entourage = lazy(() => import("../Entourage/index.jsx"));
const Story = lazy(() => import("../Story/index.jsx"));
const Location = lazy(() => import("../Location/index.jsx"));
const RSVP = lazy(() => import("../Rsvp/index.jsx"));

const Index = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="col-span-2 bg-white shadow-md relative overflow-x-hidden h-screen scroll-container overflow-y-auto"
    >
      <Navbar />
      <Suspense fallback={<Loading />}>
        <VideoPlayer />
        <Story />
        <Entourage />
        <Location />
        <RSVP />
      </Suspense>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
