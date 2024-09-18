import React, { createContext, useState } from 'react'

interface TypeContext {
	pressedKey?: string
	setPressedKey: React.Dispatch<React.SetStateAction<string>>
}

interface typeProps {
	children?: React.ReactNode
}

const PressedKeyContext = createContext<TypeContext | undefined>(undefined)

const PressedKeyContextProvider = ({
	children
}: typeProps): React.JSX.Element => {
	const [pressedKey, setPressedKey] = useState<string>('')

	return (
		<PressedKeyContext.Provider value={{ pressedKey, setPressedKey }}>
			{children}
		</PressedKeyContext.Provider>
	)
}

export { PressedKeyContext, PressedKeyContextProvider }
