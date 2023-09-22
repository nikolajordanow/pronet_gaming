import { createAction, props } from "@ngrx/store";

const actionName = (name: string) => `[TOASTER] ${name}`;

export const DisplaySuccessToaster = createAction(actionName('Display Success Toaster'), props<{ message: string }>());
