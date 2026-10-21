import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const styles = await readFile(new URL("../app/redesign.css", import.meta.url), "utf8");
const routes = ["home", "research", "systems", "vision", "people", "activities", "join"];

test("primary navigation uses independent HTML documents", async () => {
  for (const route of routes) {
    assert.ok(page.includes(`["${route}"`), `${route} route is present in the navigation`);
    const file = route === "home" ? "index" : route;
    const html = await readFile(new URL(`../github-pages/${file}.html`, import.meta.url), "utf8");
    assert.match(html, /main\.tsx/);
    await access(new URL(`../dist-pages/${file}.html`, import.meta.url));
  }
  assert.match(page, /function resolvePage\(path:string\):PageName/);
  assert.match(page, /resolvePage\(window\.location\.pathname\)/);
  assert.match(page, /aria-current=\{page===id\?"page":undefined\}/);
  assert.match(page, /href=\{routeHref\(id as PageName\)\}/);
  assert.doesNotMatch(page, /href="#(?:top|research|systems|vision|people|activities|contact)"/);
  assert.doesNotMatch(page, /hashchange|navigate\(/);
});

test("Activities lists Workshops before Talks with matching numbering and descriptions", async () => {
  assert.match(page, /page==="activities"&&<ActivitiesPanel/);
  assert.match(page, /<h2>Talks<\/h2>/);
  assert.match(page, /<h2>Workshops<\/h2>/);
  assert.match(page, /No upcoming talks/);
  assert.match(page, /No upcoming workshops/);
  assert.match(styles, /\.activities-page/);
  const panel = page.slice(page.indexOf("function ActivitiesPanel"), page.indexOf("const pageNames"));
  assert.match(panel, /<span>01<\/span><h2>Workshops<\/h2>/);
  assert.match(panel, /<span>02<\/span><h2>Talks<\/h2>/);
  assert.ok(panel.indexOf("<h2>Workshops</h2>") < panel.indexOf("<h2>Talks</h2>"));
  const groups = panel.split('<div className="activity-group">').slice(1);
  assert.equal(groups.length, 2);
  assert.match(groups[0], /Focused workshops and hands-on sessions/);
  assert.match(groups[0], /No upcoming workshops/);
  assert.match(groups[1], /Research talks and seminars/);
  assert.match(groups[1], /No upcoming talks/);
  assert.match(panel, /实验室的专题研讨会与学术报告。/);
  assert.match(panel, /Workshops and talks from ANative Lab\./);
  const html = await readFile(new URL("../github-pages/activities.html", import.meta.url), "utf8");
  assert.match(html, /content="Workshops and talks from ANative Lab\."/);
});

test("navigation highlighting and page entry motion are available", () => {
  assert.match(page, /data-page=\{page\}/);
  assert.match(styles, /\.nav nav a\.active/);
  assert.match(styles, /route-enter/);
  assert.match(page, /window\.scrollTo\(\{top:0,behavior:"smooth"\}\)/);
});

test("portrait imagery is reduced without changing the team content", async () => {
  assert.match(page, /Portrait of \$\{m\.nameEn\}/);
  const teamStyles = await readFile(new URL("../app/team.css", import.meta.url), "utf8");
  assert.match(teamStyles, /width: 96px/);
  assert.match(teamStyles, /width: 112px/);
  assert.match(teamStyles, /width: 80px/);
  assert.match(page, /className="team-heading"/);
  assert.match(page, /className="team-avatar"/);
  assert.doesNotMatch(page, /className="team-portrait"/);
  assert.doesNotMatch(teamStyles, /radial-gradient|min-height: (430|450)px/);
  assert.doesNotMatch(styles, /\.team-portrait>img\{width:54%/);
  for (const file of ["zaiqiao.webp", "siwei.webp", "jinyuan.webp", "xi.webp", "zhaohan-linkedin.webp"]) {
    await access(new URL(`../public/team/${file}`, import.meta.url));
  }
});

test("all built pages load the shared app entry and CSS", async () => {
  const [entry, ...htmlFiles] = await Promise.all([
    readFile(new URL("../github-pages/main.tsx", import.meta.url), "utf8"),
    ...routes.map((route) => {
      const file = route === "home" ? "index" : route;
      return readFile(new URL(`../dist-pages/${file}.html`, import.meta.url), "utf8");
    }),
  ]);
  assert.match(entry, /\.\.\/app\/redesign\.css/);
  assert.match(entry, /Home \/>/);
  for (const html of htmlFiles) {
    assert.match(html, /assets\/main-/);
    assert.match(html, /<div id="root"><\/div>/);
  }
});
