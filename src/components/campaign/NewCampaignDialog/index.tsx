"use client";

import { Plus } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CampaignForm } from "../Form";

// import { useTaskStore } from '@/lib/store';

export function NewCampaignDialog() {
  // const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const { title, description } = Object.fromEntries(formData);

    if (typeof title !== "string" || typeof description !== "string") return;
    // addTask(title, description);
  };

  const categories = [
    { _id: "1", name: "Categoria 1" },
    { _id: "2", name: "Categoria 2" },
    { _id: "3", name: "Categoria 3" },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xs md:text-sm">
          <Plus className="mr-2 h-4 w-4" /> Nova Campanha
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Nova campanha</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para criar uma nova campanha.
          </DialogDescription>
        </DialogHeader>
        <CampaignForm categories={categories} />
      </DialogContent>
    </Dialog>
  );
}
