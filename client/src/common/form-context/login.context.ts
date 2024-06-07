import { createFormContext } from '@mantine/form';
import { z } from 'zod';

export const LoginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export type LoginFormValues = z.infer<typeof LoginFormSchema>;

export const [LoginFormProvider, useLoginFormContext, useLoginForm] = createFormContext<LoginFormValues>();
