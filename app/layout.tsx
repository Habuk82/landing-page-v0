import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Profil Habib Syafi'i | Mahasiswa, Content Creator & Khatib Muda",
  description:
    "Jelajahi profil lengkap Habib Syafi'i dari Prabumulih: mahasiswa Teknik Elektro Universitas Sriwijaya, Content Creator aktif di TikTok & Instagram, serta seorang Khatib Jum'at.",
  keywords:
    "Habib Syafi'i, Prabumulih, Universitas Sriwijaya, Teknik Elektro, Content Creator, Khatib Jum'at, TikTok, Instagram, Mahasiswa",
  authors: [{ name: "Habib Syafi'i" }],
  creator: "Habib Syafi'i",
  openGraph: {
    title: "Profil Habib Syafi'i | Mahasiswa, Content Creator & Khatib Muda",
    description:
      "Jelajahi profil lengkap Habib Syafi'i dari Prabumulih: mahasiswa Teknik Elektro Universitas Sriwijaya, Content Creator aktif di TikTok & Instagram, serta seorang Khatib Jum'at.",
    type: "profile",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profil Habib Syafi'i | Mahasiswa, Content Creator & Khatib Muda",
    description:
      "Jelajahi profil lengkap Habib Syafi'i dari Prabumulih: mahasiswa Teknik Elektro Universitas Sriwijaya, Content Creator aktif di TikTok & Instagram, serta seorang Khatib Jum'at.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
