import styled from '@emotion/styled';
import {Header} from "components/Header";
import {BlogPost} from "components/BlogPost";
import {useEffect, useState} from "react";
import {Button} from "./components/Button";
import {Form} from "./components/Form";

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #eeeeee;
	overflow: scroll;
`;

const ButtonContainer = styled.div`
	position: absolute;
	right: 40px;
	bottom: 40px;
`;

interface Post {
	readonly boardNo: number;
	readonly title: string;
	readonly content: string;
}

function App() {
	const [posts, setPosts] = useState<ReadonlyArray<Post>>([]);
	const [showForm, setShowForm] = useState(false);

	useEffect(() => {
		// fetch("https://jsonplaceholder.typicode.com/posts")
		fetch("https://kotlin.xodud1202.kro.kr/board/boards")
			.then(response => response.json())
			.then(result => setPosts(result))
			.catch(error => alert(error));
	}, []);

	return (
		<Container>
			<Header />
			{posts.map(post => (
					<BlogPost key={post.boardNo} title={post.title} body={post.content} />
			))}
			<ButtonContainer>
				<Button label={"등록"} color={"gray"} onClick={() => setShowForm(true)} />
			</ButtonContainer>
			{showForm && <Form onClose={() => setShowForm(false)}/>}
		</Container>
	);
}

export default App;
