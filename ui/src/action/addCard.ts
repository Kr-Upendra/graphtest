"use server";

export async function create(formdata: FormData) {
  const title = formdata.get("title");

  if (!title) return { message: "please provide title" };

  const response = await fetch("http://localhost:3000/api/card/add", {
    method: "POST",

    body: JSON.stringify({ title }),
  });

  if (!response.ok) {
    return { message: "error while adding card" };
  }

  return { message: "New card added" };
}
