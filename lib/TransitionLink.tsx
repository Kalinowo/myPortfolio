"use client";
import React, { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function TransitionLink({ children, href, ...props }: TransitionLinkProps) {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");
    router.push(href);
    body?.classList.add("page-transition");
    await sleep(500);
    body?.classList.remove("page-transition");
    await sleep(500);
  };
  return (
    <Link onClick={handleTransition} href={href} {...props}>
      {children}
    </Link>
  );
}

export default TransitionLink;
