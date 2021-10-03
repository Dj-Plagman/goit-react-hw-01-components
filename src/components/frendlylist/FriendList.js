import PropTypes from 'prop-types';
import styles from './FriendList.module.css'

function friendOnline(status) {
    if (status) {
      return '#2ECC71';
    } else {
      return '#E74C3C';
    }
  };
  
  export default function FriendList ({ friends }) {
    
    return (
      <div>
        <ul className={styles["friend-list"]}>
          {friends.map(friend => (
            <li className={styles.item} key={friend.id}>
              <span
                style={{ color: friendOnline(friend.isOnline) }}
              >
                {' '}
                ●
              </span>
              <img
                src={friend.avatar}
                alt={friend.name}
                className={styles.avatar}
                width="60"
              />
              <p className={styles.name}>{friend.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ).isRequired,
};