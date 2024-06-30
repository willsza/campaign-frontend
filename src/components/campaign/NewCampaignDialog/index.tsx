"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import { campaignCreate } from "@/actions/campaign";
import { CampaignForm } from "@/components/campaign/Form";
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

export function NewCampaignDialog() {
  const [open, setOpen] = useState(false);

  const categories = [
    { id: "1", name: "Categoria 1" },
    { id: "2", name: "Categoria 2" },
    { id: "3", name: "Categoria 3" },
  ];

  const handleSubmit = async (values: formSchemaType) => {
    try {
      const formId = await campaignCreate(values);
      toast({
        title: "Success",
        description: "Campanha criada com sucesso.",
      });
      setOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Erro ao criar campanha.",
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
