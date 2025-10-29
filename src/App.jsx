import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./layout/Layout.jsx"

const Home = React.lazy(()=> import('./pages/Home/Home.jsx'))
const RefundPolicy = React.lazy(()=> import('./pages/RefundPolicy/RefundPolicy.jsx'))

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
      </Route>
    </>
  )
)

export default App