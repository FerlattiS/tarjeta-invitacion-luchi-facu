import {
  CalendarDays,
  CalendarPlus,
  Check,
  Church,
  ClipboardCheck,
  Copy,
  ExternalLink,
  Gift,
  GlassWater,
  Images,
  MapPin,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import heroReference from "./assets/hero-reference.png";
import { eventInfo } from "./data/event";
import { useCountdown } from "./hooks/useCountdown";
import { Section } from "./components/Section";

const formatGoogleCalendarDate = (dateTime: string) =>
  new Date(dateTime).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

const googleCalendarUrl = () => {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Casamiento de Luchi y Facu",
    dates: `${formatGoogleCalendarDate(eventInfo.dateTime)}/${formatGoogleCalendarDate(
      eventInfo.endDateTime,
    )}`,
    details: "Invitacion al casamiento de Luciana y Facundo.",
    location: `${eventInfo.ceremony.place} / ${eventInfo.party.place}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

export const App = () => {
  const countdown = useCountdown(eventInfo.dateTime);
  const [aliasCopied, setAliasCopied] = useState(false);

  const copyAlias = async () => {
    await navigator.clipboard.writeText(eventInfo.gifts.alias);
    setAliasCopied(true);
    window.setTimeout(() => setAliasCopied(false), 1800);
  };

  return (
    <main className="app-shell min-h-screen text-stone-100">
      <section className="relative flex min-h-screen items-start justify-center overflow-hidden px-6 py-24 text-center">
        <div
          className="hero-image absolute inset-0 bg-cover bg-center opacity-95"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(15,15,15,0.08), rgba(15,15,15,0.86)), url(${heroReference})`,
          }}
        />
        <div className="relative z-10 flex min-h-[78vh] w-full max-w-4xl flex-col items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-display mb-8 text-xl font-black uppercase tracking-[0.18em] text-stone-50 sm:text-3xl">
              {eventInfo.title}
            </p>
            <motion.h1
              className="font-script text-7xl leading-none text-stone-50 sm:text-9xl"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.18, ease: "easeOut" }}
            >
              {eventInfo.names}
            </motion.h1>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.45, ease: "easeOut" }}
          >
            <p className="font-serif text-6xl italic text-black/80 drop-shadow-sm sm:text-8xl">
              {eventInfo.dateLabel}
            </p>
            <div className="grid grid-cols-4 gap-2 rounded-[2rem] bg-stone-50/95 p-4 text-zinc-900 shadow-soft backdrop-blur sm:gap-5 sm:px-8">
              {[
                ["dias", countdown.days],
                ["hs", countdown.hours],
                ["min", countdown.minutes],
                ["seg", countdown.seconds],
              ].map(([label, value]) => (
                <div key={label} className="min-w-16">
                  <p className="text-2xl font-black sm:text-4xl">{value}</p>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <a
              className="font-display mx-auto inline-flex items-center gap-3 rounded-full border border-stone-100/70 bg-zinc-950/35 px-7 py-3 text-sm font-black uppercase tracking-[0.12em] text-stone-50 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:bg-stone-50 hover:text-zinc-900"
              href={googleCalendarUrl()}
              target="_blank"
              rel="noreferrer"
            >
              <CalendarPlus size={19} />
              Agendar
            </a>
          </motion.div>
        </div>
      </section>

      <Section icon={<Church size={56} strokeWidth={1.6} />} title="Ceremonia">
        <div className="space-y-7">
          <p className="mx-auto max-w-xl rounded-[1.75rem] bg-stone-50 px-6 py-5 text-lg font-medium italic leading-relaxed text-zinc-700">
            Un momento simple, cuidado y compartido con quienes queremos cerca.
          </p>
          <EventDetail
            place={eventInfo.ceremony.place}
            time={eventInfo.ceremony.time}
            address={eventInfo.ceremony.address}
            mapUrl={eventInfo.ceremony.mapUrl}
          />
        </div>
      </Section>

      <Section icon={<GlassWater size={56} strokeWidth={1.6} />} title="Fiesta">
        <div className="space-y-7">
          <p className="mx-auto max-w-xl rounded-[1.75rem] bg-stone-50 px-6 py-5 font-script text-4xl leading-tight text-zinc-700">
            Que el tiempo pase viendonos reir
          </p>
          <EventDetail
            place={eventInfo.party.place}
            time={eventInfo.party.time}
            address={eventInfo.party.address}
            mapUrl={eventInfo.party.mapUrl}
          />
        </div>
      </Section>

      <Section icon={<Sparkles size={56} strokeWidth={1.6} />} title="Vestimenta">
        <div className="space-y-5">
          <p className="font-display mx-auto inline-flex rounded-[1.25rem] bg-stone-50 px-8 py-3 text-3xl font-black uppercase text-zinc-800">
            {eventInfo.dressCode.label}
          </p>
          <p className="mx-auto max-w-xl text-xl uppercase leading-relaxed tracking-[0.08em] text-stone-300">
            {eventInfo.dressCode.note}
          </p>
        </div>
      </Section>

      <Section icon={<Images size={56} strokeWidth={1.6} />} title="Fotos">
        <div className="space-y-8">
          <p className="mx-auto max-w-xl text-lg uppercase leading-relaxed tracking-[0.08em] text-stone-300">
            Un espacio reservado para sumar algunas fotos cuando definamos las
            imagenes finales.
          </p>
          <PhotoPlaceholders />
        </div>
      </Section>

      <Section icon={<Gift size={56} strokeWidth={1.6} />} title="Regalos">
        <div className="space-y-6">
          <p className="mx-auto max-w-xl text-xl uppercase leading-relaxed tracking-[0.08em] text-stone-300">
            {eventInfo.gifts.note}
          </p>
          <button
            className="font-display inline-flex items-center gap-3 rounded-full bg-stone-50 px-10 py-3 text-xl font-black uppercase text-zinc-800 transition hover:-translate-y-0.5 hover:bg-white"
            type="button"
            onClick={copyAlias}
          >
            {aliasCopied ? <Check size={22} /> : <Copy size={22} />}
            {aliasCopied ? "Copiado" : "Copiar alias"}
          </button>
        </div>
      </Section>

      <Section
        icon={<ClipboardCheck size={56} strokeWidth={1.6} />}
        title="Confirma tu asistencia"
      >
        <div className="space-y-8">
          <p className="text-xl uppercase leading-relaxed tracking-[0.08em] text-stone-300">
            Es de gran ayuda la confirmacion antes del{" "}
            <strong className="text-stone-100">{eventInfo.rsvp.deadline}</strong>.
          </p>
          <a
            className="font-display inline-flex items-center gap-3 rounded-full bg-stone-50 px-10 py-3 text-xl font-black uppercase text-zinc-800 transition hover:-translate-y-0.5 hover:bg-white"
            href={eventInfo.rsvp.url}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => {
              if (eventInfo.rsvp.url === "#") event.preventDefault();
            }}
          >
            Confirmar
            <ExternalLink size={20} />
          </a>
        </div>
      </Section>

      <footer className="font-display px-6 pb-12 text-center text-sm uppercase tracking-[0.24em] text-stone-400">
        <CalendarDays className="mx-auto mb-4" size={28} strokeWidth={1.5} />
        Nos vemos ese dia
      </footer>
    </main>
  );
};

