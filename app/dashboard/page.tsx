"use client"
import Link from "next/link"
import { Home } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VideoSubmissionForm } from "@/components/video-submission-form"
import { VideoProcessingHistory } from "@/components/video-processing-history"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Home className="h-5 w-5" />
          <span>PropertyVideoAI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium" href="/dashboard">
            Dashboard
          </Link>
          <Link className="text-sm font-medium" href="/dashboard/settings">
            Settings
          </Link>
          <Link className="text-sm font-medium" href="#">
            Help
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-6 md:p-10">
        <div className="mx-auto max-w-6xl space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Upload and manage your real estate videos for enhancement.</p>
          </div>
          <Tabs defaultValue="upload" className="space-y-6">
            <TabsList>
              <TabsTrigger value="upload">Upload Video</TabsTrigger>
              <TabsTrigger value="history">Processing History</TabsTrigger>
            </TabsList>
            <TabsContent value="upload" className="space-y-6">
              <VideoSubmissionForm />
            </TabsContent>
            <TabsContent value="history">
              <VideoProcessingHistory />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
