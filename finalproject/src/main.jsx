import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from '../routes/Layout.jsx'
import CreateView from '../routes/CreateView.jsx'
import ReadView from '../routes/ReadView.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="create" element={<CreateView />} />
          <Route path="posts" element={<ReadView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
