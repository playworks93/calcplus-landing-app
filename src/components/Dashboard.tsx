import { useState } from 'react'

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'advanced_calculations' ? 'active' : ''}
          onClick={() => setActiveTab('advanced_calculations')}
        >
          Advanced Calculations
        </button>
        <button 
          className={activeTab === 'collaboration_tools' ? 'active' : ''}
          onClick={() => setActiveTab('collaboration_tools')}
        >
          Collaboration Tools
        </button>
        <button 
          className={activeTab === 'graphical_data_analytics' ? 'active' : ''}
          onClick={() => setActiveTab('graphical_data_analytics')}
        >
          Graphical Data Analytics
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Dashboard Overview</h2>
            <div className="cards">
              <div className="card">
                <h3>Total Users</h3>
                <p className="stat">1,234</p>
              </div>
              <div className="card">
                <h3>Active Sessions</h3>
                <p className="stat">567</p>
              </div>
              <div className="card">
                <h3>Revenue</h3>
                <p className="stat">$12,345</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'advanced_calculations' && (
          <div className="tab-content">
            <h2>Advanced Calculations</h2>
            <p>Manage your advanced calculations here.</p>
          </div>
        )}

        {activeTab === 'collaboration_tools' && (
          <div className="tab-content">
            <h2>Collaboration Tools</h2>
            <p>Manage your collaboration tools here.</p>
          </div>
        )}

        {activeTab === 'graphical_data_analytics' && (
          <div className="tab-content">
            <h2>Graphical Data Analytics</h2>
            <p>Manage your graphical data analytics here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard