"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const searchParama = useSearchParams();
  const pathName = usePathname();
  console.log("bar", loading, searchParama.toString(), pathName, router);
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);
    window.onpopstate = () => {
      handleStart();
      handleComplete();
    };
    return () => {
      window.onpopstate = null;
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: loading ? "100%" : 0,
        height: 2,
        backgroundColor: "blue",
        transition: "width 0.3s ease-out",
        zIndex: 9999,
      }}
    />
  );
}

export default Loading;
