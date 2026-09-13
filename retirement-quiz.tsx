"use client";

import { FormEvent, useMemo, useState } from "react";

const booking = "https://bit.ly/pamala-burch-booking";
const leadCaptureEndpoint = process.env.NEXT_PUBLIC_LEAD_CAPTURE_ENDPOINT ?? "";

type Option = { label: string; points: number };
type Question = { text: string; gap: string; options: Option[] };
type SelectedAnswer = { optionIndex: number; points: number };

const questions: Question[] = [
  { text: "Do you know exactly how much guaranteed monthly income you'll have in retirement?", gap: "Guaranteed Retirement Income", options: [
    { label: "Yes, I know the exact number", points: 3 }, { label: "I have a rough idea", points: 2 }, { label: "No, I've never calculated it", points: 0 },
  ]},
  { text: "Do you have an old 401(k) sitting with a past employer?", gap: "Old 401(k) Strategy", options: [
    { label: "No, everything's rolled over and working for me", points: 3 }, { label: "I think so, haven't touched it in years", points: 0 }, { label: "Not sure", points: 0 },
  ]},
  { text: "Do you have a retirement account actively funded right now, whether that's an IRA, SEP IRA, or Solo 401(k)?", gap: "Active Retirement Funding", options: [
    { label: "Yes, it's active and funded", points: 3 }, { label: "I have one but haven't touched it in years", points: 0 }, { label: "No, I don't have one", points: 0 },
  ]},
  { text: "Is any of your retirement money protected from market loss?", gap: "Market-Loss Protection", options: [
    { label: "Yes, part of it is protected", points: 3 }, { label: "No, it's all exposed to the market", points: 0 }, { label: "I don't know how my money is structured", points: 1 },
  ]},
  { text: "Do you have a Roth IRA?", gap: "Tax-Free Retirement Strategy", options: [
    { label: "Yes and I understand the tax benefit", points: 3 }, { label: "I have one but don't really know why", points: 2 }, { label: "No", points: 0 },
  ]},
  { text: "Do you know your ideal Social Security claiming age and how much that decision could cost or gain you over your lifetime?", gap: "Social Security Timing", options: [
    { label: "Yes, I've run the numbers", points: 3 }, { label: "I have a general idea", points: 1 }, { label: "No, never looked into it", points: 0 },
  ]},
  { text: "If something happened to you tomorrow, does your family know exactly what they'd inherit, including what happens to your business if you have one?", gap: "Legacy Documentation", options: [
    { label: "Yes, everything's documented and they know", points: 3 }, { label: "They'd probably figure it out eventually", points: 1 }, { label: "No, this would be a mess for them", points: 0 },
  ]},
  { text: "Have you reviewed your beneficiary designations in the last 2 years?", gap: "Beneficiary Review", options: [
    { label: "Yes", points: 3 }, { label: "No", points: 0 },
  ]},
  { text: "Does your current life insurance or retirement policy include living benefits (access to funds while you're alive for things like critical illness, chronic illness, or disability)?", gap: "Living Benefits", options: [
    { label: "Yes, I have living benefits built in", points: 3 }, { label: "No, my policy is death benefit only", points: 0 }, { label: "I don't know what my policy includes", points: 1 },
  ]},
  { text: "Are you relying on “selling the business someday” as part of your retirement plan?", gap: "Business-Independent Retirement", options: [
    { label: "No, my retirement is separate from my business", points: 3 }, { label: "A little bit", points: 1 }, { label: "Yes, that's basically my whole plan", points: 0 }, { label: "N/A, I don't own a business", points: 3 },
  ]},
];

const results = [
  { min: 22, title: "On Track", copy: "You're ahead of most people your age. Your plan has real structure. There's usually still one blind spot worth a second look, book a free strategy call and I'll show you exactly where it is." },
  { min: 11, title: "Some Gaps", copy: "You've got pieces in place but there are real gaps that could cost you thousands in retirement. The good news is these are fixable, and fast. Let's get on a call so I can show you exactly where the leaks are." },
  { min: 0, title: "At Risk", copy: "Your retirement plan needs attention now, not later. This isn't about scaring you, it's about getting you protected before a market shift or life event makes the decision for you. Book your free call today and let's build you a real plan." },
];

