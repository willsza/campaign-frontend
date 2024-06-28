"use client";

import { Fragment } from "react";

import { campaignCreate } from "@/actions/campaign";
import { CampaignForm } from "@/components/campaign/Form";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { formSchemaType } from "@/schemas/campaign";

export function CampaignDetails() {
  const title = "Editar campanha";
  const description = "Edite os dados da campanha.";

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
        description: "Campanha criada com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Erro ao criar campanha.",
        variant: "destructive",
      });
    }
  };

  return (
    <Fragment>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
      </div>
      <Separator />
      <section>
        <p>Cadastrada em: </p>
      </section>
      <Separator />
      <CampaignForm categories={categories} onSubmit={handleSubmit} />
    </Fragment>
  );
}
