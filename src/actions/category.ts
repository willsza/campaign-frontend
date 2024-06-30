"use server";

export const categoryList = async () => {
  const res = await fetch("http://localhost:3001/categories", {
    next: {
      tags: ["categories"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
