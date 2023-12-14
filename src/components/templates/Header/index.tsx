import { HamburgerButton } from 'components/atoms/HamburgerButton';
import styled from '@emotion/styled';
import {HeaderDate} from "components/organisms/HeaderDate";
import {TextSpan} from "components/atoms/TextSpan";

const HeaderWrapper = styled.div`
	height: 5vh;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	& > div {
		display: inline-block;
	}
`;

const AddButtonDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	
`;

const HamburgerButtonWrapper = styled.div`
	width: 5vh;	// HeaderWrapper의 height와 동일하게 움직일것.
`;

export const Header = () => {
	return (
		<HeaderWrapper>
			<HamburgerButtonWrapper>
				<HamburgerButton />
			</HamburgerButtonWrapper>
			<HeaderDate />
			<AddButtonDiv>
				<TextSpan text={'+'} fontSize={'3.0rem'}></TextSpan>
			</AddButtonDiv>
		</HeaderWrapper>
	);
};
