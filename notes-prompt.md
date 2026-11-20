# Reusable prompt: make study notes

Copy everything below the line, replace the [BRACKETS], and paste it into a new chat.

---

Create study notes as ONE self-contained .html file (no external links, works offline).

**Topic:** [CHAPTER OR TOPIC NAME, e.g. "journalctl and persistent journal"]
**Environment:** RHEL 10 VM, I log in as a normal user and use sudo.
**Goal:** I am a fresher preparing for RHCSA (EX200) and for Linux support/monitoring jobs in India.

**Style rules**
- Beginner friendly, simple English, short sentences.
- Highlight keywords (commands, file names, options) with a colored style.
- Include visuals: inline SVG diagrams, flow charts or tables. No remote images.
- Fresh and up to date for RHEL 10. Do not write phrases like "from the book" or "as in previous notes".
- Clean, modern look, readable on mobile.

**Content, in this order**
1. What it is and why it matters (3 to 5 lines, plain words).
2. A diagram of how it works.
3. Commands, one by one. For each: syntax, what each option means, and realistic sample output.
4. Exactly which file to edit, the full path, and exactly which line to add or change. Show the file before and after.
5. Real-environment scenarios, for example "a web service stopped at 2 AM, how do I find out why?", with step-by-step commands and output.
6. Common mistakes and how to fix the errors they cause.
7. Mark extra points with only the ✦ sign. No words.
8. Mark points often asked in interviews with only the 🔥 sign, no words, and add 5 likely interview questions with short answers.
9. A cheat sheet table at the end.
10. A real MCQ quiz of 10 questions with 4 options each. Clicking an option shows right or wrong at once, with a one-line explanation. Show the score at the end and a retry button.

**Output:** only the .html file. Keep the same colors and look as my dashboard: dark blue background, cyan accent, amber for interview, purple for extra.
