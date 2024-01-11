import {
  FriendsListItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';


export const FriendListItem = ({avatar, name, isOnline}) => {
	return (
		<FriendsListItem>
    <FriendAvatar src={avatar} alt={name} width = "50"/>
    <FriendName>{name}</FriendName>
    <FriendStatus isOnline={isOnline}></FriendStatus>
  </FriendsListItem>
  );
};