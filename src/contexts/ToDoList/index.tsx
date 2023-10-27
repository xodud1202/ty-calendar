import {createContext, useState} from "react";

interface Context {
	readonly toDoList: string[];
	readonly onAdd: (toDo: string) => void;
	readonly onDelete: (toDo: string) => void;
}

const ToDoListContext = createContext<Context>({
	toDoList: [],
	// 아래 never 함수를 설정한것은 Provider로 감싸지지 않은 컨포넌트에서
	// createContext를 통해 해당 함수를 호출하면 여기서 정의된 함수가 호출된다.
	onAdd: (toDo: string): never => {
		throw new Error(`onAdd function not implemented. odAdd(${toDo})`);
	},
	onDelete: (toDo: string): never => {
		throw new Error(`onDelete function not implemented. onDelete(${toDo})`);
	},
});

interface Props {
	children: JSX.Element | JSX.Element[];
}

const ToDoListContextProvider = ({children}: Props) => {
	const [toDoList, setToDoList] = useState(['리액트 공부하기', 'CDD 공부하기', '할 일 목록 앱 개발하기']);

	const onDelete = (toDo: string) => {
		setToDoList(toDoList.filter(item => item !== toDo));
	}

	const onAdd = (toDo: string) => {
		setToDoList([...toDoList, toDo]);
	}

	return (
		<ToDoListContext.Provider value={{toDoList, onAdd, onDelete}}>
			{children}
		</ToDoListContext.Provider>
	)
}

export {ToDoListContext, ToDoListContextProvider};