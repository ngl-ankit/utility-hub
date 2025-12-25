"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Type, Hash, Eraser, FileText } from "lucide-react";

export function TextTools() {
  const [text, setText] = React.useState("");

  const stats = {
    chars: text.length,
    words: text.trim() === "" ? 0 : text.trim().split(/\s+/).length,
    lines: text.trim() === "" ? 0 : text.split("\n").length,
  };

  const transform = (type: string) => {
    if (type === "upper") setText(text.toUpperCase());
    if (type === "lower") setText(text.toLowerCase());
    if (type === "capitalize") {
      setText(text.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" "));
    }
    if (type === "clean") {
      setText(text.replace(/\s+/g, " ").trim());
    }
    if (type === "clear") setText("");
  };

  return (
    <section id="text-tools" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Text Manipulators</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            Format, clean, and analyze your text content instantly.
          </p>
        </div>

        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" /> All-in-One Text Editor
            </CardTitle>
            <CardDescription>Enter your text below to see live statistics and apply transformations.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-center">
                <div className="text-2xl font-bold">{stats.words}</div>
                <div className="text-xs text-muted-foreground uppercase">Words</div>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg text-center">
                <div className="text-2xl font-bold">{stats.chars}</div>
                <div className="text-xs text-muted-foreground uppercase">Characters</div>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg text-center">
                <div className="text-2xl font-bold">{stats.lines}</div>
                <div className="text-xs text-muted-foreground uppercase">Lines</div>
              </div>
            </div>

            <Textarea 
              placeholder="Paste or type your text here..." 
              className="min-h-[300px] font-mono"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={() => transform("upper")}>UPPERCASE</Button>
              <Button variant="outline" size="sm" onClick={() => transform("lower")}>lowercase</Button>
              <Button variant="outline" size="sm" onClick={() => transform("capitalize")}>Capitalize Words</Button>
              <Button variant="outline" size="sm" onClick={() => transform("clean")}>Clean Whitespace</Button>
              <Button variant="destructive" size="sm" onClick={() => transform("clear")}>Clear All</Button>
              <Button variant="default" size="sm" onClick={() => {
                navigator.clipboard.writeText(text);
                alert("Copied to clipboard!");
              }}>Copy Text</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
