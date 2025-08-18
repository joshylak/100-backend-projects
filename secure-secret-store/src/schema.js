import { z } from 'zod';

export const SignupSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8)
  })
});
export const LoginSchema = SignupSchema;

export const CreateSecretSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    value: z.string().min(1),
    metadata: z.record(z.any()).optional(),
    ttlSeconds: z.number().int().positive().optional(),
    oneTime: z.boolean().optional()
  })
});

export const GetSecretSchema = z.object({
  params: z.object({
    name: z.string().min(1)
  }),
  query: z.object({
    version: z.coerce.number().int().positive().optional()
  })
});

export const ListSecretsSchema = z.object({
  query: z.object({
    name: z.string().optional()
  })
});
