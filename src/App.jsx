import heroImage from "./assets/school-hero.png";
import campusImage from "./assets/campus.png";
import learningImage from "./assets/learning.png";
import activitiesImage from "./assets/activities.png";
import activitiesImage2 from "./assets/activities-2.png";
import campusLifeImage from "./assets/campus-life.png";

import { useState } from "react";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Menu,
  Send,
  Sparkles,
  Trophy,
  Users,
  X,
} from "lucide-react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Campus", href: "#campus" },
    { label: "Activities", href: "#activities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Admissions", href: "#admissions" },
  ];

  const openEnquiry = () => {
    setSubmitted(false);
    setEnquiryOpen(true);
    setMenuOpen(false);
  };

  const closeEnquiry = () => {
    setEnquiryOpen(false);
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f6f1] text-[#172033]">
      {/* ================= NAVBAR ================= */}
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
        <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between rounded-2xl border border-[#e7e2d8]/80 bg-white/95 px-4 shadow-[0_14px_45px_rgba(23,32,51,0.11)] backdrop-blur-xl sm:h-[72px] sm:px-6">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#172033] text-white shadow-md">
              <span className="font-serif text-xl font-bold">D</span>
            </div>

            <div className="leading-none">
              <p className="text-[12px] font-extrabold tracking-[0.18em] text-[#172033]">
                DHYANAHITHA
              </p>

              <p className="mt-1 text-[8px] font-bold tracking-[0.3em] text-[#9b7a35]">
                SCHOOL
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative py-2 text-[12px] font-semibold text-[#626b7b] transition-colors duration-300 hover:text-[#172033]"
              >
                {item.label}

                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#9b7a35] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={openEnquiry}
            className="hidden items-center gap-2 rounded-full bg-[#172033] px-5 py-3 text-[12px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#26344e] lg:flex"
          >
            Enquire Now
            <ArrowRight size={14} />
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1eee7] text-[#172033] lg:hidden"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-[#e9e4da] bg-white p-3 shadow-2xl lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#596273] transition hover:bg-[#f6f3ed] hover:text-[#172033]"
              >
                {item.label}
              </a>
            ))}

            <button
              type="button"
              onClick={openEnquiry}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#172033] px-4 py-3 text-sm font-bold text-white"
            >
              Admission Enquiry
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-[#f8f6f1] px-5 pb-20 pt-32 sm:px-6 md:pb-28 md:pt-40 lg:px-8">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[#e8dcc2]/60 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-56 -left-40 h-[560px] w-[560px] rounded-full bg-[#dce5e9]/60 blur-3xl" />

          <div className="pointer-events-none absolute left-[42%] top-[20%] h-32 w-32 rounded-full border border-[#d7c8a9]/30" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.88fr] lg:gap-20">
            {/* Hero Content */}
            <div className="max-w-[650px]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ded5c4] bg-white/75 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b7a35] backdrop-blur">
                <Sparkles size={12} />
                A place to learn & grow
              </div>

              <h1 className="font-serif text-[54px] leading-[0.98] tracking-[-0.035em] text-[#172033] sm:text-[64px] md:text-[76px] lg:text-[82px]">
                Nurturing
                <span className="block italic text-[#9b7a35]">minds.</span>
                Shaping
                <span className="block">futures.</span>
              </h1>

              <p className="mt-7 max-w-[570px] text-[15px] leading-7 text-[#626b7b] sm:text-base sm:leading-8">
                Welcome to Dhyanahitha School — a learning environment where
                curiosity is encouraged, character is nurtured, and every child
                is given the confidence to discover their potential.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#about"
                  className="group flex h-[52px] items-center justify-center gap-3 rounded-full bg-[#172033] px-7 text-sm font-bold text-white shadow-xl shadow-[#172033]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#26344e]"
                >
                  Explore Our School

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <button
                  type="button"
                  onClick={openEnquiry}
                  className="flex h-[52px] items-center justify-center rounded-full border border-[#d8d0c1] bg-white/75 px-7 text-sm font-bold text-[#172033] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9a982] hover:bg-white"
                >
                  Admission Enquiry
                </button>
              </div>

              <div className="mt-12 flex items-center border-t border-[#dfd9cd] pt-6">
                <div className="pr-8">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#9a9fa8]">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#30394a]">
                    Pragathi Nagar
                  </p>
                </div>

                <div className="h-8 w-px bg-[#d8d1c5]" />

                <div className="pl-8">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#9a9fa8]">
                    Focus
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#30394a]">
                    Holistic Learning
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none">
              <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-[#ded9cf] shadow-[0_30px_80px_rgba(23,32,51,0.16)]">
                <div className="relative aspect-[0.84] overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Students learning together"
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172033]/35 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                    <div className="rounded-2xl border border-white/50 bg-white/90 p-5 shadow-lg backdrop-blur-xl sm:p-6">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9b7a35]">
                        Dhyanahitha School
                      </p>

                      <p className="mt-2 font-serif text-2xl leading-tight text-[#172033] sm:text-3xl">
                        Every child.
                        <br />
                        A unique journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-3 rounded-2xl border border-white bg-white p-4 shadow-[0_20px_50px_rgba(20,30,50,0.15)] sm:-left-8 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1eadb] text-[#9b7a35]">
                    <Trophy size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#172033]">
                      Beyond the classroom
                    </p>

                    <p className="mt-1 text-[10px] text-[#7b8390]">
                      Learning • Growth • Confidence
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-[-8px] top-8 hidden rounded-full border border-white bg-[#172033] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.15em] text-white shadow-xl sm:block">
                Discover • Learn • Grow
              </div>
            </div>
          </div>

          <div className="mx-auto mt-20 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#9a9fa8]">
            Scroll to explore
            <ChevronDown size={13} className="animate-bounce" />
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section
          id="about"
          className="relative overflow-hidden border-y border-[#e6e1d8] bg-white px-5 py-24 sm:px-6 md:py-32 lg:px-8"
        >
          <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#eee6d5]/60 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9b7a35]">
                  The Dhyanahitha Approach
                </p>

                <h2 className="mt-5 max-w-xl font-serif text-[42px] leading-[1.05] tracking-[-0.025em] text-[#172033] sm:text-5xl md:text-6xl">
                  More than a school.
                  <span className="block italic text-[#9b7a35]">
                    A place to belong.
                  </span>
                </h2>
              </div>

              <p className="max-w-xl text-[15px] leading-8 text-[#687080] lg:ml-auto">
                Every child deserves an environment where learning feels
                meaningful, curiosity is encouraged, and confidence grows
                naturally. Our approach brings together academics, creativity,
                character and real-world experiences.
              </p>
            </div>

            <div className="mt-16 grid gap-5 lg:grid-cols-12">
              <div className="relative min-h-[390px] overflow-hidden rounded-[30px] bg-[#172033] p-8 text-white shadow-[0_25px_70px_rgba(23,32,51,0.12)] sm:p-10 lg:col-span-7">
                <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/10" />

                <div className="absolute -right-5 -top-5 h-48 w-48 rounded-full border border-white/10" />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                      <BookOpen size={20} />
                    </div>

                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#d1b16c]">
                      01
                    </span>
                  </div>

                  <div className="mt-20">
                    <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#9da8ba]">
                      Strong Foundations
                    </p>

                    <h3 className="mt-4 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
                      Academic excellence with a love for learning.
                    </h3>

                    <p className="mt-5 max-w-lg text-sm leading-7 text-[#aeb7c7]">
                      Meaningful learning experiences help students understand,
                      question, explore and develop the confidence to think
                      independently.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 lg:col-span-5">
                <FeatureCard
                  number="02"
                  icon={<Sparkles size={20} />}
                  title="Curiosity & Creativity"
                  text="Encouraging children to ask questions, explore ideas and express themselves with confidence."
                  background="light"
                  link="Discover more"
                />

                <FeatureCard
                  number="03"
                  icon={<Users size={20} />}
                  title="Character & Confidence"
                  text="Helping students become thoughtful, responsible and confident individuals ready for the world around them."
                  background="cream"
                  link="Our philosophy"
                />
              </div>
            </div>

            <div className="mt-16 flex flex-col gap-6 border-t border-[#e8e4dc] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl font-serif text-xl leading-relaxed text-[#30394a] sm:text-2xl">
                “When children feel seen, supported and inspired,
                <span className="italic text-[#9b7a35]"> they thrive.</span>”
              </p>

              <div className="flex shrink-0 items-center gap-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#999fa8]">
                <span className="h-px w-8 bg-[#c8bda9]" />
                Learning • Growth • Confidence
              </div>
            </div>
          </div>
        </section>

        {/* ================= ACADEMICS ================= */}
        <section
          id="academics"
          className="relative overflow-hidden bg-[#eeeae1] px-5 py-24 sm:px-6 md:py-32 lg:px-8"
        >
          <div className="pointer-events-none absolute -right-32 top-[-120px] h-96 w-96 rounded-full bg-[#dce3e5]/70 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9b7a35]">
                  Academics
                </p>

                <h2 className="mt-4 max-w-2xl font-serif text-[42px] leading-[1.08] text-[#172033] sm:text-5xl">
                  Building foundations for a lifetime of learning.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[#717887]">
                A structured learning journey designed to help students develop
                knowledge, curiosity and confidence at every stage.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              <AcademicCard
                number="01"
                title="Primary Learning"
                text="Strong foundations, curiosity, communication and joyful learning."
                points={[
                  "Concept building",
                  "Creative learning",
                  "Confidence",
                ]}
              />

              <AcademicCard
                number="02"
                title="Middle School"
                text="Developing deeper understanding and independent thinking."
                points={[
                  "Problem solving",
                  "Collaboration",
                  "Exploration",
                ]}
              />

              <AcademicCard
                number="03"
                title="Secondary Learning"
                text="Preparing students with knowledge, confidence and direction."
                points={[
                  "Deeper learning",
                  "Critical thinking",
                  "Future readiness",
                ]}
              />
            </div>
          </div>
        </section>

        {/* ================= CAMPUS ================= */}
        <section
          id="campus"
          className="relative overflow-hidden bg-[#f7f8f7] px-5 py-24 sm:px-6 md:py-32 lg:px-8"
        >
          <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#e1e8e7]/60 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9b7a35]">
                  Our Environment
                </p>

                <h2 className="mt-4 font-serif text-[42px] leading-[1.08] text-[#172033] sm:text-5xl">
                  A place designed
                  <span className="block italic text-[#9b7a35]">
                    for discovery.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-sm leading-7 text-[#6f7786]">
                  A thoughtful learning environment gives children the space
                  to explore, collaborate and develop their confidence.
                </p>

                <a
                  href="#gallery"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#172033]"
                >
                  Explore the campus

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>

              {/* Campus Image */}
              <div className="relative pb-5 sm:pb-8">
                <div className="relative overflow-hidden rounded-[30px] border border-white bg-white shadow-[0_25px_70px_rgba(23,32,51,0.14)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={campusImage}
                      alt="Dhyanahitha School campus"
                      className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/65 via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="max-w-md rounded-2xl border border-white/30 bg-[#172033]/75 p-5 text-white backdrop-blur-xl sm:p-6">
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d1b16c]">
                          Campus
                        </p>

                        <p className="mt-2 font-serif text-xl sm:text-2xl">
                          A welcoming environment for every learner.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-1 right-4 rounded-2xl bg-[#172033] px-5 py-4 text-white shadow-xl sm:-right-4 sm:px-6 sm:py-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#d1b16c]">
                    Designed for
                  </p>

                  <p className="mt-1 font-serif text-lg sm:text-xl">
                    Learning & Growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ACTIVITIES ================= */}
        <section
          id="activities"
          className="relative overflow-hidden bg-[#172033] px-5 py-24 text-white sm:px-6 md:py-32 lg:px-8"
        >
          <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#9b7a35]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#d1b16c]">
                  Beyond Academics
                </p>

                <h2 className="mt-4 max-w-2xl font-serif text-[42px] leading-[1.05] sm:text-5xl md:text-6xl">
                  Growing curious,
                  <span className="block italic text-[#d1b16c]">
                    creative minds.
                  </span>
                </h2>
              </div>

              <p className="text-sm leading-7 text-[#aeb7c7]">
                Children learn in many ways. Activities, experiences,
                creativity and collaboration help turn knowledge into
                confidence.
              </p>
            </div>

            {/* Activities Image */}
            <div className="mt-14 overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.18)]">
              <div className="relative aspect-[16/7] overflow-hidden">
                <img
                  src={activitiesImage}
                  alt="Students participating in school activities"
                  className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d1b16c]">
                    Beyond the classroom
                  </p>

                  <p className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                    Play. Create. Participate.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Sports",
                  text: "Movement, teamwork and healthy competition.",
                },
                {
                  title: "Arts & Creativity",
                  text: "Space for imagination and self-expression.",
                },
                {
                  title: "Cultural Activities",
                  text: "Celebrating creativity, culture and participation.",
                },
                {
                  title: "Life Skills",
                  text: "Building confidence for everyday life.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="group relative min-h-[180px] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.09]"
                >
                  <span className="text-[10px] font-bold tracking-[0.18em] text-[#d1b16c]">
                    0{index + 1}
                  </span>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-serif text-2xl">{item.title}</h3>

                    <p className="mt-2 text-xs leading-6 text-[#aeb7c7]">
                      {item.text}
                    </p>
                  </div>

                  <ArrowRight
                    size={17}
                    className="absolute right-6 top-6 text-[#758095] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= GALLERY ================= */}
        <section
          id="gallery"
          className="relative overflow-hidden bg-[#eef2f2] px-5 py-24 sm:px-6 md:py-32 lg:px-8"
        >
          <div className="pointer-events-none absolute -left-40 bottom-[-100px] h-[450px] w-[450px] rounded-full bg-[#d9e4e4]/70 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9b7a35]">
                  Gallery
                </p>

                <h2 className="mt-4 font-serif text-[42px] leading-[1.08] text-[#172033] sm:text-5xl">
                  Moments that matter.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#717887]">
                A glimpse into learning, creativity and everyday school life.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-12">
              <GalleryBox
                className="md:col-span-7 md:row-span-2"
                label="Learning"
                image={learningImage}
              />

              <GalleryBox
                className="md:col-span-5"
                label="Activities"
                image={activitiesImage2}
              />

              <GalleryBox
                className="md:col-span-5"
                label="Campus Life"
                image={campusLifeImage}
              />
            </div>

            <p className="mt-6 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[#969da5]">
              Demo visuals — final gallery can use the school’s official
              photographs
            </p>
          </div>
        </section>

        {/* ================= ADMISSIONS ================= */}
        <section
          id="admissions"
          className="relative overflow-hidden bg-[#f8f6f1] px-5 py-20 sm:px-6 md:py-28 lg:px-8"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#eadfca]/60 blur-3xl" />

          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e1d7c4] bg-gradient-to-br from-[#eee5d4] via-[#f4eee4] to-[#e3ddd1] px-6 py-16 text-center shadow-[0_20px_70px_rgba(23,32,51,0.07)] sm:px-10 md:py-20">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8d6e32]">
              Begin the journey
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl font-serif text-[42px] leading-[1.08] text-[#172033] sm:text-5xl md:text-6xl">
              Give your child a place to learn, discover and grow.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#687080]">
              Have questions about admissions or the school? Get in touch to
              learn more.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={openEnquiry}
                className="h-[52px] rounded-full bg-[#172033] px-7 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#26344e]"
              >
                Admission Enquiry
              </button>

              <button
                type="button"
                onClick={openEnquiry}
                className="h-[52px] rounded-full border border-[#c8bda9] bg-white/60 px-7 text-sm font-bold text-[#172033] transition hover:-translate-y-1 hover:bg-white"
              >
                Contact School
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#e4e0d7] bg-white px-5 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1.4fr_0.7fr_0.7fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#172033] font-serif font-bold text-white">
                  D
                </div>

                <div>
                  <p className="text-sm font-extrabold tracking-[0.15em]">
                    DHYANAHITHA
                  </p>

                  <p className="mt-1 text-[8px] font-bold tracking-[0.28em] text-[#9b7a35]">
                    SCHOOL
                  </p>
                </div>
              </div>

              <p className="mt-4 max-w-sm text-sm leading-7 text-[#7b8390]">
                A modern learning environment designed to help every child
                discover their potential.
              </p>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7a35]">
                Explore
              </p>

              <div className="mt-4 space-y-3 text-sm text-[#697181]">
                <a href="#about" className="block hover:text-[#172033]">
                  About
                </a>

                <a href="#academics" className="block hover:text-[#172033]">
                  Academics
                </a>

                <a href="#activities" className="block hover:text-[#172033]">
                  Activities
                </a>

                <a href="#gallery" className="block hover:text-[#172033]">
                  Gallery
                </a>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7a35]">
                Location
              </p>

              <p className="mt-4 text-sm font-semibold text-[#172033]">
                Pragathi Nagar
              </p>

              <p className="mt-1 text-sm text-[#7b8390]">
                Hyderabad, Telangana
              </p>

              <button
                type="button"
                onClick={openEnquiry}
                className="mt-5 text-sm font-bold text-[#172033] underline decoration-[#c7ae79] underline-offset-4"
              >
                Contact School
              </button>
            </div>
          </div>

          <div className="mt-10 border-t border-[#ebe7df] pt-6 text-xs text-[#969ca6]">
            © 2026 Dhyanahitha School. Demo website concept.
          </div>
        </div>
      </footer>

      {/* ================= ENQUIRY MODAL ================= */}
      {enquiryOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#172033]/60 px-4 py-8 backdrop-blur-md"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeEnquiry();
            }
          }}
        >
          <div className="relative w-full max-w-xl overflow-hidden rounded-[30px] border border-white/70 bg-[#faf9f6] shadow-[0_30px_100px_rgba(0,0,0,0.25)]">
            <button
              type="button"
              onClick={closeEnquiry}
              aria-label="Close enquiry form"
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#172033] shadow-sm transition hover:scale-105"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <div className="p-7 sm:p-10">
                <div className="max-w-md">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9b7a35]">
                    Get in touch
                  </p>

                  <h2 className="mt-3 font-serif text-4xl leading-tight text-[#172033]">
                    Admission enquiry
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[#717887]">
                    Share your details and the school team can get back to you
                    regarding your enquiry.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField label="Parent / Guardian Name" required>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </FormField>

                    <FormField label="Phone Number" required>
                      <input
                        required
                        type="tel"
                        placeholder="Your phone number"
                        className={inputClass}
                      />
                    </FormField>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField label="Student Name">
                      <input
                        type="text"
                        placeholder="Student name"
                        className={inputClass}
                      />
                    </FormField>

                    <FormField label="Class Interested In">
                      <select className={inputClass} defaultValue="">
                        <option value="">Select class</option>
                        <option>Nursery</option>
                        <option>Primary</option>
                        <option>Middle School</option>
                        <option>Secondary School</option>
                      </select>
                    </FormField>
                  </div>

                  <FormField label="Message">
                    <textarea
                      rows="4"
                      placeholder="Tell us how we can help..."
                      className={`${inputClass} resize-none`}
                    />
                  </FormField>

                  <button
                    type="submit"
                    className="flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#172033] text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#26344e]"
                  >
                    Send Enquiry
                    <Send size={15} />
                  </button>

                  <p className="text-center text-[10px] leading-5 text-[#9a9fa8]">
                    Demo enquiry form — final submission can be connected to
                    WhatsApp, email or a backend after approval.
                  </p>
                </form>
              </div>
            ) : (
              <div className="px-7 py-16 text-center sm:px-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e8efe8] text-[#507054]">
                  <CheckCircle2 size={32} />
                </div>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.22em] text-[#9b7a35]">
                  Enquiry received
                </p>

                <h2 className="mt-3 font-serif text-4xl text-[#172033]">
                  Thank you.
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#717887]">
                  Your enquiry has been captured in this demo. The final
                  website can connect this form directly to the school’s
                  preferred contact method.
                </p>

                <button
                  type="button"
                  onClick={closeEnquiry}
                  className="mt-8 h-[50px] rounded-full bg-[#172033] px-7 text-sm font-bold text-white"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= INPUT STYLE ================= */

const inputClass =
  "w-full rounded-[14px] border border-[#ded9cf] bg-white/85 px-4 py-3 text-sm text-[#172033] outline-none transition placeholder:text-[#a2a7af] focus:border-[#9b7a35] focus:bg-white focus:ring-4 focus:ring-[#9b7a35]/10";

/* ================= FORM FIELD ================= */

function FormField({ label, required = false, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-[#697181]">
        {label}

        {required && <span className="ml-1 text-[#9b7a35]">*</span>}
      </span>

      {children}
    </label>
  );
}

/* ================= FEATURE CARD ================= */

function FeatureCard({
  number,
  icon,
  title,
  text,
  background,
  link,
}) {
  const bg =
    background === "cream"
      ? "bg-[#f3f0e8] hover:bg-[#ebe5d8]"
      : "bg-[#faf9f6] hover:bg-[#f5f1e7]";

  return (
    <div
      className={`group rounded-[30px] border border-[#e7e3db] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${bg}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#9b7a35] shadow-sm">
          {icon}
        </div>

        <span className="text-[10px] font-bold tracking-[0.2em] text-[#b1b4ba]">
          {number}
        </span>
      </div>

      <h3 className="mt-12 font-serif text-2xl text-[#172033]">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-[#737b89]">{text}</p>

      <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#172033]">
        {link}

        <ArrowRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </div>
  );
}

/* ================= ACADEMIC CARD ================= */

function AcademicCard({
  number,
  title,
  text,
  points,
}) {
  return (
    <div className="group rounded-[28px] border border-[#ebe6dc] bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-9">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-[0.18em] text-[#9b7a35]">
          {number}
        </span>

        <ArrowRight
          size={18}
          className="text-[#a6aab2] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#172033]"
        />
      </div>

      <h3 className="mt-12 font-serif text-2xl text-[#172033]">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-[#737b89]">{text}</p>

      <div className="mt-6 space-y-2 border-t border-[#eeeae2] pt-5">
        {points.map((point) => (
          <div
            key={point}
            className="flex items-center gap-2 text-xs font-semibold text-[#596273]"
          >
            <CheckCircle2 size={14} className="text-[#9b7a35]" />
            {point}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= GALLERY BOX ================= */

function GalleryBox({
  label,
  className = "",
  image,
}) {
  return (
    <div
      className={`group relative min-h-[260px] overflow-hidden rounded-[28px] bg-[#d9d4ca] shadow-sm ${className}`}
    >
      <img
        src={image}
        alt={`${label} at Dhyanahitha School`}
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/65 via-[#172033]/10 to-transparent" />

      <div className="absolute bottom-5 left-5 rounded-xl border border-white/40 bg-white/90 px-4 py-3 backdrop-blur-md">
        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#9b7a35]">
          Dhyanahitha
        </p>

        <p className="mt-1 font-serif text-lg text-[#172033]">{label}</p>
      </div>
    </div>
  );
}

export default App;