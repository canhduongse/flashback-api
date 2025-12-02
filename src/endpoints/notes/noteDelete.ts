import { D1DeleteEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { NoteModel } from "./base";

export class NoteDelete extends D1DeleteEndpoint<HandleArgs> {
  public schema = {
    tags: ["Notes"],
  };

  _meta = {
    model: NoteModel,
  };
}
