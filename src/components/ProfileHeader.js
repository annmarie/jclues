export default function ProfileHeader(props) {
  const { profile } = props;
  const { username } = profile;
  return (
    <>
      <h1>Hi {username}</h1>
    </>
  );
}
