import "./App.css";

const App = () => {
  return (
    <div className="App">
      <section className="banner">
        <div className="large-text">This page was made using</div>
        <div className="gradient-text">
          <span className="large-text" id="vite">
            ViteJS
          </span>
          <span className="text-8xl flex items-center">+</span>
          <span className="large-text" id="react">
            React
          </span>
        </div>
      </section>
      <footer>
        Made with <span className="text-red-600">&nbsp;&hearts;&nbsp;</span> on
        VS Code.
      </footer>
    </div>
  );
};

export default App;
