export const UserInfo = ({ user }) => {
  if (!user) {
    return <span className="UserInfo">Uknown</span>;
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
