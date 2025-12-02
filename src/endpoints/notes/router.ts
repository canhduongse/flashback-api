import { fromHono } from "chanfana";
import { Hono } from "hono";
import { NoteCreate } from "./noteCreate";
import { NoteDelete } from "./noteDelete";
import { NoteList } from "./noteList";
import { NoteRead } from "./noteRead";
import { NoteUpdate } from "./noteUpdate";

export const notesRouter = fromHono(new Hono());

notesRouter.get("/", NoteList);
notesRouter.post("/", NoteCreate);
notesRouter.get("/:id", NoteRead);
notesRouter.put("/:id", NoteUpdate);
notesRouter.delete("/:id", NoteDelete);
