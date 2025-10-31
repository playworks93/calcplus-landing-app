import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import Calculator from './components/Calculator'
import CollaborationPanel from './components/CollaborationPanel'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import HistoryList from './components/HistoryList'
import Settings from './components/Settings'

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
          <p className="tagline">Revolutionary Calculations at Your Fingertips</p>
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
          <li>Advanced Calculations</li>
          <li>Collaboration Tools</li>
          <li>Graphical Data Analytics</li>
          <li>Customizable Interface</li>
          <li>History and Favorites Management</li>
          <li>Interactive Tutorials and Help</li>
          </ul>
        </div>
        <p>&copy; 2025 CalcPlus. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App