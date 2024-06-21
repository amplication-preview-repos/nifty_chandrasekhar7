import { AiAssistant as TAiAssistant } from "../api/aiAssistant/AiAssistant";

export const AIASSISTANT_TITLE_FIELD = "id";

export const AiAssistantTitle = (record: TAiAssistant): string => {
  return record.id?.toString() || String(record.id);
};
