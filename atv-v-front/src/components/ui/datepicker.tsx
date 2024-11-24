"use client"

import * as React from "react"
import { format, parseISO } from "date-fns"
import { CalendarIcon, Filter } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerWithRange(
  props: { from: string | undefined; to: string | undefined },
  { className }: React.HTMLAttributes<HTMLDivElement>
) {
  // Função para converter strings para datas ou retornar undefined se inválido
  const parseDate = (dateString: string | undefined): Date | undefined => {
    return dateString ? parseISO(dateString) : undefined
  }

  // Configurando o estado inicial baseado nos valores de `props`
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: parseDate(props.from),
    to: parseDate(props.to),
  })

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "dd LLL, y")} -{" "}
                  {format(date.to, "dd LLL, y")}
                </>
              ) : (
                format(date.from, "dd LLL, y")
              )
            ) : (
              <span>Filtrar por data</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={1}
          />
          <Button
            variant="outline"
            onClick={() => {
              const formattedFrom = date?.from
                ? format(date.from, "yyyy-MM-dd")
                : "";
              const formattedTo = date?.to
                ? format(date.to, "yyyy-MM-dd")
                : "";
              window.location.href = `/dashboard?from=${formattedFrom}&to=${formattedTo}`;
            }}
          >
            <Filter className="mr-2 h-4 w-4" />
            Filtrar
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  )
}
