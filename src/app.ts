import { ApiException } from "chanfana";
import { Hono } from "hono";
import { ContentfulStatusCode } from "hono/utils/http-status";
import { createRouter } from "./router";

export function createApp(): Hono<{ Bindings: Env }> {
  const app = new Hono<{ Bindings: Env }>();

  app.onError((err, c) => {
    if (err instanceof ApiException) {
      // If it's a Chanfana ApiException, let Chanfana handle the response
      return c.json(
        { success: false, errors: err.buildResponse() },
        err.status as ContentfulStatusCode,
      );
    }

    console.error("Global error handler caught:", err); // Log the error if it's not known

    // For other errors, return a generic 500 response
    return c.json(
      {
        success: false,
        errors: [{ code: 7000, message: "Internal Server Error" }],
      },
      500,
    );
  });

  createRouter(app);

  return app;
}
