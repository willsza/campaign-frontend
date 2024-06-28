import { CampaignDetails } from "@/components/campaign/CampaignDetails";
import BreadCrumb from "@/components/layout/Breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Page() {
  const breadcrumbItems = [
    { title: "User", link: "/dashboard/user" },
    { title: "Create", link: "/dashboard/user/create" },
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
