import { LogoComponent } from '@magneto365-ui/primitives/Logo'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Tree-Shaking Test - Only Logo</h1>
      <p>This app only imports Logo. Check the bundle size - it should be much smaller.</p>

      <LogoComponent logo="https://via.placeholder.com/150x50?text=Logo" alt="Test Logo" />

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f5f5f5', borderRadius: '8px' }}>
        <h3>Expected Result:</h3>
        <ul>
          <li>✓ Logo.min.css should be included (~226 B)</li>
          <li>✗ Button, Badge, Typography, Avatar CSS should NOT be included</li>
          <li>Total CSS should be ~226 B (not 15+ KB)</li>
        </ul>
      </div>
    </div>
  )
}

export default App
