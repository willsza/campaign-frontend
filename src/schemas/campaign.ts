import { z } from "zod";

export const formSchema = z.object({
  nome: z
    .string({
      required_error: "Nome é obrigatório.",
    })
    .min(2, {
      message: "Nome deve ter no mínimo 2 caracteres.",
    }),
  dataInicio: z.date({
    required_error: "A data de início é obrigatória.",
  }),
  dataFim: z.date({
    required_error: "A data de término é obrigatória.",
  }),
  categoria: z.string({
    required_error: "Categoria é obrigatória.",
  }),
});

export type formSchemaType = z.infer<typeof formSchema>;
