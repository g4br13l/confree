import {z} from "zod";




export const eventFormSchema = z.object({
  title: z.string().min(3).max(50),
  description: z.string().min(6).max(800),
  date: z.date().min(new Date()),
  /*imageUrl: z.string().url(),
  price: z.number().gt(0),*/
})
export type EventFormSchemaT = z.infer<typeof eventFormSchema>

