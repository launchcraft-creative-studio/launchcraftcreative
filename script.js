// ============ DATA ============
const SERVICES_DETAIL = {
  web: {
    title: "Website Design & Development",
    desc: "We design and build fast, elegant websites on modern stacks — engineered for conversion, not just visual polish.",
    points: ["Custom design systems, no page-builder templates", "Performance budgets: sub-2s load times", "CMS setup so your team can update content freely", "Built-in analytics and conversion tracking"]
  },
  brand: {
    title: "Branding & Logo Design",
    desc: "A complete identity system — logo, color, type, voice — that makes your business recognizable everywhere it shows up.",
    points: ["Brand strategy & positioning workshops", "Logo suite with usage guidelines", "Color, typography, and imagery systems", "Brand book delivered as a living reference"]
  },
  uiux: {
    title: "UI/UX Design",
    desc: "Interfaces designed around research and behavior, not assumptions — for web apps, products, and dashboards.",
    points: ["User research & journey mapping", "Wireframes through high-fidelity prototypes", "Usability testing before you ship", "Design systems for scale"]
  },
  social: {
    title: "Social Media Management",
    desc: "Consistent, strategic presence across the platforms your audience actually uses.",
    points: ["Content calendars aligned to brand voice", "Platform-native creative (not one-size-fits-all)", "Community management & response", "Monthly performance reporting"]
  },
  graphic: {
    title: "Graphic Design",
    desc: "Print and digital assets — from pitch decks to packaging — built on one coherent visual system.",
    points: ["Marketing collateral & sales decks", "Packaging & print design", "Ad creative for paid campaigns", "Illustration & iconography"]
  },
  seo: {
    title: "Search Engine Optimization",
    desc: "Technical, on-page, and authority work aimed at rankings that compound instead of spike and fade.",
    points: ["Technical SEO audits & fixes", "Keyword strategy & content planning", "On-page optimization", "Authority building & backlink outreach"]
  },
  marketing: {
    title: "Digital Marketing",
    desc: "Paid, email, and content strategy tied to pipeline and revenue — not just impressions.",
    points: ["Paid search & social campaign management", "Email lifecycle & automation", "Content strategy tied to funnel stage", "Monthly reporting against real KPIs"]
  },
  maintenance: {
    title: "Website Maintenance",
    desc: "Ongoing care so your site stays fast, secure, and current — without you having to think about it.",
    points: ["Security patches & uptime monitoring", "Regular backups & recovery plans", "Content & feature updates", "Monthly health reports"]
  }
};

