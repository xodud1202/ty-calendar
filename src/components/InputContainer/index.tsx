import {ToDoInput} from "components/ToDoInput";
import {ShowInputButton} from "components/ShowInputButton";
import {useState} from "react";

export const InputContainer = () => {
	const [showToDoInput, setShowToDoInput] = useState(false);

	return (
		<>
			{showToDoInput && <ToDoInput />}
			<ShowInputButton showToDoInput={showToDoInput} onClick={() => setShowToDoInput(!showToDoInput)}/>
		</>
	)
}