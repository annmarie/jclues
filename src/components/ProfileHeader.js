import _ from 'lodash';

export default function ProfileHeader(props) {
  const { profile } = props;
  const username = _.get(profile, 'username', '');
  return <h1>Hi {username}</h1>;
}
