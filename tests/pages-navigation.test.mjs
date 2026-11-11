import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const styles = await readFile(new URL("../app/redesign.css", import.meta.url), "utf8");
const routes = ["home", "research", "systems", "vision", "people", "workshops", "talks", "blog", "join"];

test("primary navigation uses independent HTML documents", async () => {
  for (const route of routes) {
    const subpage = route === "workshops" || route === "talks" || route === "blog";
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
  assert.match(page, /group\.addEventListener\("pointerenter",enter\)/);
  const menu = page.slice(page.indexOf("function ActivitiesMenu"), page.indexOf("function LabFilmPanel"));
  assert.ok(menu.indexOf(">Workshops</a>") < menu.indexOf(">Talks</a>"));
  assert.ok(menu.indexOf(">Talks</a>") < menu.indexOf(">Blog</a>"));
  assert.doesNotMatch(menu, />Teaching<\/a>/);
  assert.doesNotMatch(page.slice(page.indexOf('<footer className="footer-v2">')), />Teaching<\/a>/);
  const html = await readFile(new URL("../dist-pages/activities.html", import.meta.url), "utf8");
  assert.match(html, /http-equiv="refresh" content="0;url=workshops.html"/);
  assert.match(page, /page==="workshops"&&<WorkshopsPreview/);
  assert.match(page, /page==="talks"&&<TalksArchive/);
  assert.match(page, /page==="teaching"&&<TeachingArchive/);
  assert.match(page, /page==="blog"&&<BlogArchive/);
});

test("workshop preview marks unconfirmed logistics and speakers as pending", async () => {
  const preview = await readFile(new URL("../app/workshops.tsx", import.meta.url), "utf8");
  assert.match(preview, /ANative 2026 Workshop/);
  assert.match(preview, /Agent-Native Research: Multi-Agent Collaboration for Scientific Discovery/);
  assert.match(preview, /To be confirmed/);
  assert.match(preview, /Not open yet/);
  assert.doesNotMatch(preview, /Ke Yuan|Zhaochun Ren|Iadh Ounis|Jeff Z\. Pan/);
});

test("workshop links to a standalone conference preview with local portraits", async () => {
  const [preview, conference, html, legacy] = await Promise.all([
    readFile(new URL("../app/workshops.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/conference.tsx", import.meta.url), "utf8"),
    readFile(new URL("../dist-pages/anative-2026-workshop.html", import.meta.url), "utf8"),
    readFile(new URL("../dist-pages/conference.html", import.meta.url), "utf8"),
  ]);
  assert.match(preview, /href="\/anative-2026-workshop\.html"/);
  assert.match(html, /assets\/anativeWorkshop-[^" ]+\.js/);
  assert.match(html, /ANative 2026 Workshop/);
  assert.match(legacy, /url=anative-2026-workshop\.html/);
  for (const name of ["Zaiqiao Meng", "Iadh Ounis", "Ke Yuan", "Zhaochun Ren", "Xi Zhang", "Zhaohan Meng", "Qiang Zhang", "Fajie Yuan", "Peijie Zhou", "Zhikang Wang", "Xiao Wang", "Siwei Liu", "Haibin Ling"]) {
    assert.ok(conference.includes(name), `${name} appears on the conference page`);
  }
  assert.match(conference, /The programme and presentation details will be announced when confirmed/);
  assert.match(conference, /name: "Zaiqiao Meng", nameZh: "蒙在桥", role: "Invited Speaker", roleZh: "特邀报告嘉宾"/);
  assert.match(conference, /Head of School of Computing Science, University of Glasgow/);
  assert.match(conference, /Chair Professor · IEEE Fellow, Westlake University/);
  assert.match(conference, /Huazhong University of Science and Technology, Wuhan/);
  assert.match(conference, /className="conference-organizer"/);
  assert.match(conference, /<strong>ANative Lab<\/strong>/);
  assert.match(conference, /<a href="\/index\.html">\{t\("Visit ANative Lab", "访问 ANative Lab"\)\}/);
  assert.match(conference, /Not open yet/);
  for (const file of ["iadh-ounis.jpg", "ke-yuan.jpg", "zhaochun-ren.jpeg", "zhaohan-meng.jpg", "qiang-zhang.jpg", "fajie-yuan.jpg", "peijie-zhou.jpg", "zhikang-wang.jpg", "xiao-wang.jpg", "haibin-ling.jpg"]) {
    await access(new URL(`../dist-pages/conference/${file}`, import.meta.url));
  }
});

test("EvoScientist seminar opens as its own page with local media and slides", async () => {
  const [talks, detail, html] = await Promise.all([
    readFile(new URL("../app/talks.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/evoscientist-seminar.tsx", import.meta.url), "utf8"),
    readFile(new URL("../dist-pages/evoscientist-seminar.html", import.meta.url), "utf8"),
  ]);
  assert.match(talks, /href="\/evoscientist-seminar\.html"/);
  assert.match(page, /page==="evoscientist-seminar"&&<EvoScientistSeminar/);
  assert.match(detail, /href="\/talks\.html"/);
  assert.match(html, /assets\/main-/);
  assert.match(talks, /seminar-room-edited\.jpg/);
  assert.match(detail, /Edited composite of the seminar/);
  assert.doesNotMatch(detail, /Original unedited EvoScientist seminar photo/);
  for (const file of ["seminar-room-edited.jpg", "speaker-poster.jpg", "EvoScientist-Xi-Zhang-slides.pptx"]) {
    await access(new URL(`../dist-pages/talks/2026-08-18/${file}`, import.meta.url));
  }
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
