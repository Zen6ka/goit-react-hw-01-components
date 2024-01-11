import styled from 'styled-components';

const StatusColor = props => {
	return props.isOnline ? 'green' : 'red';
};

export const FriendsListItem = styled.li`
	width: 100%;
	display: flex;
	align-items: center;
	gap: ${p => p.theme.spacing(4)};
	padding: ${p => p.theme.spacing(4)};
	background-color: ${p => p.theme.colors.white};
	border: 2px solid ${p => p.theme.colors.gray};
	border-radius: ${p => p.theme.radii.md};
	box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
	-webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
	-moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};

	&:hover {
	border-color: ${p => p.theme.colors.shadowblue};
	}
`;

export const FriendStatus = styled.span`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: ${StatusColor};
`;

export const FriendAvatar = styled.img`
	border: 2px solid ${p => p.theme.colors.shadowblue};
	border-radius: ${p => p.theme.radii.md};
	box-shadow: 5px 5px 15px 1px ${p => p.theme.colors.shadowblue};
	-webkit-box-shadow: 5px 5px 15px 1px ${p => p.theme.colors.shadowblue};
	-moz-box-shadow: 5px 5px 15px 1px ${p => p.theme.colors.shadowblue};
`;

export const FriendName = styled.p`
	font-size: 24px;
	font-weight: 700;
`;