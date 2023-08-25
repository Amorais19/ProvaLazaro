import { Routes, Route } from "react-router-dom"
import { PageHome, PageLayout, PageDescrição } from "../pages"

export function RouteSoftware() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="/Home" element={<PageHome />} />
        <Route path="/Desc" element={<PageDescrição />} />
      </Route>
    </Routes>
  )
}
