import { Category } from "./categories";

export enum CampaignStatus {
  ACTIVE = "Ativa",
  INACTIVE = "Inativa",
}

export type Campaign = {
  id: number;
  nome: string;
  dataInicio: string;
  dataFim: string;
  dataCadastro: string;
  categoria: Category;
  status: CampaignStatus;
};

export type CampaignCreateParams = {
  nome: string;
  dataInicio: string;
  dataFim: string;
  categoria: string;
};

export type CampaignUpdateParams = CampaignCreateParams;
