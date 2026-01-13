import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Project1 from "./pages/Projects/Project-1/Project1"
import Project2 from "./pages/Projects/Project-2/Project2"
import Project3 from "./pages/Projects/Project-3/Project3"
import Project4 from "./pages/Projects/Project-4/Project4"
import Project5 from "./pages/Projects/Project-5/Project5"

function App() {
  return (
    <div className="h-screen overflow-hidden flex flex-col bg-black/90 text-white">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/project-1" element={<Project1 />} />
          <Route path="/project-2" element={<Project2 />} />
          <Route path="/project-3" element={<Project3 />} />
          <Route path="/project-4" element={<Project4 />} />
          <Route path="/project-5" element={<Project5 />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
