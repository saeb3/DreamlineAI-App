import { z } from "zod";

export const formSchema = z.object({
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.string().optional(),
  selfDescription: z.string().optional(),
  email: z.string().email("Invalid email address"),
  address: z.object({
    street: z.string().min(1, "Street address is required"),
    address2: z.string().optional(),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    zipCode: z.string().min(1, "Zip code is required"),
  }),
  renewableTech: z.object({
    windows: z.union([z.boolean(), z.string()]),
    heating: z.union([z.boolean(), z.string()]),
    water: z.union([z.boolean(), z.string()]),
    lighting: z.union([z.boolean(), z.string()]),
    solar: z.union([z.boolean(), z.string()]),
    ev: z.union([z.boolean(), z.string()]),
    notSure: z.union([z.boolean(), z.string()]),
  }),
  sector: z.string().min(1, "Sector selection is required"),
});
