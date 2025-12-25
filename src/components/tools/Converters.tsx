"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ruler, Scale, Thermometer, Coins, Binary } from "lucide-react";

export function Converters() {
  return (
    <section id="converters" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Smart Converters</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            Convert units, currencies, and number systems with ease.
          </p>
        </div>

        <Tabs defaultValue="unit" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="unit">Units</TabsTrigger>
            <TabsTrigger value="currency">Currency</TabsTrigger>
            <TabsTrigger value="number">Number Systems</TabsTrigger>
          </TabsList>

          <TabsContent value="unit">
            <UnitConverter />
          </TabsContent>
          <TabsContent value="currency">
            <CurrencyConverter />
          </TabsContent>
          <TabsContent value="number">
            <NumberConverter />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function UnitConverter() {
  const [value, setValue] = React.useState<number>(1);
  const [type, setType] = React.useState("length");
  const [from, setFrom] = React.useState("m");
  const [to, setTo] = React.useState("km");

  const units: Record<string, Record<string, number>> = {
    length: { m: 1, km: 0.001, cm: 100, mm: 1000, inch: 39.3701, ft: 3.28084 },
    weight: { kg: 1, g: 1000, mg: 1000000, lb: 2.20462, oz: 35.274 },
  };

  const convert = () => {
    if (type === "temp") {
      if (from === "C" && to === "F") return (value * 9/5) + 32;
      if (from === "F" && to === "C") return (value - 32) * 5/9;
      return value;
    }
    const valInBase = value / units[type][from];
    return valInBase * units[type][to];
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Ruler className="h-5 w-5" /> Unit Converter
        </CardTitle>
        <CardDescription>Convert length, weight, and temperature.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label>Category</Label>
          <select 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={type} 
            onChange={(e) => {
              setType(e.target.value);
              if (e.target.value === "temp") { setFrom("C"); setTo("F"); }
              else if (e.target.value === "length") { setFrom("m"); setTo("km"); }
              else { setFrom("kg"); setTo("g"); }
            }}
          >
            <option value="length">Length</option>
            <option value="weight">Weight</option>
            <option value="temp">Temperature</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label>From</Label>
            <select 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={from} onChange={(e) => setFrom(e.target.value)}
            >
              {type === "temp" ? (
                <>
                  <option value="C">Celsius</option>
                  <option value="F">Fahrenheit</option>
                </>
              ) : Object.keys(units[type]).map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
          <div className="grid gap-2">
            <Label>To</Label>
            <select 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={to} onChange={(e) => setTo(e.target.value)}
            >
              {type === "temp" ? (
                <>
                  <option value="C">Celsius</option>
                  <option value="F">Fahrenheit</option>
                </>
              ) : Object.keys(units[type]).map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>
        <div className="grid gap-2">
          <Label>Value</Label>
          <Input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
        </div>
        <div className="p-4 bg-primary/10 rounded-lg text-center font-bold text-2xl">
          {convert().toFixed(4)} {to}
        </div>
      </CardContent>
    </Card>
  );
}

function CurrencyConverter() {
  const [amount, setAmount] = React.useState(100);
  const [from, setFrom] = React.useState("USD");
  const [to, setTo] = React.useState("EUR");

  const rates: Record<string, number> = {
    USD: 1, EUR: 0.92, GBP: 0.79, JPY: 150.5, INR: 83.3,
  };

  const result = (amount / rates[from]) * rates[to];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Coins className="h-5 w-5" /> Currency Converter
        </CardTitle>
        <CardDescription>Real-time mock rates for global currencies.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label>Amount</Label>
          <Input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label>From</Label>
            <select 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={from} onChange={(e) => setFrom(e.target.value)}
            >
              {Object.keys(rates).map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="grid gap-2">
            <Label>To</Label>
            <select 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={to} onChange={(e) => setTo(e.target.value)}
            >
              {Object.keys(rates).map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <div className="p-4 bg-primary/10 rounded-lg text-center font-bold text-2xl">
          {result.toFixed(2)} {to}
        </div>
      </CardContent>
    </Card>
  );
}

function NumberConverter() {
  const [val, setVal] = React.useState("10");
  const [type, setType] = React.useState("decimal");

  const convert = (target: string) => {
    try {
      let decimal;
      if (type === "decimal") decimal = parseInt(val, 10);
      else if (type === "binary") decimal = parseInt(val, 2);
      else if (type === "hex") decimal = parseInt(val, 16);
      else decimal = 0;

      if (isNaN(decimal)) return "Invalid";
      if (target === "decimal") return decimal.toString(10);
      if (target === "binary") return decimal.toString(2);
      if (target === "hex") return decimal.toString(16).toUpperCase();
      return "";
    } catch { return "Error"; }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Binary className="h-5 w-5" /> Number System Converter
        </CardTitle>
        <CardDescription>Convert between decimal, binary, and hexadecimal.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label>Input Type</Label>
          <select 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={type} onChange={(e) => setType(e.target.value)}
          >
            <option value="decimal">Decimal</option>
            <option value="binary">Binary</option>
            <option value="hex">Hexadecimal</option>
          </select>
        </div>
        <div className="grid gap-2">
          <Label>Value</Label>
          <Input value={val} onChange={(e) => setVal(e.target.value)} />
        </div>
        <div className="grid gap-2 mt-4">
          <div className="flex justify-between p-3 bg-muted rounded-lg">
            <span className="text-sm font-medium">Decimal:</span>
            <span className="font-mono">{convert("decimal")}</span>
          </div>
          <div className="flex justify-between p-3 bg-muted rounded-lg">
            <span className="text-sm font-medium">Binary:</span>
            <span className="font-mono">{convert("binary")}</span>
          </div>
          <div className="flex justify-between p-3 bg-muted rounded-lg">
            <span className="text-sm font-medium">Hex:</span>
            <span className="font-mono">{convert("hex")}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
