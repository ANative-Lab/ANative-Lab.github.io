import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const styles = await readFile(new URL("../app/redesign.css", import.meta.url), "utf8");
const routes = ["home", "research", "systems", "vision", "people", "workshops", "talks", "join"];

test("primary navigation uses independent HTML documents", async () => {
  for (const route of routes) {
    const subpage = route === "workshops" || route === "talks";
    assert.ok(page.includes(subpage ? `href={routeHref("${route}")}` : `["${route}"`), `${route} route is present in the navigation`);
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

test("Activities is a disclosure with independent pages and a legacy redirect", async () => {
  assert.doesNotMatch(page, /ActivitiesPanel|Back to Activities|routeHref\("activities"\)/);
  assert.match(page, /aria-expanded=\{open\}/);
  assert.match(page, /aria-controls="activities-submenu"/);
  assert.match(page, /onPointerEnter=\{event=>\{if\(event\.pointerType==="mouse"/);
  const menu = page.slice(page.indexOf("function ActivitiesMenu"), page.indexOf("function ActivityDetailPanel"));
  assert.ok(menu.indexOf(">Workshops</a>") < menu.indexOf(">Talks</a>"));
  const html = await readFile(new URL("../dist-pages/activities.html", import.meta.url), "utf8");
  assert.match(html, /http-equiv="refresh" content="0;url=workshops.html"/);
  assert.match(page, /page==="workshops"&&<ActivityDetailPanel kind="workshops"/);
  assert.match(page, /page==="talks"&&<TalksArchive/);
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
