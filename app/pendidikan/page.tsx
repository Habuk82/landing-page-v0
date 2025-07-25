"use client"

import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Trophy, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PendidikanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-blue-200 to-indigo-300 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full blur-sm"></div>
        <div className="absolute top-1/4 -left-16 w-32 h-32 bg-green-400/30 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-400/30 rounded-full blur-sm"></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-indigo-400/40 rotate-45 blur-sm"></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-green-400/40 rotate-12 blur-sm"></div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white px-4 py-3 relative">
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
                <GraduationCap className="h-4 w-4 text-yellow-300" />
              </div>
              <p className="text-sm font-semibold">Habib Syafi'i - Pendidikan</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-20 h-full bg-white/10 rounded-l-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Riwayat Pendidikan</h1>
          <p className="text-xl text-gray-700">Perjalanan akademik dan pencapaian pendidikan</p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-12">
          {/* Current Education */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-10 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-3xl font-bold text-gray-800">Universitas Sriwijaya</h3>
                    <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-semibold">
                      Sedang Berlangsung
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 font-semibold mb-2">S1 - Teknik Elektro</p>
                  <p className="text-gray-600 mb-4">Juli 2023 - Sekarang</p>
                  <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/60">
                    <h4 className="font-semibold text-gray-800 mb-3">Fokus Pembelajaran:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Sistem Kelistrikan dan Elektronika
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Teknologi Informasi dan Komunikasi
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Sistem Kontrol dan Otomasi
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Previous Education */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-10 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-3xl font-bold text-gray-800">SMA Negeri 3 Prabumulih</h3>
                    <div className="px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-full text-sm font-semibold">
                      Lulus
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 font-semibold mb-2">Jurusan IPA (Ilmu Pengetahuan Alam)</p>
                  <p className="text-gray-600 mb-4">Juli 2020 - Mei 2023</p>
                  <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/60">
                    <h4 className="font-semibold text-gray-800 mb-3">Pencapaian & Aktivitas:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Ketua ROHIS (Rohani Islam) 2022-2023
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Ketua Panitia Pelaksana berbagai kegiatan sekolah
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Aktif dalam kegiatan ekstrakurikuler dan organisasi
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Prestasi di bidang akademik dan non-akademik
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Gained */}
        <div className="mt-16 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-3xl blur-sm"></div>
          <div className="relative bg-white/40 backdrop-blur-md rounded-3xl p-10 border border-white/50 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Kemampuan yang Diperoleh</h2>
              <p className="text-gray-600">Soft skills dan hard skills dari perjalanan pendidikan</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Soft Skills
                </h3>
                <div className="space-y-3">
                  {["Kepemimpinan", "Komunikasi Publik", "Manajemen Tim", "Problem Solving"].map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      <span className="font-medium text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  Hard Skills
                </h3>
                <div className="space-y-3">
                  {["Matematika & Fisika", "Bahasa Inggris", "Bahasa Arab", "Microsoft Office"].map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                      <span className="font-medium text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
