import {z} from 'zod';

export const EventSchema = z.object({
    type: z.enum(["LOGIN", "LOGOUT", "PROFILE_UPDATED", "PURCHASE"]),

    metadata:z.record(z.string(), z.any()).optional(),
})