import user from './Profile/user.json';
import { Profile } from './Profile/Profile';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container.styled';
import data from './Statictics/data.json';
import { Statistics } from './Statictics/Statistics';


export const App = () => {
  return (
		<Container>
		<Profile
			username={user.username}
			tag={user.tag}
			location={user.location}
			avatar={user.avatar}
			stats={user.stats}
		/>

		<GlobalStyle />
		</Container>
  );
};

