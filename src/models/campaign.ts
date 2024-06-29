import { Category } from "./categories";

export enum CampaignStatus {
  ACTIVE = "ativa",
  INACTIVE = "inativa",
}

export type Campaign = {
  id: number;
  nome: string;
  dataInicio: Date;
  dataFim: Date;
  dataCadastro: Date;
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
