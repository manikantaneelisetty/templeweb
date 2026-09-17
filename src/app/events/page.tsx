import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sacred Festivals & Events | Temple Sanctuary",
  description: "Join our holy celebrations, seasonal utsavams, spiritual discourses, and divine festivities at Temple Sanctuary.",
};

interface FestivalEvent {
  title: string;
  sanskritName: string;
  month: string;
  date: string;
  description: string;
  rituals: string[];
  icon: string;
}

const upcomingFestivals: FestivalEvent[] = [
  {
    title: "Maha Shivaratri",
    sanskritName: "महाशिवरात्रि",
    month: "Phalguna",
    date: "Annual Maha Utsav",
    description:
      "A sacred night of deep meditation, continuous abhishekams, and chants celebrating the cosmic dance of Lord Shiva.",
    rituals: ["Nishita Kaala Puja", "Rudrabhishekam", "Akhanda Bhajan", "Maha Aarti"],
    icon: "nightlight_round",
  },
  {
    title: "Navaratri & Vijayadashami",
    sanskritName: "शारदीय नवरात्रि",
    month: "Ashvina",
    date: "9 Days of Grace",
    description:
      "Nine auspicious nights dedicated to the Divine Mother in her various manifestations, culminating in the victory of light.",
    rituals: ["Chandi Homam", "Kumkumarchana", "Garba & Kirtan", "Vidyarambham"],
    icon: "brightness_5",
  },
  {
    title: "Vasantotsav & Sri Rama Navami",
    sanskritName: "श्री राम नवमी",
    month: "Chaitra",
    date: "Spring Celebration",
    description:
      "Celebrating the descent of Lord Rama with divine kalyanams, flower processions, and panakam prasadam distribution.",
    rituals: ["Sita Rama Kalyanam", "Rathotsavam", "Akhanda Ramayana Parayanam", "Anna Prasadam"],
    icon: "local_florist",
  },
  {
    title: "Deepotsav & Karthika Pournami",
    sanskritName: "कार्तिक दीपोत्सव",
    month: "Kartika",
    date: "Festival of Lights",
    description:
      "Illuminating the entire sanctuary grounds with 10,008 sacred earthen ghee lamps for universal peace and prosperity.",
    rituals: ["Laksha Deepotsavam", "Jwala Toranam", "Koti Deepa Dana", "Special Rudra Abhishekam"],
    icon: "flare",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen pt-[120px] pb-24 bg-[#fdfbf7]">
      {/* Hero Section */}
      <section className="relative px-6 md:px-16 mb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="font-label-caps text-sm tracking-[0.25em] uppercase text-[#7d3c2b] font-semibold mb-3 block">
            Sacred Calendar & Celebrations
          </span>
          <h1 className="font-['EB_Garamond'] text-4xl md:text-6xl text-[#4a2522] font-semibold mb-6">
            Divine Festivals & Events
          </h1>
          <p className="font-body-lg text-lg text-stone-700 leading-relaxed max-w-2xl mx-auto">
            Experience the vibrant spiritual tradition of our temple through sacred gatherings, holy yagnas, seasonal festivals, and celestial celebrations.
          </p>
        </div>
      </section>

      {/* Festival Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingFestivals.map((festival, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#f0e4d8] flex items-center justify-center text-[#7d3c2b] group-hover:bg-[#7d3c2b] group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl">
                      {festival.icon}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs uppercase tracking-widest text-[#7d3c2b] font-bold block">
                      {festival.month}
                    </span>
                    <span className="text-sm font-semibold text-stone-500">
                      {festival.date}
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="font-['EB_Garamond'] text-sm text-[#a45437] italic font-semibold">
                    {festival.sanskritName}
                  </span>
                  <h3 className="font-['EB_Garamond'] text-2xl md:text-3xl text-[#4a2522] font-semibold">
                    {festival.title}
                  </h3>
                </div>

                <p className="text-stone-600 font-body-md text-base leading-relaxed mb-6">
                  {festival.description}
                </p>

                <div className="border-t border-stone-100 pt-4 mb-6">
                  <span className="text-xs uppercase tracking-wider text-stone-400 font-bold block mb-2">
                    Key Highlights & Rituals
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {festival.rituals.map((r, i) => (
                      <span
                        key={i}
                        className="bg-[#faf8f5] text-[#4a2522] border border-stone-200 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <Link
                  href="/darshan"
                  className="text-xs font-bold uppercase tracking-wider text-[#7d3c2b] hover:text-[#4a2522] flex items-center gap-1 group-hover:underline"
                >
                  View Darshan Timings
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <Link
                  href="/donate"
                  className="bg-gradient-to-r from-[#ffe088] to-[#e9c349] text-[#241a00] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow hover:shadow-md transition-all"
                >
                  Sponsor Seva
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seva Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mt-16">
        <div className="bg-gradient-to-r from-[#4a2522] via-[#7d3c2b] to-[#4a2522] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl">
            <span className="text-xs tracking-widest uppercase text-[#ffdfba] font-bold block mb-2">
              Spiritual Participation
            </span>
            <h2 className="font-['EB_Garamond'] text-3xl md:text-4xl font-semibold mb-3 text-white">
              Participate in Upcoming Utsavams
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Devotees can sponsor sankalpam, annadanam, floral garlands, and prasadams for any festival from anywhere in the world.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/donate"
              className="bg-[#ffdfba] text-[#4a2522] font-bold px-7 py-3 rounded-full text-xs uppercase tracking-wider shadow-lg hover:bg-white transition-all text-center"
            >
              Book Festival Seva
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 text-white font-semibold px-7 py-3 rounded-full text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center"
            >
              Inquire With Priests
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
