import { campaignById } from "@/actions/campaign";
import { categoryList } from "@/actions/category";
import { CampaignDetails } from "@/components/campaign/CampaignDetails";
import BreadCrumb from "@/components/layout/Breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";

type CampaignPageProps = {
  params: {
    campaignId: string;
  };
};

export default async function Page({ params }: CampaignPageProps) {
  const id = Number(params.campaignId);
  const campaign = await campaignById(id);
  const categories = await categoryList();

  const breadcrumbItems = [
    { title: "Campanhas", link: "/dashboard/campaigns" },
    { title: "Editar", link: "/dashboard/campaigns/1" },
  ];

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-5">
        <BreadCrumb items={breadcrumbItems} />
        <CampaignDetails categories={categories} campaign={campaign} />
      </div>
    </ScrollArea>
  );
}
