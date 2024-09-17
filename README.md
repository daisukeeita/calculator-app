# Calculator Application

This is a calculator application, making this project while learning the
Typescript!

Update: Changing the environment for this project

Task:
- [ ] Make button that will trigger an active state whenever a number button
is pressed on a keyboard. The trigger should be the same as the name of the
button and the value of the keyboard pressed.
    ```
    Pseudo Code:

    if btn.name('1') === event.key('1') {
        <button className="shadow-none">1</button>   
    }
    ```

    Update -> Getting the Keyboard value
    ```tsx
    const [pressedKey, setPressedKey] = useState<string>('')

	const keyHandler = (e: KeyboardEvent): void => {
		setPressedKey(e.key)
	}

    return (
        <button onKeyDown={(e: KeyboardEvent) => keyHandler(e)}>1</button>
		<p>Key pressed is: {pressedKey}</p>
    )
    ```

Goodluck to me!
