"use server";

import { revalidateTag } from "next/cache";

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

  revalidateTag("categories");
  return res.json();
};
