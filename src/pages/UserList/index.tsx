import { useUsers } from "../../services/useUsers";

export default function UserList() {
  const { loading, error, users } = useUsers();

  console.log(loading);
  console.log(error);
  console.log(users);

  return (
    <div id="UserList" className="p-4">
      <h1 className="text-indigo-600 text-4xl">User List</h1>
    </div>
  );
}
