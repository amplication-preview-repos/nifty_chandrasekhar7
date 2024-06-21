import { AiAssistantWhereInput } from "./AiAssistantWhereInput";
import { AiAssistantOrderByInput } from "./AiAssistantOrderByInput";

export type AiAssistantFindManyArgs = {
  where?: AiAssistantWhereInput;
  orderBy?: Array<AiAssistantOrderByInput>;
  skip?: number;
  take?: number;
};
