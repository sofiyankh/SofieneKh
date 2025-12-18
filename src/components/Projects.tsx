import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Eye, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScrollAnimatedSection } from './ScrollAnimatedSection';
import { SharedBlurCard } from './SharedBlurCard';

/**
 * Projects component
 * - Buttons are fixed/consistent across cards (footer area)
 * - Each project has a description field
 * - Custom, centered player modal (YouTube iframe or fallback)
 */

export function Projects() {
  const githubUser = 'sofiyankh';
  const githubPagesBase = `https://${githubUser}.github.io`;
  const githubRepoBase = `https://github.com/${githubUser}`;

  const [videoModal, setVideoModal] = useState<
    | { open: false }
    | { open: true; url: string; title?: string; slug?: string; isYoutube?: boolean; description?: string }
  >({ open: false });

  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [playerLoading, setPlayerLoading] = useState(true);

  const projects = useMemo(
    () => [
      {
        slug: 'translateco',
        title: 'TranslateCo — Document Translation Platform',
        description:
          'Full-stack platform for a sworn translator agency. Public landing, secure user dashboard, pricing calculator, booking calendar and admin translator dashboard for order management. Implemented JWT sessions, input validation and secure deployment.',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=60',
        youtube: 'https://www.youtube.com/embed/M7lc1UVf-VE',
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
      {
        slug: 'socialline',
        title: 'SocialLine — Unified Social Platform',
        description:
          'A scaled social platform combining feed, stories, direct messaging, and moderation tools. Built with security-first session handling, realtime notifications, and policy-driven moderation queues.',
        image: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1400&q=60',
        youtube: 'https://www.youtube.com/embed/M7lc1UVf-VE',
        technologies: ['React', 'Next.js', 'Node.js', 'Redis', 'PostgreSQL', 'WebSocket', 'JWT'],
        features: [
          'Multi-format feed, stories, DMs, and moderation queue',
          'Realtime notifications and activity stream',
          'Policy-driven RBAC and rate limiting',
        ],
        status: 'MVP',
        myRole: 'Architect, Frontend & Backend lead, Security',
      },
      {
        slug: 'livechat',
        title: 'LiveChat — Realtime Chat + Voice & Video',
        description:
          'WhatsApp-like realtime messaging with WebRTC voice & video. Signaling over WebSocket, high-security sessions and media handling suitable for mobile and desktop clients.',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=60',
        youtube: 'https://www.youtube.com/embed/M7lc1UVf-VE',
        technologies: ['React', 'Node.js', 'Socket.io', 'WebRTC', 'Redis', 'PostgreSQL', 'JWT'],
        features: ['1:1 & group chat', 'WebRTC voice/video', 'Read receipts and presence', 'Secure sessions'],
        status: 'Production',
        myRole: 'Full-stack & Real-time systems, Security',
      },
      {
        slug: 'luxshop',
        title: 'LuxShop — Fashion e-commerce (Brand Platform)',
        description:
          'Full e-commerce platform for a fashion brand with product variants, filterable catalogs, secure Stripe checkout, order tracking and an admin analytics dashboard with BI-style metrics.',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1400&q=60',
        youtube: 'https://www.youtube.com/embed/M7lc1UVf-VE',
        technologies: ['Next.js', 'React', 'Stripe', 'PostgreSQL', 'Supabase Storage', 'Docker'],
        features: ['Product variants & filters', 'Secure checkout & webhooks', 'Admin analytics & inventory management'],
        status: 'Production',
        myRole: 'End-to-end developer, Analytics & Security',
      },
      {
        slug: 'marketplacepro',
        title: 'MarketplacePro — Marketplace Platform',
        description:
          'Enterprise-grade marketplace with offers/negotiations, reporting, saved listings, notifications, map integration and admin moderation workflows. Completed feature audit and implemented core MVP → v1 features.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=60',
        youtube: 'https://www.youtube.com/embed/M7lc1UVf-VE',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Supabase', 'Mapbox', 'Docker', 'Stripe'],
        features: ['Offers & negotiation', 'Report & safety system', 'Advanced filters & admin queue'],
        status: 'Production',
        myRole: 'Product owner, Backend & Admin tooling, Security lead',
      },
      {
        slug: 'learnify',
        title: 'Learnify — Udemy-style Learning Platform',
        description:
          'Complete learning platform with multi-step course creation, instructor & student dashboards, course player, demo accounts, and admin moderation — built with a focus on UX and backend reliability.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=60',
        youtube: 'https://www.youtube.com/embed/M7lc1UVf-VE',
        technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'JWT'],
        features: ['Course creation wizard', 'Progress & certificates', 'Notes, Q&A and resources'],
        status: 'Production',
        myRole: 'Lead developer, UX design, Backend integration',
      },
      {
        slug: 'watchtower',
        title: 'Watchtower — YouTube-style Video Platform',
        description:
          'Video platform with an advanced player, creator studio, Supabase-backed storage, comments/analytics and creator monetization features. Robust debug tooling for testing backend integration and fallbacks.',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=60',
        youtube: 'https://www.youtube.com/embed/M7lc1UVf-VE',
        technologies: ['React', 'Supabase', 'Node.js', 'WebRTC', 'FFmpeg', 'Redis', 'JWT'],
        features: ['Advanced player', 'Creator studio', 'Analytics & monetization-ready architecture'],
        status: 'Production',
        myRole: 'Full-stack developer & platform architect',
      },
      {
        slug: 'toolforge',
        title: 'ToolForge — Personal AI Tools Hub',
        description:
          'Personal AI tools hub with a polished design system, dark/light themes, animated background and a curated set of utilities for prototyping AI integrations.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=60',
        youtube: 'https://www.youtube.com/embed/M7lc1UVf-VE',
        technologies: ['React', 'TypeScript', 'FastAPI', 'Redis', 'Docker', 'Tailwind CSS'],
        features: ['Design tokens & theme', 'Interactive tool pages', 'Animated AI background'],
        status: 'Personal',
        myRole: 'Design & full implementation',
      },
      {
        slug: 'mobilemarket',
        title: 'MobileMarket (Android/Kotlin)',
        description:
          'Native Android marketplace app (Kotlin) integrated with MarketplacePro backend. Offline caching, image optimization, push notifications and secure JWT auth for mobile-first buyers and sellers.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=60',
        youtube: 'https://www.youtube.com/embed/M7lc1UVf-VE',
        technologies: ['Kotlin', 'Android Studio', 'Retrofit', 'Room', 'Supabase / REST', 'JWT'],
        features: ['Offline caching', 'Push notifications', 'Secure auth & payments'],
        status: 'Production',
        myRole: 'Mobile lead & API integration',
      },
      {
        slug: 'enterprise-dashboard',
        title: 'Enterprise Dashboard (Analytics)',
        description:
          'Reusable analytics dashboard for enterprise customers: realtime charts, role-based access control and exportable reports.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=60',
        youtube: 'https://www.youtube.com/embed/M7lc1UVf-VE',
        technologies: ['React', 'Chart.js', 'Node.js', 'PostgreSQL', 'AWS'],
        features: ['Realtime analytics', 'Role management', 'Data export'],
        status: 'Production',
        myRole: 'Frontend & backend implementation',
      },
    ],
    []
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production':
        return 'bg-green-600 text-white';
      case 'MVP':
        return 'bg-indigo-600 text-white';
      case 'Personal':
        return 'bg-purple-600 text-white';
      case 'Beta':
        return 'bg-orange-600 text-white';
      case 'Planning':
        return 'bg-yellow-500 text-black';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const openVideo = (project: { slug: string; title?: string; youtube?: string; description?: string }) => {
    const url = project.youtube ?? `${githubPagesBase}/${project.slug}/demo.mp4`;
    const isYoutube = /youtube\.com|youtu\.be/.test(url);
    setPlayerLoading(true);
    setVideoModal({ open: true, url, title: project.title, slug: project.slug, isYoutube, description: project.description });
  };

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && videoModal.open) setVideoModal({ open: false });
    }
    if (videoModal.open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [videoModal]);

  useEffect(() => {
    if (videoModal.open && closeButtonRef.current) closeButtonRef.current.focus();
  }, [videoModal.open]);

  return (
    <ScrollAnimatedSection id="projects" className="py-20 gradient-bg" blur>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Selected Projects — Full Stack, Security & Deployments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end projects I designed, implemented (frontend & backend), secured and deployed — curated for academic review and professional evaluation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const repoUrl = `${githubRepoBase}/${project.slug}`;
            const demoUrl = `${githubPagesBase}/${project.slug}/`;

            return (
              <SharedBlurCard key={project.slug} className="group overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <ImageWithFallback src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-3 right-3">
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                    <div className="text-xs text-muted-foreground mt-1">
                      <strong>Role:</strong> {project.myRole}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col flex-1">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>

                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Key Features</h4>
                      <div className="grid grid-cols-1 gap-1 text-xs text-muted-foreground">
                        {project.features.map((f, i) => (
                          <div key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <div>{f}</div>
                          </div>
                        ))}
                      </div>
                    </div>

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

                  <div className="mt-4 pt-3 border-t flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 rounded-full"
                      onClick={() => window.open(demoUrl, '_blank', 'noopener,noreferrer')}
                      aria-label={`Open demo site for ${project.title}`}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" /> Demo
                    </Button>

                    <Button size="sm" variant="ghost" className="rounded-full" onClick={() => openVideo(project)}>
                      <Eye className="w-4 h-4 mr-1" /> Video
                    </Button>

                    <Button
                      size="sm"
                      variant="ghost"
                      className="rounded-full"
                      onClick={() => window.open(repoUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </SharedBlurCard>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full px-8" onClick={() => window.open(`${githubRepoBase}`, '_blank', 'noopener,noreferrer')}>
            <Github className="w-5 h-5 mr-2" /> View More on GitHub
          </Button>
        </div>
      </div>

      {/* Full-screen centered video modal */}
      {videoModal.open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={videoModal.title || 'Project demo video'}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setVideoModal({ open: false })}
            aria-hidden="true"
          />

          <div className="relative z-10 w-full max-w-5xl mx-auto">
            <div className="bg-background rounded-xl shadow-2xl overflow-hidden border">
              <div className="flex items-center justify-between px-4 py-2 border-b">
                <div className="text-sm font-semibold">{videoModal.title}</div>
                <div className="flex items-center gap-2">
                  <button
                    ref={closeButtonRef}
                    onClick={() => setVideoModal({ open: false })}
                    aria-label="Close video"
                    className="p-2 rounded hover:bg-muted"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-4 flex flex-col items-center gap-4">
                <div className="w-full rounded overflow-hidden" style={{ background: '#000', maxHeight: '75vh' }}>
                  {videoModal.isYoutube ? (
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                      <iframe
                        title={videoModal.title}
                        src={videoModal.url}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={() => setPlayerLoading(false)}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          border: 0,
                        }}
                      />
                    </div>
                  ) : (
                    <video
                      controls
                      preload="metadata"
                      onCanPlay={() => setPlayerLoading(false)}
                      onLoadedMetadata={() => setPlayerLoading(false)}
                      onError={() => setPlayerLoading(false)}
                      controlsList="nodownload"
                      style={{ width: '100%', height: '100%', maxHeight: '75vh', backgroundColor: '#000' }}
                    >
                      <source src={videoModal.url} />
                      Your browser does not support the HTML5 Video element.
                    </video>
                  )}
                </div>

                {videoModal.description && (
                  <div className="w-full text-sm text-muted-foreground leading-relaxed">
                    {videoModal.description}
                  </div>
                )}

                <div className="w-full flex justify-end gap-3">
                  <a href={videoModal.url} target="_blank" rel="noopener noreferrer" className="text-xs underline">
                    Open in new tab
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ScrollAnimatedSection>
  );
}
