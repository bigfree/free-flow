import { createFormContext } from '@mantine/form';
import { z } from 'zod';

export const FlowInfoFormSchema = z.object({
    name: z.string().min(1, 'Name is required').max(255),
    code: z.string().min(1, 'Code is required').max(255),
    externalId: z.string().max(255).nullable(),
    description: z.string().max(16000),
});

export type FlowInfoFormValues = z.infer<typeof FlowInfoFormSchema>;

export const [FlowInfoFormProvider, useFlowInfoFormContext, useFlowInfoForm] = createFormContext<FlowInfoFormValues>();
