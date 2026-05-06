import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/AppShell/AppShell'
import { Attendance } from './routes/Attendance/Attendance'
import { Dashboard } from './routes/Dashboard/Dashboard'
import { Grades } from './routes/Grades/Grades'
import { Profile } from './routes/Profile/Profile'
import { Schedule } from './routes/Schedule/Schedule'

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  )
}
