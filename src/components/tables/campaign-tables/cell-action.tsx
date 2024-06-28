"use client";

import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { campaignDelete } from "@/actions/campaign";
import { AlertModal } from "@/components/modal/alert-modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/use-toast";
import { Campaign } from "@/models/campaign";

interface CellActionProps {
  data: Campaign;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onConfirm = async () => {
    setLoading(true);

    try {
      await campaignDelete(data.id);
      toast({
        title: "Success",
        description: "Campanha exluida com sucesso.",
      });
      setLoading(false);
      setOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Erro ao excluir campanha.",
        variant: "destructive",
      });
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Abrir menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Ações</DropdownMenuLabel>

          <DropdownMenuItem
            onClick={() => router.push(`/dashboard/campaigns/${data.id}`)}
          >
            <Edit className="mr-2 h-4 w-4" /> Atualizar
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setOpen(true)}
            className="text-destructive"
          >
            <Trash className="mr-2 h-4 w-4" /> Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
