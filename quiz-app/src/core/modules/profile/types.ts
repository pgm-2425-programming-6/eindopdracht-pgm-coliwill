import { Tables, TablesInsert, TablesUpdate } from "@core/networking/database.types";

export type Profile = Tables<"profiles">;

export type ProfileInsert = TablesInsert<"profiles">;
export type ProfileUpdate = TablesUpdate<"profiles">;
