import { D1CreateEndpoint, O } from "chanfana";
import { v4 } from "uuid";
import { HandleArgs } from "../../types";
import { NoteModel } from "./base";

export class NoteCreate extends D1CreateEndpoint<HandleArgs> {
  public schema = {
    tags: ["Notes"],
  };

  _meta = {
    model: NoteModel,
    fields: NoteModel.schema.pick({
      value: true,
    }),
  };

  async before(data: O<typeof this.meta>): Promise<O<typeof this.meta>> {
    console.log("NoteCreate before hook called with data:", data);
    return {
      ...data,
      id: v4(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
  }
}
