import {Global, css} from "@emotion/react";

function App() {
	return (
		<>
			<Global styles={css`
				@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap");
				body {font-family: 'JetBrains Mono', monospace}
			`} />
			<div>react</div>
		</>
	);
}

export default App;
