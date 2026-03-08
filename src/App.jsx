import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  FileText,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Menu,
  MonitorSmartphone,
  Phone,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from 'lucide-react';



function joinClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Card({ className = "", children, ...props }) {
  return (
    <div
      className={joinClasses(
        "rounded-[2rem] border border-black/5 bg-white/70 shadow-sm backdrop-blur-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CardContent({ className = "", children, ...props }) {
  return (
    <div className={joinClasses("p-6 sm:p-8", className)} {...props}>
      {children}
    </div>
  );
}

function Button({
  asChild = false,
  variant = "default",
  className = "",
  children,
  ...props
}) {
  const variantClass =
    variant === "outline"
      ? "border border-black/10 bg-white/75 text-zinc-900 hover:bg-white shadow-sm"
      : "bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm";

  const finalClass = joinClasses(
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-200 no-underline",
    variantClass,
    className
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      className: joinClasses(finalClass, children.props.className),
    });
  }

  return (
    <button className={finalClass} {...props}>
      {children}
    </button>
  );
}



const profileImage = `${import.meta.env.BASE_URL}img/photoprofil.png`;
const iutLogo = `${import.meta.env.BASE_URL}img/logo-iut.png`;
const ohsLogo = `${import.meta.env.BASE_URL}img/logo-ohs.png`;
const grandEstLogo = `${import.meta.env.BASE_URL}img/logo-grand-est.png`;
const linkedinUrl = 'https://www.linkedin.com/in/lo%C3%AFs-genay/';

const marqueeLabels = [
  'Cisco',
  'Windows Server',
  'Linux',
  'Citrix VDI',
  'VLAN',
  'ToIP',
  'Documentation',
  'Power Platform',
];
const githubUrl = 'https://github.com/lolosk';
const cvUrl = 'https://drive.google.com/file/d/1RsBtnarkMe0BDHUB1MJg8dGNZNSh10ZU/view';
const portfolioUrl = 'https://lolosk.github.io/portfolio-genay-lois/index.html';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const slideIn = {
  hidden: { opacity: 0, x: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const sections = [
  { id: 'about', label: 'À propos' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'experience', label: 'Expériences' },
  { id: 'projects', label: 'Réalisations' },
  { id: 'contact', label: 'Contact' },
];

const expertise = [
  {
    title: 'Réseaux',
    icon: Network,
    accent: 'from-amber-200 via-orange-100 to-white',
    items: ['Switching L2', 'VLAN / trunks', 'ToIP / VoIP', 'Cisco'],
    text: 'Réseaux et infrastructures vus en cours et en stage, avec une vraie appétence pour les environnements concrets.',
  },
  {
    title: 'Systèmes',
    icon: Server,
    accent: 'from-rose-100 via-white to-amber-50',
    items: ['Windows Server', 'Linux', 'Citrix VDI', 'Virtualisation'],
    text: 'Systèmes, déploiement et environnements utilisateurs, avec une approche assez terrain.',
  },
  {
    title: 'Outils & automatisation',
    icon: Workflow,
    accent: 'from-orange-100 via-white to-stone-100',
    items: ['Power Apps', 'Power Automate', 'SharePoint', 'Visio'],
    text: 'Des outils utilisés sur des projets concrets pour simplifier et structurer certains besoins.',
  },
  {
    title: 'Documentation',
    icon: FileText,
    accent: 'from-stone-100 via-white to-amber-50',
    items: ['Procédures', 'Schémas', 'Support utilisateurs', 'Méthodologie'],
    text: 'La documentation fait aussi partie du travail : procédures, schémas, explications et passation.',
  },
];

const experiences = [
  {
    period: 'Mars 2026 — Aujourd’hui',
    place: 'OHS de Lorraine · Stage',
    title: 'Stagiaire Informatique — Réseaux & Systèmes',
    logo: ohsLogo,
    bullets: [
      'Participation à des opérations de migration réseau : switching L2, VLAN, trunks et ToIP.',
      'Déploiement et configuration de postes, avec accompagnement utilisateurs en environnement Citrix VDI.',
      'Mise en place d’un SSO Hornetsecurity et rédaction de documentation technique / procédures.',
    ],
  },
  {
    period: 'Mai 2025 — Juil. 2025',
    place: 'Région Grand Est · Stage',
    title: 'Stage en développement et optimisation des outils numériques',
    logo: grandEstLogo,
    bullets: [
      'Travail sur la standardisation de schémas réseau et l’amélioration d’outils internes.',
      'Développement d’une application de gestion du télétravail avec Power Apps, Power Automate, Forms et SharePoint.',
      'Mise à niveau de serveurs Windows pour plusieurs établissements.',
    ],
  },
];

const projects = [
  {
    title: 'Migration réseau & segmentation',
    category: 'OHS de Lorraine',
    icon: Network,
    text: 'Interventions sur des sujets de switching L2, VLAN, trunks et ToIP, dans un contexte professionnel réel où fiabilité et continuité de service comptent.',
    tags: ['Switching L2', 'VLAN', 'Trunks', 'ToIP'],
  },
  {
    title: 'Environnement Citrix VDI',
    category: 'Support & systèmes',
    icon: MonitorSmartphone,
    text: 'Déploiement, configuration de postes et accompagnement utilisateurs dans un environnement virtualisé, avec une attention portée à l’usage concret.',
    tags: ['Citrix VDI', 'Postes', 'Support', 'Windows'],
  },
  {
    title: 'SSO Hornetsecurity',
    category: 'Sécurité & documentation',
    icon: ShieldCheck,
    text: 'Mise en place d’un SSO associée à la rédaction de procédures, pour sécuriser et simplifier l’expérience côté utilisateurs et exploitation.',
    tags: ['SSO', 'Hornetsecurity', 'Procédures', 'Sécurité'],
  },
  {
    title: 'Application de gestion du télétravail',
    category: 'Région Grand Est',
    icon: Workflow,
    text: 'Conception d’un outil interne basé sur la Power Platform, pensé pour digitaliser un besoin métier et le rendre plus fluide au quotidien.',
    tags: ['Power Apps', 'Power Automate', 'SharePoint', 'Forms'],
  },
  {
    title: 'Schémas réseau & documentation',
    category: 'Structuration des outils',
    icon: Layers3,
    text: 'Travail de remise à plat et de standardisation documentaire, afin de produire des schémas plus clairs, homogènes et plus simples à exploiter.',
    tags: ['Visio', 'Documentation', 'Réseaux', 'Méthode'],
  },
];

const techStack = [
  {
    label: 'Cisco',
    src: `${import.meta.env.BASE_URL}img/logo-cisco.png`,
  },
  {
    label: 'Windows Server',
    src: `${import.meta.env.BASE_URL}img/logo-windows.svg`,
  },
  {
    label: 'Linux',
    src: `${import.meta.env.BASE_URL}img/logo-linux.svg`,
  },
  {
    label: 'Citrix',
    src: `${import.meta.env.BASE_URL}img/logo-citrix.png`,
  },
  {
    label: 'VLAN',
    src: `${import.meta.env.BASE_URL}img/logo-vlan.png`,
  },
  {
    label: 'ToIP',
    icon: Phone,
  },
  {
    label: 'Power Apps',
    src: `${import.meta.env.BASE_URL}img/logo-powerapps.png`,
  },
  {
    label: 'Power Automate',
    src: `${import.meta.env.BASE_URL}img/logo-powerautomate.png`,
  },
  {
    label: 'SharePoint',
    src: `${import.meta.env.BASE_URL}img/logo-sharepoint.png`,
  },
  {
    label: 'Visio',
    src: `${import.meta.env.BASE_URL}img/logo-visio.png`,
  },
  {
    label: 'Java',
    src: `${import.meta.env.BASE_URL}img/logo-java.png`,
  },
  {
    label: 'SQL',
    src: `${import.meta.env.BASE_URL}img/logo-sql.png`,
  },
];


export default function PortfolioRefonte() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSweeping, setIsSweeping] = useState(false);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSectionClick = (id) => (event) => {
  event.preventDefault();
  setMenuOpen(false);
  setIsSweeping(true);

  const target = document.getElementById(id);
  window.setTimeout(() => {
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 160);

  window.setTimeout(() => {
    setIsSweeping(false);
  }, 900);
};

  return (
    <div className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#f8f4ee_0%,#f4efe7_35%,#eee8df_100%)] text-zinc-900">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeInOut' } }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#fbf7f1_0%,#f6efe5_100%)]"
          >
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.65, 0.35] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute h-72 w-72 rounded-full bg-amber-200/70 blur-3xl"
            />
            <div className="relative flex flex-col items-center px-6 text-center">
              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-xs uppercase tracking-[0.42em] text-zinc-500"
              >
                Portfolio
              </motion.div>
              <motion.h1
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                Loïs Genay
              </motion.h1>
              <motion.p
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.22 }}
                className="mt-4 max-w-md text-sm leading-7 text-zinc-600 sm:text-base"
              >
                Chargement du portfolio...
              </motion.p>
              <div className="mt-8 h-1.5 w-56 overflow-hidden rounded-full bg-white/70 shadow-inner">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-400 to-rose-400"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSweeping && (
          <motion.div
            initial={{ x: '-130%', opacity: 0 }}
            animate={{ x: '130%', opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none fixed inset-y-0 left-0 z-[90] w-[42vw] -skew-x-12 bg-gradient-to-r from-transparent via-white/55 to-transparent blur-xl"
          />
        )}
      </AnimatePresence>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[12%] top-16 h-72 w-72 rounded-full bg-amber-200/60 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 26, 0], y: [0, -16, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[8%] top-24 h-80 w-80 rounded-full bg-rose-200/50 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 14, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/3 h-72 w-72 rounded-full bg-orange-100/70 blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(39,39,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(39,39,42,0.04)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="group">
            <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Portfolio</div>
            <div className="mt-1 text-lg font-semibold tracking-tight">Loïs Genay</div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={handleSectionClick(section.id)}
                className="text-sm text-zinc-700 transition hover:text-zinc-950"
              >
                {section.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button asChild variant="outline" className="rounded-2xl border-black/10 bg-white/70 text-zinc-900 hover:bg-white">
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button asChild className="rounded-2xl bg-zinc-900 text-white hover:bg-zinc-800">
              <a href={cvUrl} target="_blank" rel="noreferrer">
                <FileText className="mr-2 h-4 w-4" /> CV
              </a>
            </Button>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/5 bg-white/70 md:hidden"
            aria-label="Ouvrir le menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-black/5 bg-white/85 px-4 py-4 backdrop-blur-xl md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={handleSectionClick(section.id)}
                  className="rounded-2xl px-3 py-2 text-left text-sm text-zinc-700 transition hover:bg-white hover:text-zinc-950"
                >
                  {section.label}
                </button>
              ))}
              <div className="mt-2 flex flex-col gap-3">
                <Button asChild variant="outline" className="rounded-2xl border-black/10 bg-white/70 text-zinc-900 hover:bg-white">
                  <a href={githubUrl} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button asChild className="rounded-2xl bg-zinc-900 text-white hover:bg-zinc-800">
                  <a href={cvUrl} target="_blank" rel="noreferrer">
                    <FileText className="mr-2 h-4 w-4" /> CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-20">
          <div>
            <motion.div initial="hidden" animate="visible" custom={0.05} variants={fadeUp} className="inline-flex max-w-full items-center rounded-full border border-black/5 bg-white/70 px-3 py-2 text-xs text-zinc-700 shadow-sm backdrop-blur-xl sm:px-4 sm:text-sm">
              <Sparkles className="mr-2 h-4 w-4 text-amber-600" />
              <span className="truncate">Bonjour, je suis Loïs GENAY, bienvenue sur mon portfolio.</span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.15}
              variants={fadeUp}
              className="mt-6 max-w-4xl text-[2.15rem] font-semibold leading-[0.96] tracking-tight text-zinc-900 sm:text-5xl lg:text-7xl"
            >
              Étudiant en{' '}
              <span className="bg-gradient-to-r from-zinc-900 via-amber-700 to-rose-500 bg-clip-text text-transparent">
                réseaux & télécommunications
              </span>
              ,<br className="hidden lg:block" />
              <span className="block">je développe mes compétences en</span>
              <span className="block">systèmes, réseaux et infrastructure.</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.26}
              variants={fadeUp}
              className="mt-6 max-w-2xl break-words text-base leading-8 text-zinc-700 sm:text-lg"
            >
              Je travaille surtout sur des sujets concrets : réseau, systèmes, déploiement de postes, support, virtualisation et documentation. L’idée de ce portfolio est simple : montrer clairement ce que je fais et comment je progresse.
            </motion.p>

            <motion.div initial="hidden" animate="visible" custom={0.34} variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button asChild className="w-full rounded-2xl bg-zinc-900 px-6 py-6 text-base text-white hover:bg-zinc-800 sm:w-auto">
                <a href="#projects">
                  Voir mes réalisations <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full rounded-2xl border-black/10 bg-white/70 px-6 py-6 text-base text-zinc-900 hover:bg-white sm:w-auto">
                <a href={cvUrl} target="_blank" rel="noreferrer">
                  <FileText className="mr-2 h-4 w-4" /> CV
                </a>
              </Button>
            </motion.div>

            
          </div>

          <motion.div initial="hidden" animate="visible" custom={0.2} variants={slideIn} className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-white/50 blur-2xl" />
            <Card className="relative overflow-hidden rounded-[2rem] border-black/5 bg-white/60 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.95),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.15),transparent_30%)]" />
              <CardContent className="relative p-5 sm:p-7">
                <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
                  <div className="mx-auto w-full max-w-[260px]">
                    <div className="overflow-hidden rounded-[1.75rem] border border-black/5 bg-stone-100 shadow-lg">
                      <img src={profileImage} alt="Portrait de Loïs Genay" className="aspect-[4/5] h-full w-full object-cover" />
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-black/5 bg-white/75 px-3 py-1 text-xs uppercase tracking-[0.22em] text-zinc-600">
                        Nancy · Grand Est
                      </span>
                      <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
                        En stage actuellement
                      </span>
                    </div>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight">Loïs Genay</h2>
                    <p className="mt-3 text-sm leading-7 text-zinc-700 sm:text-base">
                      Étudiant en 3e année de BUT Réseaux & Télécommunications, actuellement en stage chez OHS de Lorraine sur des sujets réseaux, systèmes,
                      Citrix VDI, ToIP, VLAN et documentation technique.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm sm:col-span-2">
                        <div className="flex items-center gap-4">
                          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-white p-1.5">
                            <img src={iutLogo} alt="Logo IUT Nancy-Brabois" className="h-full w-full object-contain scale-[1.08]" />
                          </div>
                          <div>
                            <div className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">Formation</div>
                            <div className="mt-1 text-sm text-zinc-900">BUT Réseaux & Télécommunications · IUT Nancy-Brabois</div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm sm:col-span-2">
                        <div className="flex items-center gap-4">
                          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-white p-2">
                            <img src={ohsLogo} alt="Logo OHS de Lorraine" className="h-full w-full object-contain" />
                          </div>
                          <div>
                            <div className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">Stage actuel</div>
                            <div className="mt-1 text-sm text-zinc-900">OHS de Lorraine</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0.05} variants={fadeUp}>
              <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">À propos</div>
              <h3 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                En savoir un peu plus sur mon parcours.
              </h3>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0.14} variants={fadeUp}>
              <Card className="rounded-[2rem] border-black/5 bg-white/60 shadow-sm backdrop-blur-xl">
                <CardContent className="p-6 sm:p-8">
                  <div className="space-y-4 text-base leading-8 text-zinc-700">
                    <p>
                      Étudiant en 3e année de BUT Réseaux & Télécommunications, je suis particulièrement intéressé par les systèmes, les réseaux et l’infrastructure informatique.
                    </p>
                    <p>
                      J’ai pu développer des compétences autour de technologies comme Cisco, Proxmox, Windows Server et Linux, ainsi qu’en développement avec Java, JavaScript et SQL.
                    </p>
                    <p>
                      Mon parcours m’a aussi permis de travailler sur des projets concrets en administration systèmes et réseaux, virtualisation, documentation technique et outils Microsoft / Power Platform.
                    </p>
                    <p>
                      Sérieux, curieux et motivé, je cherche avant tout à continuer à progresser à travers des expériences concrètes et professionnalisantes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="expertise" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0.05} variants={fadeUp}>
            <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Expertise</div>
            <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">Compétences et environnements que j’utilise déjà.</h3>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={0.08 + index * 0.07}
                  variants={fadeUp}
                >
                  <Card className="group h-full rounded-[2rem] border-black/5 bg-white/60 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                    <CardContent className="p-6">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} shadow-sm`}>
                        <Icon className="h-6 w-6 text-zinc-800" />
                      </div>
                      <h4 className="mt-5 text-xl font-semibold">{item.title}</h4>
                      <p className="mt-3 text-sm leading-7 text-zinc-700">{item.text}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.items.map((skill) => (
                          <span key={skill} className="rounded-full border border-black/5 bg-white/75 px-3 py-1 text-xs text-zinc-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0.05} variants={fadeUp}>
              <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Expériences</div>
              <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">Des expériences qui montrent ce que j’ai vraiment fait.</h3>
              <p className="mt-5 max-w-md text-base leading-8 text-zinc-700">
                Je préfère montrer des missions concrètes plutôt qu’aligner des mots-clés. C’est ce qui permet de mieux comprendre mon profil.
              </p>
            </motion.div>

            <div className="space-y-5">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={0.1 + index * 0.08}
                  variants={fadeUp}
                >
                  <Card className="rounded-[2rem] border-black/5 bg-white/60 shadow-sm backdrop-blur-xl">
                    <CardContent className="p-6 sm:p-7">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-black/5 bg-white/75 px-3 py-1 text-xs uppercase tracking-[0.22em] text-zinc-600">
                          {exp.period}
                        </span>
                        <span className="rounded-full border border-black/5 bg-stone-50 px-3 py-1 text-xs text-zinc-700">{exp.place}</span>
                      </div>

                      <div className="mt-4 flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                          <img src={exp.logo} alt={`Logo ${exp.place}`} className="h-full w-full object-contain p-2" />
                        </div>
                        <div>
                          <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-rose-100 shadow-sm">
                            {index === 0 ? <Briefcase className="h-5 w-5" /> : <GraduationCap className="h-5 w-5" />}
                          </div>
                          <h4 className="mt-3 text-xl font-semibold">{exp.title}</h4>
                          <div className="mt-4 space-y-3">
                            {exp.bullets.map((bullet) => (
                              <div key={bullet} className="flex gap-3 text-sm leading-7 text-zinc-700 sm:text-base">
                                <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-amber-700" />
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-20">
          <div className="overflow-hidden rounded-full border border-black/5 bg-white/55 py-3 shadow-sm backdrop-blur-xl">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              className="flex min-w-max gap-10 whitespace-nowrap px-6 text-xs uppercase tracking-[0.34em] text-zinc-500 sm:text-sm"
            >
              {Array.from({ length: 2 }).map((_, idx) => (
                <React.Fragment key={idx}>
                  {marqueeLabels.map((label) => (
                    <span key={`${idx}-${label}`}>{label}</span>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0.05} variants={fadeUp}>
            <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Réalisations</div>
            <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">Quelques réalisations marquantes.</h3>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  custom={0.08 + index * 0.06}
                  variants={fadeUp}
                >
                  <Card className="group h-full rounded-[2rem] border-black/5 bg-white/62 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 via-white to-rose-100 shadow-sm">
                          <Icon className="h-5 w-5 text-zinc-800" />
                        </div>
                        <span className="rounded-full border border-black/5 bg-white/75 px-3 py-1 text-xs text-zinc-600">
                          {project.category}
                        </span>
                      </div>

                      <h4 className="mt-5 text-2xl font-semibold tracking-tight">{project.title}</h4>
                      <p className="mt-4 text-sm leading-7 text-zinc-700">{project.text}</p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-black/5 bg-white/75 px-3 py-1 text-xs text-zinc-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
          <Card className="rounded-[2rem] border-black/5 bg-white/60 shadow-sm backdrop-blur-xl">
            <CardContent className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
              <div>
                <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Stack</div>
                <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">Les outils et environnements que j’utilise.</h3>
                <p className="mt-5 max-w-lg text-base leading-8 text-zinc-700">
                  Voici les principaux outils, environnements et technos que j’ai déjà utilisés dans mon parcours.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {techStack.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.label}
                      className="flex min-h-[108px] flex-col items-center justify-center rounded-[1.5rem] border border-black/5 bg-white/80 p-4 text-center shadow-sm"
                    >
                      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white sm:h-14 sm:w-14">
                        {tech.src ? (
                          <img src={tech.src} alt={`Logo ${tech.label}`} className="h-8 w-8 object-contain sm:h-10 sm:w-10" />
                        ) : Icon ? (
                          <Icon className="h-6 w-6 text-zinc-800 sm:h-7 sm:w-7" />
                        ) : null}
                      </div>
                      <div className="mt-3 text-sm font-medium text-zinc-700">{tech.label}</div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Card className="overflow-hidden rounded-[2rem] border-black/5 bg-[linear-gradient(135deg,#fffdf8_0%,#fff7ed_55%,#fce7f3_100%)] text-zinc-900 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <CardContent className="relative p-6 sm:p-8 lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.20),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(244,114,182,0.12),transparent_26%)]" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Contact</div>
                  <h3 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                    Merci d’avoir pris le temps de parcourir mon portfolio.
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-700">
                    Vous pouvez retrouver ici les liens vers mon LinkedIn, mon GitHub et mon CV. Le but est d’avoir un espace simple, clair et agréable à parcourir pour présenter mon profil et mes expériences.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild className="rounded-2xl bg-zinc-900 text-white hover:bg-zinc-800">
                    <a href={linkedinUrl} target="_blank" rel="noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl border-black/10 bg-white/70 text-zinc-900 hover:bg-white">
                    <a href={githubUrl} target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl border-black/10 bg-white/70 text-zinc-900 hover:bg-white">
                    <a href={cvUrl} target="_blank" rel="noreferrer">
                      <FileText className="mr-2 h-4 w-4" /> CV
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-black/5 px-4 py-6 text-center text-sm text-zinc-500 sm:px-6 lg:px-8">
        © 2026 Loïs Genay · portfolio
      </footer>
    </div>
  );
}
