import Link from "next/link";

const User = () => {
  return (
    <div>
      <ul className="mt-10">
        <li>
          <Link href="/dashboard/users/user1">User1</Link>
        </li>
        <li>
          <Link href="/dashboard/users/user2">User2</Link>
        </li>
        <li>
          <Link href="/dashboard/users/user3">User3</Link>
        </li>
      </ul>
    </div>
  );
};

export default User;
