import Sorting from "./Sorting";
import Search from "./Search";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    // route to Sorting component
    <BrowserRouter>
      <Routes>
        <Route path="/sort" element={<Sorting />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/"
          element={
            <div className="app">
              <h1>Visual Sorting</h1>
              {/* link to /sort */}
              <button>
                <Link to="/sort">Sorting</Link>
              </button>
              {/* link to /search */}
              <h1>visual searching</h1>
              demo
              <button>
                <Link to="/search">Search</Link>
              </button>
            </div>
          }
        />
        <Route path="*" element={<h1>404 - Not Found!</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
