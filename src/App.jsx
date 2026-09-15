import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/project/:id"
                    element={<ProjectDetails />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;