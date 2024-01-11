import styled from 'styled-components';

export const CardWrapper = styled.div `
	width: 300;
	margin: 0, auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

`
export const UserProfile = styled.div `
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${p => p.theme.spacing(3)};
`

export const Avatar = styled.img`
	width: 120px;
	
`;

export const UserName = styled.p `
	text-align: center;
	font-size: 20px;
	font-weight: 700;
`

export const Tag = styled.p `
	font-size: 20px;
	text-align: center;
`
export const Location = styled.p `
	font-size: 20px;
	text-align: center;
`