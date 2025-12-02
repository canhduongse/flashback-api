import { D1UpdateEndpoint, O, UpdateFilters } from "chanfana";
import { HandleArgs } from "../../types";
import { NoteModel } from "./base";

export class NoteUpdate extends D1UpdateEndpoint<HandleArgs> {
  public schema = {
    tags: ["Notes"],
  };

  _meta = {
    model: NoteModel,
    fields: NoteModel.schema.pick({
      value: true,
    }),
  };

  async before(
    oldObj: O<typeof this.meta>,
    filters: UpdateFilters,
  ): Promise<UpdateFilters> {
    return {
      ...filters,
      updatedData: {
        ...filters.updatedData,
        updated_at: new Date().toISOString(),
      },
    };
  }
}
