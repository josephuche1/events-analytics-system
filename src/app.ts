import express from "express";
import eventRoutes from "./modules/events/event.routes";

const app = express();

app.use(express.json());

app.use("/events", eventRoutes);

export default app;