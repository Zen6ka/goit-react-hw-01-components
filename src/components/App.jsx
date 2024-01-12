import user from './Profile/user.json';
import { Profile } from './Profile/Profile';

import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container.styled';

import data from './Statictics/data.json';
import { Statistics } from './Statictics/Statistics';

import friends from './Friends/friends.json';
import { FriendList } from './Friends/FriendList/FriendList';

import transactions from '../components/HistoryTransactions/transactions.json';
import {TransactionHistory} from './HistoryTransactions/HistoryTransactions';


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
	<Statistics title="Upload stats" stats={data} />
	<FriendList friends={friends} />
	<TransactionHistory items={transactions} />
		<GlobalStyle />
	</Container>
  );
};

