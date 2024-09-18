import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PressedKeyContextProvider } from './contexts/PressedKeyContext.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<PressedKeyContextProvider>
			<App />
		</PressedKeyContextProvider>
	</StrictMode>
)
