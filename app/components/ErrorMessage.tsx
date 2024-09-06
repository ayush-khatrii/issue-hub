import { PropsWithChildren } from "react";

export default function ErrorMessage({ children }: PropsWithChildren) {
  if (!children) return null;
  return (
    <p className="text-red-600 text-lg my-2">{children}</p>
  )
}
