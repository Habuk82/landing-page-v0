"use client"

import { Button } from "@/components/ui/button"
import { Briefcase, Video, Mic, FileText, Users, Trophy, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PengalamanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-red-200 to-pink-300 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full blur-sm"></div>
        <div className="absolute top-1/4 -left-16 w-32 h-32 bg-orange-400/30 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-red-400/30 rounded-full blur-sm"></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-pink-400/40 rotate-45 blur-sm"></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-orange-400/40 rotate-12 blur-sm"></div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white px-4 py-3 relative">
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
                <Briefcase className="h-4 w-4 text-yellow-300" />
              </div>
              <p className="text-sm font-semibold">Habib Syafi'i - Pengalaman</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-20 h-full bg-white/10 rounded-l-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Pengalaman Kerja & Organisasi</h1>
          <p className="text-xl text-gray-700">Perjalanan profesional dan kontribusi di berbagai bidang</p>
        </div>

        {/* Current Experiences */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            Pengalaman Saat Ini
          </h2>

          <div className="space-y-8">
            {/* Document Editing */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-800">Penyedia Jasa Document Editing & Printing</h3>
                      <div className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold">AKTIF</div>
                    </div>
                    <p className="text-gray-600 mb-2">Oktober 2024 - Sekarang | Freelance</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Menyediakan jasa editing dan printing dokumen akademik (tugas kuliah, laporan praktikum) dengan
                      fokus pada kualitas dan ketepatan waktu.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        Microsoft Word
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        Document Design
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        Quality Control
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Creator */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-400 to-orange-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Video className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-800">Video Content Creator</h3>
                      <div className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold">AKTIF</div>
                    </div>
                    <p className="text-gray-600 mb-2">Juni 2023 - Sekarang | Platform Digital</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Membuat konten kreatif seputar sepak bola, mengaji, kuliah, dan keseharian di berbagai platform
                      digital (YouTube, TikTok, Instagram).
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                        Video Editing
                      </span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                        Content Strategy
                      </span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                        Social Media
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Khatib */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mic className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-800">Khatib Jum'at</h3>
                      <div className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold">AKTIF</div>
                    </div>
                    <p className="text-gray-600 mb-2">Juni 2023 - Sekarang | Dewan Masjid Indonesia Kota Prabumulih</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Menyampaikan materi keagamaan, berinteraksi dengan jamaah, dan melaksanakan tugas-tugas masjid
                      lainnya dengan penuh tanggung jawab.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        Public Speaking
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        Islamic Studies
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        Community Service
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Past Experiences */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            Pengalaman Sebelumnya
          </h2>

          <div className="space-y-8">
            {/* ROHIS Leader */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Ketua ROHIS</h3>
                    <p className="text-gray-600 mb-2">2022 - 2023 | SMA Negeri 3 Prabumulih</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Memimpin organisasi keagamaan sekolah, mengorganisir kegiatan dakwah, dan membina anggota dalam
                      pengembangan spiritual dan kepemimpinan.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        Leadership
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        Event Management
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        Team Building
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Organizer */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Ketua Panitia Pelaksana</h3>
                    <p className="text-gray-600 mb-2">2020 - 2023 | SMA Negeri 3 Prabumulih</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Mengorganisir berbagai kegiatan sekolah seperti acara keagamaan, kompetisi, dan event sosial
                      dengan koordinasi tim yang efektif.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                        Project Management
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                        Coordination
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                        Problem Solving
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-3xl blur-sm"></div>
          <div className="relative bg-white/40 backdrop-blur-md rounded-3xl p-10 border border-white/50 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Pencapaian & Dampak</h2>
              <p className="text-gray-600">Kontribusi nyata dari setiap pengalaman yang dijalani</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">100+</h3>
                <p className="text-gray-600">Konten Dibuat</p>
              </div>

              <div className="text-center p-6 bg-white/50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">50+</h3>
                <p className="text-gray-600">Anggota Dibina</p>
              </div>

              <div className="text-center p-6 bg-white/50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">20+</h3>
                <p className="text-gray-600">Event Diorganisir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
