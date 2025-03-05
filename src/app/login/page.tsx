// src/app/login/page.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would authenticate with your backend here
    // For now, we'll just redirect to the dashboard/games page
    console.log('Logging in with:', email, password);
    
    // Simulate successful login
    router.push('/dashboard/games');
  };

  return (
    <main style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Log In</h1>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ 
              width: '100%', 
              padding: '0.5rem', 
              border: '1px solid #ccc', 
              borderRadius: '0.25rem' 
            }}
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ 
              width: '100%', 
              padding: '0.5rem', 
              border: '1px solid #ccc', 
              borderRadius: '0.25rem' 
            }}
          />
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '1rem'
        }}>
          <div>
            <input id="remember" type="checkbox" />
            <label htmlFor="remember" style={{ marginLeft: '0.5rem' }}>Remember me</label>
          </div>
          
          <Link href="/forgot-password" style={{ color: '#3b82f6' }}>
            Forgot password?
          </Link>
        </div>
        
        <button 
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}
        >
          Log in
        </button>
      </form>
      
      <p style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        Don&apos;t have an account?{' '}
        <Link href="/signup" style={{ color: '#3b82f6' }}>
          Sign up
        </Link>
      </p>
    </main>
  );
}