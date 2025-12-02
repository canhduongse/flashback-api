import { fromHono } from "chanfana";
import { createApp } from "./app";
import { DummyEndpoint } from "./endpoints/dummyEndpoint";
import { notesRouter } from "./endpoints/notes/router";
import { tasksRouter } from "./endpoints/tasks/router";

export function createRouter(app: ReturnType<typeof createApp>) {
  const openapi = fromHono(app, {
    docs_url: "/",
    schema: {
      info: {
        title: "My Awesome API",
        version: "2.0.0",
        description: "This is the documentation for my awesome API.",
      },
    },
  });

  openapi.route("/tasks", tasksRouter);
  openapi.route("/notes", notesRouter);
  openapi.post("/dummy/:slug", DummyEndpoint);

  return openapi;
}
