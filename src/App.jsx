import {Routes, Route} from "react-router-dom";
import './App.css';
import AloePage from './pages/AloePage';
import RosePage from './pages/RosePage';
import CordPage from "./pages/CordPage";
import HydPage from "./pages/HydPage";
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import All from "./components/All";
import Out from "./components/Out";
import In from "./components/In";
import Login from "./pages/Login";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="all" element={<All />}/>
          <Route path="out" element={<Out/>} />
          <Route path="in" element={<In/>} />
          <Route path="login" element={<Login/>} />
        </Route>
        <Route path="/aloe" element={<AloePage />}>
          <Route path="aloe" element={<AloePage />} />
          <Route path="rose" element={<RosePage />} />
          <Route path="cord" element={<CordPage />} />
          <Route path="hyd" element={<HydPage/>} />
        </Route>
        <Route path="/rose" element={<RosePage />}>
          <Route path="aloe" element={<AloePage />} />
          <Route path="rose" element={<RosePage />} />
          <Route path="cord" element={<CordPage />} />
          <Route path="hyd" element={<HydPage/>} />
        </Route>
        <Route path="/cord" element={<CordPage />}>
          <Route path="aloe" element={<AloePage />} />
          <Route path="rose" element={<RosePage />} />
          <Route path="cord" element={<CordPage />} />
          <Route path="hyd" element={<HydPage/>} />
        </Route>
        <Route path="/hyd" element={<HydPage/>}>
          <Route path="aloe" element={<AloePage />} />
          <Route path="rose" element={<RosePage />} />
          <Route path="cord" element={<CordPage />} />
          <Route path="hyd" element={<HydPage/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
