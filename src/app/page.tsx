import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#f8fafc'
    }}>
      {/* Hero Section */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          width: '100%'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#1e293b'
          }}>
            Game Automation AI
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#475569',
            marginBottom: '2.5rem',
            lineHeight: 1.6
          }}>
            Automate your gaming tasks with AI-powered assistance. Select your game, tell our AI what to do, and we'll handle the rest.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem'
          }}>
            <Link href="/login" style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              fontWeight: 'bold',
              padding: '0.75rem 2rem',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              Login
            </Link>
            
            <Link href="/signup" style={{
              backgroundColor: 'white',
              color: '#3b82f6',
              fontWeight: 'bold',
              padding: '0.75rem 2rem',
              borderRadius: '0.375rem',
              border: '1px solid #3b82f6',
              cursor: 'pointer',
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              Sign Up
            </Link>
            
            <Link href="/dashboard/games" style={{
              backgroundColor: '#10b981',
              color: 'white',
              fontWeight: 'bold',
              padding: '0.75rem 2rem',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              Go to Dashboard (Demo)
            </Link>
          </div>
          
          {/* Features Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              padding: '1.5rem',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              textAlign: 'left'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                marginBottom: '0.75rem',
                color: '#1e293b'
              }}>AI-Powered Automation</h3>
              <p style={{
                color: '#64748b'
              }}>Our system uses advanced AI to understand your goals and execute them perfectly every time.</p>
            </div>
            
            <div style={{
              padding: '1.5rem',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              textAlign: 'left'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                marginBottom: '0.75rem',
                color: '#1e293b'
              }}>Multiple Games</h3>
              <p style={{
                color: '#64748b'
              }}>Support for popular games including Honkai: Star Rail, Genshin Impact, and many more.</p>
            </div>
            
            <div style={{
              padding: '1.5rem',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              textAlign: 'left'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                marginBottom: '0.75rem',
                color: '#1e293b'
              }}>Save Your Time</h3>
              <p style={{
                color: '#64748b'
              }}>Let our service handle repetitive tasks while you focus on what matters most.</p>
            </div>
          </div>
          
          <p style={{
            fontSize: '1rem',
            color: '#64748b',
            marginTop: '2rem'
          }}>
            Supported games include Honkai: Star Rail, Genshin Impact, and more.
          </p>
        </div>
      </main>
      
      {/* Footer */}
      <footer style={{
        padding: '1.5rem',
        backgroundColor: '#1e293b',
        color: 'white',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} Game Automation Service. All rights reserved.
        </p>
      </footer>
    </div>
  );
}