"use client"

import { Button } from "@/components/ui/button"
import { Youtube, Instagram, Phone, ArrowRight, Star, Sparkles } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-green-200 to-yellow-300 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large decorative circles */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full blur-sm"></div>
        <div className="absolute top-1/4 -left-16 w-32 h-32 bg-blue-400/30 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-green-400/30 rounded-full blur-sm"></div>

        {/* Floating squares */}
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-yellow-400/40 rotate-45 blur-sm"></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-red-400/40 rotate-12 blur-sm"></div>
        <div className="absolute top-2/3 right-1/3 w-10 h-10 bg-purple-400/40 rotate-45 blur-sm"></div>

        {/* Oval shapes */}
        <div className="absolute top-1/2 left-10 w-16 h-8 bg-pink-400/30 rounded-full rotate-45 blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-20 h-10 bg-indigo-400/30 rounded-full -rotate-12 blur-sm"></div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 relative">
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Star className="h-4 w-4 text-yellow-300" />
            </div>
            <p className="text-sm font-semibold">Habib Syafi'i</p>
          </div>
          {/* Decorative elements in header */}
          <div className="absolute top-0 right-0 w-20 h-full bg-white/10 rounded-l-full"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-800 text-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Navigation Links */}
            <div className="flex space-x-8">
              <Link href="/landing" className="hover:text-yellow-300 transition-colors font-medium">
                Home
              </Link>
              <Link href="/kontak" className="hover:text-yellow-300 transition-colors font-medium">
                Kontak
              </Link>
              <Link href="/pendidikan" className="hover:text-yellow-300 transition-colors font-medium">
                Pendidikan
              </Link>
              <Link href="/pengalaman" className="hover:text-yellow-300 transition-colors font-medium">
                Pengalaman
              </Link>
              <Link href="/keahlian" className="hover:text-yellow-300 transition-colors font-medium">
                Keahlian
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.youtube.com/@habuk.aja"
                target="_blank"
                className="text-gray-400 hover:text-red-400 transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/habib_syafii"
                target="_blank"
                className="text-gray-400 hover:text-pink-400 transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="tel:+6282279790454"
                className="text-gray-400 hover:text-green-400 transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        {/* Navigation decorative line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400"></div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative">
            {/* Decorative box behind text */}
            <div className="absolute -top-8 -left-8 w-full h-full bg-white/20 rounded-3xl blur-sm -z-10"></div>

            <div className="space-y-6 relative bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Profil Singkat</span>
              </div>

              <p className="text-gray-800 text-lg leading-relaxed font-medium">
                Lulusan SMA IPA, mantan ketua ROHIS dengan kemampuan komunikasi dan kepemimpinan yang baik.
                Berpengalaman dalam kepanitiaan sekolah dan berprestasi di berbagai bidang. Mahir berbahasa Indonesia,
                Inggris, dan Arab. Memiliki pengalaman sebagai pengisi khotbah.
              </p>

              {/* Decorative elements inside the box */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20"></div>
            </div>

            {/* Enhanced Button */}
            <div className="relative">
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur-lg opacity-30 animate-pulse"></div>

              <Button
                asChild
                size="lg"
                className="relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group border-2 border-white/20"
              >
                <Link href="/">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                    Let's get started
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Profile Image */}
          <div className="flex justify-center relative">
            {/* Decorative elements around image */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-400/60 rounded-2xl rotate-12 blur-sm"></div>
            <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-blue-400/60 rounded-full blur-sm"></div>
            <div className="absolute top-1/2 -right-12 w-8 h-20 bg-green-400/40 rounded-full blur-sm"></div>

            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-8 bg-gradient-to-r from-red-400 via-pink-400 to-red-500 rounded-full animate-spin-slow opacity-20"></div>

              {/* Main image container */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl">
                {/* Inner decorative elements */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 bg-white rounded-full animate-pulse"></div>

                <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img src="/images/habib-photo.jpg" alt="Habib Syafi'i" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
              <Star className="h-4 w-4 text-white" />
            </div>
            <p className="text-xl font-bold">Habib Syafi'i</p>
          </div>
          <p className="text-gray-400">&copy; 2024 Habib Syafi'i. Semua hak dilindungi.</p>
        </div>
      </footer>
    </div>
  )
}
