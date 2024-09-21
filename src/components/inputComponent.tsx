import { useContext } from 'react'
import { InputValueContext } from '../contexts/inputValueContext.tsx'

const InputComponent = (): React.JSX.Element => {
	const { inputValue } = useContext(InputValueContext)

	return (
		<div className='border border-blue-300 rounded-lg outline-none h-20 p-2 flex flex-row-reverse items-end tracking-wider'>
			<span className='text-2xl text-slate-300'>{inputValue}</span>
		</div>
	)
}

export default InputComponent