const PROJECTS = [
  {
    id: "fieldstone", tag: "FS", accent: "#8B5CF6",
    title: "Fieldstone Outfitters", tags: ["Web Design", "SEO"],
    summary: "Rebuilding an outdoor retailer's site for speed and search visibility.",
    client: "Fieldstone Outfitters", industry: "Outdoor Retail", timeline: "10 weeks", services: "Web Design & Development, SEO",
    challenge: "Fieldstone's existing site took over six seconds to load on mobile and ranked on page three for its core product categories, leaving organic traffic flat for two years.",
    solution: "We rebuilt the storefront on a headless architecture, restructured the site's information hierarchy around search intent, and rewrote category content around a keyword map built from actual customer search behavior.",
    process: "Discovery interviews with the merchandising team, a full technical SEO audit, wireframes tested with five target customers, then a phased development rollout to avoid disrupting existing rankings.",
    tech: "Next.js, Shopify Headless, Sanity CMS, Cloudflare",
    results: [{num:"1.8s", label:"Median load time"},{num:"+68%", label:"Organic traffic"},{num:"4.2x", label:"Return on ad spend"}]
  },
  {
    id: "moreno", tag: "MB", accent: "#F0A857",
    title: "Moreno & Bell Law", tags: ["Branding", "UI/UX"],
    summary: "A full identity and website rebuild for a boutique law practice.",
    client: "Moreno & Bell", industry: "Legal Services", timeline: "8 weeks", services: "Branding & Logo Design, UI/UX Design, Web Design",
    challenge: "Moreno & Bell had strong word-of-mouth but a dated identity that undersold their expertise and made them hard to find or trust online.",
    solution: "We developed a new identity rooted in the firm's actual point of difference — direct partner access — then designed a website structured around the questions prospective clients actually ask before hiring a lawyer.",
    process: "Stakeholder interviews with both partners, a competitive identity audit, three concept directions narrowed to one, then a content-first website build.",
    tech: "Webflow, Figma, Adobe Illustrator",
    results: [{num:"+140%", label:"Consultation requests"},{num:"3.1x", label:"Time on site"},{num:"92%", label:"Client satisfaction"}]
  },
  {
    id: "hollowpeak", tag: "HP", accent: "#5B6EF5",
    title: "Hollow Peak Roasters", tags: ["Social Media", "Digital Marketing"],
    summary: "Growing a coffee roaster's subscription business through content and paid social.",
    client: "Hollow Peak Roasters", industry: "Food & Beverage", timeline: "Ongoing, 6+ months", services: "Social Media Management, Digital Marketing, Email",
    challenge: "Hollow Peak had a loyal in-store following but almost no online subscription revenue, and their social presence wasn't converting followers into customers.",
    solution: "We built a content system around the roasting process itself, launched a always-on paid social funnel toward a subscription offer, and layered in an email flow for cart recovery and reorder reminders.",
    process: "Audience research, a 90-day content calendar, weekly creative production, and bi-weekly performance reviews to reallocate spend toward what converted.",
    tech: "Meta Ads, Klaviyo, Later, Shopify",
    results: [{num:"2.4x", label:"Subscription revenue"},{num:"-31%", label:"Cost per acquisition"},{num:"18K", label:"New engaged followers"}]
  },
  {
    id: "verdant", tag: "VR", accent: "#4ADE80",
    title: "Verdant Health", tags: ["Web Design", "UI/UX", "SEO"],
    summary: "A patient portal and marketing site rebuild for a multi-location clinic group.",
    client: "Verdant Health", industry: "Healthcare", timeline: "14 weeks", services: "Web Design & Development, UI/UX Design, SEO",
    challenge: "Verdant's booking flow required four separate steps across two systems, and their marketing site wasn't ranking for any of their eleven clinic locations.",
    solution: "We consolidated booking into a single embedded flow, built location-specific landing pages optimized for local search, and restructured the whole site around patient intent rather than internal department structure.",
    process: "Patient journey mapping, a booking-flow audit with the front-desk staff, local SEO research per location, then iterative usability testing on the new flow.",
    tech: "React, Node.js, Local SEO tooling, HIPAA-compliant hosting",
    results: [{num:"-52%", label:"Booking abandonment"},{num:"11/11", label:"Locations ranking page 1"},{num:"+2,100", label:"Monthly organic visits"}]
  }
];

