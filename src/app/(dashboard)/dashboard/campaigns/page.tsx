import { Fragment } from "react";

import { campaignList } from "@/actions/campaign";
import { categoryList } from "@/actions/category";
import BreadCrumb from "@/components/layout/Breadcrumb";
import { CampaignClient } from "@/components/tables/campaign-tables/campaign";

const breadcrumbItems = [{ title: "Campanhas", link: "/dashboard/campaigns" }];

export default async function page() {
  const data = await campaignList();
  const categories = await categoryList();

  return (
    <Fragment>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <CampaignClient data={data} categories={categories} />
      </div>
    </Fragment>
  );
}
