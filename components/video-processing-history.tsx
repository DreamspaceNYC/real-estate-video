"use client"

import { Download, ExternalLink, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Mock data for demonstration
const processingHistory = [
  {
    id: "1",
    title: "123 Main St Property",
    date: "2024-05-10",
    status: "completed",
    type: "YouTube Link",
  },
  {
    id: "2",
    title: "Luxury Condo Tour",
    date: "2024-05-08",
    status: "completed",
    type: "File Upload",
  },
  {
    id: "3",
    title: "Beachfront Property",
    date: "2024-05-05",
    status: "processing",
    type: "Vimeo Link",
  },
  {
    id: "4",
    title: "Downtown Apartment",
    date: "2024-05-01",
    status: "failed",
    type: "File Upload",
  },
]

export function VideoProcessingHistory() {
  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {processingHistory.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "completed" ? "default" : item.status === "processing" ? "outline" : "destructive"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem disabled={item.status !== "completed"}>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem disabled={item.status !== "completed"}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Result
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
