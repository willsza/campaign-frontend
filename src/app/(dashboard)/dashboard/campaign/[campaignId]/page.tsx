import { CampaignDetails } from "@/components/campaign/CampaignDetails";
import BreadCrumb from "@/components/layout/Breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Page() {
  const breadcrumbItems = [
    { title: "Campanhas", link: "/dashboard/campaigns" },
    { title: "Editar", link: "/dashboard/campaign/1" },
  ];
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-5">
        <BreadCrumb items={breadcrumbItems} />
        <CampaignDetails />
      </div>
    </ScrollArea>
  );
}
