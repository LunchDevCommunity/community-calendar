---
title: 'TypeScript in 50 Lessons — Chapter 2a (8, 9, 10)'
type: Club
date: 2021-08-26 17:00:00
speakers:
  - Michael Chan
---

Join us this week for lessons 8, 9, and 10 of TypeScript in 50 Lessons. Lessons include:

- Lesson 8: Compiling TypeScript
- Lesson 9: any, Are You OK?
- Lesson 10: Control Flow

Come with questions concerns, and curiosity!

This is a short-term community group for owners of the book TypeScript in 50 Lessons. The only requirement is that you own the book.

- [Amazaon — Kindle-only](https://amzn.to/3lr3ahA) (affiliate link)
- [Smashing Magazine — all formats](https://typescript-book.com)

## Notes

### Terms

- type annotation, p71
- top type, p73
- emit, p76
- any, p76
- left-hand typing, p78
- right-hand typing, p78
- fixed-point, p83
- type guards, p84
- control flow analysis, p84
- narrowing down, p84
- subtypes, p86
- supertypes, p86
- unknown, p87

### High-level takeaways

- `any` is regular JavaScript
  -  You'll see inference-based warnings
  -  But these warnings are based exclusively on context, not intent
- `unkown` will require type narrowing depending on types used (return type, or methods used on variable)

```ts
// example of unkown, function parameter types, return types, nad type narrowing with type guards
function selectDeliveryAddress(addressOrIndex: unkown): string {
  if(typeof addressOrIndex === 'number' && addressOrIndex < deliveryAddresses.length) {
    return deliveryAddrress[addressOrIndex];
  }
  
  if(typeof addressOrIndex === 'string') {
    return addressOrIndex;
  }
  
  return '';
}
```

### Discussion

- MC: Love the author's transition here. TS is JS w/implicit `any` (top type). Then from implicit `any` to `unkown`, which actually helps you write proper guards
- DG: This is a mental model shift — seeing TS as progressive JS-tooling over a strongly typed language
- MC: Everything in JS is `any` because JS doesn't restrict the calling of methods ever. `unkown` is the unlock for real-time type checking (type narrowing)
- TWM: It's nice that the TS types don't attempt to modify JS. But types like `any` and `unkown` accept JS for what it is
- DG: Right-hand typing is interesting, coming left-hand typing. 
- FT: If you don't have `any` types — and TS does not have to perform type inference — does `tsc` compile faster?
- MC: 
- FT: `any` consistently shows up in tutorials a but rarely `unknown`. Why?
- MC: `unknown` is like a pair programmer in defensive programming
- TWM: What is unknown for? Feels like a good fit for external code, maybe second and third-party integration, etc.
- MC/FT: TypeScript is empathetic
- TWM: I dismissed TS for so long because of the "TS makes JS is a real language now" sentiment
- DG: The real world is messy. there will always be exceptions
- MC: I learned early on in my experience as a frontend architect that there will always be exceptions and unmigrated code. So many people think they have a solution that requires *only* that everyone else change. The most useful tools create a bridge from the present to the future.
- FT: Who didn't we like TS earlier?
- MC: Progressive typing wasn't a reality until Flow emerged
- TWM: We use types presence to evaluate library quality. Types can signify intent and/or community commitment
