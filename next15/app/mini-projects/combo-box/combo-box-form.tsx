"use client"

import React from "react"

import ComboBox from "@/components/combo-box"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useQuery } from "@tanstack/react-query"

type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

const FormSchema = z.object({
  username: z.number().refine(v => v > 0, {
    message: "Please select an option ",
  }),
})

export default function ComboBoxForm() {
  const userData = useQuery({
    queryKey: ["users"],
    queryFn: async (): Promise<User[]> => {
      return fetch("https://jsonplaceholder.typicode.com/users").then(res =>
        res.json()
      )
    },
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: 0,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const user = userData?.data?.find(user => user.id === data.username)
    toast(JSON.stringify(user, null, 2))
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 lg:w-96"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <ComboBox
                  options={userData?.data ?? []}
                  form={form}
                  field={field}
                  label="username"
                  value="id"
                  loading={userData.isLoading}
                  defaultValue={"0"}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
