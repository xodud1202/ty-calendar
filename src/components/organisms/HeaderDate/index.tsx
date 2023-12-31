import { TextSpan } from '../../atoms/TextSpan';
import styled from '@emotion/styled';

const Container = styled.div`
	text-align: left;
	
	span {
		display: block;
	}
`;

export const HeaderDate = () => {
	const now = new Date();
	const year = now.getFullYear();
	const month = now.getMonth() + 1;
	const date = now.getDate();
	const day = ['일', '월', '화', '수', '목', '금', '토'][now.getDay()];
	const displayDate = `${year}년 ${month}월 ${date}일 (${day}요일)`;

	return (
		<Container>
			<TextSpan text={displayDate} fontSize={'1.0rem'} fontColor={'black'} fontWeight={'bold'} />
			<TextSpan text={displayDate} fontSize={'0.9rem'} fontColor={'#cccccc'} />
		</Container>
	);
};
