import React from "react";

export default async function page({ params }) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return (
    <div>
      <h1>this is product details page : {data.name}</h1>
    </div>
  );
}
