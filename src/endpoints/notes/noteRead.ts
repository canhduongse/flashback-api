import { D1ReadEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { NoteModel } from "./base";

export class NoteRead extends D1ReadEndpoint<HandleArgs> {
  public schema = {
    tags: ["Notes"],
  };

  _meta = {
    model: NoteModel,
  };
}
