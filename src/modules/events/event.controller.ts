import {Request, Response, NextFunction} from "express";
import { createEvent } from "./event.service";
import { createEventSchema } from "./event.validation";

export const createEventController = async(req: Request, res:Response, next: NextFunction) => {
    const validatedData = createEventSchema.parse(req.body);
    const userId = "123" // placeholder

    const event = await createEvent({
        userId,
        type: validatedData.type,
        metadata:validatedData.metadata,
    });

    res.status(201).json(event);
}