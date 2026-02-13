import { useState } from 'react'
import { LogoComponent } from '@magneto365-ui/primitives/Logo'
import { Button } from '@magneto365-ui/primitives/Button'
import { Badge } from '@magneto365-ui/primitives/Badge'
import { Typography } from '@magneto365-ui/primitives/Typography'
import { Avatar } from '@magneto365-ui/primitives/Avatar'
import { Link } from '@magneto365-ui/primitives/Link'
import { Alert } from '@magneto365-ui/primitives/Alert'
import { Tooltip } from '@magneto365-ui/primitives/Tooltip'

function App() {
  const [showComponents, setShowComponents] = useState({
    logo: true,
    button: false,
    badge: false,
    typography: false,
    avatar: false,
    link: false,
    alert: false,
    tooltip: false
  })

  const toggleComponent = (component: keyof typeof showComponents) => {
    setShowComponents((prev) => ({
      ...prev,
      [component]: !prev[component]
    }))
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Primitives CSS Auto-Loading Test</h1>

      <div style={{ marginBottom: '2rem' }}>
        <h2>Instructions:</h2>
        <p>
          Open DevTools Network tab and filter by CSS. Toggle components on/off to see which CSS files are loaded. Each
          component should only load its own CSS file.
        </p>
      </div>

      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button onClick={() => toggleComponent('logo')}>Toggle Logo {showComponents.logo ? '✓' : ''}</button>
        <button onClick={() => toggleComponent('button')}>Toggle Button {showComponents.button ? '✓' : ''}</button>
        <button onClick={() => toggleComponent('badge')}>Toggle Badge {showComponents.badge ? '✓' : ''}</button>
        <button onClick={() => toggleComponent('typography')}>
          Toggle Typography {showComponents.typography ? '✓' : ''}
        </button>
        <button onClick={() => toggleComponent('avatar')}>Toggle Avatar {showComponents.avatar ? '✓' : ''}</button>
        <button onClick={() => toggleComponent('link')}>Toggle Link {showComponents.link ? '✓' : ''}</button>
        <button onClick={() => toggleComponent('alert')}>Toggle Alert {showComponents.alert ? '✓' : ''}</button>
        <button onClick={() => toggleComponent('tooltip')}>Toggle Tooltip {showComponents.tooltip ? '✓' : ''}</button>
      </div>

      <div
        style={{
          border: '1px solid #ccc',
          padding: '2rem',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}
      >
        <h2>Component Display:</h2>

        {showComponents.logo && (
          <div>
            <h3>Logo Component</h3>
            <LogoComponent logo="https://via.placeholder.com/150x50?text=Logo" alt="Test Logo" />
          </div>
        )}

        {showComponents.button && (
          <div>
            <h3>Button Component</h3>
            <Button variant="primary">Primary Button</Button>
          </div>
        )}

        {showComponents.badge && (
          <div>
            <h3>Badge Component</h3>
            <Badge variant="success">Success Badge</Badge>
          </div>
        )}

        {showComponents.typography && (
          <div>
            <h3>Typography Component</h3>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="body1">This is body text with Typography component</Typography>
          </div>
        )}

        {showComponents.avatar && (
          <div>
            <h3>Avatar Component</h3>
            <Avatar src="https://via.placeholder.com/100" alt="User Avatar" size="large" />
          </div>
        )}

        {showComponents.link && (
          <div>
            <h3>Link Component</h3>
            <Link type="link" href="#" text="This is a link" />
            <br />
            <Link
              type="button"
              href="#"
              text="Button Link"
              linkStyles={{ textColor: '#14141C', buttonColor: '#f0f0f0' }}
            />
          </div>
        )}

        {showComponents.alert && (
          <div>
            <h3>Alert Component</h3>
            <Alert type="success" text="This is a success alert!" border />
            <br />
            <Alert type="error" text="This is an error alert!" border />
          </div>
        )}

        {showComponents.tooltip && (
          <div>
            <h3>Tooltip Component</h3>
            <Tooltip title="This is a tooltip!" position="top">
              <button style={{ padding: '10px 20px' }}>Hover me</button>
            </Tooltip>
          </div>
        )}
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f5f5f5', borderRadius: '8px' }}>
        <h3>Expected CSS Files:</h3>
        <ul>
          <li>Logo.min.css - {showComponents.logo ? '✓ Should be loaded' : '✗ Should NOT be loaded'}</li>
          <li>Button.min.css - {showComponents.button ? '✓ Should be loaded' : '✗ Should NOT be loaded'}</li>
          <li>Badge.min.css - {showComponents.badge ? '✓ Should be loaded' : '✗ Should NOT be loaded'}</li>
          <li>Typography.min.css - {showComponents.typography ? '✓ Should be loaded' : '✗ Should NOT be loaded'}</li>
          <li>Avatar.min.css - {showComponents.avatar ? '✓ Should be loaded' : '✗ Should NOT be loaded'}</li>
          <li>Link.min.css - {showComponents.link ? '✓ Should be loaded' : '✗ Should NOT be loaded'}</li>
          <li>Alert.min.css - {showComponents.alert ? '✓ Should be loaded' : '✗ Should NOT be loaded'}</li>
          <li>Tooltip.min.css - {showComponents.tooltip ? '✓ Should be loaded' : '✗ Should NOT be loaded'}</li>
        </ul>
        <p>
          <strong>Note:</strong> All toggled components' CSS will be loaded in the bundle at build time. This test shows
          which components are included.
        </p>
      </div>
    </div>
  )
}

export default App
