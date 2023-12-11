import { createTool, deleteTool, updateTool, getTool } from "../services/endpoints";

import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetTools({
  filters,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ["tool", filters],
    queryFn: () => getTool(filters),
    onSuccess,
    onError,
  });
}

export function useCreateTool({ onSuccess = () => {}, onError = (err) => console.log(err) } = {}) {
  return useMutation({
    mutationFn: createTool,
    onSuccess,
    onError,
  });
}

export function useUpdateTool({ onSuccess = () => {}, onError = (err) => console.log(err) } = {}) {
  return useMutation({
    mutationFn: updateTool,
    onSuccess,
    onError,
  });
}

export function useDeleteTool({ onSuccess = () => {}, onError = (err) => console.log(err) } = {}) {
  return useMutation({
    mutationFn: deleteTool,
    onSuccess,
    onError,
  });
}
