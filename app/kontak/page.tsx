"use client"

import { Button } from "@/components/ui/button"
import { Instagram, Phone, Star, Mail, MapPin, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-300 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full blur-sm"></div>
        <div className="absolute top-1/4 -left-16 w-32 h-32 bg-blue-400/30 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/30 rounded-full blur-sm"></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-pink-400/40 rotate-45 blur-sm"></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-blue-400/40 rotate-12 blur-sm"></div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-4 py-3 relative">
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
              <p className="text-sm font-semibold">Habib Syafi'i - Kontak</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-20 h-full bg-white/10 rounded-l-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Hubungi Saya</h1>
          <p className="text-xl text-gray-700">Mari terhubung dan berkolaborasi!</p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email Card */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Email</h3>
                  <p className="text-gray-600">Kirim pesan langsung</p>
                </div>
              </div>
              <Link
                href="mailto:habukk82@gmail.com"
                className="text-blue-600 hover:text-purple-600 font-semibold text-lg transition-colors block"
              >
                habukk82@gmail.com
              </Link>
            </div>
          </div>

          {/* Phone Card */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Telepon</h3>
                  <p className="text-gray-600">Hubungi langsung</p>
                </div>
              </div>
              <Link
                href="tel:+6282279790454"
                className="text-green-600 hover:text-teal-600 font-semibold text-lg transition-colors block"
              >
                +62 822-7979-0454
              </Link>
            </div>
          </div>

          {/* Location Card */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Lokasi</h3>
                  <p className="text-gray-600">Domisili saat ini</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold text-lg">Kota Prabumulih, Sumatra Selatan</p>
            </div>
          </div>

          {/* Birthday Card */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Tanggal Lahir</h3>
                  <p className="text-gray-600">Usia & zodiak</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold text-lg">17 Oktober 2005</p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-3xl blur-sm"></div>
          <div className="relative bg-white/40 backdrop-blur-md rounded-3xl p-10 border border-white/50 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Ikuti Media Sosial Saya</h2>
              <p className="text-gray-600">
                Temukan konten menarik seputar kuliah, sepak bola, dan kehidupan sehari-hari
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white h-20 rounded-2xl group"
              >
                <Link
                  href="https://www.tiktok.com/@habuk.aja?_t=ZS-8yClxZI9BoI&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-black text-xl font-bold">T</span>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-xl">TikTok</p>
                      <p className="text-sm text-gray-300">@habuk.aja</p>
                    </div>
                  </div>
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white h-20 rounded-2xl group"
              >
                <Link
                  href="https://www.instagram.com/habib_syafii?igsh=MXd3bmg0NHI0eXd3cA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-xl">Instagram</p>
                      <p className="text-sm text-pink-200">@habib_syafii</p>
                    </div>
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
