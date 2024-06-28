"use client";

import { Fragment } from "react";

import { campaignCreate } from "@/actions/campaign";
import { CampaignForm } from "@/components/campaign/Form";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { Campaign } from "@/models/campaign";
import { Category } from "@/models/categories";
import { formSchemaType } from "@/schemas/campaign";

type CampaignDetailsProps = {
  campaign: Campaign;
  categories: Category[];
};

export function CampaignDetails({
  campaign,
  categories,
}: CampaignDetailsProps) {
  const title = "Editar campanha";
  const description = "Edite os dados da campanha.";

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
      <section className="flex items-center justify-between">
        <Heading title={title} description={description} />
      </section>
      <Separator />
      <section className="flex items-center gap-4">
        <p>
          <strong>Cadastrada em:</strong> {campaign.dataCadastro}
        </p>
        <p>
          <strong>Status:</strong> {campaign.status}
        </p>
      </section>
      <Separator />
      <CampaignForm categories={categories} onSubmit={handleSubmit} />
    </Fragment>
  );
}