export default function RetirementQuiz() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Array<SelectedAnswer | undefined>>([]);
  const [capture, setCapture] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const score = useMemo(() => answers.reduce((sum, answer) => sum + (answer?.points ?? 0), 0), [answers]);
  const result = results.find(item => score >= item.min) ?? results[2];
  const biggestGap = useMemo(() => {
    const deficits = questions.map((question, index) => ({ gap: question.gap, deficit: 3 - (answers[index]?.points ?? 0) }));
    const largest = deficits.sort((a, b) => b.deficit - a.deficit)[0];
    return largest?.deficit > 0 ? largest.gap : "Annual Plan Review";
  }, [answers]);

  function choose(optionIndex: number, points: number) {
    const next = [...answers];
    next[current] = { optionIndex, points };
    setAnswers(next);
  }

  function advance() {
    if (answers[current] === undefined) return;
    if (current === questions.length - 1) setCapture(true);
    else setCurrent(current + 1);
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const payload = { name: String(form.get("name") ?? ""), email: String(form.get("email") ?? ""), source: "Pamala Retirement Readiness Score", score, result: result.title, biggestGap };
    try {
      if (leadCaptureEndpoint) {
        const response = await fetch(leadCaptureEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
        if (!response.ok) throw new Error("Unable to save your information right now.");
      } else {
        localStorage.setItem("rise-retirement-readiness-lead", JSON.stringify(payload));
      }
      setShowResult(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to save your information right now.");
    } finally {
      setSubmitting(false);
    }
  }

  return <main className="quiz-page">
    <header className="quiz-header"><a className="brand" href="/"><span className="mark"><b>R</b><i/><b>I</b><i/><b>S</b><i/><b>E</b></span><small>Reposition · Insure · Secure · Empower</small></a><a className="quiz-home" href="/">Back to R.I.S.E.</a></header>
    <section className="quiz-shell">
      <div className="quiz-intro">
        <p className="eyebrow">Two minutes. Ten questions. Instant clarity.</p>
        <h1>The Retirement <em>Readiness Score</em></h1>
        <p>Take this 2 minute quiz to find out if your retirement plan is actually working for you, or just sitting there hoping for the best. You'll get your score and your biggest gap the moment you finish.</p>
        {!started && <button className="quiz-start" type="button" onClick={() => setStarted(true)}>Start the Quiz <span>→</span></button>}
      </div>

      {started && !capture && <section className="quiz-card" aria-live="polite">
        <div className="quiz-progress"><span>Question {current + 1} of {questions.length}</span><b>{Math.round(((current + 1) / questions.length) * 100)}%</b></div>
        <div className="quiz-progress-track"><span style={{ width: `${((current + 1) / questions.length) * 100}%` }}/></div>
        <h2>{questions[current].text}</h2>
        <div className="quiz-options" role="radiogroup" aria-label={`Question ${current + 1}`}>
          {questions[current].options.map((option, optionIndex) => <button key={option.label} type="button" role="radio" aria-checked={answers[current]?.optionIndex === optionIndex} className={answers[current]?.optionIndex === optionIndex ? "selected" : ""} onClick={() => choose(optionIndex, option.points)}><span>{option.label}</span><i aria-hidden="true">✓</i></button>)}
        </div>
        <div className="quiz-controls">{current > 0 ? <button type="button" className="quiz-back" onClick={() => setCurrent(current - 1)}>← Back</button> : <span/>}<button type="button" className="quiz-next" disabled={answers[current] === undefined} onClick={advance}>{current === questions.length - 1 ? "See My Score" : "Next Question"} →</button></div>
      </section>}

      {capture && !showResult && <section className="quiz-card quiz-capture">
        <p className="eyebrow">Your score is ready</p>
        <h2>Where should we send your retirement insights?</h2>
        <p>Enter your name and email to reveal your score and biggest planning gap.</p>
        <form onSubmit={submitLead}>
          <label><span>Name</span><input name="name" type="text" autoComplete="name" required placeholder="Your name" /></label>
          <label><span>Email</span><input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
          {error && <p className="quiz-error" role="alert">{error}</p>}
          <button className="quiz-submit" type="submit" disabled={submitting}>{submitting ? "Preparing your score…" : "Reveal My Score"} <span>→</span></button>
        </form>
      </section>}

      {showResult && <section className="quiz-card quiz-result" aria-live="polite">
        <p className="eyebrow">Your Retirement Readiness Score</p>
        <div className="score"><strong>{score}</strong><span>/ 30</span></div>
        <h2>{result.title}</h2>
        <p>{result.copy}</p>
        <div className="gap"><small>Your biggest gap</small><strong>{biggestGap}</strong></div>
        <div className="result-actions"><a className="btn" href={booking} target="_blank" rel="noreferrer">Book Your Free Strategy Call <span>↗</span></a><a className="quiz-secondary" href="/">Return to R.I.S.E.</a></div>
      </section>}
    </section>
  </main>;
}
