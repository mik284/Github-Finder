import React from "react";
import { useContext } from "react";
import Spinner from "../layout/assets/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const { users, loading} = useContext(GithubContext);
  //   hold the fetched state from api
  //   const [users, setUsers] = useState([]);

  //   const [loading, setLoading] = useState(true);

  // display the results which is fetched
//    useEffect(() => {
//     fetchUsers();
//   });

  //    Send and Fetch api from .env
  //   const fetchUsers = async () => {
  //     const reponse = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
  //       headers: {
  //         Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  //       },
  //     });

  //     const data = await reponse.json();

  //     setUsers(data);
  //     setLoading(false);
  //   };

  //   Add a spinner to loading
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
