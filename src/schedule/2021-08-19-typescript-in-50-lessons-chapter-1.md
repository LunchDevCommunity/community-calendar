---
title: 'TypeScript in 50 Lessons — Chapter One'
type: Club
date: 2021-08-19 17:00:00
speakers:
  - Michael Chan
---

Join us this week for Chapter One of TypeScript in 50 Lessons. Lessons include:

- Lesson 1: Red Squiggly Lines
- Lesson 2: Hunting Bugs
- Lesson 3: Types
- Lesson 4: Adding Types with JSDoc
- Lesson 5: Type Declaration Files
- Lesson 6: Ambiant Declaration Files
- Lesson 7: Tooling

Come with questions concerns, and curiosity!

This is a short-term community group for owners of the book TypeScript in 50 Lessons. The only requirement is that you own the book.

- [Amazaon — Kindle-only](https://amzn.to/3lr3ahA) (affiliate link)
- [Smashing Magazine — all formats](https://typescript-book.com)

## Notes

### Terms

- Property Descriptor, p27
- assignable, p27
- type inference, p30
- eponymous types, p34
- primitive type (number, boolean, string), p36
- composite type (object, array, function), p36
- weakly typed, p36
- strongly typed, p37
- shape, p38
- structural type system, p39
- custom type, p42
- type declaration file (`.d.ts`), p47
- ambiant type declarations, p53
- `tsc`, p58
- `tsconfig.json`, p60

### High-level takeaways

- TM: You can use TypeScript w/o TypeScript 🤯
- VP: You can progressively adopt TypeScript tooling
- The power of [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense)

### Additional takeaways

- MC: Love framing of "type-checking is spell-checking for code." It minimizes the intimidation of a new language while retaining the effectiveness
- TWM: Looking at the first example, I was thinking about all the bugs we humans miss in code review
- MC: TS is like a programming pair with perfect knowledge of JavaScript
- VP: TS is excellent at helping with tricky to spot typographical errors like pluralization. e.g., `CombidedDecision`, `combineDecisions`
- TWM/BM: We can use `//@ts-check` privately. We don't even have to check it into version control. Enable at and disable it locally as needed
- TWM: JS has types! It just doesn't care about them. You have to. "Weakly typed"
- [Just JavaScript](https://justjavascript.com) shout out
- [WAT](https://destroyallsoftware.com/talks/wat), a lightning talk by Gary Bernhardt from CodeMash 2012
- MC: Do we have hope that we can sweep away the outdated practices with new ones? (the w3schools issue). New practices become legacy practices.
- BM: No. No hope 😄. Because "we don't break the web". Compilers are a fixed point where we can say (use this compiler version). Closest thing in JS might be Node.js version
- BM: "Don't [burninate](https://www.urbandictionary.com/define.php?term=Burninate) Flash" <- If Ben was in charge of Flash marketing, we'd still have Flash
- TWM: jQuery support might be why Typescript won
