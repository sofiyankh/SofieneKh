// Projects.tsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Eye, X, Construction } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScrollAnimatedSection } from './ScrollAnimatedSection';
import { SharedBlurCard } from './SharedBlurCard';
import { useTranslation } from 'react-i18next';

type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
  isYoutube?: boolean;
  demoUrl?: string;
  repoUrl: string;
  technologies: string[];
  features: string[];
  status: string;
  myRole: string;
  noPreview?: boolean;
  wip?: boolean;
};

type MediaModal =
  | { open: false }
  | {
      open: true;
      type: 'video' | 'preview';
      url: string;
      title?: string;
      slug?: string;
      isYoutube?: boolean;
      description?: string;
      device?: 'desktop' | 'tablet' | 'mobile';
    };

export function Projects() {
  const { t } = useTranslation();
  const githubUser = 'sofiyankh';

  const [mediaModal, setMediaModal] = useState<MediaModal>({ open: false });
  const mediaContainerRef = useRef<HTMLDivElement | null>(null);
  const [playerLoading, setPlayerLoading] = useState(true);

  const driveEmbed = (shareUrl: string) =>
    shareUrl.replace('/view', '/preview').replace(/\?.*$/, '');

  const projects: Project[] = useMemo(
    () => [
      // ─────────────────────────────────────────────────────────────────
      // 1. TranslateCo
      // ─────────────────────────────────────────────────────────────────
      {
        slug: 'translateco',
        title: 'TranslateCo — Document Translation Platform',
        description:
          'Full-stack platform for a sworn translator agency. Public landing, secure user dashboard, pricing calculator, booking calendar and admin translator dashboard for order management. Implemented JWT sessions, input validation and secure deployment.',
        image:
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=60',
        demoUrl: 'https://v0-translation-agency-website-alpha.vercel.app/',
        repoUrl: 'https://github.com/sofiyankh/translateco',
        technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'JWT', 'Zod', 'Docker', 'Vercel'],
        features: [
          'User & admin dashboards (order tracking & notifications)',
          'Document price calculator and expedited pricing',
          'Calendar booking, pick-up scheduling, and notifications',
          'Secure sessions, HTTPS, cookie hardening, input validation',
        ],
        status: 'Production',
        myRole: 'Design, Full-stack implementation, Security & Deployment',
      },

      // ─────────────────────────────────────────────────────────────────
      // 2. SocialLine
      // ─────────────────────────────────────────────────────────────────
      {
        slug: 'socialline',
        title: 'SocialLine — Unified Social Platform',
        description:
          'A scaled social platform combining feed, stories, direct messaging, and moderation tools. Built with security-first session handling, realtime notifications, and policy-driven moderation queues.',
        image:
          'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1400&q=60',
        videoUrl: driveEmbed(
          'https://drive.google.com/file/d/1WWpFJVqu62skvCls5L3POc9awaczfzuf/view?usp=sharing'
        ),
        isYoutube: false,
        repoUrl: 'https://github.com/sofiyankh/socialline',
        noPreview: true,
        technologies: ['React', 'Next.js', 'Node.js', 'Redis', 'PostgreSQL', 'WebSocket', 'JWT'],
        features: [
          'Multi-format feed, stories, DMs, and moderation queue',
          'Realtime notifications and activity stream',
          'Policy-driven RBAC and rate limiting',
        ],
        status: 'MVP',
        myRole: 'Architect, Frontend & Backend lead, Security',
      },

      // ─────────────────────────────────────────────────────────────────
      // 3. LiveChat
      // ─────────────────────────────────────────────────────────────────
      {
        slug: 'livechat',
        title: 'LiveChat — Realtime Chat + Voice & Video',
        description:
          'WhatsApp-like realtime messaging with WebRTC voice & video. Signaling over WebSocket, high-security sessions and media handling suitable for mobile and desktop clients.',
        image:
          'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=60',
        demoUrl: 'https://live-dialogue-flow.lovable.app',
        videoUrl: driveEmbed(
          'https://drive.google.com/file/d/1YUYaMqAutTeRCrXAQWe6QMt7ClH1nwBn/view?usp=sharing'
        ),
        isYoutube: false,
        repoUrl: 'https://github.com/sofiyankh/live-chat',
        technologies: ['React', 'Node.js', 'Socket.io', 'WebRTC', 'Redis', 'PostgreSQL', 'JWT'],
        features: ['1:1 & group chat', 'WebRTC voice/video', 'Read receipts and presence', 'Secure sessions'],
        status: 'Production',
        myRole: 'Full-stack & Real-time systems, Security',
      },

      // ─────────────────────────────────────────────────────────────────
      // 4. LuxShop
      // ─────────────────────────────────────────────────────────────────
      {
        slug: 'luxshop',
        title: 'LuxShop — Fashion e-commerce (Brand Platform)',
        description:
          'Full e-commerce platform for a fashion brand with product variants, filterable catalogs, secure Stripe checkout, order tracking and an admin analytics dashboard with BI-style metrics.',
        image:
          'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1400&q=60',
        demoUrl: 'https://lux-shopv3.vercel.app/',
        videoUrl: driveEmbed(
          'https://drive.google.com/file/d/1kO6HmGRiLR-wZ-998PZand3IrXt3DjxV/view?usp=sharing'
        ),
        isYoutube: false,
        repoUrl: 'https://github.com/sofiyankh/shop',
        technologies: ['Next.js', 'React', 'Stripe', 'PostgreSQL', 'Supabase Storage', 'Docker'],
        features: ['Product variants & filters', 'Secure checkout & webhooks', 'Admin analytics & inventory management'],
        status: 'Production',
        myRole: 'End-to-end developer, Analytics & Security',
      },

      // ─────────────────────────────────────────────────────────────────
      // 5. MarketplacePro
      // ─────────────────────────────────────────────────────────────────
      {
        slug: 'marketplacepro',
        title: 'MarketplacePro — Marketplace Platform',
        description:
          'Enterprise-grade marketplace with offers/negotiations, reporting, saved listings, notifications, map integration and admin moderation workflows. Completed feature audit and implemented core MVP → v1 features.',
        image:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=60',
        demoUrl: 'https://wifi-cerise-51719702.figma.site/',
        repoUrl: 'https://github.com/sofiyankh/MvpMarketPlace',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Supabase', 'Mapbox', 'Docker', 'Stripe'],
        features: ['Offers & negotiation', 'Report & safety system', 'Advanced filters & admin queue'],
        status: 'Production',
        myRole: 'Product owner, Backend & Admin tooling, Security lead',
      },

      // ─────────────────────────────────────────────────────────────────
      // 6. Learnify
      // ─────────────────────────────────────────────────────────────────
      {
        slug: 'learnify',
        title: 'Learnify — Udemy-style Learning Platform',
        description:
          'Complete learning platform with multi-step course creation, instructor & student dashboards, course player, demo accounts, and admin moderation — built with a focus on UX and backend reliability.',
        image:
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=60',
        demoUrl: 'https://python-home-35406037.figma.site/',
        repoUrl: 'https://github.com/sofiyankh/ElearnPlatform',
        technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'JWT'],
        features: ['Course creation wizard', 'Progress & certificates', 'Notes, Q&A and resources'],
        status: 'Production',
        myRole: 'Lead developer, UX design, Backend integration',
      },

      // ─────────────────────────────────────────────────────────────────
      // 7. Watchtower (YouTube Clone)
      // ─────────────────────────────────────────────────────────────────
      {
        slug: 'watchtower',
        title: 'Watchtower — YouTube-style Video Platform',
        description:
          'Video platform with an advanced player, creator studio, Supabase-backed storage, comments/analytics and creator monetization features. Robust debug tooling for testing backend integration and fallbacks.',
        image:
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=60',
        demoUrl: 'https://fog-race-08363035.figma.site/',
        repoUrl: 'https://github.com/sofiyankh/YoutubeClone',
        technologies: ['React', 'Supabase', 'Node.js', 'WebRTC', 'FFmpeg', 'Redis', 'JWT'],
        features: ['Advanced player', 'Creator studio', 'Analytics & monetization-ready architecture'],
        status: 'Production',
        myRole: 'Full-stack developer & platform architect',
      },

      // ─────────────────────────────────────────────────────────────────
      // 8. ToolForge / AI Portal
      // ─────────────────────────────────────────────────────────────────
      {
        slug: 'toolforge',
        title: 'ToolForge — Personal AI Tools Hub',
        description:
          'Personal AI tools hub with a polished design system, dark/light themes, animated background and a curated set of utilities for prototyping AI integrations.',
        image:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=60',
        demoUrl: 'https://forge-ai-station.lovable.app/',
        repoUrl: 'https://github.com/sofiyankh/Personal-ai-forge-portal',
        technologies: ['React', 'TypeScript', 'FastAPI', 'Redis', 'Docker', 'Tailwind CSS'],
        features: ['Design tokens & theme', 'Interactive tool pages', 'Animated AI background'],
        status: 'Personal',
        myRole: 'Design & full implementation',
      },

      // ─────────────────────────────────────────────────────────────────
      // 9. MobileMarket (Android/Kotlin) — screenshots only on GitHub
      // ─────────────────────────────────────────────────────────────────
      {
        slug: 'mobilemarket',
        title: 'MobileMarket (Android/Kotlin)',
        description:
          'Native Android marketplace app (Kotlin) integrated with MarketplacePro backend. Offline caching, image optimization, push notifications and secure JWT auth for mobile-first buyers and sellers.',
        image:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=60',
        repoUrl: 'https://github.com/sofiyankh/mobile-market-place',
        noPreview: true,
        technologies: ['Kotlin', 'Android Studio', 'Retrofit', 'Room', 'Supabase / REST', 'JWT'],
        features: ['Offline caching', 'Push notifications', 'Secure auth & payments'],
        status: 'Production',
        myRole: 'Mobile lead & API integration',
      },

      // ─────────────────────────────────────────────────────────────────
      // 10. Enterprise Dashboard — no links yet → WIP
      // ─────────────────────────────────────────────────────────────────
      {
        slug: 'enterprise-dashboard',
        title: 'Enterprise Dashboard (Analytics)',
        description:
          'Reusable analytics dashboard for enterprise customers: realtime charts, role-based access control and exportable reports.',
        image:
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=60',
        repoUrl: `https://github.com/${githubUser}`,
        wip: true,
        technologies: ['React', 'Chart.js', 'Node.js', 'PostgreSQL', 'AWS'],
        features: ['Realtime analytics', 'Role management', 'Data export'],
        status: 'Beta',
        myRole: 'Frontend & backend implementation',
      },

      // ─────────────────────────────────────────────────────────────────
      // 11. Spark Pipeline Optimization (Quetratech)
      // ─────────────────────────────────────────────────────────────────
      {
        slug: 'spark-pipeline',
        title: 'Spark Pipeline Optimization — Quetratech',
        description:
          'Data engineering project focused on optimizing Apache Spark ETL pipelines for large-scale data processing. Implemented performance tuning, partitioning strategies and monitoring dashboards.',
        image:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=60',
        videoUrl: driveEmbed(
          'https://drive.google.com/file/d/1Ig5Je5f91ava-UY7Xd_GoO2tJVnzDuv9/view?usp=sharing'
        ),
        isYoutube: false,
        repoUrl: 'https://github.com/sofiyankh/spark-pipeline-optimization-quetratech',
        noPreview: true,
        technologies: ['Apache Spark', 'Python', 'PySpark', 'Docker', 'Airflow', 'PostgreSQL'],
        features: ['ETL pipeline optimization', 'Partitioning & caching strategies', 'Performance monitoring dashboard'],
        status: 'Production',
        myRole: 'Data engineer & pipeline architect',
      },

      // ─────────────────────────────────────────────────────────────────
      // 12. MegaMart
      // ─────────────────────────────────────────────────────────────────
      {
        slug: 'megamart',
        title: 'MegaMart — Sharp Storefront',
        description:
          'Modern storefront platform with a clean product catalog, cart experience and checkout flow. Designed for fast browsing and conversion-optimized UX.',
        image:
          'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1400&q=60',
        demoUrl: 'https://sharp-storefront.lovable.app/',
        repoUrl: 'https://github.com/sofiyankh/sharp-storefront-v1',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Node.js'],
        features: ['Filterable product catalog', 'Cart & checkout flow', 'Conversion-optimized UX'],
        status: 'Production',
        myRole: 'Full-stack developer & UX',
      },

      // ─────────────────────────────────────────────────────────────────
      // 13. CodeFusion — PFE Project
      // ─────────────────────────────────────────────────────────────────
      {
        slug: 'codefusion',
        title: 'CodeFusion — Final Year Project (PFE)',
        description:
          'Academic final-year engineering project. A collaborative coding environment with realtime editing, code execution, session management and role-based access for educators and students.',
        image:
          'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=60',
        videoUrl: driveEmbed(
          'https://drive.google.com/file/d/1bGcdbYBW1t0TeX7b6YGF2_wmIh3anZHv/view?usp=sharing'
        ),
        isYoutube: false,
        repoUrl: 'https://github.com/sofiyankh/codefusion',
        noPreview: true,
        technologies: ['React', 'Node.js', 'WebSocket', 'Monaco Editor', 'Docker', 'JWT'],
        features: ['Realtime collaborative editing', 'Sandboxed code execution', 'Session & RBAC management'],
        status: 'Personal',
        myRole: 'Lead developer & system architect',
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'bg-green-600 text-white';
      case 'MVP':        return 'bg-indigo-600 text-white';
      case 'Personal':   return 'bg-purple-600 text-white';
      case 'Beta':       return 'bg-orange-600 text-white';
      case 'Planning':   return 'bg-yellow-500 text-black';
      default:           return 'bg-gray-500 text-white';
    }
  };

  // ─── Open video inline ──────────────────────────────────────────────
  const openVideoInline = (project: Project) => {
    if (!project.videoUrl) return;
    setPlayerLoading(true);
    setMediaModal({
      open: true,
      type: 'video',
      url: project.videoUrl,
      title: project.title,
      slug: project.slug,
      isYoutube: project.isYoutube ?? false,
      description: project.description,
      device: 'desktop',
    });
  };

  // ─── Open preview inline (iframe) ───────────────────────────────────
  const openPreviewInline = (project: Project) => {
    const demoUrl = project.demoUrl;
    if (!demoUrl) return;
    setPlayerLoading(true);
    setMediaModal({
      open: true,
      type: 'preview',
      url: demoUrl,
      title: project.title,
      slug: project.slug,
      isYoutube: false,
      description: project.description,
      device: 'desktop',
    });
  };

  // ─── Open demo in new tab ────────────────────────────────────────────
  const openDemoNewTab = (project: Project) => {
    const demoUrl = project.demoUrl;
    if (!demoUrl) return;
    window.open(demoUrl, '_blank', 'noopener,noreferrer');
  };

  // ─── Scroll into view when media panel opens ────────────────────────
  useEffect(() => {
    if (mediaModal.open && mediaContainerRef.current) {
      setTimeout(() => {
        mediaContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 120);
    }
  }, [mediaModal.open]);

  // ─── Escape key closes modal ─────────────────────────────────────────
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && mediaModal.open) setMediaModal({ open: false });
    }
    if (mediaModal.open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mediaModal.open]);

  const deviceSizes = {
    desktop: { width: 1200, height: 720 },
    tablet:  { width: 820,  height: 1100 },
    mobile:  { width: 375,  height: 812 },
  } as const;

  const setDeviceMode = (mode: 'desktop' | 'tablet' | 'mobile') => {
    if (!mediaModal.open) return;
    setMediaModal({ ...(mediaModal as any), device: mode });
  };

  // ─── Inline media panel ──────────────────────────────────────────────
  const renderMediaArea = () => {
    if (!mediaModal.open) return null;
    const { type, url, title, device = 'desktop', description } = mediaModal as any;
    const size = deviceSizes[device as keyof typeof deviceSizes];

    return (
      <div ref={mediaContainerRef} className="mt-12 max-w-6xl mx-auto">
        <div className="bg-background rounded-xl shadow-2xl overflow-hidden border">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/30">
            <div className="flex items-center gap-4">
              <div className="text-sm font-semibold">{title}</div>
              <div className="text-xs text-muted-foreground">
                {type === 'video' ? t('projects.videoDemo') : t('projects.livePreview')}
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* Device picker — only meaningful for preview iframes */}
              {type === 'preview' && (
                <div className="inline-flex items-center gap-1 bg-muted/10 rounded p-1">
                  {(['desktop', 'tablet', 'mobile'] as const).map((d) => (
                    <button
                      key={d}
                      onClick={() => setDeviceMode(d)}
                      className={`px-2 py-1 text-xs rounded ${
                        device === d ? 'bg-primary text-white' : 'text-muted-foreground hover:bg-muted/20'
                      }`}
                      aria-pressed={device === d}
                    >
                      {d.charAt(0).toUpperCase() + d.slice(1)}
                    </button>
                  ))}
                </div>
              )}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs underline hover:text-primary hidden sm:inline"
              >
                {t('projects.openTab')}
              </a>
              <button
                onClick={() => setMediaModal({ open: false })}
                aria-label="Close media"
                className="p-2 rounded hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-6 flex flex-col items-center">
            <div
              className="relative bg-black rounded-lg shadow-lg overflow-hidden"
              style={{
                width: type === 'video' ? '100%' : size.width,
                height: type === 'video' ? 'auto' : size.height,
                aspectRatio: type === 'video' ? '16/9' : undefined,
                maxWidth: '100%',
                boxShadow: '0 12px 30px rgba(2,6,23,0.5)',
                borderRadius: 16,
                border: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              {type === 'preview' && device === 'mobile' && (
                <div
                  style={{
                    position: 'absolute',
                    top: 8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 120,
                    height: 6,
                    borderRadius: 12,
                    background: 'rgba(255,255,255,0.06)',
                  }}
                />
              )}

              <div style={{ width: '100%', height: '100%' }}>
                {type === 'video' ? (
                  <iframe
                    title={title}
                    src={url}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={() => setPlayerLoading(false)}
                    style={{ width: '100%', height: '100%', border: 0 }}
                  />
                ) : (
                  <iframe
                    title={`${title} — preview`}
                    src={url}
                    sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
                    onLoad={() => setPlayerLoading(false)}
                    style={{ width: '100%', height: '100%', border: 0 }}
                  />
                )}
              </div>

              {playerLoading && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0,0,0,0.45)',
                    color: 'white',
                    fontSize: 14,
                  }}
                >
                  {t('projects.loading')}
                </div>
              )}
            </div>

            {description && (
              <div className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-4xl text-center">
                {description}
              </div>
            )}

            <div className="mt-4 flex gap-3">
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
              >
                {t('projects.openTab')}
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setMediaModal({ open: false })}>
                {t('projects.close')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <ScrollAnimatedSection id="projects" className="py-20 gradient-bg" blur>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('projects.heading')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const hasVideo   = !!project.videoUrl;
            const hasPreview = !!project.demoUrl && !project.noPreview;

            return (
              <SharedBlurCard key={project.slug} className="group overflow-hidden h-full flex flex-col">
                {/* ── Thumbnail ── */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                  </div>
                  {project.wip && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-yellow-500 text-black flex items-center gap-1">
                        <Construction className="w-3 h-3" /> {t('projects.inProgress')}
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                    <div className="text-xs text-muted-foreground mt-1">
                      <strong>{t('projects.role')}:</strong> {project.myRole}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col flex-1">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>

                    {/* WIP notice */}
                    {project.wip && (
                      <div className="mb-3 flex items-start gap-2 rounded-lg border border-yellow-500/30 bg-yellow-500/5 px-3 py-2 text-xs text-yellow-600 dark:text-yellow-400">
                        <Construction className="mt-0.5 w-3.5 h-3.5 flex-shrink-0" />
                        <span>{t('projects.wipNotice')}</span>
                      </div>
                    )}

                    {/* Screenshots-only notice */}
                    {project.noPreview && !project.wip && !hasVideo && (
                      <div className="mb-3 flex items-start gap-2 rounded-lg border border-blue-500/30 bg-blue-500/5 px-3 py-2 text-xs text-blue-600 dark:text-blue-400">
                        <Construction className="mt-0.5 w-3.5 h-3.5 flex-shrink-0" />
                        <span>{t('projects.noPreviewNotice')}</span>
                      </div>
                    )}

                    {/* Key Features */}
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                        {t('projects.keyFeatures')}
                      </h4>
                      <div className="grid grid-cols-1 gap-1 text-xs text-muted-foreground">
                        {project.features.map((f, i) => (
                          <div key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <div>{f}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech badges */}
                    <div className="mb-2">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 6).map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs px-2 py-1">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 6 && (
                          <Badge variant="outline" className="text-xs px-2 py-1">
                            +{project.technologies.length - 6}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* ── Action buttons ── */}
                  <div className="mt-4 pt-3 border-t flex items-center gap-2 flex-wrap">
                    {hasPreview && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 rounded-full"
                        onClick={() => openDemoNewTab(project)}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" /> {t('projects.demo')}
                      </Button>
                    )}

                    {hasPreview && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="rounded-full"
                        onClick={() => openPreviewInline(project)}
                      >
                        <Eye className="w-4 h-4 mr-1" /> {t('projects.preview')}
                      </Button>
                    )}

                    {hasVideo && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="rounded-full"
                        onClick={() => openVideoInline(project)}
                      >
                        <Eye className="w-4 h-4 mr-1" /> {t('projects.video')}
                      </Button>
                    )}

                    {!project.wip && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="rounded-full"
                        onClick={() => window.open(project.repoUrl, '_blank', 'noopener,noreferrer')}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </SharedBlurCard>
            );
          })}
        </div>

        {/* ── Inline media panel ── */}
        {mediaModal.open && renderMediaArea()}

        {/* ── GitHub CTA ── */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8"
            onClick={() => window.open(`https://github.com/${githubUser}`, '_blank', 'noopener,noreferrer')}
          >
            <Github className="w-5 h-5 mr-2" /> {t('projects.viewGithub')}
          </Button>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}