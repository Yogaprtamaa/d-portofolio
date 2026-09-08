"use client";

import { memo, useEffect, useId, useMemo, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export type ContributionData = {
  [date: string]: {
    level: ContributionLevel;
    count?: number;
  };
};

const THEME = {
  level0: "#ebedf0",
  level1: "#9be9a8",
  level2: "#40c463",
  level3: "#30a14e",
  level4: "#216e39",
} as const;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function parseDate(dateStr: string): Date {
  const [y = 0, m = 1, d = 1] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const FULL_MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function formatTooltipDate(dateStr: string): string {
  try {
    const date = parseDate(dateStr);
    const day = date.getDate();
    const suffix = day > 3 && day < 21 ? "th" : ({ 1: "st", 2: "nd", 3: "rd" } as Record<number, string>)[day % 10] ?? "th";
    return `${FULL_MONTH_NAMES[date.getMonth()]} ${day}${suffix}`;
  } catch {
    return dateStr;
  }
}

type APIResponse = {
  contributions: { date: string; count: number; level: number }[];
};

async function fetchContributions(username: string): Promise<ContributionData> {
  const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
  if (!res.ok) throw new Error(`Could not load contributions for "${username}" (${res.status})`);
  const json: APIResponse = await res.json();
  const result: ContributionData = {};
  for (const entry of json.contributions) {
    result[entry.date] = {
      level: Math.min(4, Math.max(0, entry.level)) as ContributionLevel,
      count: entry.count,
    };
  }
  return result;
}

function buildGrid(startDate: string, endDate: string) {
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  const offset = (start.getDay() - 0 + 7) % 7; // weeks start Sunday
  const gridStart = addDays(start, -offset);

  const weeks: (string | null)[][] = [];
  const monthLabels: { label: string; weekIndex: number }[] = [];
  let current = new Date(gridStart);
  let lastMonth = -1;

  while (current <= end || (weeks[weeks.length - 1]?.length ?? 7) < 7) {
    const week: (string | null)[] = [];
    for (let d = 0; d < 7; d++) {
      const inRange = current >= start && current <= end;
      week.push(inRange ? formatDate(current) : null);
      if (inRange && current.getMonth() !== lastMonth) {
        lastMonth = current.getMonth();
        monthLabels.push({ label: MONTH_NAMES[current.getMonth()]!, weekIndex: weeks.length });
      }
      current = addDays(current, 1);
    }
    weeks.push(week);
    if (current > end && weeks[weeks.length - 1]?.every((x) => x === null || parseDate(x) > end)) break;
  }
  return { weeks, monthLabels, gridStart: formatDate(gridStart) };
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function CalendarSkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      <div className="flex gap-6">
        <div className="h-4 w-32 rounded bg-[#F2F2F2]" />
        <div className="h-4 w-20 rounded bg-[#F2F2F2]" />
      </div>
      <div className="h-[140px] rounded-2xl bg-[#F2F2F2]" />
    </div>
  );
}

// ─── Snake game ───────────────────────────────────────────────────────────────

type Cell = { wi: number; di: number };
const DIRS: Cell[] = [{ wi: 1, di: 0 }, { wi: -1, di: 0 }, { wi: 0, di: 1 }, { wi: 0, di: -1 }];
const keyOf = (c: Cell) => `${c.wi},${c.di}`;

// ─── Main component ───────────────────────────────────────────────────────────

export const GithubCalendar = memo(function GithubCalendar({
  username = "Yogaprtamaa",
  className = "",
}: {
  username?: string;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  const scrollRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const cellSize = 12;
  const cellGap = 3;
  const step = cellSize + cellGap;

  const [fetchedData, setFetchedData] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const visibleRef = useRef(true);
  const prefersReduced = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [tooltip, setTooltip] = useState<{ date: string; count: number; x: number; y: number } | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchContributions(username)
      .then(setFetchedData)
      .catch((e) => setFetchError(e instanceof Error ? e.message : String(e)))
      .finally(() => setLoading(false));
  }, [username]);

  const data: ContributionData = fetchedData ?? {};
  const resolvedEnd = useMemo(() => formatDate(new Date()), []);
  const resolvedStart = useMemo(() => {
    const d = parseDate(resolvedEnd);
    d.setFullYear(d.getFullYear() - 1);
    d.setDate(d.getDate() + 1);
    return formatDate(d);
  }, [resolvedEnd]);

  const { weeks, monthLabels, gridStart } = useMemo(
    () => buildGrid(resolvedStart, resolvedEnd),
    [resolvedStart, resolvedEnd],
  );

  const valid = useMemo(() => {
    const set = new Set<string>();
    weeks.forEach((w, wi) => w.forEach((d, di) => d && set.add(keyOf({ wi, di }))));
    return set;
  }, [weeks]);

  const stats = useMemo(() => {
    const entries = Object.entries(data);
    return {
      total: entries.reduce((s, [, v]) => s + (v.count ?? (v.level > 0 ? 1 : 0)), 0),
      activeDays: entries.filter(([, v]) => v.level > 0).length,
    };
  }, [data]);

  const monthLabelHeight = 20;
  const svgWidth = weeks.length * step - cellGap;
  const svgHeight = monthLabelHeight + 7 * step - cellGap;

  // Track visibility in a ref (no re-renders): the loop pauses off-screen to save CPU
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry!.isIntersecting;
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [loading]);

  // Restore board when game stops
  const paintCell = (date: string, level: ContributionLevel) => {
    const rect = document.getElementById(`cell-${id}-${date}`);
    if (rect) rect.setAttribute("fill", THEME[`level${level}`]);
  };

  // ── Snake game loop — always on, no toggles ───────────────────────────
  useEffect(() => {
    if (!fetchedData) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.round(svgWidth * dpr);
    canvas.height = Math.round(svgHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const levels = new Map<string, number>();
    const dateOf = (c: Cell) => weeks[c.wi]?.[c.di] ?? null;
    weeks.forEach((w) =>
      w.forEach((date) => date && levels.set(date, data[date]?.level ?? 0)),
    );

    // Mousemove for tooltips on the canvas
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const wi = Math.floor(mx / step);
      const di = Math.floor((my - monthLabelHeight) / step);
      const date = dateOf({ wi, di });
      if (date && wi >= 0 && wi < weeks.length && di >= 0 && di < 7) {
        setTooltip({ date, count: data[date]?.count ?? 0, x: wi * step + cellSize / 2, y: monthLabelHeight + di * step });
      } else {
        setTooltip(null);
      }
    };
    const onLeave = () => setTooltip(null);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    // Start on an empty cell near the grid center
    const midW = Math.floor(weeks.length / 2);
    let start: Cell = { wi: midW, di: 3 };
    outer: for (let r = 0; r < weeks.length; r++) {
      for (const s of [-1, 1]) {
        const wi = midW + r * s;
        if (wi < 0 || wi >= weeks.length) continue;
        for (let di = 0; di < 7; di++) {
          const d = dateOf({ wi, di });
          if (d && (levels.get(d) ?? 0) === 0) {
            start = { wi, di };
            break outer;
          }
        }
      }
    }

    let snake: Cell[] = [start];
    let dir: Cell = { wi: 1, di: 0 };
    let lastManual = 0;
    let cancelled = false;
    let target: Cell | null = null; // food cell the snake is currently hunting

    // Center the view on the snake so it is visible right away
    requestAnimationFrame(() => {
      const el = scrollRef.current;
      if (el) el.scrollLeft = Math.max(0, start.wi * step - el.clientWidth / 2);
    });

    const onKey = (e: KeyboardEvent) => {
      const map: Record<string, Cell> = {
        ArrowUp: { wi: 0, di: -1 },
        ArrowDown: { wi: 0, di: 1 },
        ArrowLeft: { wi: -1, di: 0 },
        ArrowRight: { wi: 1, di: 0 },
        w: { wi: 0, di: -1 },
        s: { wi: 0, di: 1 },
        a: { wi: -1, di: 0 },
        d: { wi: 1, di: 0 },
      };
      const next = map[e.key];
      if (!next) return;
      const head = snake[0]!;
      const neck = snake[1];
      if (neck && next.wi === neck.wi - head.wi && next.di === neck.di - head.di) return; // no reverse
      dir = next;
      lastManual = Date.now();
      e.preventDefault();
    };
    window.addEventListener("keydown", onKey);

    const blocked = new Set<string>();
    const foodLeft = () => {
      for (const [, lv] of levels) if (lv > 0) return true;
      return false;
    };

    const bfsDir = (from: Cell): Cell | null => {
      // BFS to nearest food, avoiding body (tail excluded — it moves away)
      const body = new Set(snake.slice(0, -1).map(keyOf));
      const prev = new Map<string, Cell | null>();
      const q: Cell[] = [from];
      prev.set(keyOf(from), null);
      while (q.length) {
        const cur = q.shift()!;
        const d = dateOf(cur);
        if (d && (levels.get(d) ?? 0) > 0 && keyOf(cur) !== keyOf(from)) {
          target = cur;
          // walk back to first step
          let stepBack = cur;
          let p = prev.get(keyOf(stepBack));
          while (p && keyOf(p) !== keyOf(from)) {
            stepBack = p;
            p = prev.get(keyOf(stepBack));
          }
          return { wi: stepBack.wi - from.wi, di: stepBack.di - from.di };
        }
        for (const dd of DIRS) {
          const nx = { wi: cur.wi + dd.wi, di: cur.di + dd.di };
          const k = keyOf(nx);
          if (prev.has(k) || blocked.has(k) || !valid.has(k)) continue;
          prev.set(k, cur);
          q.push(nx);
        }
      }
      return null;
    };

    const safeMoves = (head: Cell): Cell[] => {
      const body = new Set(snake.slice(0, -1).map(keyOf));
      return DIRS.filter((dd) => {
        const nx = { wi: head.wi + dd.wi, di: head.di + dd.di };
        return valid.has(keyOf(nx)) && !body.has(keyOf(nx));
      });
    };

    const centerOf = (c: Cell) => ({
      x: c.wi * step + cellSize / 2,
      y: monthLabelHeight + c.di * step + cellSize / 2,
    });

    const draw = (t: number) => {
      ctx.clearRect(0, 0, svgWidth, svgHeight);

      // Pulsing ring on the cell the snake is hunting
      if (target) {
        const d = dateOf(target);
        if (d && (levels.get(d) ?? 0) > 0) {
          const { x, y } = centerOf(target);
          const pulse = (Math.sin(t * 5) + 1) / 2;
          ctx.save();
          ctx.globalAlpha = 0.35 + pulse * 0.45;
          ctx.strokeStyle = "#1a7f37";
          ctx.lineWidth = 2;
          ctx.setLineDash([4, 3]);
          ctx.lineDashOffset = -t * 14;
          ctx.beginPath();
          ctx.arc(x, y, 8 + pulse * 2.5, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
      }

      if (!snake.length) return;
      const pts = [...snake].reverse().map(centerOf); // tail → head
      const n = pts.length;

      // Tapered body: one round-capped stroke per segment
      ctx.save();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#1D1D1F";
      ctx.shadowColor = "rgba(29,29,31,0.25)";
      ctx.shadowBlur = 5;
      for (let i = 0; i < n - 1; i++) {
        ctx.lineWidth = 3 + (cellSize - 1.5 - 3) * (i / Math.max(1, n - 1));
        ctx.beginPath();
        ctx.moveTo(pts[i]!.x, pts[i]!.y);
        ctx.lineTo(pts[i + 1]!.x, pts[i + 1]!.y);
        ctx.stroke();
      }
      ctx.restore();

      // Head
      const head = pts[n - 1]!;
      const hr = cellSize / 2 + 0.5;
      ctx.save();
      ctx.fillStyle = "#1D1D1F";
      ctx.shadowColor = "rgba(29,29,31,0.25)";
      ctx.shadowBlur = 5;
      ctx.beginPath();
      ctx.arc(head.x, head.y, hr, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      const ex = dir.wi !== 0 ? (dir.wi > 0 ? 1 : -1) : 0;
      const ey = dir.di !== 0 ? (dir.di > 0 ? 1 : -1) : 0;

      // Flicking forked tongue
      if (t % 1.4 < 0.3) {
        const bx = head.x + ex * hr;
        const by = head.y + ey * hr;
        const tx = bx + ex * 5;
        const ty = by + ey * 5;
        const px = ey !== 0 ? 1 : 0;
        const py = ex !== 0 ? 1 : 0;
        ctx.save();
        ctx.strokeStyle = "#E5484D";
        ctx.lineWidth = 1.6;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.lineTo(tx, ty);
        ctx.moveTo(tx, ty);
        ctx.lineTo(tx + ex * 2.5 + px * 2, ty + ey * 2.5 + py * 2);
        ctx.moveTo(tx, ty);
        ctx.lineTo(tx + ex * 2.5 - px * 2, ty + ey * 2.5 - py * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Eyes look along the travel direction
      const off = 2.7;
      const fwd = 2.4;
      for (const s of [-1, 1]) {
        const px = head.x + (ex !== 0 ? ex * fwd : s * off);
        const py = head.y + (ey !== 0 ? ey * fwd : s * off);
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(px, py, 2.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#1D1D1F";
        ctx.beginPath();
        ctx.arc(px + ex * 0.8, py + ey * 0.8, 1.1, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const followHead = () => {
      const el = scrollRef.current;
      if (!el) return;
      const headX = snake[0]!.wi * step;
      const viewL = el.scrollLeft;
      const viewW = el.clientWidth;
      if (headX < viewL + 40 || headX > viewL + viewW - 60) {
        el.scrollLeft = Math.max(0, headX - viewW / 2);
      }
    };

    let cooldownUntil = 0;
    let restoreAt = 0;

    const stepOnce = (now: number) => {
      if (restoreAt !== 0) {
        if (now < restoreAt) return;
        weeks.forEach((w) =>
          w.forEach((d) => {
            if (!d) return;
            const orig = data[d]?.level ?? 0;
            levels.set(d, orig);
            paintCell(d, orig);
          }),
        );
        snake = [start];
        target = null;
        restoreAt = 0;
        setStatus(null);
        return;
      }
      if (now < cooldownUntil) return;

      blocked.clear();
      const body = new Set(snake.slice(0, -1).map(keyOf));
      body.forEach((k) => blocked.add(k));

      const head = snake[0]!;
      // AI when user hasn't steered recently
      if (Date.now() - lastManual > 2500) {
        const ai = bfsDir(head);
        if (ai) dir = ai;
        else {
          const safe = safeMoves(head);
          if (safe.length) dir = safe[Math.floor(Math.random() * safe.length)]!;
        }
      }

      const next = { wi: head.wi + dir.wi, di: head.di + dir.di };
      const nk = keyOf(next);
      const hitBody = new Set(snake.slice(0, -1).map(keyOf)).has(nk);

      if (!valid.has(nk) || hitBody) {
        // crash → respawn short snake, keep progress
        setStatus("Ouch! Snake respawned.");
        snake = [start];
        dir = { wi: 1, di: 0 };
        target = null;
        cooldownUntil = now + 600;
        return;
      }

      snake.unshift(next);
      const date = dateOf(next)!;
      const lv = levels.get(date) ?? 0;
      if (lv > 0) {
        const nextLv = (lv - 1) as ContributionLevel;
        levels.set(date, nextLv);
        paintCell(date, nextLv);
        setScore((s) => s + lv * 10);
        setStatus(null);
        // grow: keep tail
      } else {
        snake.pop();
      }

      followHead();

      if (!foodLeft()) {
        setStatus("Board cleared! Restoring contributions…");
        restoreAt = now + 2000;
      }
    };

    // One rAF loop: stepped logic + smooth per-frame rendering
    let raf = 0;
    let last = performance.now();
    let acc = 0;
    const STEP_MS = 115;
    const frame = (now: number) => {
      if (cancelled) return;
      if (!visibleRef.current) {
        // paused off-screen: reset the clock so it resumes smoothly
        last = now;
        acc = 0;
        raf = requestAnimationFrame(frame);
        return;
      }
      acc += Math.min(250, now - last);
      last = now;
      while (acc >= STEP_MS) {
        acc -= STEP_MS;
        stepOnce(now);
        if (cancelled) return;
      }
      draw(now / 1000);
      raf = requestAnimationFrame(frame);
    };

    if (prefersReduced) {
      draw(0); // single static frame, no motion
    } else {
      draw(0);
      raf = requestAnimationFrame(frame);
    }
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedData, weeks, valid, svgWidth, svgHeight]);

  if (loading) {
    return (
      <div className={`rounded-[24px] bg-white border border-black/[0.06] p-6 md:p-8 ${className}`}>
        <CalendarSkeleton />
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className={`rounded-[24px] bg-white border border-black/[0.06] p-6 text-sm text-[#6E6E73] ${className}`}>
        Could not load GitHub activity: {fetchError} —{" "}
        <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="font-medium text-[#0058B0] hover:underline">
          view @{username} on GitHub →
        </a>
      </div>
    );
  }

  const cellRx = cellSize * 0.2;

  return (
    <div ref={containerRef} className={`rounded-[24px] bg-white border border-black/[0.06] p-6 md:p-8 ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-[15px] font-semibold text-[#1D1D1F]">GitHub activity</h3>
          <p className="mt-1 text-xs text-[#6E6E73]">
            <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="font-medium text-[#0058B0] hover:underline">
              @{username}
            </a>{" "}
            · {stats.total.toLocaleString()} contributions in the last year · {stats.activeDays} active days
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#1D1D1F] px-3.5 py-1.5 text-xs font-semibold text-white tabular-nums" aria-live="polite">
            <span className="h-1.5 w-1.5 rounded-full bg-[#40c463]" aria-hidden />
            Score {score}
          </span>
        </div>
      </div>

      {status && (
        <p className="mt-3 text-xs font-medium text-[#6E6E73]" role="status">
          {status}
        </p>
      )}

      <div ref={scrollRef} className="relative mt-5 overflow-x-auto pb-1" style={{ scrollbarWidth: "thin" }}>
        <div className="relative w-fit">
          <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="block overflow-visible" role="img" aria-label={`GitHub contribution graph for ${username}`}>
            {(() => {
              const byWeek = new Map<number, string>();
              monthLabels.forEach(({ label, weekIndex }) => byWeek.set(weekIndex, label));
              const entries = [...byWeek.entries()];
              const shown: [number, string][] = [];
              entries.forEach(([wi, label], i) => {
                if (i === 0 && entries[1] && entries[1][0] - wi < 3) return;
                const last = shown[shown.length - 1];
                if (last && wi - last[0] < 3) return;
                shown.push([wi, label]);
              });
              return shown.map(([wi, label]) => (
                <text key={`${label}-${wi}`} x={wi * step} y={11} fontSize={11} fill="#6E6E73" fontFamily="inherit">
                  {label}
                </text>
              ));
            })()}
            {weeks.map((week, wi) =>
              week.map((date, di) => {
                if (!date) {
                  const guess = formatDate(addDays(parseDate(gridStart), wi * 7 + di));
                  if (guess > resolvedEnd) return null;
                }
                const level = date ? (data[date]?.level ?? 0) : 0;
                return (
                  <rect
                    key={`${wi}-${di}`}
                    id={date ? `cell-${id}-${date}` : undefined}
                    x={wi * step}
                    y={monthLabelHeight + di * step}
                    width={cellSize}
                    height={cellSize}
                    rx={cellRx}
                    fill={THEME[`level${level}`]}
                  />
                );
              }),
            )}
          </svg>
          <canvas
            ref={canvasRef}
            className="absolute left-0 top-0 z-10"
            style={{ width: svgWidth, height: svgHeight }}
          />
          {tooltip && (
            <div
              className="pointer-events-none absolute z-20 whitespace-nowrap rounded-lg bg-[#1D1D1F] px-2.5 py-1 text-[11px] font-medium text-white shadow-md"
              style={{ left: tooltip.x, top: tooltip.y, transform: "translate(-50%, calc(-100% - 6px))" }}
            >
              {tooltip.count === 0
                ? `No contributions on ${formatTooltipDate(tooltip.date)}`
                : `${tooltip.count} contribution${tooltip.count !== 1 ? "s" : ""} on ${formatTooltipDate(tooltip.date)}`}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 text-xs text-[#6E6E73]">
          <span>Less</span>
          {([0, 1, 2, 3, 4] as ContributionLevel[]).map((lv) => (
            <svg key={lv} width={cellSize} height={cellSize} aria-hidden>
              <rect width={cellSize} height={cellSize} rx={cellRx} fill={THEME[`level${lv}`]} />
            </svg>
          ))}
          <span>More</span>
        </div>
        <p className="text-[11px] text-[#6E6E73]">
          The snake hunts on its own — hover any cell for details, or steer it with arrow keys / WASD.
        </p>
      </div>
    </div>
  );
});

GithubCalendar.displayName = "GithubCalendar";

export default GithubCalendar;
