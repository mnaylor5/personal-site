---
target: personal website homepage
total_score: 33
p0_count: 0
p1_count: 1
timestamp: 2026-07-01T19-28-19Z
slug: src-pages-index-astro
---
# Critique — Personal site (src/pages/index.astro)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Section-nav active tracking is excellent; no scroll-progress otherwise |
| 2 | Match System / Real World | 4 | Plain, human language throughout |
| 3 | User Control and Freedom | 3 | Mobile rail hijacks wheel/touch (touch-action:none); no skip-link/back-to-top |
| 4 | Consistency and Standards | 3 | `<title>`/meta still say GitHub while content says Cohere; repeated card styling |
| 5 | Error Prevention | 4 | No forms/inputs to error |
| 6 | Recognition Rather Than Recall | 4 | Everything visible, labeled nav |
| 7 | Flexibility and Efficiency | 3 | focus-visible present; no skip-to-content |
| 8 | Aesthetic and Minimalist Design | 3 | Clean but generic GitHub-template look; justified body, washed hero |
| 9 | Error Recovery | 3 | No custom 404 |
| 10 | Help and Documentation | 3 | Self-explanatory; contact links present |
| **Total** | | **33/40** | **Good** |

## Anti-Patterns Verdict

Deterministic detector (`detect.mjs` over `src/`): **0 findings.** No banned patterns (no side-stripe borders, no gradient text, no glass, no hero-metric template). Clean.

LLM assessment: Not "AI slop" in the obvious sense — it's well-built and restrained. But it fails the *distinctiveness* bar of the brand register: palette is GitHub Primer verbatim (#0969da / #0d1117), system font stack, everything centered and card-based. It reads as "competent default developer portfolio," not "Mitch Naylor." No POV.

## Overall Impression

Tasteful, fast, accessible, and genuinely well-engineered (the floating section rail is real craft). The problem isn't quality — it's identity. This could be anyone's dev-template site, which undersells an AI researcher + published author. Biggest opportunity: a distinct typographic/color voice. Most urgent: stale metadata still advertising the old GitHub job.

## What's Working

1. **The floating SectionNav rail** — active-section tracking, mobile chip, wheel/touch stepping, reduced-motion handling. Thoughtful, non-generic interaction.
2. **Accessibility & semantics** — aria-labelledby on every section, aria-labels on nav, prefers-reduced-motion alternatives, clean heading hierarchy.
3. **Restraint & performance** — static Astro, optimized WebP hero image, coherent token system, dark-mode support.

## Priority Issues

- **[P1] Stale metadata advertises the old job.** `<title>` = "Mitchell Naylor — Staff Applied Researcher, GitHub Copilot" and meta description says "at GitHub, leading applied research for GitHub Copilot." The body now says Cohere. The browser tab, Google result, and LinkedIn/Twitter share cards all show the wrong employer. Fix: update the defaults in BaseLayout.astro to Cohere.
- **[P2] No brand POV — reads as a generic template.** GitHub's exact palette + system font + centered cards. Give it one distinct move: a real typeface pairing and/or a signature accent that isn't Primer blue. Command: typeset / colorize / bolder.
- **[P2] Hero is washed out.** Name + role + tagline are all `text-muted` gray on a near-white panel, all centered. The one first-impression moment is deliberately quiet with no hierarchy. Command: bolder / layout.
- **[P2] Experience is a wall of identical cards + long bullet lists.** Five stacked bordered cards; the GitHub role alone has 7 bullets (breaks the ≤4 chunking rule). Low scannability. De-emphasize older roles, condense to 3-4 bullets. Command: distill / layout.
- **[P2] `text-align: justify` on the About bio.** Creates uneven word-spacing / rivers on a ~65ch column — a readability and polish tell. Switch to left-aligned. Command: typeset / polish.

## Persona Red Flags

**Recruiter / Hiring Manager (skims 20s):** Lands on hero — biggest text is the name, but role/tagline are faint gray; has to hunt for what he does now. Tab title says GitHub, page says Cohere — reads as unmaintained. Experience is a wall of bullets, no quick "impact" scan.

**Peer Researcher (wants credibility):** Publications section is strong and scannable — this persona is well served. But the generic visual identity slightly undercuts the "serious researcher with a book" signal.

## Minor Observations

- Tense mismatch: hero/about say "currently works at Cohere" while the Experience summary says "I am joining Cohere" (future). Pick one (start date is July 2026).
- Two roles read as ongoing: GitHub "April 2024 – July 2026" sits right above Cohere "July 2026 – Present"; only Cohere gets the pulse marker (correct), but a glance reads both as current.
- Publication description gray (#6c757d on white, 0.875rem) sits right at the 4.5:1 contrast floor — nudge darker.
- Section backgrounds alternate white/subtle mechanically; the rhythm is a bit uniform.
- 🧪 emoji favicon is a nice personality touch — keep it, but it's the only spark of personality on an otherwise buttoned-up page.

## Questions to Consider

- What would a version of this look like that could ONLY be Mitch's — not any ML engineer's template?
- If a recruiter gave the hero 3 seconds, what one sentence should they leave with — and is that sentence the most prominent thing on screen?
- Do the older roles (GEICO, Asurion) need full cards, or would a compact list free the eye for the recent, high-impact work?
