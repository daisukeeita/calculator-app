import React, { useState } from 'react'

const TestComponent = (): React.JSX.Element => {
	const [displayValue, setDisplayValue] = useState('0')
	const [previousAction, setPreviousAction] = useState('')
	const [buttonAction, setButtonAction] = useState('')
	const [leftSideValue, setLeftSideValue] = useState('')

	const buttonValues = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'0',
		'+',
		'-',
		'/',
		'*',
		'=',
		'C'
	]

	const setActionAttribute = (el: string): string => {
		if (el === '+') return 'plus'
		if (el === '-') return 'minus'
		if (el === '/') return 'divide'
		if (el === '*') return 'multiply'
		if (el === '=') return 'equals'
		if (el === 'C') return 'clear'
		else return 'number'
	}

	const clickHandler = e => {
		const target = e.target
		const value = target.textContent
		const action = target.getAttribute('data-action')

		console.log(value, action)

		if (action === 'clear') setDisplayValue('0')

		if (displayValue === '0' && action === 'number') {
			setDisplayValue(value)
			setPreviousAction(action)
		}
		if (displayValue !== '0' && action === 'number') {
			setDisplayValue(displayValue + value)
			setPreviousAction(action)
		}

		if (previousAction !== 'number' && action === 'number')
			setDisplayValue(value)

		if (
			action === 'plus' ||
			action === 'minus' ||
			action === 'divide' ||
			action === 'multiply'
		) {
			setButtonAction(action)
			setLeftSideValue(displayValue)
			setPreviousAction(action)
		}

		if (
			action === 'equals' &&
			leftSideValue !== '' &&
			buttonAction === 'plus'
		) {
			setDisplayValue(String(Number(leftSideValue) + Number(displayValue)))
			setPreviousAction(action)
		}

		if (
			action === 'equals' &&
			leftSideValue !== '' &&
			buttonAction === 'minus'
		) {
			setDisplayValue(String(Number(leftSideValue) - Number(displayValue)))
			setPreviousAction(action)
		}

		if (
			action === 'equals' &&
			leftSideValue !== '' &&
			buttonAction === 'multiply'
		) {
			setDisplayValue(String(Number(leftSideValue) * Number(displayValue)))
			setPreviousAction(action)
		}

		if (
			action === 'equals' &&
			leftSideValue !== '' &&
			buttonAction === 'divide'
		) {
			setDisplayValue(String(Number(leftSideValue) / Number(displayValue)))
			setPreviousAction(action)
		}
	}

	return (
		<div className='text-stone-300'>
			<div>
				<span className='text-2xl'>{displayValue}</span>
			</div>
			<div className='flex gap-4 text-2xl'>
				{buttonValues.map(([el, i]) => (
					<button
						key={i}
						data-action={setActionAttribute(el)}
						onClick={clickHandler}
						className='border border-white size-14'
					>
						{el}
					</button>
				))}
			</div>
		</div>
	)
}

export default TestComponent
