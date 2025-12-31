## Context

This application renders a large, scrollable list of items along with
a search input that filters the list based on user input.

The list is intended to simulate real-world scenarios such as dashboards,
tables, or activity feeds that contain thousands of rows.

---

## Observed Issue

When typing into the search input or interacting with the UI,
the application became noticeably slow.

Symptoms observed:
- Input lag while typing
- Delayed UI updates
- Janky scrolling behavior

These issues worsened as the list size increased.

---

## Performance Symptoms

From a technical perspective:

- Every state update triggered a re-render of the entire list
- Thousands of list row components were mounted and painted repeatedly
- Expensive rendering work occurred even when most rows were off-screen

This resulted in excessive DOM work and blocked the main thread.

---

## Profiling Findings

Using React DevTools Profiler:

- Commit durations were significantly high
- Paint times exceeded several seconds
- Most render time was spent mounting list row components
- Updates occurred during nested render phases

These findings confirmed that rendering scale was the primary bottleneck.

---

## Scope of the Problem

At this stage:

- No optimization techniques were applied
- The focus was strictly on identifying and measuring the performance issue
- The goal was to isolate the cause of slow renders before introducing any changes
