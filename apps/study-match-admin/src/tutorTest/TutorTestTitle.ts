import { TutorTest as TTutorTest } from "../api/tutorTest/TutorTest";

export const TUTORTEST_TITLE_FIELD = "id";

export const TutorTestTitle = (record: TTutorTest): string => {
  return record.id?.toString() || String(record.id);
};
