import Profile from './components/profile/Profile';
import profile from './components/profile/profile.json';

import Statistics from './components/statistic/Statistics';
import statisticalData from './components/statistic/statistical-data.json';

import FriendList from './components/frendlylist/FriendList';
import friends from './components/frendlylist/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json'

export default function App() {
    return (
        <div>
            <Profile
            name={profile.name}
            tag={profile.tag}
            location={profile.location}
            avatar={profile.avatar}
            stats={profile.stats}
            />

            <Statistics title="Upload stats" stats={statisticalData} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </div>
    );
}