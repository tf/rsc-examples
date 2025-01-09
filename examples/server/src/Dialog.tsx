"use client";

import { ReactNode, useRef, lazy, Suspense } from "react";

const ExpensiveThing = lazy(() => import("./ExpensiveThing"));

export function Dialog({ trigger, children }: { trigger: ReactNode, children: ReactNode }) {
  let ref = useRef<HTMLDialogElement | null>(null);
  return (
    <>
      <button onClick={() => ref.current?.showModal()}>{trigger}</button>
      <dialog ref={ref} onSubmit={() => ref.current?.close()}>
        <Suspense fallback={<div>Loading</div>}>
          <ExpensiveThing />
        </Suspense>


        {children}
      </dialog>
    </>
  );
}
