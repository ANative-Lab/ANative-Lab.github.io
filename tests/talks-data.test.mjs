import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { filterTalks, recordingUrl, talks } from "../app/talks-data.ts";

test("all 20 recordings retain unique source identifiers and complete display copy", () => {
  assert.equal(talks.length, 20);
  assert.equal(new Set(talks.map(talk => talk.id)).size, 20);
  for (const talk of talks) {
    assert.match(talk.id, /^BV[\w]{10}$/);
    for (const field of ["cover", "title", "titleZh", "summary", "summaryZh"]) assert.ok(talk[field]?.length, `${talk.id}: ${field}`);
    assert.doesNotMatch(JSON.stringify(talk), /unknown|待补充|TBD/i);
    for (const link of [recordingUrl(talk), talk.homepage, talk.github, talk.scholar, ...(talk.papers ?? [])].filter(Boolean)) assert.equal(new URL(link).protocol, "https:");
  }
});
test("source metadata remains optional; only verified author profiles are included", () => {
  assert.equal(talks.filter(talk => talk.github).length, 2);
  assert.equal(talks.filter(talk => talk.homepage).length, 6);
  assert.equal(talks.filter(talk => talk.scholar).length, 1);
  assert.equal(talks.filter(talk => !talk.speaker).length, 6);
  assert.equal(talks[10].format, "paper-walkthrough");
  assert.equal(talks[10].speaker, undefined);
  assert.equal(talks[17].affiliation, "Washington University in St. Louis");
});
test("search supports Chinese and English, combines filters, and preserves collection order", () => {
  assert.deepEqual(filterTalks(talks, "  MEMSKILL  ").map(talk => talk.id), ["BV1y7Ko6UE3v"]);
  assert.deepEqual(filterTalks(talks, "张昊臻").map(talk => talk.id), ["BV1y7Ko6UE3v"]);
  assert.deepEqual(filterTalks(talks, "南洋理工").map(talk => talk.id), ["BV1y7Ko6UE3v"]);
  assert.equal(filterTalks(talks, "MemSkill", "Agentic RL").length, 0);
  assert.equal(filterTalks(talks, "", "Agentic RL").length, 2);
  assert.equal(filterTalks(talks, "no-such-recording").length, 0);
  assert.deepEqual(filterTalks(talks, ""), talks);
  assert.equal(filterTalks(talks, "", "Memory").at(-1).cover, "GAMER");
});
test("optional author and paper links are conditionally rendered", async () => {
  const component = await readFile(new URL("../app/talks.tsx", import.meta.url), "utf8");
  assert.match(component, /talk\.homepage &&/);
  assert.match(component, /talk\.github &&/);
  assert.match(component, /talk\.papers &&/);
  assert.match(component, /aria-pressed=/);
  assert.match(component, /aria-live="polite"/);
  assert.doesNotMatch(component, /Unknown|待补充|href="#"/);
});
