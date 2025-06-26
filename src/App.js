import React from "react";
import './App.css';
import FooterComponent from "./components/FooterComponent";
import AppRouter from "./components/router/Router";

function App() {
  return (
      <div className="App">
          <main className="body">
              <AppRouter/>
           </main>
           <FooterComponent/>
      </div>
);
}

export default App;
