import prisma from "../../config/db";

interface CreateEventInput{
    userId: string;
    type: string;
    metadata: Record<string, unknown>;
}

export const createEvent = async({
    userId,
    type,
    metadata
}: CreateEventInput) => {
    const event = await prisma.event.create({
        data: {
            userId,
            type,
            metadata
        },
    });

    return event;

}