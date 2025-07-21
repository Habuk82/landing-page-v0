"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Star,
  Sparkles,
  Trophy,
  Users,
  BookOpen,
  Mic,
  Video,
  FileText,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ProfilePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="bg-white/10 backdrop-blur-lg border-b border-white/20">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div
              className={`text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {/* Profile Avatar with Animation */}
              <div className="relative w-40 h-40 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <img src="/images/habib-photo.jpg" alt="Habib Syafi'i" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <Sparkles className="h-4 w-4 text-yellow-800" />
                </div>
              </div>

              <h1 className="text-6xl font-extrabold text-white mb-6 bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 bg-clip-text text-transparent">
                Habib Syafi'i
              </h1>

              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-xl text-white/90 leading-relaxed font-medium">
                  Lulusan SMA IPA, mantan ketua ROHIS dengan kemampuan komunikasi dan kepemimpinan yang baik.
                  Berpengalaman dalam kepanitiaan sekolah dan berprestasi di berbagai bidang. Mahir berbahasa Indonesia,
                  Inggris, dan Arab. Memiliki pengalaman sebagai pengisi khotbah.
                </p>
              </div>

              {/* Floating Action Buttons */}
              <div className="flex justify-center gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Hubungi Saya
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Video className="h-5 w-5 mr-2" />
                  Lihat Konten
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
          {/* Contact Information */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-white/20 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                Informasi Kontak
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:from-blue-100 hover:to-purple-100 transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Email</p>
                    <Link
                      href="mailto:habukk82@gmail.com"
                      className="text-blue-600 hover:text-purple-600 font-semibold text-lg transition-colors"
                    >
                      habukk82@gmail.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl hover:from-green-100 hover:to-teal-100 transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Telepon</p>
                    <Link
                      href="tel:+6282279790454"
                      className="text-green-600 hover:text-teal-600 font-semibold text-lg transition-colors"
                    >
                      +62 822-7979-0454
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl hover:from-orange-100 hover:to-red-100 transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Tanggal Lahir</p>
                    <p className="font-semibold text-lg text-gray-800">17 Oktober 2005</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl hover:from-pink-100 hover:to-rose-100 transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Domisili</p>
                    <p className="font-semibold text-lg text-gray-800">Kota Prabumulih, Sumatra Selatan</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-white/20 rounded-full">
                  <GraduationCap className="h-6 w-6" />
                </div>
                Pendidikan
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="relative p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-l-8 border-blue-500 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 group">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <BookOpen className="h-12 w-12 text-blue-500" />
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="font-bold text-2xl text-gray-800">Universitas Sriwijaya</h3>
                  <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 text-sm font-semibold">
                    Juli 2023 - Sekarang
                  </Badge>
                </div>
                <p className="text-gray-700 font-medium text-lg">S1 - Teknik Elektro</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 font-medium">Sedang Berlangsung</span>
                </div>
              </div>

              <div className="relative p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-l-8 border-green-500 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 group">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Trophy className="h-12 w-12 text-green-500" />
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="font-bold text-2xl text-gray-800">SMA Negeri 3 Prabumulih</h3>
                  <Badge variant="outline" className="border-green-500 text-green-700 px-4 py-2 text-sm font-semibold">
                    Juli 2020 - Mei 2023
                  </Badge>
                </div>
                <p className="text-gray-700 font-medium text-lg">Jurusan IPA</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-blue-600 font-medium">Lulus</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience Section */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-white/20 rounded-full">
                  <Briefcase className="h-6 w-6" />
                </div>
                Pengalaman
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              {/* Current Experiences */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-l-8 border-purple-500 hover:shadow-lg transition-all duration-300 group">
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <FileText className="h-10 w-10 text-purple-500" />
                  </div>
                  <div className="mb-3">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Penyedia Jasa Document Editing & Printing</h3>
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-2">
                      Oktober 2024 - Sekarang
                    </Badge>
                    <p className="text-gray-600 font-medium mb-3">Freelance</p>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Menyediakan jasa editing dan printing dokumen akademik (tugas kuliah, laporan praktikum) dengan
                    fokus pada kualitas dan ketepatan waktu.
                  </p>
                </div>

                <div className="relative p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border-l-8 border-red-500 hover:shadow-lg transition-all duration-300 group">
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Video className="h-10 w-10 text-red-500" />
                  </div>
                  <div className="mb-3">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Video Content Creator</h3>
                    <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white mb-2">
                      Juni 2023 - Sekarang
                    </Badge>
                    <p className="text-gray-600 font-medium mb-3">Platform Digital (YouTube, TikTok, Instagram)</p>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Membuat konten kreatif seputar sepak bola, mengaji, kuliah, dan keseharian di berbagai platform
                    digital.
                  </p>
                </div>
              </div>

              <div className="relative p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl border-l-8 border-green-500 hover:shadow-lg transition-all duration-300 group">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Mic className="h-12 w-12 text-green-500" />
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="font-bold text-2xl text-gray-800">Khatib Jum'at</h3>
                  <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2">
                    Juni 2023 - Sekarang
                  </Badge>
                </div>
                <p className="text-gray-600 font-medium mb-3 text-lg">Dewan Masjid Indonesia Kota Prabumulih</p>
                <p className="text-gray-700 leading-relaxed">
                  Menyampaikan materi keagamaan, berinteraksi dengan jamaah, dan tugas masjid lainnya.
                </p>
              </div>

              <Separator className="my-6" />

              {/* Past Experiences */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-l-8 border-blue-500 hover:shadow-lg transition-all duration-300 group">
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Users className="h-10 w-10 text-blue-500" />
                  </div>
                  <div className="mb-3">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Ketua ROHIS</h3>
                    <Badge variant="outline" className="border-blue-500 text-blue-700 mb-2">
                      2022 - 2023
                    </Badge>
                    <p className="text-gray-600 font-medium mb-3">SMA Negeri 3 Prabumulih</p>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Bertanggung jawab dalam kepemimpinan organisasi keagamaan sekolah.
                  </p>
                </div>

                <div className="relative p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border-l-8 border-yellow-500 hover:shadow-lg transition-all duration-300 group">
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Trophy className="h-10 w-10 text-yellow-500" />
                  </div>
                  <div className="mb-3">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Ketua Panitia Pelaksana</h3>
                    <Badge variant="outline" className="border-yellow-500 text-yellow-700 mb-2">
                      2020 - 2023
                    </Badge>
                    <p className="text-gray-600 font-medium mb-3">SMA Negeri 3 Prabumulih</p>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">Mengorganisir berbagai kegiatan sekolah.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <CardHeader className="bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-white/20 rounded-full">
                  <Star className="h-6 w-6" />
                </div>
                Keahlian & Kemampuan
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { skill: "Adaptasi & Komunikasi", color: "from-purple-500 to-pink-500", icon: Users },
                  { skill: "Bahasa Inggris", color: "from-blue-500 to-cyan-500", icon: BookOpen },
                  { skill: "Bahasa Arab", color: "from-green-500 to-teal-500", icon: BookOpen },
                  { skill: "Microsoft Excel", color: "from-orange-500 to-red-500", icon: FileText },
                  { skill: "Microsoft Word", color: "from-indigo-500 to-purple-500", icon: FileText },
                  { skill: "Olahraga", color: "from-yellow-500 to-orange-500", icon: Trophy },
                  { skill: "Tahfidz", color: "from-emerald-500 to-green-500", icon: BookOpen },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`relative p-4 bg-gradient-to-r ${item.color} rounded-2xl text-white hover:scale-105 transition-all duration-300 group cursor-pointer`}
                  >
                    <div className="absolute top-2 right-2 opacity-30 group-hover:opacity-50 transition-opacity">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <p className="font-semibold text-sm leading-tight pr-8">{item.skill}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Social Media Section */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <CardHeader className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Ikuti Saya</CardTitle>
              <CardDescription className="text-pink-100">
                Temukan konten menarik seputar kuliah, sepak bola, dan kehidupan sehari-hari
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white h-16 rounded-2xl group"
                >
                  <Link
                    href="https://www.tiktok.com/@habuk.aja?_t=ZS-8yClxZI9BoI&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-black text-lg font-bold">T</span>
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-lg">TikTok</p>
                        <p className="text-sm text-gray-300">@habuk.aja</p>
                      </div>
                      <ExternalLink className="h-5 w-5 ml-auto group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white h-16 rounded-2xl group"
                >
                  <Link
                    href="https://www.instagram.com/habib_syafii?igsh=MXd3bmg0NHI0eXd3cA=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="w-6 h-6 bg-white rounded-lg"></div>
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-lg">Instagram</p>
                        <p className="text-sm text-pink-200">@habib_syafii</p>
                      </div>
                      <ExternalLink className="h-5 w-5 ml-auto group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="relative z-10 bg-gradient-to-r from-gray-900 to-black text-white mt-16">
          <div className="max-w-6xl mx-auto px-4 py-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <p className="text-lg font-semibold">Habib Syafi'i</p>
              <Sparkles className="h-5 w-5 text-yellow-400" />
            </div>
            <p className="text-gray-400">&copy; 2024 Habib Syafi'i. Semua hak dilindungi.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
