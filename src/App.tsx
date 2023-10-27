import styled from '@emotion/styled';
import {Route, Routes} from 'react-router-dom';
import {DataView} from "pages/DataView";
import {ToDoListContextProvider} from "contexts/ToDoList";
import {ToDoInput} from "./pages/ToDoInput";


const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #eeeeee;
`;

const NotFound = styled.div`
	text-align: center;
`;

function App() {
	return (
		<Container>
			<ToDoListContextProvider>
				<Routes>
					<Route path={"/"} element={<DataView />} />
					<Route path={"/add"} element={<ToDoInput />} />
					<Route path={"*"} element={
						<NotFound>
							404<br/>NOT FOUND
						</NotFound>
					}/>
				</Routes>

			</ToDoListContextProvider>
		</Container>
	);
}

export default App;
