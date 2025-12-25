"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Timer, Hourglass, CalendarRange } from "lucide-react";

export function TimeTools() {
  return (
    <section id="time-date" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Time & Date Tools</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            Manage your time better with our precision tools.
          </p>
        </div>

        <Tabs defaultValue="clock" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="clock">World Clock</TabsTrigger>
            <TabsTrigger value="timer">Timer</TabsTrigger>
            <TabsTrigger value="stopwatch">Stopwatch</TabsTrigger>
            <TabsTrigger value="diff">Date Diff</TabsTrigger>
          </TabsList>

          <TabsContent value="clock">
            <WorldClock />
          </TabsContent>
          <TabsContent value="timer">
            <CountdownTimer />
          </TabsContent>
          <TabsContent value="stopwatch">
            <Stopwatch />
          </TabsContent>
          <TabsContent value="diff">
            <DateDifference />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function WorldClock() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timezones = [
    { label: "New York", zone: "America/New_York" },
    { label: "London", zone: "Europe/London" },
    { label: "Tokyo", zone: "Asia/Tokyo" },
    { label: "Sydney", zone: "Australia/Sydney" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" /> Global Time Zones
        </CardTitle>
        <CardDescription>Current time in major cities around the world.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2 p-6 bg-primary/10 rounded-xl text-center">
          <div className="text-sm text-muted-foreground uppercase tracking-widest">Local Time</div>
          <div className="text-5xl font-mono font-bold">{time.toLocaleTimeString()}</div>
          <div className="text-sm mt-2">{time.toLocaleDateString(undefined, { dateStyle: 'full' })}</div>
        </div>
        {timezones.map(tz => (
          <div key={tz.zone} className="p-4 bg-muted rounded-lg flex justify-between items-center">
            <span className="font-medium">{tz.label}</span>
            <span className="font-mono">
              {time.toLocaleTimeString('en-US', { timeZone: tz.zone, hour12: true })}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function CountdownTimer() {
  const [target, setTarget] = React.useState("");
  const [timeLeft, setTimeLeft] = React.useState<any>(null);

  const startTimer = () => {
    const end = new Date(target).getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = end - now;
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft(null);
        return;
      }
      setTimeLeft({
        d: Math.floor(distance / (1000 * 60 * 60 * 24)),
        h: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Hourglass className="h-5 w-5" /> Countdown Timer
        </CardTitle>
        <CardDescription>Count down to any future date and time.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label>Target Date & Time</Label>
          <Input type="datetime-local" value={target} onChange={(e) => setTarget(e.target.value)} />
        </div>
        <Button className="w-full" onClick={startTimer}>Start Countdown</Button>
        {timeLeft && (
          <div className="grid grid-cols-4 gap-2">
            {Object.entries(timeLeft).map(([unit, val]) => (
              <div key={unit} className="p-3 bg-primary/10 rounded-lg text-center">
                <div className="text-2xl font-bold">{val as number}</div>
                <div className="text-xs text-muted-foreground uppercase">{unit === 'd' ? 'Days' : unit === 'h' ? 'Hours' : unit === 'm' ? 'Mins' : 'Secs'}</div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function Stopwatch() {
  const [time, setTime] = React.useState(0);
  const [running, setRunning] = React.useState(false);

  React.useEffect(() => {
    let interval: any;
    if (running) {
      interval = setInterval(() => setTime(prev => prev + 10), 10);
    }
    return () => clearInterval(interval);
  }, [running]);

  const formatTime = (ms: number) => {
    const mins = Math.floor(ms / 60000);
    const secs = Math.floor((ms % 60000) / 1000);
    const msecs = Math.floor((ms % 1000) / 10);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${msecs.toString().padStart(2, '0')}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Timer className="h-5 w-5" /> Stopwatch
        </CardTitle>
        <CardDescription>Precision stopwatch for your activities.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-6">
        <div className="text-6xl font-mono font-bold tabular-nums">{formatTime(time)}</div>
        <div className="flex gap-4">
          <Button size="lg" onClick={() => setRunning(!running)}>
            {running ? "Stop" : "Start"}
          </Button>
          <Button size="lg" variant="outline" onClick={() => { setTime(0); setRunning(false); }}>
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function DateDifference() {
  const [d1, setD1] = React.useState("");
  const [d2, setD2] = React.useState("");
  const [diff, setDiff] = React.useState<number | null>(null);

  const calculate = () => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const difference = Math.abs(date2.getTime() - date1.getTime());
    setDiff(Math.ceil(difference / (1000 * 3600 * 24)));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarRange className="h-5 w-5" /> Date Difference
        </CardTitle>
        <CardDescription>Calculate the number of days between two dates.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label>Date 1</Label>
            <Input type="date" value={d1} onChange={(e) => setD1(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label>Date 2</Label>
            <Input type="date" value={d2} onChange={(e) => setD2(e.target.value)} />
          </div>
        </div>
        <Button className="w-full" onClick={calculate}>Calculate Difference</Button>
        {diff !== null && (
          <div className="p-6 bg-primary/10 rounded-xl text-center">
            <div className="text-sm text-muted-foreground uppercase tracking-widest">Difference</div>
            <div className="text-4xl font-bold">{diff} Days</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
