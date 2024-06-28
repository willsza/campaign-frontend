import { CampaignDetails } from "@/components/campaign/CampaignDetails";
import BreadCrumb from "@/components/layout/Breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { campaigns } from "@/constants/data";

export default function Page() {
  const breadcrumbItems = [
    { title: "Campanhas", link: "/dashboard/campaigns" },
    { title: "Editar", link: "/dashboard/campaign/1" },
  ];

  const categories = [
    { _id: "1", name: "Categoria 1" },
    { _id: "2", name: "Categoria 2" },
    { _id: "3", name: "Categoria 3" },
  ];

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-5">
        <BreadCrumb items={breadcrumbItems} />
        <CampaignDetails categories={categories} campaign={campaigns[0]} />
      </div>
    </ScrollArea>
  );
}
