import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import AuthComponent from './components/AuthComponent'
import CalculatorComponent from './components/CalculatorComponent'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import HistoryPanel from './components/HistoryPanel'
import CustomizationSettings from './components/CustomizationSettings'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>CalcPlus</h1>
          <p className="tagline">Redefining Digital Calculations</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>User Authentication & Onboarding</li>
          <li>Basic Arithmetic Operations</li>
          <li>Advanced Scientific Calculations</li>
          <li>Real-Time Collaborative Calculations</li>
          <li>Data Visualization & Analytics Tools</li>
          <li>Customizable User Interface</li>
          </ul>
        </div>
        <p>&copy; 2025 CalcPlus. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App