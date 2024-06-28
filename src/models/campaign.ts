import { Category } from "./categories";

export enum CampaignStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export type Campaign = {
  id: number;
  nome: string;
  dataInicio: Date;
  dataFim: Date;
  dataCadastro: Date;
  categoria: Category;
  status: CampaignStatus;
  createdAt: string;
};
