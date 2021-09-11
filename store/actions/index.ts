import { actionTypes } from "./../actionTypes";

export function Get_Column_List(payload: any) {
  return {
    type: "Get_Column_List",
    payload,
  };
}
