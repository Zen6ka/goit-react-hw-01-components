import styled from 'styled-components';

export const CardWrapper = styled.div `
	width: 250px;
	margin: 0 auto;
	gap: ${p => p.theme.spacing(8)};
	margin-bottom: ${p => p.theme.spacing(10)};
	padding-top: ${p => p.theme.spacing(6)};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-color: ${p => p.theme.colors.white};
	border: 2px solid ${p => p.theme.colors.blue};
	border-radius: ${p => p.theme.radii.md};
	box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
	-webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
	-moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
`;

export const UserProfile = styled.div `
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${p => p.theme.spacing(3)};
`;

export const Avatar = styled.img`
	width: 120px;
	border-radius:50%;
	border: 2px solid ${p => p.theme.colors.blue};
`;

export const UserName = styled.p `
	text-align: center;
	font-size: 20px;
	font-weight: 700;
`;

export const Tag = styled.p `
	font-size: 20px;
	color: ${p => p.theme.colors.gray};
`;
export const Location = styled.p `
	font-size: 20px;
	color: ${p => p.theme.colors.gray};
`;