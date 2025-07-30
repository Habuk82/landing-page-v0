"use client"

import { Button } from "@/components/ui/button"
import { Code, Github, ExternalLink, Star, GitFork, ArrowLeft, Folder, Calendar } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

interface Repository {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  created_at: string
  updated_at: string
  topics: string[]
}

export default function ProjekPage() {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchRepositories()
  }, [])

  const fetchRepositories = async () => {
    try {
      const response = await fetch("https://api.github.com/users/Habuk82/repos?sort=updated&per_page=20")
      if (!response.ok) {
        throw new Error("Failed to fetch repositories")
      }
      const data = await response.json()
      setRepositories(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: "from-yellow-500 to-orange-500",
      TypeScript: "from-blue-500 to-indigo-500",
      Python: "from-green-500 to-emerald-500",
      Java: "from-red-500 to-pink-500",
      PHP: "from-purple-500 to-violet-500",
      HTML: "from-orange-500 to-red-500",
      CSS: "from-blue-400 to-cyan-500",
      Vue: "from-green-400 to-teal-500",
      React: "from-cyan-500 to-blue-500",
      Flutter: "from-blue-500 to-purple-500",
      Dart: "from-teal-500 to-cyan-500",
      C: "from-gray-600 to-gray-800",
      "C++": "from-blue-600 to-purple-600",
      default: "from-gray-500 to-gray-600",
    }
    return colors[language || ""] || colors.default
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-300 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-700">Memuat repository...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-300 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">Error: {error}</p>
          <Button onClick={fetchRepositories}>Coba Lagi</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-300 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full blur-sm"></div>
        <div className="absolute top-1/4 -left-16 w-32 h-32 bg-indigo-400/30 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/30 rounded-full blur-sm"></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-pink-400/40 rotate-45 blur-sm"></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-indigo-400/40 rotate-12 blur-sm"></div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-4 py-3 relative">
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
                <Code className="h-4 w-4 text-yellow-300" />
              </div>
              <p className="text-sm font-semibold">Habib Syafi'i - Projek</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-20 h-full bg-white/10 rounded-l-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Proyek & Portfolio</h1>
          <p className="text-xl text-gray-700">Repository GitHub yang pernah dikerjakan dan dikembangkan</p>
        </div>

        {/* GitHub Stats */}
        <div className="mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gray-100/50 to-indigo-100/50 rounded-3xl blur-sm"></div>
            <div className="relative bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">GitHub Statistics</h2>
                <p className="text-gray-600">Aktivitas dan kontribusi di platform GitHub</p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    label: "Public Repos",
                    value: repositories.length.toString(),
                    icon: Folder,
                    color: "from-blue-500 to-indigo-500",
                  },
                  {
                    label: "Total Stars",
                    value: repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0).toString(),
                    icon: Star,
                    color: "from-yellow-500 to-orange-500",
                  },
                  {
                    label: "Total Forks",
                    value: repositories.reduce((sum, repo) => sum + repo.forks_count, 0).toString(),
                    icon: GitFork,
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    label: "Languages",
                    value: new Set(repositories.map((repo) => repo.language).filter(Boolean)).size.toString(),
                    icon: Code,
                    color: "from-purple-500 to-pink-500",
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}
                    >
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {repositories.map((repo) => (
            <div key={repo.id} className="relative group">
              <div
                className={`absolute -inset-2 bg-gradient-to-r ${getLanguageColor(repo.language)} rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity`}
              ></div>
              <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${getLanguageColor(repo.language)} rounded-2xl flex items-center justify-center`}
                    >
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{repo.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {repo.language && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                            {repo.language}
                          </span>
                        )}
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Calendar className="h-3 w-3" />
                          {formatDate(repo.updated_at)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-700 leading-relaxed mb-6 min-h-[3rem]">
                  {repo.description || "Tidak ada deskripsi tersedia untuk repository ini."}
                </p>

                {/* Topics */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {repo.topics.slice(0, 5).map((topic, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/50 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Stats */}
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    className={`bg-gradient-to-r ${getLanguageColor(repo.language)} hover:opacity-90 text-white flex-1`}
                  >
                    <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                  {repo.homepage && (
                    <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Link href={repo.homepage} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-3xl blur-sm"></div>
            <div className="relative bg-white/40 backdrop-blur-md rounded-3xl p-10 border border-white/50 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Tertarik Berkolaborasi?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Saya selalu terbuka untuk proyek-proyek menarik dan kolaborasi yang bermanfaat. Mari diskusikan ide
                Anda!
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-3 rounded-2xl"
                >
                  <Link href="https://github.com/Habuk82" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2" />
                    Kunjungi GitHub
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8 py-3 rounded-2xl bg-transparent">
                  <Link href="/kontak">Hubungi Saya</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
