import { TutorTestWhereInput } from "./TutorTestWhereInput";
import { TutorTestOrderByInput } from "./TutorTestOrderByInput";

export type TutorTestFindManyArgs = {
  where?: TutorTestWhereInput;
  orderBy?: Array<TutorTestOrderByInput>;
  skip?: number;
  take?: number;
};
