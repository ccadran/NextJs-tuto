import React, { PropsWithChildren } from "react";

export default function LayoutBoard({
  params,
  children,
}: PropsWithChildren<{
  params: { boardId: string };
}>) {
  return (
    <div>
      <h2>Boards ({params.boardId})</h2>
      {children}
    </div>
  );
}
