import {CardWrapper, Avatar, UserName, UserProfile, Tag, Location, StatisticsList, StatItem, StatLabel, StatQuantity} from './Profiled.styled';

export const Profile = ({tag, location, username, avatar, stats}) => {
	return (
	<CardWrapper>
		<UserProfile> 
			<Avatar src={avatar} alt={username} />
			<UserName>{username}</UserName>
			<Tag>{tag}</Tag>
			<Location>{location}</Location>
		</UserProfile>

<StatisticsList>
<StatItem>
	<StatLabel>Followers</StatLabel>
	<StatQuantity>{stats.followers}</StatQuantity>
</StatItem>

	<StatItem>
		<StatLabel>Views</StatLabel>
		<StatQuantity>{stats.views}</StatQuantity>
	</StatItem>

		<StatItem>
			<StatLabel>Likes</StatLabel>
			<StatQuantity>{stats.likes}</StatQuantity>
		</StatItem>
</StatisticsList>

	</CardWrapper>
	);
};