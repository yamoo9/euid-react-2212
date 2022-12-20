import { useUserById } from "../../services/useUser";

export default function UserDetail() {
  const { loading, error, user } = useUserById("user-ockdk");

  console.log(user);

  return (
    <div id="UserList" className="p-4">
      <h1 className="text-indigo-600 text-4xl">User Name</h1>
    </div>
  );
}
