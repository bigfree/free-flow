import { z } from 'zod';
import { createFormContext } from '@mantine/form';

export const ActionVariableObjectSchema = z.object({
    id: z.string().min(1, 'ID is required'),
    name: z.string().min(1, 'Name is required'),
    type: z.string().min(1, 'Type is required'),
    description: z.string().max(500).optional(),
});

export type VariableDataValues = z.infer<typeof ActionVariableObjectSchema>;

export const [VariableInfoFormProvider, useVariableInfoFormContext, useVariableInfoForm] =
    createFormContext<VariableDataValues>();
