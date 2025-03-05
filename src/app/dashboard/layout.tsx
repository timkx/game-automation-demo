export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column' as const,
    },
    header: {
      padding: '16px 24px',
      backgroundColor: '#1F2937',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    title: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    nav: {
      display: 'flex',
      gap: '16px'
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      padding: '4px 0',
      opacity: 0.8
    },
    main: {
      flex: '1',
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Game Automation Service</h1>
        <nav style={styles.nav}>
          <a href="/dashboard/games" style={styles.navLink}>Games</a>
          <a href="/dashboard/tasks" style={styles.navLink}>My Tasks</a>
          <a href="/dashboard/account" style={styles.navLink}>Account</a>
        </nav>
      </header>
      <main style={styles.main}>
        {children}
      </main>
    </div>
  );
}