type EventDetailProps = {
  place: string;
  time: string;
  address: string;
  mapUrl: string;
};

const EventDetail = ({ place, time, address, mapUrl }: EventDetailProps) => (
  <div className="space-y-5 text-stone-300">
    <MapPin className="mx-auto" size={44} strokeWidth={1.4} />
    <div>
      <p className="text-3xl font-medium uppercase tracking-[0.08em]">{place}</p>
      <p className="mt-4 text-5xl font-black text-stone-300">{time}</p>
      <p className="mt-4 text-sm uppercase tracking-[0.2em] text-stone-400">
        {address}
      </p>
    </div>
    <a
      className="font-display inline-flex items-center gap-2 rounded-full bg-stone-50 px-8 py-3 text-sm font-black uppercase tracking-[0.08em] text-zinc-800 transition hover:-translate-y-0.5 hover:bg-white"
      href={mapUrl}
      target="_blank"
      rel="noreferrer"
      onClick={(event) => {
        if (mapUrl === "#") event.preventDefault();
      }}
    >
      Ver ubicacion
      <ExternalLink size={16} />
    </a>
  </div>
);

const photoCards = [
  "Portada",
  "Nosotros",
  "Detalle",
  "Fiesta",
];

const PhotoPlaceholders = () => (
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
    {photoCards.map((label, index) => (
      <motion.div
        key={label}
        className="photo-placeholder group relative aspect-[3/4] overflow-hidden rounded-[1.35rem] border border-stone-200/20 bg-stone-950/60 shadow-soft"
        initial={{ opacity: 0, y: 28, rotate: index % 2 === 0 ? -2 : 2 }}
        whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
        transition={{ duration: 0.72, delay: index * 0.08, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(214,202,181,0.2),rgba(39,39,42,0.2)_42%,rgba(8,8,8,0.72)),repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_22px)] transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 bg-zinc-950/55 px-3 py-4 backdrop-blur">
          <p className="font-display text-xs font-black uppercase tracking-[0.18em] text-stone-200">
            {label}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
);
