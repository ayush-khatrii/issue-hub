"use client"
import { Button, Input, Tab, Tabs } from "@nextui-org/react";
import { MdEditor, MdPreview } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { useForm, Controller } from "react-hook-form"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { z } from "zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "@/components/ErrorMessage";

type Inputs = z.infer<typeof createIssueSchema>;

export default function IssueForm({ id }: { id?: number }) {
  const router = useRouter();
  const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm<Inputs>({
    resolver: zodResolver(createIssueSchema),
  });


  return (
    <>
      <section className="my-10 px-5">
        <form action="" onSubmit={handleSubmit(async (data) => {
          console.log(data);
          try {
            if (id) {
              await fetch(`/api/issues/${id}`, {
                method: "PATCH",
                body: JSON.stringify(data),
              });
              toast.success("Issue updated successfully");
            }
            else {
              await fetch("/api/issues", {
                method: "POST",
                body: JSON.stringify(data),
              });
              toast.success("Issue created successfully");
            }
            router.push("/issues");
            router.refresh();
          } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
          }
        })}>
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-base font-bold mb-2">Issue Title</h1>
              <Input
                type="text"
                variant="bordered"
                placeholder="Issue Title"
                radius="sm"
                labelPlacement="outside"
                size={"md"}
                {...register("title")}
              />
              {errors.title && <ErrorMessage>
                {errors.title.message}
              </ErrorMessage>}
            </div>
            <div className="">
              <h1 className="text-base font-bold mb-2">Issue Description</h1>
              <Tabs>
                <Tab key="description" title="Write">
                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => <MdEditor editorId={"editor-only"} modelValue={field.value} className="rounded-md" language="en-US" onChange={(value) => field.onChange(value)} />}
                  />
                  {errors.description &&
                    <ErrorMessage>
                      {errors.description.message}
                    </ErrorMessage>
                  }
                </Tab>
                <Tab key="preview" title="Preview">
                  <div className="w-full h-full border">
                    <Controller
                      name="description"
                      control={control}
                      render={
                        ({ field }) => <MdPreview editorId={"preview-only"} modelValue={field.value} className="rounded-md" language="en-US" />
                      }
                    />
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
          <Button color="danger" isLoading={isSubmitting} radius="sm" className="w-full" type="submit">
            {
              id ? "Update Issue" : "Create New Issue"
            }
          </Button>
        </form>
      </section >
    </>
  )
}

