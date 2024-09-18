import { KeyboardEvent, useContext } from 'react'
import { PressedKeyContext } from '../contexts/PressedKeyContext.tsx'

interface buttonParamType {
	name: string
	value: number
}

const ButtonComponent = ({
	name,
	value
}: buttonParamType): React.JSX.Element => {
	const { pressedKey, setPressedKey } = useContext(PressedKeyContext)

	const keyDownHandler = (e: KeyboardEvent): void => {
		e.preventDefault()
		setPressedKey(e.key)
	}

	const keyUpHandler = (e: KeyboardEvent): void => {
		e.preventDefault()
		setPressedKey('')
	}

	const pressedKeyHandler = (name: string): string => {
		if (pressedKey === name) {
			return 'bg-cyan-700 shadow-none'
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
				onKeyUp={(e: KeyboardEvent): void => keyUpHandler(e)}
				className={`size-16 bg-stone-700 active:bg-cyan-700 text-stone-200 rounded-lg shadow-lg ${pressedKeyHandler(name)} shadow-stone-700 active:shadow-none transition-shadow duration-75 ease-in`}
			>
				{name}
			</button>
		</>
	)
}

export default ButtonComponent
