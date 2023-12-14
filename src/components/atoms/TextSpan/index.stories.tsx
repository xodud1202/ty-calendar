import { TextSpan } from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Atoms/TextSpan',
	component: TextSpan,
} satisfies Meta<typeof TextSpan>;

export default meta;
type Story = StoryObj<typeof meta>;
export const TopHeaderDate: Story = {
	args: { text: '2023년 12월', fontWeight: 'bold', fontColor: '#777777', fontSize: '1.2rem' },
};
export const BottomHeaderDate: Story = { args: { text: '2023년 10월', fontSize: '1.0rem' } };
