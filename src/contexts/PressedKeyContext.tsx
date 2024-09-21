import React, { createContext, useState } from 'react'

interface TypeContext {
	pressedKey: string
	//setPressedKey: React.Dispatch<React.SetStateAction<string>>
	setPressedKey: (pressedKey: string) => void
}

const defaultState = {
	pressedKey: '',
	setPressedKey: (): void => {}
}

interface typeProps {
	children?: React.ReactNode
}

const PressedKeyContext = createContext<TypeContext>(defaultState)

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
