import "./App.css";
import { BrowserRouter, Route, Outlet, Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Router from "./routes/Router";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
    return (
        <ErrorBoundary FallbackComponent={ErrorPage}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
