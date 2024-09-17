import { KeyboardEvent, useState } from 'react'

interface buttonParamType {
	name: string
	value: number
}

const ButtonComponent = ({
	name,
	value
}: buttonParamType): React.JSX.Element => {
	const [pressedKey, setPressedKey] = useState<string>('')

	const keyDownHandler = (e: KeyboardEvent): void => {
		e.preventDefault()
		setPressedKey(e.key)
	}

	const keyUpHandler = (e: KeyboardEvent): void => {
		e.preventDefault()
		setPressedKey('')
	}

	return (
		<>
			<button
				name={name}
				value={value}
				onKeyDown={(e: KeyboardEvent): void => keyDownHandler(e)}
				onKeyUp={(e: KeyboardEvent): void => keyUpHandler(e)}
				className={`size-16 bg-stone-700 text-stone-200 rounded-lg shadow-lg ${pressedKey === name ? 'shadow-none' : ''} shadow-stone-700 transition-all ease-in duration-75`}
			>
				{name}
			</button>
		</>
	)
}

export default ButtonComponent
