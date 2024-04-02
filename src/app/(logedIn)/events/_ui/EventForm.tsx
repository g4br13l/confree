"use client"

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {CalendarDays} from "lucide-react";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";
import {cn} from "@/lib/utils";
import {saveNewEvent} from "@/app/(logedIn)/events/actions";
import {eventFormSchema, EventFormSchemaT} from "@/app/(logedIn)/events/types";





export function EventForm() {

  const eventForm = useForm<EventFormSchemaT>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      title: "",
      description: "",
      date: undefined,
    }
  })

  const submitEvent = async (values: EventFormSchemaT) => {

    console.log("values:", values)
    await saveNewEvent(values)
  }



  return (

    <Form {...eventForm}>
      <form onSubmit={eventForm.handleSubmit(submitEvent)} className="fflex-col gap-4">

        <FormField control={eventForm.control} name="title" render={ ({ field }) => (
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input placeholder="Title..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}/>

        <FormField control={eventForm.control} name="description" render={ ({ field }) => (
          <FormItem>
            <FormLabel>Descrição</FormLabel>
            <FormControl>
              <Textarea placeholder="Descreva o evento..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}/>

        <FormField control={eventForm.control} name="date" render={ ({ field }) => (
          <FormItem>
            <FormLabel>Date</FormLabel>
            <FormControl>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className={cn("w-full justify-start gap-2 font-normal",
                                                        !(field.value) && "text-muted-foreground")}>
                    <CalendarDays size="18"/>
                    {field.value ? format(field.value, "dd/MM/yyyy"): <p>Data</p>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar mode="single" selected={field.value} onSelect={field.onChange}
                            initialFocus disabled={(date) => date < new Date()} />
                </PopoverContent>
              </Popover>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}/>

        <Button variant="default" type="submit" className="w-full mt-6">salvar novo evento</Button>

      </form>
    </Form>

  )
}





















