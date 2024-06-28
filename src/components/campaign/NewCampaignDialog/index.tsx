"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import { campaignCreate } from "@/actions/campaign";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { formSchemaType } from "@/schemas/campaign";
import { CampaignForm } from "../Form";

export function NewCampaignDialog() {
  const [open, setOpen] = useState(false);

  const categories = [
    { _id: "1", name: "Categoria 1" },
    { _id: "2", name: "Categoria 2" },
    { _id: "3", name: "Categoria 3" },
  ];

  const handleSubmit = async (values: formSchemaType) => {
    try {
      const formId = await campaignCreate(values);
      toast({
        title: "Success",
        description: "Form created successfully",
      });
      setOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong, please try again later",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
        <CampaignForm categories={categories} onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}
