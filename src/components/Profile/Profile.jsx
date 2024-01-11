import {CardWrapper} from './Profiled.styled'


export const Profile = ({tag, location, username, avatar, stats}) => {
	return (
		<CardWrapper>
			<img src = {avatar} alt = '' width="120" height="120"/>
<p>{username}</p>
<p>{tag}</p>
<p>{location}</p>

		</CardWrapper>
	);
};