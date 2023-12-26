"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

function VisitButton({ url }: { url: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const shareLink = `${window.location.origin}/submit/${url}`;
  return (
    <Button
      className="w-[200px]"
      onClick={() => {
        window.open(shareLink, "_blank");
      }}
    >
      Visit
    </Button>
  );
}

export default VisitButton;
