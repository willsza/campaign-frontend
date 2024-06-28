import BreadCrumb from "@/components/layout/Breadcrumb";
import { CampaignClient } from "@/components/tables/campaign-tables/campaign";

const breadcrumbItems = [{ title: "Campanhas", link: "/dashboard/campaigns" }];

async function getData() {
  const res = await fetch("http://localhost:3001/campaigns", {
    next: {
      tags: ["campaigns"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function page() {
  const data = await getData();

  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <CampaignClient data={data} />
      </div>
    </>
  );
}
