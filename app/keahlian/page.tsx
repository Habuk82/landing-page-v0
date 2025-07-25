"use client"

import { Button } from "@/components/ui/button"
import { Star, Users, BookOpen, FileText, Trophy, Globe, Mic, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function KeahlianPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-rose-300 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full blur-sm"></div>
        <div className="absolute top-1/4 -left-16 w-32 h-32 bg-purple-400/30 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-pink-400/30 rounded-full blur-sm"></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-rose-400/40 rotate-45 blur-sm"></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-purple-400/40 rotate-12 blur-sm"></div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-700 text-white px-4 py-3 relative">
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button asChild variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Link href="/landing">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kembali
                </Link>
              </Button>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Star className="h-4 w-4 text-yellow-300" />
              </div>
              <p className="text-sm font-semibold">Habib Syafi'i - Keahlian</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-20 h-full bg-white/10 rounded-l-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Keahlian & Kemampuan</h1>
          <p className="text-xl text-gray-700">Kompetensi yang dikuasai dalam berbagai bidang</p>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-3xl blur-sm"></div>
            <div className="relative bg-white/40 backdrop-blur-md rounded-3xl p-10 border border-white/50 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Soft Skills</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    skill: "Kepemimpinan",
                    description: "Pengalaman memimpin organisasi ROHIS dan berbagai kepanitiaan",
                    level: 90,
                    color: "from-blue-500 to-purple-500",
                  },
                  {
                    skill: "Komunikasi Publik",
                    description: "Kemampuan berbicara di depan umum sebagai khatib dan content creator",
                    level: 95,
                    color: "from-green-500 to-teal-500",
                  },
                  {
                    skill: "Adaptasi",
                    description: "Fleksibilitas dalam menghadapi berbagai situasi dan lingkungan",
                    level: 85,
                    color: "from-orange-500 to-red-500",
                  },
                  {
                    skill: "Manajemen Tim",
                    description: "Koordinasi dan pembinaan anggota dalam berbagai kegiatan",
                    level: 88,
                    color: "from-pink-500 to-rose-500",
                  },
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity`}
                    ></div>
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/60 hover:shadow-lg transition-all duration-300">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.skill}</h3>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div
                          className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-1000`}
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{item.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-100/50 to-blue-100/50 rounded-3xl blur-sm"></div>
            <div className="relative bg-white/40 backdrop-blur-md rounded-3xl p-10 border border-white/50 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Technical Skills</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    skill: "Microsoft Office Suite",
                    items: ["Word", "Excel", "PowerPoint"],
                    level: 90,
                    color: "from-blue-500 to-indigo-500",
                  },
                  {
                    skill: "Content Creation",
                    items: ["Video Editing", "Social Media", "Storytelling"],
                    level: 85,
                    color: "from-red-500 to-pink-500",
                  },
                  {
                    skill: "Document Design",
                    items: ["Academic Writing", "Report Formatting", "Layout Design"],
                    level: 88,
                    color: "from-purple-500 to-violet-500",
                  },
                  {
                    skill: "Digital Marketing",
                    items: ["Content Strategy", "Audience Engagement", "Platform Management"],
                    level: 80,
                    color: "from-orange-500 to-yellow-500",
                  },
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity`}
                    ></div>
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/60 hover:shadow-lg transition-all duration-300">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.skill}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.items.map((subItem, subIndex) => (
                          <span
                            key={subIndex}
                            className="px-3 py-1 bg-white/50 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {subItem}
                          </span>
                        ))}
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div
                          className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-1000`}
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{item.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Language Skills */}
        <div className="mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-100/50 to-red-100/50 rounded-3xl blur-sm"></div>
            <div className="relative bg-white/40 backdrop-blur-md rounded-3xl p-10 border border-white/50 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Kemampuan Bahasa</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    language: "Bahasa Indonesia",
                    level: "Native",
                    proficiency: 100,
                    color: "from-red-500 to-rose-500",
                    flag: "🇮🇩",
                  },
                  {
                    language: "Bahasa Inggris",
                    level: "Intermediate",
                    proficiency: 75,
                    color: "from-blue-500 to-indigo-500",
                    flag: "🇺🇸",
                  },
                  {
                    language: "Bahasa Arab",
                    level: "Intermediate",
                    proficiency: 70,
                    color: "from-green-500 to-emerald-500",
                    flag: "🇸🇦",
                  },
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity`}
                    ></div>
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/60 hover:shadow-lg transition-all duration-300 text-center">
                      <div className="text-4xl mb-3">{item.flag}</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.language}</h3>
                      <p className="text-gray-600 mb-4">{item.level}</p>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div
                          className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-1000`}
                          style={{ width: `${item.proficiency}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{item.proficiency}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Special Skills */}
        <div className="mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-100/50 to-orange-100/50 rounded-3xl blur-sm"></div>
            <div className="relative bg-white/40 backdrop-blur-md rounded-3xl p-10 border border-white/50 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Keahlian Khusus</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Tahfidz Al-Qur'an",
                    description: "Hafalan Al-Qur'an dengan tajwid yang baik",
                    icon: BookOpen,
                    color: "from-green-500 to-emerald-500",
                    skills: ["Tajwid", "Hafalan", "Tilawah"],
                  },
                  {
                    title: "Public Speaking",
                    description: "Pengalaman sebagai khatib dan pembicara publik",
                    icon: Mic,
                    color: "from-blue-500 to-cyan-500",
                    skills: ["Khotbah", "Presentasi", "MC"],
                  },
                  {
                    title: "Olahraga",
                    description: "Aktif dalam berbagai cabang olahraga",
                    icon: Trophy,
                    color: "from-orange-500 to-red-500",
                    skills: ["Sepak Bola", "Futsal", "Badminton"],
                  },
                  {
                    title: "Content Strategy",
                    description: "Perencanaan dan eksekusi konten digital",
                    icon: Star,
                    color: "from-purple-500 to-pink-500",
                    skills: ["Planning", "Analytics", "Engagement"],
                  },
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity`}
                    ></div>
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/60 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center`}
                        >
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-white/50 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skill Summary */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-3xl blur-sm"></div>
          <div className="relative bg-white/40 backdrop-blur-md rounded-3xl p-10 border border-white/50 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Ringkasan Kompetensi</h2>
              <p className="text-gray-600">Kombinasi keahlian yang mendukung profesionalisme</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  category: "Leadership",
                  count: "5+",
                  description: "Pengalaman Memimpin",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  category: "Communication",
                  count: "3",
                  description: "Bahasa Dikuasai",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  category: "Technical",
                  count: "10+",
                  description: "Tools & Software",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  category: "Creative",
                  count: "100+",
                  description: "Konten Diproduksi",
                  color: "from-orange-500 to-red-500",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <span className="text-2xl font-bold text-white">{item.count}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.category}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
