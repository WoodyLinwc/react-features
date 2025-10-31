import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <div className="section-container">
        <h2>React Router Setup</h2>
        <a href="https://github.com/WoodyLinwc/react-features/blob/main/react-features/src/main.jsx">
          main.jsx
        </a>
        <br />
        <a href="https://github.com/WoodyLinwc/react-features/blob/main/react-features/src/components/Navigation.jsx">
          Navigation.jsx
        </a>
      </div>

      <div className="section-container">
        <h2>React Router CSS</h2>
        <a href="https://github.com/WoodyLinwc/react-features/blob/main/react-features/src/components/Navigation.css">
          Navigation.css
        </a>
      </div>
    </>
  );
}

export default App;
