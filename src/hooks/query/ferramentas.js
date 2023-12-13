import { getFerramentas, createFerramenta } from "../../services/endpoint";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetFerramentas({
  filters,
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ["ferramentas", filters],
    queryFn: () => getFerramentas(filters),
    onSucess,
    onError,
  });
}

export function useCreateFerramenta({
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: createFerramenta,
    onSucess,
    onError,
  });
}
