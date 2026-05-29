/* backgrounds.jsx — 5 vanilla-canvas animated background engines.
   Each factory: create(canvas, getCfg) -> { stop() }.
   getCfg() returns { bg:'#hex', colors:['#hex',...], speed:Number }.
   Registered on window.AI_BG. */
(function () {
  // ---------- color helpers ----------
  function parseHex(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map((c) => c + c).join('');
    const n = parseInt(hex, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function rgba(arr, a) { return `rgba(${arr[0]|0},${arr[1]|0},${arr[2]|0},${a})`; }
  function hexA(hex, a) { return rgba(parseHex(hex), a); }
  function mix(a, b, t) { return [a[0]+(b[0]-a[0])*t, a[1]+(b[1]-a[1])*t, a[2]+(b[2]-a[2])*t]; }
  function sample(colors, frac) {
    const arr = colors.map(parseHex);
    const n = arr.length - 1;
    const f = Math.max(0, Math.min(1, frac)) * n;
    const i = Math.floor(f);
    return mix(arr[i], arr[Math.min(i + 1, n)], f - i);
  }
  const DPR = () => Math.min(window.devicePixelRatio || 1, 2);
  const TAU = Math.PI * 2;

  // ---------- 1 & 5: drifting bloom field (aurora / soft) ----------
  function bloomFactory(opts) {
    return function (canvas, getCfg) {
      const ctx = canvas.getContext('2d');
      const off = document.createElement('canvas');
      const octx = off.getContext('2d');
      let w, h, dpr, sw, sh;
      function resize() {
        dpr = DPR();
        w = canvas.width = Math.floor(innerWidth * dpr);
        h = canvas.height = Math.floor(innerHeight * dpr);
        sw = off.width = Math.max(2, Math.round(innerWidth * opts.scale));
        sh = off.height = Math.max(2, Math.round(innerHeight * opts.scale));
      }
      resize();
      window.addEventListener('resize', resize);
      const blobs = Array.from({ length: opts.count }, (_, i) => ({
        ci: i, ox: 0.15 + Math.random() * 0.7, oy: 0.15 + Math.random() * 0.7,
        sx: 0.04 + Math.random() * 0.08, sy: 0.04 + Math.random() * 0.08,
        ph: Math.random() * TAU, ph2: Math.random() * TAU,
        rad: opts.radMin + Math.random() * (opts.radMax - opts.radMin),
      }));
      let t = 0, last = performance.now(), raf;
      function frame(now) {
        const cfg = getCfg();
        const dt = Math.min(0.05, (now - last) / 1000); last = now;
        t += dt * cfg.speed * opts.speedMul;
        octx.globalCompositeOperation = 'source-over';
        octx.fillStyle = cfg.bg; octx.fillRect(0, 0, sw, sh);
        octx.globalCompositeOperation = 'lighter';
        blobs.forEach((b, i) => {
          const cx = (b.ox + Math.sin(t * b.sx * TAU + b.ph) * opts.move) * sw;
          const cy = (b.oy + Math.cos(t * b.sy * TAU + b.ph2) * opts.move) * sh;
          const r = b.rad * Math.max(sw, sh);
          const col = parseHex(cfg.colors[i % cfg.colors.length]);
          const g = octx.createRadialGradient(cx, cy, 0, cx, cy, r);
          g.addColorStop(0, rgba(col, opts.alpha));
          g.addColorStop(1, rgba(col, 0));
          octx.fillStyle = g; octx.fillRect(0, 0, sw, sh);
        });
        ctx.globalCompositeOperation = 'source-over';
        ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(off, 0, 0, sw, sh, 0, 0, w, h);
        raf = requestAnimationFrame(frame);
      }
      raf = requestAnimationFrame(frame);
      return { stop() { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); } };
    };
  }

  // ---------- 2: particle network ----------
  function createParticles(canvas, getCfg) {
    const ctx = canvas.getContext('2d');
    let w, h, dpr, pts;
    function init() {
      const count = Math.min(190, Math.round((innerWidth * innerHeight) / 13000));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5), vy: (Math.random() - 0.5),
        r: (0.8 + Math.random() * 1.6),
      }));
    }
    function resize() { dpr = DPR(); w = canvas.width = Math.floor(innerWidth * dpr); h = canvas.height = Math.floor(innerHeight * dpr); init(); }
    resize();
    window.addEventListener('resize', resize);
    let last = performance.now(), raf;
    function frame(now) {
      const cfg = getCfg();
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      const sp = cfg.speed * 20 * dpr;
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = cfg.bg; ctx.fillRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx * sp * dt; p.y += p.vy * sp * dt;
        if (p.x < -20) p.x = w + 20; if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20; if (p.y > h + 20) p.y = -20;
      }
      const maxd = Math.min(w, h) * 0.13;
      const lc = parseHex(cfg.colors[1] || cfg.colors[0]);
      ctx.lineWidth = 1 * dpr;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < maxd) {
            ctx.strokeStyle = rgba(lc, (1 - d / maxd) * 0.45);
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      const dc = parseHex(cfg.colors[0]);
      for (const p of pts) {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4 * dpr);
        g.addColorStop(0, rgba(dc, 0.9)); g.addColorStop(1, rgba(dc, 0));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 4 * dpr, 0, TAU); ctx.fill();
        ctx.fillStyle = rgba([255, 255, 255], 0.85);
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * dpr, 0, TAU); ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    return { stop() { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); } };
  }

  // ---------- 3: neural net node graph ----------
  function createNeural(canvas, getCfg) {
    const ctx = canvas.getContext('2d');
    const counts = [3, 5, 6, 5, 3];
    let w, h, dpr, nodes = [];
    function layout() {
      dpr = DPR(); w = canvas.width = Math.floor(innerWidth * dpr); h = canvas.height = Math.floor(innerHeight * dpr);
      const L = counts.length, padX = w * 0.13, padY = h * 0.16;
      const uW = w - padX * 2, uH = h - padY * 2;
      nodes = counts.map((c, l) => {
        const x = padX + (L === 1 ? 0 : l * (uW / (L - 1)));
        return Array.from({ length: c }, (_, i) => ({
          x, baseY: padY + (i + 0.5) * (uH / c),
          phase: Math.random() * TAU, amp: uH * 0.018 + Math.random() * uH * 0.022,
        }));
      });
    }
    layout();
    window.addEventListener('resize', layout);
    let t = 0, last = performance.now(), raf, acc = 0;
    const pulses = [];
    const pos = (l, i) => { const n = nodes[l][i]; return { x: n.x, y: n.baseY + Math.sin(t * 0.8 + n.phase) * n.amp }; };
    function spawn(l, i) {
      if (l >= counts.length - 1) return;
      pulses.push({ l, i, j: Math.floor(Math.random() * counts[l + 1]), p: 0, sp: 0.6 + Math.random() * 0.5 });
    }
    function frame(now) {
      const cfg = getCfg();
      const dt = Math.min(0.05, (now - last) / 1000); last = now; t += dt * cfg.speed;
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = cfg.bg; ctx.fillRect(0, 0, w, h);
      ctx.lineWidth = 1 * dpr;
      ctx.strokeStyle = hexA(cfg.colors[0], 0.06);
      for (let l = 0; l < nodes.length - 1; l++)
        for (let i = 0; i < nodes[l].length; i++) {
          const a = pos(l, i);
          for (let j = 0; j < nodes[l + 1].length; j++) {
            const b = pos(l + 1, j);
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      acc += dt * cfg.speed;
      if (acc > 0.32) { acc = 0; spawn(0, Math.floor(Math.random() * counts[0])); }
      ctx.globalCompositeOperation = 'lighter';
      for (let k = pulses.length - 1; k >= 0; k--) {
        const pu = pulses[k]; pu.p += dt * cfg.speed * pu.sp;
        const a = pos(pu.l, pu.i), b = pos(pu.l + 1, pu.j);
        const x = a.x + (b.x - a.x) * pu.p, y = a.y + (b.y - a.y) * pu.p;
        const col = parseHex(cfg.colors[pu.l % cfg.colors.length]);
        const g = ctx.createRadialGradient(x, y, 0, x, y, 11 * dpr);
        g.addColorStop(0, rgba(col, 0.95)); g.addColorStop(1, rgba(col, 0));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 11 * dpr, 0, TAU); ctx.fill();
        if (pu.p >= 1) { pulses.splice(k, 1); if (Math.random() < 0.82) spawn(pu.l + 1, pu.j); }
      }
      if (pulses.length > 120) pulses.splice(0, pulses.length - 120);
      for (let l = 0; l < nodes.length; l++)
        for (let i = 0; i < nodes[l].length; i++) {
          const a = pos(l, i);
          const col = parseHex(cfg.colors[l % cfg.colors.length]);
          const g = ctx.createRadialGradient(a.x, a.y, 0, a.x, a.y, 15 * dpr);
          g.addColorStop(0, rgba(col, 0.45)); g.addColorStop(1, rgba(col, 0));
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(a.x, a.y, 15 * dpr, 0, TAU); ctx.fill();
          ctx.globalCompositeOperation = 'source-over';
          ctx.fillStyle = rgba([255, 255, 255], 0.92);
          ctx.beginPath(); ctx.arc(a.x, a.y, 2.4 * dpr, 0, TAU); ctx.fill();
          ctx.globalCompositeOperation = 'lighter';
        }
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    return { stop() { cancelAnimationFrame(raf); window.removeEventListener('resize', layout); } };
  }

  // ---------- 4: flowing contour lines ----------
  function createWaves(canvas, getCfg) {
    const ctx = canvas.getContext('2d');
    let w, h, dpr;
    function resize() { dpr = DPR(); w = canvas.width = Math.floor(innerWidth * dpr); h = canvas.height = Math.floor(innerHeight * dpr); }
    resize();
    window.addEventListener('resize', resize);
    let t = 0, last = performance.now(), raf;
    function frame(now) {
      const cfg = getCfg();
      const dt = Math.min(0.05, (now - last) / 1000); last = now; t += dt * cfg.speed;
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = cfg.bg; ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      const N = 44, step = Math.max(6 * dpr, w / 240);
      ctx.lineWidth = 1.3 * dpr;
      for (let li = 0; li < N; li++) {
        const frac = li / (N - 1);
        const y0 = h * 0.1 + frac * h * 0.8;
        const amp = h * 0.05 * (0.45 + 0.55 * Math.sin(frac * Math.PI));
        ctx.strokeStyle = rgba(sample(cfg.colors, frac), 0.4);
        ctx.beginPath();
        for (let x = 0; x <= w; x += step) {
          const xn = x / w;
          const y = y0
            + Math.sin(xn * TAU * 1.5 + t * 0.7 + li * 0.25) * amp
            + Math.sin(xn * TAU * 2.7 - t * 0.5 + li * 0.15) * amp * 0.5
            + Math.sin(xn * TAU * 0.7 + t * 0.3) * amp * 0.6;
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.globalCompositeOperation = 'source-over';
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    return { stop() { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); } };
  }

  // ---------- 6: flow field (silky advected trails) ----------
  function createFlow(canvas, getCfg) {
    const ctx = canvas.getContext('2d');
    let w, h, dpr, pts;
    function init() {
      const count = Math.min(900, Math.round((innerWidth * innerHeight) / 2600));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h, life: Math.random() * 200,
      }));
    }
    function resize() {
      dpr = DPR(); w = canvas.width = Math.floor(innerWidth * dpr); h = canvas.height = Math.floor(innerHeight * dpr);
      const cfg = getCfg(); ctx.fillStyle = cfg.bg; ctx.fillRect(0, 0, w, h); init();
    }
    resize();
    window.addEventListener('resize', resize);
    let t = 0, last = performance.now(), raf;
    function field(x, y) {
      const a = Math.sin(x * 0.0011 + t * 0.16)
        + Math.cos(y * 0.0011 - t * 0.13)
        + Math.sin((x + y) * 0.0007 + t * 0.09);
      return a * Math.PI;
    }
    function frame(now) {
      const cfg = getCfg();
      const dt = Math.min(0.05, (now - last) / 1000); last = now; t += dt * cfg.speed;
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = rgba(parseHex(cfg.bg), 0.055); ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      ctx.lineWidth = 1.1 * dpr;
      const sp = cfg.speed * 95 * dpr;
      for (const p of pts) {
        const ang = field(p.x, p.y);
        const nx = p.x + Math.cos(ang) * sp * dt;
        const ny = p.y + Math.sin(ang) * sp * dt;
        ctx.strokeStyle = rgba(sample(cfg.colors, (p.y / h + Math.sin(p.x * 0.002) * 0.2)), 0.5);
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(nx, ny); ctx.stroke();
        p.x = nx; p.y = ny; p.life -= 1;
        if (p.life < 0 || p.x < -10 || p.x > w + 10 || p.y < -10 || p.y > h + 10) {
          p.x = Math.random() * w; p.y = Math.random() * h; p.life = 120 + Math.random() * 220;
        }
      }
      ctx.globalCompositeOperation = 'source-over';
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    return { stop() { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); } };
  }

  // ---------- 7: rotating 3D point-cloud sphere (orbit) ----------
  function createSphere(canvas, getCfg) {
    const ctx = canvas.getContext('2d');
    const N = 150;
    const verts = Array.from({ length: N }, (_, i) => {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * Math.PI * (3 - Math.sqrt(5));
      return { x: Math.cos(phi) * r, y, z: Math.sin(phi) * r, ph: Math.random() * TAU };
    });
    const edges = [];
    for (let i = 0; i < N; i++)
      for (let j = i + 1; j < N; j++) {
        const d = verts[i].x * verts[j].x + verts[i].y * verts[j].y + verts[i].z * verts[j].z;
        if (d > 0.9) edges.push([i, j]);
      }
    let w, h, dpr, R;
    function resize() {
      dpr = DPR(); w = canvas.width = Math.floor(innerWidth * dpr); h = canvas.height = Math.floor(innerHeight * dpr);
      R = Math.min(w, h) * 0.32;
    }
    resize();
    window.addEventListener('resize', resize);
    let ry = 0, rxA = 0, t = 0, acc = 0, last = performance.now(), raf;
    const proj = new Array(N);
    const pulses = [];
    function frame(now) {
      const cfg = getCfg();
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      const sp = cfg.speed;
      t += dt * sp;
      ry += dt * sp * 0.55;
      rxA += dt * sp * 0.33;
      const rz = Math.sin(t * 0.4) * 0.35;
      const rx = rxA + Math.sin(t * 0.5) * 0.25;
      const breathe = 1 + Math.sin(t * 0.8) * 0.16 + Math.sin(t * 0.33) * 0.06;
      const Rt = R * breathe;
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = cfg.bg; ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2, f = 2.6;
      const cosY = Math.cos(ry), sinY = Math.sin(ry), cosX = Math.cos(rx), sinX = Math.sin(rx),
        cosZ = Math.cos(rz), sinZ = Math.sin(rz);
      for (let i = 0; i < N; i++) {
        const v = verts[i];
        let X = v.x * cosY - v.z * sinY;
        let Z = v.x * sinY + v.z * cosY;
        let Y = v.y * cosX - Z * sinX;
        Z = v.y * sinX + Z * cosX;
        const X2 = X * cosZ - Y * sinZ, Y2 = X * sinZ + Y * cosZ;
        const persp = f / (f - Z);
        proj[i] = { x: cx + X2 * Rt * persp, y: cy + Y2 * Rt * persp, d: (Z + 1) / 2, s: persp };
      }
      ctx.globalCompositeOperation = 'lighter';
      const haloCol = sample(cfg.colors, 0.65);
      const halo = ctx.createRadialGradient(cx, cy, Rt * 0.2, cx, cy, Rt * 1.7);
      halo.addColorStop(0, rgba(haloCol, 0.1 + Math.sin(t * 0.9) * 0.03 + 0.05));
      halo.addColorStop(1, rgba(haloCol, 0));
      ctx.fillStyle = halo; ctx.fillRect(0, 0, w, h);
      ctx.lineWidth = 1 * dpr;
      for (const [i, j] of edges) {
        const a = proj[i], b = proj[j];
        const dep = (a.d + b.d) / 2;
        ctx.strokeStyle = rgba(sample(cfg.colors, dep), 0.04 + dep * 0.28);
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
      acc += dt * sp;
      while (acc > 0.07) { acc -= 0.07; if (edges.length) pulses.push({ e: (Math.random() * edges.length) | 0, p: 0, sp: 0.7 + Math.random() * 0.9 }); }
      if (pulses.length > 90) pulses.splice(0, pulses.length - 90);
      for (let k = pulses.length - 1; k >= 0; k--) {
        const pu = pulses[k]; pu.p += dt * sp * pu.sp;
        if (pu.p >= 1) { pulses.splice(k, 1); continue; }
        const e = edges[pu.e]; const a = proj[e[0]], b = proj[e[1]];
        const x = a.x + (b.x - a.x) * pu.p, y = a.y + (b.y - a.y) * pu.p;
        const dep = a.d + (b.d - a.d) * pu.p;
        const col = sample(cfg.colors, dep);
        const rad = 7 * dpr * (0.5 + dep);
        const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
        g.addColorStop(0, rgba(col, 0.95)); g.addColorStop(1, rgba(col, 0));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, rad, 0, TAU); ctx.fill();
        ctx.fillStyle = rgba([255, 255, 255], 0.6 * dep);
        ctx.beginPath(); ctx.arc(x, y, 1.3 * dpr, 0, TAU); ctx.fill();
      }
      for (let i = 0; i < N; i++) {
        const p = proj[i];
        const tw = 0.6 + 0.4 * Math.sin(t * 2.2 + verts[i].ph);
        const col = sample(cfg.colors, p.d);
        const rad = (1.2 + p.d * 2.6) * dpr * p.s * (0.8 + tw * 0.4);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, rad * 3);
        g.addColorStop(0, rgba(col, (0.25 + p.d * 0.6) * tw)); g.addColorStop(1, rgba(col, 0));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, rad * 3, 0, TAU); ctx.fill();
        ctx.fillStyle = rgba([255, 255, 255], (0.3 + p.d * 0.6) * tw);
        ctx.beginPath(); ctx.arc(p.x, p.y, rad * 0.55, 0, TAU); ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    return { stop() { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); } };
  }

  // ---------- 8: flocking swarm (boids + neighbor links) ----------
  function createSwarm(canvas, getCfg) {
    const ctx = canvas.getContext('2d');
    let w, h, dpr, boids;
    function init() {
      const count = Math.min(120, Math.round((innerWidth * innerHeight) / 16000));
      boids = Array.from({ length: count }, () => {
        const a = Math.random() * TAU;
        return { x: Math.random() * w, y: Math.random() * h, vx: Math.cos(a), vy: Math.sin(a) };
      });
    }
    function resize() { dpr = DPR(); w = canvas.width = Math.floor(innerWidth * dpr); h = canvas.height = Math.floor(innerHeight * dpr); init(); }
    resize();
    window.addEventListener('resize', resize);
    let t = 0, last = performance.now(), raf;
    function frame(now) {
      const cfg = getCfg();
      const dt = Math.min(0.05, (now - last) / 1000); last = now; t += dt * cfg.speed;
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = cfg.bg; ctx.fillRect(0, 0, w, h);
      const R = Math.min(w, h) * 0.13, R2 = R * R;
      const maxSpeed = 60 * dpr, maxLink = R;
      const tx = w * (0.5 + Math.cos(t * 0.25) * 0.32), ty = h * (0.5 + Math.sin(t * 0.31) * 0.32);
      const lc = parseHex(cfg.colors[1] || cfg.colors[0]);
      ctx.lineWidth = 1 * dpr;
      for (let i = 0; i < boids.length; i++) {
        const b = boids[i];
        let ax = 0, ay = 0, cx = 0, cy = 0, sx = 0, sy = 0, n = 0;
        for (let j = 0; j < boids.length; j++) {
          if (j === i) continue;
          const o = boids[j]; const dx = o.x - b.x, dy = o.y - b.y; const d2 = dx * dx + dy * dy;
          if (d2 < R2 && d2 > 0.01) {
            ax += o.vx; ay += o.vy; cx += o.x; cy += o.y; n++;
            const d = Math.sqrt(d2);
            sx -= dx / d; sy -= dy / d;
            if (j > i && d < maxLink) {
              ctx.strokeStyle = rgba(lc, (1 - d / maxLink) * 0.4);
              ctx.beginPath(); ctx.moveTo(b.x, b.y); ctx.lineTo(o.x, o.y); ctx.stroke();
            }
          }
        }
        if (n > 0) {
          b.vx += (ax / n) * 0.05 + ((cx / n - b.x)) * 0.0006 + sx * 0.04;
          b.vy += (ay / n) * 0.05 + ((cy / n - b.y)) * 0.0006 + sy * 0.04;
        }
        b.vx += (tx - b.x) * 0.00018; b.vy += (ty - b.y) * 0.00018;
        const sp = Math.hypot(b.vx, b.vy) || 1;
        b.vx = b.vx / sp; b.vy = b.vy / sp;
        b.x += b.vx * maxSpeed * cfg.speed * dt; b.y += b.vy * maxSpeed * cfg.speed * dt;
        if (b.x < 0) b.x += w; if (b.x > w) b.x -= w; if (b.y < 0) b.y += h; if (b.y > h) b.y -= h;
      }
      const dc = parseHex(cfg.colors[0]);
      for (const b of boids) {
        const ang = Math.atan2(b.vy, b.vx);
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, 6 * dpr);
        g.addColorStop(0, rgba(dc, 0.85)); g.addColorStop(1, rgba(dc, 0));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(b.x, b.y, 6 * dpr, 0, TAU); ctx.fill();
        ctx.fillStyle = rgba([255, 255, 255], 0.9);
        ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(ang);
        ctx.beginPath(); ctx.moveTo(5 * dpr, 0); ctx.lineTo(-3 * dpr, 2.4 * dpr); ctx.lineTo(-3 * dpr, -2.4 * dpr); ctx.closePath(); ctx.fill();
        ctx.restore();
      }
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    return { stop() { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); } };
  }

  window.AI_BG = {
    aurora: bloomFactory({ count: 6, alpha: 0.45, move: 0.18, radMin: 0.32, radMax: 0.62, scale: 0.16, speedMul: 1 }),
    particles: createParticles,
    flow: createFlow,
    sphere: createSphere,
    swarm: createSwarm,
    neural: createNeural,
    waves: createWaves,
    soft: bloomFactory({ count: 4, alpha: 0.26, move: 0.09, radMin: 0.5, radMax: 0.95, scale: 0.12, speedMul: 0.5 }),
  };

  const THEMES = {
    purpleBlue: { bg: '#070710', colors: ['#7c5cff', '#4d7cff', '#9a5cff', '#3fb6ff', '#6248ff'] },
    mono: { bg: '#08080b', colors: ['#cdd2db', '#8b91a0', '#e8ebf0', '#6a7081', '#aab0bd'] },
  };

  window.AIBackground = {
    themes: THEMES,
    styles: Object.keys(window.AI_BG),
    mount(opts) {
      opts = opts || {};
      const state = {
        style: opts.style || 'sphere',
        theme: opts.theme || 'purpleBlue',
        speed: opts.speed == null ? 1 : opts.speed,
        grain: opts.grain !== false,
        grainAmount: opts.grainAmount == null ? 0.45 : opts.grainAmount,
      };
      const target = typeof opts.target === 'string' ? document.querySelector(opts.target) : opts.target;
      const host = target || document.body;
      const fixed = !target;
      if (target && getComputedStyle(target).position === 'static') target.style.position = 'relative';
      const baseZ = opts.zIndex == null ? -2 : opts.zIndex;

      function styleCanvas(cv, blend, z) {
        cv.style.cssText = 'position:' + (fixed ? 'fixed' : 'absolute') + ';inset:0;width:100%;height:100%;'
          + 'display:block;pointer-events:none;border:0;margin:0;padding:0;z-index:' + z + ';'
          + (blend ? 'mix-blend-mode:overlay;' : '');
      }

      const bg = document.createElement('canvas');
      styleCanvas(bg, false, baseZ);
      bg.style.background = THEMES[state.theme].bg;
      host.appendChild(bg);

      const grainC = document.createElement('canvas');
      styleCanvas(grainC, true, baseZ + 1);
      host.appendChild(grainC);

      const cfg = () => { const th = THEMES[state.theme]; return { bg: th.bg, colors: th.colors, speed: state.speed }; };
      let inst = window.AI_BG[state.style](bg, cfg);

      const N = 200, tile = document.createElement('canvas'); tile.width = tile.height = N;
      const tctx = tile.getContext('2d'), img = tctx.createImageData(N, N), gctx = grainC.getContext('2d');
      let gw, gh, graf;
      const gresize = () => { gw = grainC.width = Math.ceil(innerWidth / 1.5); gh = grainC.height = Math.ceil(innerHeight / 1.5); };
      gresize(); window.addEventListener('resize', gresize);
      function gframe() {
        gctx.clearRect(0, 0, gw, gh);
        const on = state.grain || state.style === 'soft';
        const amt = state.style === 'soft' ? Math.max(state.grainAmount, 0.5) : state.grainAmount;
        if (on && amt > 0) {
          const d = img.data;
          for (let i = 0; i < d.length; i += 4) { const v = Math.random() * 255; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = 255; }
          tctx.putImageData(img, 0, 0);
          gctx.globalAlpha = amt * 0.5; gctx.fillStyle = gctx.createPattern(tile, 'repeat'); gctx.fillRect(0, 0, gw, gh); gctx.globalAlpha = 1;
        }
        graf = requestAnimationFrame(gframe);
      }
      graf = requestAnimationFrame(gframe);

      return {
        setStyle(s) { if (!window.AI_BG[s]) return; inst.stop(); state.style = s; inst = window.AI_BG[s](bg, cfg); },
        setTheme(t) { if (!THEMES[t]) return; state.theme = t; bg.style.background = THEMES[t].bg; },
        setSpeed(v) { state.speed = v; },
        setGrain(on, amount) { state.grain = !!on; if (amount != null) state.grainAmount = amount; },
        destroy() { inst.stop(); cancelAnimationFrame(graf); window.removeEventListener('resize', gresize); bg.remove(); grainC.remove(); },
      };
    },
  };
})();
