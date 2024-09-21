import React from 'react'
import ButtonComponent from './components/buttonComponent.tsx'
import InputComponent from './components/inputComponent.tsx'

const buttonName = [
	['/', '*', '-'],
	['1', '2', '3'],
	['4', '5', '6'],
	['7', '8', '9'],
	['0', '.', '='],
	['+', 'C']
]

const App = (): React.JSX.Element => {
	return (
		<div>
			<div>
				<InputComponent />
			</div>
			<div>
				{buttonName.flat().map(
					([el, i]: string): React.JSX.Element => (
						<ButtonComponent key={i} name={el} value={el} />
					)
				)}
			</div>
		</div>
	)
}

export default App
