import {css, Global} from '@emotion/react';
import {StoryObj} from '@storybook/react';

export const decorators = [
	(StoryObj) => (
		<>
			<Global styles={css`
				@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

				body {
					font-family: 'JetBrains Mono', monospace;
				}
			`}/>
			<StoryObj/>
		</>
	),
];

export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/i,
		},
	},
};