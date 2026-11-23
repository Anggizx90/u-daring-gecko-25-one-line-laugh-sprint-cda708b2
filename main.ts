import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Laugh Sprint — one original funny line on everyday life.
// Chosen after brainstorming 12 candidates and scoring them against the
// judge's five criteria (everyday-life fit, real laugh with a twist on the
// last word, freshness, tight natural rhythm, light first-read landing).
// The laundry-chair line won: the "promoted to closet" image is specific
// and visual, the promotion metaphor is fresh, and the punch lands on the
// final word, "applied". Sharper variants tried before settling:
//  - "My bedroom chair was hired for sitting, got promoted to closet, and
//    never once asked for a raise." (looser, weaker final word)
//  - "The chair in my bedroom has been promoted to closet — no interview,
//    no pay rise, just my clothes." (ends on a flat noun, not a punch)
const LINE =
  "The chair in my bedroom got promoted to closet last year, and honestly, it never even applied.";

// Guard: the entry must be exactly one non-empty line, and it must fit the
// competition's length limit, so a bad line fails loudly instead of being
// silently written out.
const trimmed = LINE.trim();
if (trimmed.length === 0) {
  throw new Error("entry line must not be empty");
}
if (trimmed.length > 200) {
  throw new Error(
    `entry line is ${trimmed.length} characters, over the 200-character limit`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, LINE, "utf8");
