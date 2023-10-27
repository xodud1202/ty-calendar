import {ToDoInput} from "pages/ToDoInput";
import {ShowInputButton} from "components/ShowInputButton";
import {useState} from "react";

export const InputContainer = () => {
	const [showToDoInput, setShowToDoInput] = useState(false);

	const onClose = () => setShowToDoInput(!showToDoInput);

	return (
		<>
			{showToDoInput && <ToDoInput />}
			<ShowInputButton showToDoInput={showToDoInput} onClick={() => setShowToDoInput(!showToDoInput)}/>
		</>
	)
}