"use client";

import { Fragment } from "react";

import { campaignUpdate } from "@/actions/campaign";
import { CampaignForm } from "@/components/campaign/Form";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { dataTimeFormat } from "@/lib/utils";
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
  const registrationDate = new Date(campaign.dataCadastro);

  const handleSubmit = async (values: formSchemaType) => {
    try {
      await campaignUpdate(campaign.id, values);
      toast({
        title: "Success",
        description: "Campanha editada com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Erro ao editar campanha.",
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
          <strong>Cadastrada em:</strong> {dataTimeFormat(registrationDate)}
        </p>
        <p>
          <strong>Status:</strong> {campaign.status}
        </p>
      </section>
      <Separator />
      <CampaignForm
        campaign={campaign}
        categories={categories}
        onSubmit={handleSubmit}
      />
    </Fragment>
  );
}
