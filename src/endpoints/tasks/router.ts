import { fromHono } from "chanfana";
import { Hono } from "hono";
import { TaskCreate } from "./taskCreate";
import { TaskDelete } from "./taskDelete";
import { TaskList } from "./taskList";
import { TaskRead } from "./taskRead";
import { TaskUpdate } from "./taskUpdate";

export const tasksRouter = fromHono(new Hono());

tasksRouter.get("/", TaskList);
tasksRouter.post("/", TaskCreate);
tasksRouter.get("/:id", TaskRead);
tasksRouter.put("/:id", TaskUpdate);
tasksRouter.delete("/:id", TaskDelete);
