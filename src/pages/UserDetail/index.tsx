import { useLocation, useParams } from "react-router-dom";
import { useUserById } from "../../services/useUser";

export default function UserDetail() {
  const { userId } = useParams();

  const { loading, error, user } = useUserById(userId!);

  if (loading) {
    return <div role="alert">사용자 정보 데이터 로딩 중...</div>;
  }

  if (error) {
    return <div role="alert">{error.message} 오류 발생</div>;
  }

  if (user) {
    const { name, email } = user;

    return (
      <div id="UserList" className="p-4">
        <h1 className="text-indigo-600 text-4xl">{name}</h1>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    );
  } else {
    return null;
  }
}
