import BreadCrumb from "@/components/layout/Breadcrumb";
import { CampaignClient } from "@/components/tables/campaign-tables/campaign";
import { campaigns } from "@/constants/data";

const breadcrumbItems = [{ title: "Campanhas", link: "/dashboard/campaigns" }];

export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <CampaignClient data={campaigns} />
      </div>
    </>
  );
}
