import { campaignList } from "@/actions/campaign";
import BreadCrumb from "@/components/layout/Breadcrumb";
import { CampaignClient } from "@/components/tables/campaign-tables/campaign";

const breadcrumbItems = [{ title: "Campanhas", link: "/dashboard/campaigns" }];

export default async function page() {
  const data = await campaignList();

  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <CampaignClient data={data} />
      </div>
    </>
  );
}
