"use server";

import { revalidateTag } from "next/cache";

import { formSchema, formSchemaType } from "@/schemas/campaign";

/**
 * Fetches the list of campaigns.
 * @returns A promise that resolves to the list of campaigns.
 * @throws An error if the request fails.
 */
export async function campaignList() {
  const res = await fetch("http://localhost:3001/campaigns", {
    next: {
      tags: ["campaigns"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  revalidateTag("campaigns");
  return res.json();
}

/**
 * Fetches a campaign by ID.
 * @param id - The ID of the campaign to fetch.
 * @returns A promise that resolves to the campaign.
 * @throws An error if the request fails.
 */
export async function campaignById(id: number) {
  const res = await fetch(`http://localhost:3001/campaigns/${id}`, {
    next: {
      tags: ["campaigns"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

/**
 * Creates a new campaign.
 * @param body - The data for the new campaign.
 * @returns A promise that resolves to the created campaign.
 * @throws An error if the form is not valid or the request fails.
 */
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

/**
 * Updates a campaign.
 * @param id - The ID of the campaign to update.
 * @param body - The updated data for the campaign.
 * @returns A promise that resolves to the updated campaign.
 * @throws An error if the form is not valid or the request fails.
 */
export async function campaignUpdate(id: number, body: formSchemaType) {
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

/**
 * Deletes a campaign.
 * @param id - The ID of the campaign to delete.
 * @returns A promise that resolves to the deleted campaign.
 * @throws An error if the request fails.
 */
export async function campaignDelete(id: number) {
  const res = await fetch(`http://localhost:3001/campaigns/${id}`, {
    method: "DELETE",
  });

  if (!res) {
    throw new Error("Failed to delete campaign");
  }

  revalidateTag("campaigns");
}
