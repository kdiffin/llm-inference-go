package experiments

import (
	"fmt"
	"reflect"
	"testing"
)

func TestMultiply(t *testing.T) {
	cases := []struct {
		name       string
		m, n, p    int
		a, b, want []float64
	}{
		{"rectangle", 2, 3, 2, []float64{1, 2, 3, 4, 5, 6}, []float64{7, 8, 9, 10, 11, 12}, []float64{58, 64, 139, 154}},
		{"single", 1, 1, 1, []float64{-3}, []float64{2}, []float64{-6}},
		{"wide", 1, 2, 3, []float64{2, -1}, []float64{1, 2, 3, 4, 5, 6}, []float64{-2, -1, 0}},
		{"tall", 3, 2, 1, []float64{1, 0, 0, 1, -1, 2}, []float64{3, 4}, []float64{3, 4, 5}},
		{"zero", 1, 2, 1, []float64{0, 0}, []float64{3, 4}, []float64{0}},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			beforeA := append([]float64(nil), tc.a...)
			beforeB := append([]float64(nil), tc.b...)
			dst := make([]float64, tc.m*tc.p)
			for i := range dst {
				dst[i] = 99
			}
			for repeat := 0; repeat < 2; repeat++ {
				Multiply(dst, tc.a, tc.b, tc.m, tc.n, tc.p)
				if !reflect.DeepEqual(dst, tc.want) {
					t.Fatalf("got %v; want %v", dst, tc.want)
				}
			}
			if !reflect.DeepEqual(tc.a, beforeA) || !reflect.DeepEqual(tc.b, beforeB) {
				t.Fatal("inputs were modified")
			}
		})
	}
}

var resultSink float64

func BenchmarkMultiply(b *testing.B) {
	for _, size := range []int{32, 64, 128} {
		b.Run(fmt.Sprintf("N=%d", size), func(b *testing.B) {
			a := make([]float64, size*size)
			right := make([]float64, size*size)
			dst := make([]float64, size*size)
			for i := range a {
				a[i] = float64(i%7 - 3)
				right[i] = float64(i%5 - 2)
			}
			b.ReportAllocs()
			b.ResetTimer()
			for i := 0; i < b.N; i++ {
				Multiply(dst, a, right, size, size, size)
			}
			b.StopTimer()
			resultSink = dst[len(dst)-1]
		})
	}
}
