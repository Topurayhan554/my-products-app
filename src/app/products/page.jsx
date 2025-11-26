import Link from "next/link";
import React from "react";

export default async function ProductPage() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  console.log(users);

  return (
    <div className="flex flex-col">
      <h1>this is product page</h1>
      {users.map((user) => (
        <Link key={user.id} href={`products/${user.id}`}>
          {user.name}
        </Link>
      ))}
    </div>
  );
}
