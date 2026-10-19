# Investigation sequence

Lesson 1 is authored in `web/index.html`; its models are in `web/model.js` and interaction logic in `web/app.js`.

1. Meaning → memory → first Go kernel. Predict the shape, trace dot products and addresses, implement, validate, measure, reflect.
2. Outline: same arithmetic, different traversal. Predict before timing loop orders. Do not give locality conclusions before observations.
3. Outline: audit a benchmark. Equivalent work, setup exclusion, allocations, repeated measurements, compiler effects, environment.
4. CPU investigations: cache lines, hierarchy, locality, latency/bandwidth; profiles and optional perf. Introduce a clearly qualified cache model here.
5. Optimization investigations: tiling, register reuse, instruction-level parallelism, SIMD, Roofline; optional Go/C comparison.
6. Parallel investigations: ownership, goroutines, synchronization, contention, false sharing, scaling.
7. ML investigations: tensors, precision, batching, quantization, compute/memory limits, minimal runtime design.

Every new lesson should follow: mystery, intuition, prediction, challenge, real experiment, notebook, investigation, qualified mechanism, next mystery. No completed student kernels and no invented measurements.
