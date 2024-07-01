"use server";

import { API_BASE } from "@/constants/constants";

export const categoryList = async () => {
  const res = await fetch(`${API_BASE}/categories`, {
    next: {
      tags: ["categories"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
