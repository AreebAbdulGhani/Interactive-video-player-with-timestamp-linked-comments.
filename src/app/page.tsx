import BackgroundWords from '@/components/BackgroundWords';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ 
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#4C1D95', 
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <BackgroundWords />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <h1 style={{ color: 'pink', marginBottom: '20px' }}>Anime Hub</h1>
        <p style={{ marginBottom: '30px' }}>All your anime content in one place</p>
        
        <Link href="/player" className="px-8 py-3 bg-gradient-to-r from-[#FF00FF] to-[#9400D3] text-white font-bold rounded-lg shadow-lg shadow-[#FF00FF]/30 hover:shadow-[#FF00FF]/50 transition-all duration-300 hover:scale-105">
          Launch Anime Player
        </Link>
      </div>
    </div>
  );
}
