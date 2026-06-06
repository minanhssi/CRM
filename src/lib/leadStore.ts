"use client";

import { useSyncExternalStore } from "react";
import type { Lead } from "./leadTypes";
import { initialLeads } from "./leadData";

/**
 * Tiny external store so the Kanban board and the Detail/Edit route share one
 * mutable lead list across full-page navigation — without adding a dependency.
 * Mirrors the project's local-state pattern but lifted to module scope.
 */
let leads: Lead[] = initialLeads;
const listeners = new Set<() => void>();

function emit() {
  for (const l of listeners) l();
}
function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
function getSnapshot() {
  return leads;
}

export function useLeads(): Lead[] {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

export function getLead(id: string): Lead | undefined {
  return leads.find((l) => l.id === id);
}

export function addLead(lead: Lead) {
  leads = [lead, ...leads];
  emit();
}

export function updateLead(id: string, patch: Partial<Lead>) {
  leads = leads.map((l) => (l.id === id ? { ...l, ...patch } : l));
  emit();
}

export function deleteLead(id: string) {
  leads = leads.filter((l) => l.id !== id);
  emit();
}

let seq = initialLeads.length;
export function newLeadId(): string {
  seq += 1;
  return `L-${String(seq).padStart(4, "0")}`;
}

/** A blank lead used to seed the create form. */
export function emptyLead(id: string): Lead {
  return {
    id,
    parentName: "", phone: "", email: "", cccd: "", address: "",
    source: "", origin: "", campaign: "", tags: [], note: "", consultNote: "",
    studentName: "", grade: "", school: "", dob: "", personality: "",
    desiredBranch: "", parentGoal: "", interestedCourse: "", centerNote: "",
    resultEmail: "", studentNote: "",
    stage: "unprocessed",
    subStatus: { code: "L0", label: "Chưa liên hệ" },
    courseTags: [], branch: "", owner: "Minh Anh",
  };
}
