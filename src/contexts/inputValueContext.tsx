import React, { createContext, useState } from 'react'

interface TypeContext {
	inputValue: string
	setInputValue: (inputValue: string) => void
}

const defaultState = {
	inputValue: '',
	setInputValue: (): void => {}
}

interface componentType {
	children?: React.ReactNode
}

const InputValueContext = createContext<TypeContext>(defaultState)

const InputValueContextProvider = ({
	children
}: componentType): React.JSX.Element => {
	const [inputValue, setInputValue] = useState<string>('')

	return (
		<InputValueContext.Provider value={{ inputValue, setInputValue }}>
			{children}
		</InputValueContext.Provider>
	)
}

export { InputValueContext, InputValueContextProvider }
