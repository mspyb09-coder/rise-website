import type { Metadata } from "next";
import RetirementQuiz from "./retirement-quiz";

export const metadata: Metadata = {
  title: "The Retirement Readiness Score | R.I.S.E.",
  description: "Take this two-minute quiz to see how well your retirement plan is working and identify your biggest gap.",
};

export default function QuizPage() {
  return <RetirementQuiz />;
}
