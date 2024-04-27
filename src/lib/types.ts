import { z } from 'zod';

const zodNumberOrNumberAsString = z
  .number()
  .or(
    z
      .string()
      .transform((val) => {
        const parsedValue = parseFloat(val);
        return isNaN(parsedValue) ? val : parsedValue.toString(); // Convert back to string
      })
  )
  .refine((val) => !isNaN(val as number), {
    message: 'Must be a number',
  });

export const ProductSchema = z.object({
    id: z.string().optional(),
    attributes: z.object({
        sku: z.string().trim().min(1).max(20),
        name: z.string().trim().min(3).max(30),
        price: zodNumberOrNumberAsString.optional().nullable(),
        notes: z.string().trim().optional().nullable(),
        width: zodNumberOrNumberAsString.optional().nullable(),
        height: zodNumberOrNumberAsString.optional().nullable(),
        length: zodNumberOrNumberAsString.optional().nullable(),
        weight: zodNumberOrNumberAsString.optional().nullable(),
        barcode: zodNumberOrNumberAsString.optional().nullable(),
        value: zodNumberOrNumberAsString.optional().nullable(),
        customs_price: zodNumberOrNumberAsString.optional().nullable(),
        customs_description: z.string().trim().optional().nullable(),
        country_of_origin: z.string().trim().optional().nullable(),
        tags: z.string().trim().optional().nullable()
    }),
})

export type Product = z.infer<typeof ProductSchema>;

export type SearchParams = {
    selectedProduct?: string;
    filter?: string;
}