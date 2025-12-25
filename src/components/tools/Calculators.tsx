"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator as CalcIcon, Percent, Ruler, Scale, Thermometer, Briefcase, User, Calendar } from "lucide-react";

export function Calculators() {
  return (
    <section id="calculators" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Essential Calculators</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            Fast and accurate calculations for your daily needs, from simple math to complex loan estimates.
          </p>
        </div>

        <Tabs defaultValue="basic" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="emi">EMI</TabsTrigger>
            <TabsTrigger value="gst">GST</TabsTrigger>
            <TabsTrigger value="bmi">BMI</TabsTrigger>
            <TabsTrigger value="age">Age</TabsTrigger>
            <TabsTrigger value="percent">%</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <BasicCalculator />
          </TabsContent>
          <TabsContent value="emi">
            <EMICalculator />
          </TabsContent>
          <TabsContent value="gst">
            <GSTCalculator />
          </TabsContent>
          <TabsContent value="bmi">
            <BMICalculator />
          </TabsContent>
          <TabsContent value="age">
            <AgeCalculator />
          </TabsContent>
          <TabsContent value="percent">
            <PercentageCalculator />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function BasicCalculator() {
  const [display, setDisplay] = React.useState("0");
  const [equation, setEquation] = React.useState("");

  const handleClick = (value: string) => {
    if (display === "0" && !isNaN(Number(value))) {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const calculate = () => {
    try {
      // Use Function constructor for a simple, limited calculator eval
      // In production, use a proper math parser
      const result = new Function(`return ${display.replace(/[^-()\d/*+.]/g, '')}`)();
      setEquation(display + " =");
      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  const clear = () => {
    setDisplay("0");
    setEquation("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalcIcon className="h-5 w-5" /> Basic Calculator
        </CardTitle>
        <CardDescription>Perform simple arithmetic operations instantly.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-muted p-4 rounded-lg mb-4 text-right">
          <div className="text-xs text-muted-foreground h-4">{equation}</div>
          <div className="text-2xl font-mono font-bold truncate">{display}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
            <Button
              key={btn}
              variant={btn === "=" ? "default" : "outline"}
              onClick={() => (btn === "=" ? calculate() : handleClick(btn))}
              className="h-12 text-lg"
            >
              {btn}
            </Button>
          ))}
          <Button variant="destructive" onClick={clear} className="col-span-4 h-12">Clear</Button>
        </div>
      </CardContent>
    </Card>
  );
}

function EMICalculator() {
  const [loan, setLoan] = React.useState<number>(1000000);
  const [rate, setRate] = React.useState<number>(8.5);
  const [tenure, setTenure] = React.useState<number>(20);
  const [emi, setEmi] = React.useState<number>(0);

  const calculateEMI = () => {
    const r = rate / 12 / 100;
    const n = tenure * 12;
    const emiValue = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(Math.round(emiValue));
  };

  const reset = () => {
    setLoan(1000000);
    setRate(8.5);
    setTenure(20);
  };

  React.useEffect(calculateEMI, [loan, rate, tenure]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="h-5 w-5" /> EMI Loan Calculator
        </CardTitle>
        <CardDescription>Calculate your monthly loan repayments easily.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label>Loan Amount (₹)</Label>
          <Input type="number" value={loan} onChange={(e) => setLoan(Number(e.target.value))} />
        </div>
        <div className="grid gap-2">
          <Label>Interest Rate (% P.A.)</Label>
          <Input type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
        </div>
        <div className="grid gap-2">
          <Label>Tenure (Years)</Label>
          <Input type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} />
        </div>
        <div className="p-4 bg-primary/10 rounded-lg text-center">
          <div className="text-sm text-muted-foreground uppercase tracking-wider">Monthly EMI</div>
          <div className="text-3xl font-bold text-primary">₹ {emi.toLocaleString()}</div>
        </div>
        <Button variant="outline" className="w-full" onClick={reset}>Reset</Button>
      </CardContent>
    </Card>
  );
}

function GSTCalculator() {
  const [amount, setAmount] = React.useState<number>(1000);
  const [rate, setRate] = React.useState<number>(18);
  const [isInclusive, setIsInclusive] = React.useState(false);

  const reset = () => {
    setAmount(1000);
    setRate(18);
    setIsInclusive(false);
  };

  const gstAmount = isInclusive 
    ? amount - (amount * (100 / (100 + rate)))
    : (amount * rate) / 100;
  
  const total = isInclusive ? amount : amount + gstAmount;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Percent className="h-5 w-5" /> GST Calculator
        </CardTitle>
        <CardDescription>Calculate GST inclusive or exclusive amounts.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label>Amount (₹)</Label>
          <Input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        </div>
        <div className="grid gap-2">
          <Label>GST Rate (%)</Label>
          <select 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            value={rate} 
            onChange={(e) => setRate(Number(e.target.value))}
          >
            {[5, 12, 18, 28].map(r => <option key={r} value={r}>{r}%</option>)}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <input 
            type="checkbox" 
            id="inclusive" 
            checked={isInclusive} 
            onChange={(e) => setIsInclusive(e.target.checked)}
            className="h-4 w-4"
          />
          <Label htmlFor="inclusive">Inclusive of GST</Label>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-muted rounded-lg text-center">
            <div className="text-xs text-muted-foreground">GST Amount</div>
            <div className="font-bold">₹ {gstAmount.toFixed(2)}</div>
          </div>
          <div className="p-3 bg-primary/10 rounded-lg text-center">
            <div className="text-xs text-muted-foreground">{isInclusive ? "Net Amount" : "Total Amount"}</div>
            <div className="font-bold text-primary">₹ {total.toFixed(2)}</div>
          </div>
        </div>
        <Button variant="outline" className="w-full" onClick={reset}>Reset</Button>
      </CardContent>
    </Card>
  );
}

function BMICalculator() {
  const [weight, setWeight] = React.useState<number>(70);
  const [height, setHeight] = React.useState<number>(170);

  const reset = () => {
    setWeight(70);
    setHeight(170);
  };

  const bmi = weight / Math.pow(height / 100, 2);
  
  const getStatus = (val: number) => {
    if (val < 18.5) return { label: "Underweight", color: "text-blue-500" };
    if (val < 25) return { label: "Normal", color: "text-green-500" };
    if (val < 30) return { label: "Overweight", color: "text-yellow-500" };
    return { label: "Obese", color: "text-red-500" };
  };

  const status = getStatus(bmi);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" /> BMI Calculator
        </CardTitle>
        <CardDescription>Calculate your Body Mass Index (BMI).</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label>Weight (kg)</Label>
          <Input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
        </div>
        <div className="grid gap-2">
          <Label>Height (cm)</Label>
          <Input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
        </div>
        <div className="p-4 bg-muted rounded-lg text-center">
          <div className="text-sm text-muted-foreground uppercase tracking-wider">Your BMI</div>
          <div className="text-3xl font-bold">{bmi.toFixed(1)}</div>
          <div className={`text-lg font-medium mt-1 ${status.color}`}>{status.label}</div>
        </div>
        <Button variant="outline" className="w-full" onClick={reset}>Reset</Button>
      </CardContent>
    </Card>
  );
}

function AgeCalculator() {
  const [dob, setDob] = React.useState("");
  const [age, setAge] = React.useState<{y: number, m: number, d: number} | null>(null);

  const calculateAge = () => {
    if (!dob) return;
    const birthDate = new Date(dob);
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }
    if (days < 0) {
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
      months--;
    }
    setAge({ y: years, m: months, d: days });
  };

  const reset = () => {
    setDob("");
    setAge(null);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" /> Age Calculator
        </CardTitle>
        <CardDescription>Calculate your exact age in years, months, and days.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label>Date of Birth</Label>
          <Input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button onClick={calculateAge}>Calculate</Button>
          <Button variant="outline" onClick={reset}>Reset</Button>
        </div>
        {age && (
          <div className="grid grid-cols-3 gap-2">
            <div className="p-3 bg-primary/10 rounded-lg text-center">
              <div className="text-2xl font-bold">{age.y}</div>
              <div className="text-xs text-muted-foreground">Years</div>
            </div>
            <div className="p-3 bg-primary/10 rounded-lg text-center">
              <div className="text-2xl font-bold">{age.m}</div>
              <div className="text-xs text-muted-foreground">Months</div>
            </div>
            <div className="p-3 bg-primary/10 rounded-lg text-center">
              <div className="text-2xl font-bold">{age.d}</div>
              <div className="text-xs text-muted-foreground">Days</div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function PercentageCalculator() {
  const [num1, setNum1] = React.useState<number>(0);
  const [num2, setNum2] = React.useState<number>(0);
  const [mode, setMode] = React.useState("of"); // of, what, inc

  const reset = () => {
    setNum1(0);
    setNum2(0);
    setMode("of");
  };

  const getResult = () => {
    if (mode === "of") return (num1 / 100) * num2;
    if (mode === "what") return (num2 === 0 ? 0 : (num1 / num2) * 100);
    if (mode === "inc") return (num1 === 0 ? 0 : ((num2 - num1) / num1) * 100);
    return 0;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Percent className="h-5 w-5" /> Percentage Calculator
        </CardTitle>
        <CardDescription>Solve various percentage-related math problems.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label>Mode</Label>
          <select 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            value={mode} 
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="of">What is X% of Y?</option>
            <option value="what">X is what % of Y?</option>
            <option value="inc">Percentage Change from X to Y</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label>X</Label>
            <Input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
          </div>
          <div className="grid gap-2">
            <Label>Y</Label>
            <Input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
          </div>
        </div>
        <div className="p-4 bg-muted rounded-lg text-center">
          <div className="text-sm text-muted-foreground uppercase tracking-wider">Result</div>
          <div className="text-3xl font-bold">{getResult().toFixed(2)} {mode === "of" ? "" : "%"}</div>
        </div>
      </CardContent>
    </Card>
  );
}
