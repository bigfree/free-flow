import { z } from 'zod';
import { createFormContext } from '@mantine/form';
import { ActionType } from '@/generated/freeFlow/graphql.ts';
import { ActionVariableObjectSchema } from '@common/form-context/variable-info.context.ts';

export const ActionInfoFormSchema = z.object({
    color: z.string().nullable(),
    type: z.nativeEnum(ActionType),
    width: z.number().min(50).nullable(),
    height: z.number().min(50).nullable(),
    radius: z.number().min(0).nullable(),
    name: z.string().min(1, 'Name is required').max(255),
    description: z.string().optional().nullable(),
    class: z.string().max(255).nullable(),
    code: z.string().max(16800).nullable().optional(),
    variables: z.array(ActionVariableObjectSchema),
});

export type ActionInfoFormValues = z.infer<typeof ActionInfoFormSchema>;

export const [ActionInfoFormProvider, useActionInfoFormContext, useActionInfoForm] =
    createFormContext<ActionInfoFormValues>();
