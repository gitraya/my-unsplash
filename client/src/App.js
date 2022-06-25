import React from "react";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-w-full min-h-screen flex flex-col relative">
      <Navigation />
      <div className="w-full h-40 sm:h-20" />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
