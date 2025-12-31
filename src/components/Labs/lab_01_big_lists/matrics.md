## Performance Metrics

### Before Optimization

- Paint: **8694.7 ms**
- Renders: **14**
- Phase: nested-update
- Actual Time: **768.3 ms**
- Base Time: **2189.2 ms**

Observations:
- Every state change caused thousands of DOM nodes to be painted
- UI became unresponsive during updates

---

### After Optimization (TanStack Virtual)

- Paint: **265.6 ms**
- Renders: **10**
- Phase: nested-update
- Actual Time: **5.7 ms**
- Base Time: **26.5 ms**

Observations:
- Only visible rows were rendered
- Drastically reduced DOM workload
- UI interactions became instant

---

## Why TanStack Virtual?

TanStack Virtual provides fine-grained control over list virtualization
without coupling UI logic to a specific component abstraction.

Benefits:
- Framework-agnostic design
- Minimal DOM footprint
- High performance for large datasets
- Works seamlessly with custom layouts

This makes it suitable for complex dashboards and data-heavy applications.


### Summary

Using **TanStack Virtual**, render workload was reduced by more than **95%**,
resulting in significantly improved paint times and overall responsiveness.
