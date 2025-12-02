import { z } from "zod";

export const noteSchema = z.object({
  id: z.string().uuid(),
  value: z.string(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export const NoteModel = {
  tableName: "notes",
  primaryKeys: ["id"],
  schema: noteSchema,
  serializer: (obj: object) => {
    const record = obj as Record<string, unknown>;
    return {
      ...record,
    };
  },
  serializerObject: noteSchema,
};