const PROCESS = [
  {n:"01", t:"Discovery", d:"We start by understanding your business, audience, and goals — not just your design preferences.", icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'},
  {n:"02", t:"Research", d:"Competitive audits, user research, and market analysis ground every decision that follows.", icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 19V5a2 2 0 012-2h12a2 2 0 012 2v14"/><path d="M4 19a2 2 0 002 2h12a2 2 0 002-2M8 7h8M8 11h8"/></svg>'},
  {n:"03", t:"Strategy", d:"We define the roadmap: what gets built, in what order, and how success will be measured.", icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 11l18-7-7 18-2.5-7.5L3 11z"/></svg>'},
  {n:"04", t:"Design", d:"Wireframes evolve into high-fidelity, on-brand designs — reviewed and refined with you at each stage.", icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 8h8M8 12h5"/></svg>'},
  {n:"05", t:"Development", d:"Designs get built on modern, maintainable code — with performance and accessibility built in from the start.", icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 6L2 12l6 6M16 6l6 6-6 6"/></svg>'},
  {n:"06", t:"Testing", d:"Cross-device QA, usability testing, and performance checks before anything goes live.", icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>'},
  {n:"07", t:"Launch", d:"A coordinated go-live with monitoring in place, so nothing breaks quietly on day one.", icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>'},
  {n:"08", t:"Growth", d:"Ongoing optimization — SEO, campaigns, and maintenance — so the work keeps paying off after launch.", icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></svg>'}
];

const TESTIMONIALS = [
  {i:"JR", q:"LaunchCraft is the first studio we've used that explains why a design decision works, not just that it looks good. Our conversion rate doubled.", n:"Jordan Reyes", r:"Head of Growth, Fieldstone Outfitters"},
  {i:"AM", q:"They rebuilt our entire brand and website in under two months without a single missed deadline. Consultation requests are up 140%.", n:"Alicia Moreno", r:"Partner, Moreno & Bell Law"},
  {i:"DK", q:"Our social presence finally converts. LaunchCraft treats content like a system, not a scramble every week.", n:"Devon Kade", r:"Owner, Hollow Peak Roasters"},
  {i:"SP", q:"Patient booking abandonment dropped by half within a month of launch. The team understood healthcare UX in a way most agencies don't.", n:"Sarah Pham", r:"Director of Marketing, Verdant Health"}
];

const FAQS = [
  {q:"How long does a typical project take?", a:"Most website projects take 8–14 weeks from kickoff to launch, depending on scope. Branding-only engagements typically run 4–6 weeks. We'll give you a firm timeline after our discovery call."},
  {q:"Do you work with businesses outside our industry experience?", a:"Yes. Our process is built around research and discovery specifically because we don't assume industry knowledge going in — we build it with you at the start of every engagement."},
  {q:"What's included after launch?", a:"Every project includes a 30-day support window. Beyond that, we offer ongoing maintenance, SEO, and marketing retainers if you want a continued partnership."},
  {q:"How is pricing structured?", a:"Projects are quoted based on scope after discovery, not hourly rates. Retainer services (SEO, social, marketing) are billed monthly with no long-term lock-in."},
  {q:"Can you work with our existing brand guidelines or platform?", a:"Absolutely. Many engagements are website-only or marketing-only work built on an existing brand. We'll always flag if something in your current setup will limit results."},
  {q:"Do you offer ongoing marketing after the website is live?", a:"Yes — SEO, paid, email, and social retainers are available and often start right after launch, since a new site performs best paired with active promotion."}
];

// ============ HELPERS ============
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

// ============ HEADER SCROLL STATE ============
const header = $('#siteHeader');
const progressBar = $('#progressBar');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  progressBar.style.width = pct + '%';
}, {passive:true});

// ============ MOBILE MENU ============
const menuToggle = $('#menuToggle');
const mobileNav = $('#mobileNav');
menuToggle.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuToggle.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', open);
});
$$('[data-nav]').forEach(a => a.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  menuToggle.classList.remove('open');
}));

// ============ CURSOR GLOW ============
const cursorGlow = $('#cursorGlow');
if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
  window.addEventListener('mousemove', e => {
    cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
    cursorGlow.classList.add('active');
  });
}

// ============ MAGNETIC BUTTONS ============
$$('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width/2;
    const y = e.clientY - r.top - r.height/2;
    btn.style.transform = `translate(${x*0.25}px, ${y*0.35}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0,0)'; });
});

// ============ HERO LOAD ANIMATION ============
window.addEventListener('load', () => {
  $('.hero').classList.add('loaded');
});

// ============ SCROLL REVEAL ============
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:0.15});
$$('[data-reveal]').forEach(el => revealObserver.observe(el));

// ============ ANIMATED COUNTERS ============
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const numEl = $('.stat-num', el);
    let start = null;
    const duration = 1400;
    function step(ts){
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1-progress, 3);
      numEl.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
    counterObserver.unobserve(el);
  });
}, {threshold:0.4});
$$('.stat[data-count]').forEach(el => counterObserver.observe(el));

// ============ BACKGROUND GRID CANVAS ============
const canvas = $('#gridCanvas');
const ctx = canvas.getContext('2d');
function sizeCanvas(){
  canvas.width = canvas.offsetWidth * devicePixelRatio;
  canvas.height = canvas.offsetHeight * devicePixelRatio;
}
function drawGrid(){
  sizeCanvas();
  ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
  ctx.clearRect(0,0,canvas.offsetWidth, canvas.offsetHeight);
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 1;
  const gap = 56;
  for (let x=0; x<canvas.offsetWidth; x+=gap){
    ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x, canvas.offsetHeight); ctx.stroke();
  }
  for (let y=0; y<canvas.offsetHeight; y+=gap){
    ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(canvas.offsetWidth, y); ctx.stroke();
  }
}
drawGrid();
window.addEventListener('resize', drawGrid);

// ============ SERVICES MODAL ============
const modalOverlay = $('#modalOverlay');
const modalContent = $('#modalContent');
const modalClose = $('#modalClose');

function openModal(html){
  modalContent.innerHTML = html;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

$$('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.service;
    const s = SERVICES_DETAIL[key];
    openModal(`
      <div class="service-detail">
        <p class="eyebrow">Service</p>
        <h2>${s.title}</h2>
        <p>${s.desc}</p>
        <ul>${s.points.map(p => `<li>${p}</li>`).join('')}</ul>
        <a href="#contact" class="btn btn-glow magnetic" style="margin-top:24px;" onclick="document.getElementById('modalOverlay').classList.remove('open'); document.body.style.overflow='';">Start a project like this</a>
      </div>
    `);
  });
});

// ============ PORTFOLIO GRID + CASE STUDY MODAL ============
const portfolioGrid = $('#portfolioGrid');
portfolioGrid.innerHTML = PROJECTS.map(p => `
  <div class="project-card reveal" data-reveal data-project="${p.id}">
    <div class="project-media" style="background:radial-gradient(circle at 30% 20%, ${p.accent}22, #0D0D14 70%);">
      <span class="glow-tag" style="color:${p.accent};">${p.tag}</span>
      <span class="project-arrow">↗</span>
    </div>
    <div class="project-info">
      <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
    </div>
  </div>
`).join('');
$$('.project-card').forEach(card => revealObserver.observe(card));

portfolioGrid.addEventListener('click', e => {
  const card = e.target.closest('.project-card');
  if (!card) return;
  const p = PROJECTS.find(x => x.id === card.dataset.project);
  openModal(`
    <div class="case-hero" style="background:radial-gradient(circle at 30% 20%, ${p.accent}33, #0D0D14 70%); color:${p.accent};">${p.tag}</div>
    <p class="eyebrow">Case Study</p>
    <h2>${p.title}</h2>
    <div class="case-meta">
      <div><span>Client</span><p>${p.client}</p></div>
      <div><span>Industry</span><p>${p.industry}</p></div>
      <div><span>Timeline</span><p>${p.timeline}</p></div>
      <div><span>Services</span><p>${p.services}</p></div>
    </div>
    <div class="case-section"><h4>The Challenge</h4><p>${p.challenge}</p></div>
    <div class="case-section"><h4>The Solution</h4><p>${p.solution}</p></div>
    <div class="case-section"><h4>Our Process</h4><p>${p.process}</p></div>
    <div class="case-section"><h4>Technologies Used</h4><p>${p.tech}</p></div>
    <div class="case-section">
      <h4>Results</h4>
      <div class="case-results">${p.results.map(r => `<div><div class="num">${r.num}</div><div class="label">${r.label}</div></div>`).join('')}</div>
    </div>
  `);
});

// ============ PROCESS TIMELINE ============
$('#timeline').innerHTML = PROCESS.map(step => `
  <div class="tl-step reveal" data-reveal>
    <div class="tl-num">${step.n}</div>
    <div class="tl-body">
      <div class="tl-icon">${step.icon}</div>
      <div class="tl-text"><h3>${step.t}</h3><p>${step.d}</p></div>
    </div>
  </div>
`).join('');
$$('.tl-step').forEach(el => revealObserver.observe(el));

// ============ TESTIMONIAL CAROUSEL ============
const track = $('#carouselTrack');
const dotsWrap = $('#carouselDots');
track.innerHTML = TESTIMONIALS.map(t => `
  <div class="t-card">
    <div class="t-avatar">${t.i}</div>
    <div>
      <div class="t-stars">★★★★★</div>
      <p class="t-quote">"${t.q}"</p>
      <p class="t-name"><b>${t.n}</b><br>${t.r}</p>
    </div>
  </div>
`).join('');
dotsWrap.innerHTML = TESTIMONIALS.map((_, i) => `<button aria-label="Go to testimonial ${i+1}" data-i="${i}"></button>`).join('');
let tIndex = 0;
const dots = $$('.carousel-dots button');
function goTo(i){
  tIndex = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
  track.style.transform = `translateX(-${tIndex * 100}%)`;
  dots.forEach((d, idx) => d.classList.toggle('active', idx === tIndex));
}
dots.forEach(d => d.addEventListener('click', () => goTo(parseInt(d.dataset.i))));
goTo(0);
let autoplay = setInterval(() => goTo(tIndex + 1), 6000);
$('#carousel').addEventListener('mouseenter', () => clearInterval(autoplay));
$('#carousel').addEventListener('mouseleave', () => { autoplay = setInterval(() => goTo(tIndex + 1), 6000); });

// ============ FAQ ACCORDION ============
const accordion = $('#accordion');
accordion.innerHTML = FAQS.map((f, i) => `
  <div class="accordion-item${i===0 ? ' open':''}" data-i="${i}">
    <button class="accordion-q">${f.q}<span class="plus"></span></button>
    <div class="accordion-a"><p>${f.a}</p></div>
  </div>
`).join('');
function setAccordionHeights(){
  $$('.accordion-item.open .accordion-a').forEach(a => { a.style.maxHeight = a.scrollHeight + 'px'; });
}
$$('.accordion-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.accordion-item');
    const wasOpen = item.classList.contains('open');
    $$('.accordion-item').forEach(i => {
      i.classList.remove('open');
      $('.accordion-a', i).style.maxHeight = null;
    });
    if (!wasOpen){
      item.classList.add('open');
      $('.accordion-a', item).style.maxHeight = $('.accordion-a', item).scrollHeight + 'px';
    }
  });
});
setAccordionHeights();

// ============ CONTACT FORM ============
const contactForm = $('#contactForm');
const formNote = $('#formNote');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  formNote.textContent = "Thanks — this is a design preview, so nothing was sent. Connect a form service to make this live.";
});
