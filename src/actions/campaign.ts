"use server";

import { revalidateTag } from "next/cache";

import { formSchema, formSchemaType } from "@/schemas/campaign";

export async function campaignList() {
  const res = await fetch("http://localhost:3001/campaigns", {
    next: {
      tags: ["campaigns"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function campaignCreate(body: formSchemaType) {
  const validation = formSchema.safeParse(body);

  if (!validation.success) {
    throw new Error("form not valid");
  }

  const res = await fetch("http://localhost:3001/campaigns", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error("Failed to create campaign");
  }

  revalidateTag("campaigns");
  return res.json();
}

export async function campaignDelete(id: string) {
  const res = await fetch(`http://localhost:3001/campaigns/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete campaign");
  }

  revalidateTag("campaigns");
  return res.json();
}

export async function campaignUpdate(id: string, body: formSchemaType) {
  const validation = formSchema.safeParse(body);

  if (!validation.success) {
    throw new Error("form not valid");
  }

  const res = await fetch(`http://localhost:3001/campaigns/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error("Failed to update campaign");
  }

  revalidateTag("campaigns");
  return res.json();
}
