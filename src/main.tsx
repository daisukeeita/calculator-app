import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PressedKeyContextProvider } from './contexts/PressedKeyContext.tsx'
import { InputValueContextProvider } from './contexts/inputValueContext.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<InputValueContextProvider>
			<PressedKeyContextProvider>
				<App />
			</PressedKeyContextProvider>
		</InputValueContextProvider>
	</StrictMode>
)
