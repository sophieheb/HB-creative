import React, { Suspense, lazy } from 'react';
// import BarLoader from 'react-spinners/BarLoader';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const Works = lazy(() => import('./pages/Works'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

function Routes() {
  return (

    <Switch>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/works">
        <Works />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>

  );
}

function App() {
  return (
    <>
      <Helmet>
        <title>HB Creative</title>
        <meta name="description" content="Every painting has a story, each, a one-of- a-kind, envoking a sense of that soul-re- newing stillness; that deep breath you take when you reach the seashore." />
        {/* <meta property="og:url" content="techniclarity.co" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Every painting has a story, each, a one-of- a-kind, envoking a sense of that soul-re- newing stillness; that deep breath you take when you reach the seashore." />
        <meta property="og:title" content="HB Creative" />
        {/* <meta property="og:image" content={womanMiddle} /> */}
        <meta property="og:site_name" content="HB Creative" />
        <meta name="twitter:title" content="HB Creative" />
        <meta name="twitter:description" content="Every painting has a story, each, a one-of- a-kind, envoking a sense of that soul-re- newing stillness; that deep breath you take when you reach the seashore." />
        {/* <meta name="twitter:image" content={womanMiddle} /> */}
        {/* <meta name="twitter:image:alt" content="Line drawing" /> */}
      </Helmet>
      <Router>
        <Suspense fallback={(
          <div />
          // <BarLoader
          //   height={10}
          //   color="#031799"
          //   width="100%"
          // />
        )}
        >
          <div className="d-flex min-vh-100 flex-column justify-content-between">
            <Header />
            <Routes />
            <Footer />
          </div>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
