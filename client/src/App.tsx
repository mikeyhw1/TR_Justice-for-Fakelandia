import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import ErrorBoundary
import { BrowserRouter, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Misdemeanours from "./pages/Misdemeanours/Misdemeanours";
import Confession from "./pages/Confession/Confession";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { ErrorBoundary } from "react-error-boundary";

function App() {
    // const [count, setCount] = useState(0)

    <BrowserRouter>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="*" element={<NoMatch />} />
        </Route>
    </BrowserRouter>;

    return <></>;
}

export default App;

// {
//     /* <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div> */
// }
