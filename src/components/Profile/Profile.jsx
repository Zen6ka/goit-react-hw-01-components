import {CardWrapper, Avatar, UserName, UserProfile, Tag, Location} from './Profiled.styled';

export const Profile = ({tag, location, username, avatar, stats}) => {
	return (
	<CardWrapper>
		<UserProfile> 
			<Avatar src={avatar} alt={username} />
			<UserName>{username}</UserName>
			<Tag>{tag}</Tag>
			<Location>{location}</Location>
		</UserProfile>
	</CardWrapper>
	);
};