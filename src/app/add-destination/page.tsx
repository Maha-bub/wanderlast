"use client";

import type { FormEvent, ReactNode } from "react";
import Link from "next/link";
import { Save, Trash2 } from "lucide-react";
import { cn } from "cn";
import { playfair } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";


const categories = [
  { value: "beach", label: "Beach" },
  { value: "mountain", label: "Mountain" },
  { value: "city", label: "City" },
  { value: "adventure", label: "Adventure" },
  { value: "cultural", label: "Cultural" },
];

const fieldInput = "rounded-md border-0 bg-[#F5F7FA] placeholder:text-neutral-400";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor} className="font-semibold">
        {label}
      </Label>
      {children}
    </div>
  );
}

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const travelPackage = Object.fromEntries(
    formData.entries()
  ) as Record<string, string>;

  const res = await fetch(`http://localhost:8000/add-destination`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(travelPackage)
  })
  const data =await res.json()
  console.log(data)
  // console.log("Travel package:", travelPackage);
}

export default function AddDestinationPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-8 md:px-14">
      <h1
        className={`${playfair.className} text-4xl font-normal text-neutral-950`}
      >
        Add New Travel Package
      </h1>

      <div className="mt-8 flex justify-center">
        <Card className="w-full max-w-140 rounded-lg border border-neutral-200 py-7 shadow-sm ring-0">
          <CardContent className="px-7">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Field label="Destination Name" htmlFor="destination-name">
                <Input
                  id="destination-name"
                  name="destinationName"
                  type="text"
                  placeholder="Bali Paradise"
                  className={fieldInput}
                />
              </Field>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Country" htmlFor="country">
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Indonesia"
                    className={fieldInput}
                  />
                </Field>

                <Field label="Category" htmlFor="category">
                  <Select name="category">
                    <SelectTrigger
                      id="category"
                      className={cn(fieldInput, "w-full")}
                    >
                      <SelectValue placeholder="Beach" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Price (USD)" htmlFor="price">
                  <Input
                    id="price"
                    name="price"
                    type="text"
                    inputMode="decimal"
                    placeholder="e.g., 1299"
                    className={fieldInput}
                  />
                </Field>

                <Field label="Duration" htmlFor="duration">
                  <Input
                    id="duration"
                    name="duration"
                    type="text"
                    placeholder="e.g., 7 Days/6 Nights"
                    className={fieldInput}
                  />
                </Field>
              </div>

              <Field label="Departure Date" htmlFor="departure-date">
                <Input
                  id="departure-date"
                  name="departureDate"
                  type="date"
                  className={fieldInput}
                />
              </Field>

              <Field label="Image URL" htmlFor="image-url">
                <Input
                  id="image-url"
                  name="imageUrl"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className={fieldInput}
                />
              </Field>

              <Field label="Description" htmlFor="description">
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe the travel experience..."
                  className={cn(fieldInput, "min-h-20")}
                />
              </Field>

              <div className="flex flex-wrap justify-end gap-3 pt-1">
                <Button
                  type="button"
                  variant="outline"
                  render={<Link href="/" />}
                  className="rounded-md border-red-300 bg-white px-3 text-red-500 hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 className="size-3.5" aria-hidden="true" />
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="rounded-md bg-[#15A1BF] px-3 text-white hover:bg-[#108aa2]"
                >
                  <Save className="size-3.5" aria-hidden="true" />
                  Add Travel Package
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
