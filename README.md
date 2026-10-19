# matmul / a systems field guide

A local, offline tutorial with one complete investigation. Plain HTML/CSS/JavaScript, a Node static server, and an independent Go lab. No dependencies, accounts, build step, or network services.

## Open the tutorial

From this directory, run `npm run dev`, then open **http://localhost:8080**. Node 18+ is sufficient. Keep the server running in your terminal; Ctrl-C stops it. There is no production build: `web/` is the complete static application.

## Your Go workspace

Implement the TODO in `experiments/matmul.go`, guided by Lesson 1. Then run:

```sh
go test ./experiments -v
go test ./experiments -run '^$' -bench BenchmarkMultiply -benchmem -count=5
```

The provided kernel deliberately panics until you implement it. No multiplication solution is supplied. Tests and benchmarks compile before you start, but correctness tests intentionally fail. The existing root `main.go` is preserved.

## Checks

```sh
npm test
npm run check
go test ./experiments -run '^$'
```

The last command checks Go scaffold compilation without invoking the unfinished kernel. Browser tests are not included; use the manual checklist in `tests/manual.md`.

## Keep your notebook

Predictions, checkboxes, measurements, reflections, and completion live in browser localStorage for this origin. Export/import JSON from the top bar. Import replaces the current journal after confirmation. No browser-to-terminal integration; paste your actual benchmark output to chart it. Changing browsers or ports creates a separate notebook. Export backups regularly.

## Files

- `web/`: lesson, visual models, interaction, local journal.
- `experiments/`: student Go kernel, correctness tests, repeated-buffer benchmark.
- `curriculum/`: future investigation outlines.
- `tests/`: mathematical model tests and manual browser checks.
- `server.mjs`: loopback-only static server, with path containment.

Only Lesson 1 is complete. Cache, SIMD, tiling, and parallel simulations are intentionally deferred. Address diagrams are hypothetical, not hardware measurements. The benchmark supplies sizes 32, 64, 128; it never inserts results into the browser automatically.
