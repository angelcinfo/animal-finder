import React from "react";
import './App.css';
import FooterComponent from "./pages/components/FooterComponent";
import AppRouter from "./routes/routes";

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
