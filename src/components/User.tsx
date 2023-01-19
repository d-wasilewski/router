import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { users } from "../users";

export const User = () => {
  const { userId } = useParams();
  const user = users.find((u) => String(u.id) === userId);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <h2>User:</h2>
      <div>
        {user?.id} {user?.email} {user?.name}
      </div>
      <Link to="/users">Back to users</Link>
    </>
  );
};
