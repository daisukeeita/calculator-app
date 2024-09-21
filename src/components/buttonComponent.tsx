import { KeyboardEvent, useContext } from 'react'
import { PressedKeyContext } from '../contexts/PressedKeyContext.tsx'
import { InputValueContext } from '../contexts/inputValueContext.tsx'

interface buttonParamType {
	name: string
	value: number | string
}

const ButtonComponent = ({
	name,
	value
}: buttonParamType): React.JSX.Element => {
	const { pressedKey, setPressedKey } = useContext(PressedKeyContext)
	const { inputValue, setInputValue } = useContext(InputValueContext)

	const keyDownHandler = (e: KeyboardEvent): void => {
		e.preventDefault()
		setPressedKey(e.key)

		if (e.key === 'Delete') {
			setInputValue('')
		}
	}

	const keyUpHandler = (name: string): undefined => {
		if (pressedKey === name) {
			setInputValue(inputValue + pressedKey)
		}
		setPressedKey('')
	}

	const mouseClickHandler = (): void => {
		setInputValue(inputValue + value)
	}

	const clearAllHandler = (): void => {
		setInputValue('')
	}

	const pressedKeyHandler = (name: string): string => {
		if (pressedKey === String(name)) {
			return 'shadow-md shadow-inner'
		} else {
			return ''
		}
	}

	return (
		<>
			<button
				name={name}
				value={value}
				onKeyDown={(e: KeyboardEvent): void => keyDownHandler(e)}
				onKeyUp={keyUpHandler(name)}
				onClick={value === 'C' ? clearAllHandler : mouseClickHandler}
				className={`size-16 bg-slate-300 text-gray-800 rounded-lg shadow-lg ${pressedKeyHandler(name)} shadow-slate-400  active:shadow-inner transition-all duration-75 ease-in`}
			>
				{name}
			</button>
		</>
	)
}

export default ButtonComponent
