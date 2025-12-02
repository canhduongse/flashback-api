import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { NoteModel } from "./base";

export class NoteList extends D1ListEndpoint<HandleArgs> {
  public schema = {
    tags: ["Notes"],
  };

  _meta = {
    model: NoteModel,
  };

  searchFields = ["value"];
  defaultOrderBy = "created_at DESC";
}
