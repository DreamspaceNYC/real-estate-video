"use client"

import type React from "react"

import { useState } from "react"
import { Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { PropertyDataForm } from "./property-data-form"

export function VideoSubmissionForm() {
  const [submissionType, setSubmissionType] = useState<"upload" | "link">("upload")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [videoLink, setVideoLink] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate processing delay
    setTimeout(() => {
      setIsSubmitting(false)
      // Here you would normally redirect to a results page or show success
      alert("Video submitted successfully!")
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Enhance Your Property Video</CardTitle>
        <CardDescription>Upload a video file or provide a YouTube/Vimeo link to get started.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Tabs
            value={submissionType}
            onValueChange={(v) => setSubmissionType(v as "upload" | "link")}
            className="space-y-6"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upload">Upload File</TabsTrigger>
              <TabsTrigger value="link">Video Link</TabsTrigger>
            </TabsList>
            <TabsContent value="upload" className="space-y-6">
              <div className="space-y-4">
                <div className="grid w-full gap-2">
                  <Label htmlFor="video-upload">Video File</Label>
                  <div className="border rounded-md p-8 text-center cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        {videoFile ? videoFile.name : "Drag and drop your video or click to browse"}
                      </p>
                      <Input
                        id="video-upload"
                        type="file"
                        accept="video/*"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setVideoFile(e.target.files[0])
                          }
                        }}
                      />
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        onClick={() => document.getElementById("video-upload")?.click()}
                      >
                        Select File
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="link" className="space-y-6">
              <div className="space-y-4">
                <div className="grid w-full gap-2">
                  <Label htmlFor="video-link">Video URL</Label>
                  <div className="flex gap-2">
                    <Input
                      id="video-link"
                      placeholder="https://youtube.com/watch?v=..."
                      value={videoLink}
                      onChange={(e) => setVideoLink(e.target.value)}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Supports YouTube and Vimeo links</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6 space-y-6">
            <PropertyDataForm />

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                placeholder="Any specific instructions or details about the property..."
                className="min-h-[100px]"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Enhance Video"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
