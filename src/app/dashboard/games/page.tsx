// src/app/dashboard/games/page.tsx
import Link from 'next/link';

export default function GameSelection() {
  // Mock data for games
  const games = [
    { id: 'hsr', name: 'Honkai: Star Rail', image: '/placeholder.png', platform: ['PC', 'Mobile'] },
    { id: 'genshin', name: 'Genshin Impact', image: '/placeholder.png', platform: ['PC', 'PS4', 'Mobile'] },
    { id: 'honkai', name: 'Honkai Impact 3rd', image: '/placeholder.png', platform: ['PC', 'Mobile'] },
    { id: 'tot', name: 'Tears of Themis', image: '/placeholder.png', platform: ['Mobile'] },
    { id: 'zenless', name: 'Zenless Zone Zero', image: '/placeholder.png', platform: ['PC', 'Mobile'] }
  ];

  // Inline styles
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px'
    },
    header: {
      backgroundColor: '#4F46E5',
      color: 'white',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '20px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    subtitle: {
      fontSize: '16px',
      opacity: '0.9'
    },
    gamesList: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      gap: '12px'
    },
    gameCard: {
      display: 'flex',
      alignItems: 'center',
      padding: '16px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      backgroundColor: 'white',
      textDecoration: 'none',
      color: 'inherit'
    },
    gameImage: {
      width: '60px',
      height: '60px',
      borderRadius: '8px',
      backgroundColor: '#f3f4f6',
      marginRight: '16px'
    },
    gameName: {
      fontSize: '18px',
      fontWeight: 'bold'
    },
    gamePlatform: {
      fontSize: '14px',
      color: '#6B7280',
      marginTop: '4px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Select a Game</h1>
        <p style={styles.subtitle}>Choose the game you want to automate</p>
      </div>
      
      <div style={styles.gamesList}>
        {games.map((game) => (
          <Link 
            key={game.id} 
            href={`/dashboard/chat?game=${game.id}`}
            style={styles.gameCard}
          >
            <div style={styles.gameImage}></div>
            <div>
              <h2 style={styles.gameName}>{game.name}</h2>
              <p style={styles.gamePlatform}>{game.platform.join(', ')}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}