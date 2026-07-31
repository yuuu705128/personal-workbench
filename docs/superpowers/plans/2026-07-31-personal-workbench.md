# Personal Workbench Implementation Plan

> **For agentic workers:** Implement task-by-task with test-first checks.

**Goal:** Build an installable, offline-first personal action workbench for Android.

**Architecture:** React PWA with local IndexedDB persistence. The daily schedule is a small pure domain module so it can be tested independently from the interface.

**Tech Stack:** React, TypeScript, Vite, Vitest, Dexie, GitHub Pages.

## Global Constraints

- Mobile-first, deep-green drawer navigation and light-green rounded cards.
- No account, backend, scraping, bulk messaging, or cloud sync.
- Video files are never copied or hosted; only public source links are stored.
- Data is local and exportable as JSON.

## Delivery Tasks

1. Implement and test the weekday task generator and streak calculation.
2. Add IndexedDB persistence, weekly money allocation and backup import/export.
3. Build the six mobile screens and task completion interactions.
4. Add CET-6 flashcards, video learning flow and curated source links.
5. Add PWA install/offline assets, GitHub Pages workflow and mobile visual checks.
