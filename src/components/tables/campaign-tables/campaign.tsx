"use client";

import { NewCampaignDialog } from "@/components/campaign/NewCampaignDialog";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { categories } from "@/constants/data";
import { Campaign } from "@/models/campaign";
import { Category } from "@/models/categories";
import { columns } from "./columns";

interface CampaignsProps {
  data: Campaign[];
  categories: Category[];
}

export const CampaignClient: React.FC<CampaignsProps> = ({ data }) => {
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Campanhas (${data.length})`}
          description="Gerenciamento de campanhas"
        />
        <NewCampaignDialog categories={categories} />
      </div>
      <Separator />
      <DataTable searchKey="nome" columns={columns} data={data} />
    </>
  );
};
