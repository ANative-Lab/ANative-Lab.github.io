"use client";

import "./teaching.css";

const mediaRoot = "/teaching/2026-10-23";
const photos = [
  { file: "class-2.jpg", en: "Zaiqiao Meng introducing EvoAgentX", zh: "蒙在桥讲解 EvoAgentX" },
  { file: "classroom-students.jpg", en: "Students working during the class", zh: "学生在课堂上学习与实践" },
  { file: "teacher-student-discussion.jpg", en: "Zaiqiao Meng discussing a student's work", zh: "蒙在桥与学生讨论课堂实践" },
  { file: "class-10.jpg", en: "A live EvoScientist demonstration", zh: "EvoScientist 现场演示" },
] as const;

export default function TeachingArchive({ zh }: { zh: boolean }) {
  return <section className="teaching-page" id="teaching" aria-labelledby="teaching-title">
    <div className="teaching-inner">
      <header className="teaching-intro">
        <span className="teaching-kicker">ANATIVE LAB / ACTIVITIES</span>
        <h1 id="teaching-title">Teaching</h1>
        <p>{zh ? "走进课堂，分享智能体系统研究与实践。" : "Research and practice in the classroom."}</p>
      </header>

      <article className="teaching-event" aria-labelledby="teaching-event-title">
        <div className="teaching-event-heading">
          <div className="teaching-event-copy">
            <div className="teaching-label">01 / {zh ? "课堂记录" : "CLASSROOM SESSION"}</div>
            <h2 id="teaching-event-title">{zh ? "智能计算系统" : "Intelligent Computing Systems"}</h2>
            <p className="teaching-course">{zh ? "计算机学院 · 研究生课程" : "Graduate course · School of Computer Science"}</p>
            <p className="teaching-description">{zh ? "蒙在桥在课堂上介绍 EvoAgentX 与 EvoScientist，分享智能体系统的设计、研究与实践。" : "Zaiqiao Meng introduces EvoAgentX and EvoScientist, sharing research and practice in agent systems."}</p>
          </div>
          <dl className="teaching-facts">
            <div><dt>{zh ? "日期" : "DATE"}</dt><dd><time dateTime="2026-10-23">{zh ? "2026 年 10 月 23 日，星期五" : "Friday, October 23, 2026"}</time></dd></div>
            <div><dt>{zh ? "时间" : "TIME"}</dt><dd>{zh ? "下午第 5–6 节 · 14:00 起" : "Periods 5–6 · from 14:00"}</dd></div>
            <div><dt>{zh ? "地点" : "VENUE"}</dt><dd>{zh ? "东九楼 D309" : "East Building 9 · D309"}</dd></div>
          </dl>
        </div>

        <div className="teaching-video-block">
          <div className="teaching-section-heading"><h3>{zh ? "课堂片段" : "Classroom excerpt"}</h3><span>01 / VIDEO</span></div>
          {/* The source recording has no transcript; add a verified caption track before publication. */}
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video controls playsInline preload="metadata" poster={`${mediaRoot}/video-poster.jpg`} aria-label={zh ? "蒙在桥讲解 EvoAgentX 的课堂视频" : "Classroom video of Zaiqiao Meng discussing EvoAgentX"}>
            <source src={`${mediaRoot}/classroom-excerpt.mp4`} type="video/mp4" />
            {zh ? "浏览器无法播放此视频。" : "Your browser does not support this video."}
          </video>
          <p>{zh ? "约 1 分钟现场实录，保留课堂原声；字幕待补充。" : "A one-minute recording with original classroom audio. Captions are not yet available."}</p>
        </div>

        <div className="teaching-gallery-block">
          <div className="teaching-section-heading"><h3>{zh ? "现场照片" : "From the classroom"}</h3><span>{String(photos.length).padStart(2, "0")} / PHOTOS</span></div>
          <div className="teaching-gallery">
            {photos.map((photo, index) => <figure key={photo.file}>
              <a href={`${mediaRoot}/${photo.file}`} target="_blank" rel="noopener noreferrer" aria-label={zh ? `查看大图：${photo.zh}` : `View photo: ${photo.en}`}>
                <img src={`${mediaRoot}/${photo.file}`} loading="lazy" decoding="async" alt={zh ? photo.zh : photo.en} />
              </a>
              <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{zh ? photo.zh : photo.en}</figcaption>
            </figure>)}
          </div>
        </div>
      </article>
    </div>
  </section>;
}
