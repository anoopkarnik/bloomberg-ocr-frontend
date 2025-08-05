// app/page.tsx

import { Suspense } from "react";
import Home from "@/components/Home"; // or wherever Home is defined

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}
