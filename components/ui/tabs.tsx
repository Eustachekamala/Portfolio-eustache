"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "../../lib/utils";

function Tabs(props: TabsPrimitive.TabsProps) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", (props as any).className)}
      {...props}
    />
  );
}

function TabsList(props: TabsPrimitive.TabsListProps) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex h-auto rounded-md p-1 text-primary",
        (props as any).className
      )}
      {...props}
    />
  );
}

function TabsTrigger(props: TabsPrimitive.TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap text-white rounded-lg p-3 text-base font-medium ring-offset-white transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-accent-500 data-[state=active]:text-primary data-[state=active]:font-bold data-[state=active]:shadow-sm",
        (props as any).className
      )}
      {...props}
    />
  );
}

function TabsContent(props: TabsPrimitive.TabsContentProps) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("min-h-[480px] flex-1 outline-none", (props as any).className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
