import './App.css'
import { Route, Routes } from 'react-router-dom'
import DashboardLayout from './components/Layouts/DashboardLayout'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Benefits from './pages/Benefits'
import DetailPage from './pages/DetailPage'
import Settings from './pages/Settings'
import StatisticPage from './pages/StatisticPage'
import { Toaster } from 'sonner'
import { Header } from 'antd/es/layout/layout'
import MainDetailPage from './pages/MainDetailPage'
import { useAuthStore } from './store/authStore'

function App() {
  const {accessToken} = useAuthStore()

  return (
    <>
    <Routes>
      { !accessToken ?
        <Route path="/" element={<Login />} /> :
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<MainDetailPage />} />
          <Route path='benefits' element={<Benefits />} />
          <Route path='detail' element={<DetailPage />} />
          <Route path='settings' element={<Settings />} />
          <Route path='statistic' element={<StatisticPage />} />
        </Route>
      }
      <Route path="*" element={<NotFound />} />
    </Routes>

    <Toaster />
    </>
  )
}

export default App
