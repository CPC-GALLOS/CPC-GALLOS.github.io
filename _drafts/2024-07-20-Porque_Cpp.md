---
title: Porque C++ 
description: Porque usamos C++ en lugar de otros lenguajes como Rust, python o java. 
date: 2024-07-20 9:00:00 +/-TTTT
categories: [Club]
author: ArielParra 
tags: [C++]
pin: true
mermaid: false
image:
---


## ¿Qué es C++?

C++ un lenguaje compilado de alto nivel inventado por Bjarne Stroustrup en 1979 para extender la funcionalidad de C, incorporando el paradigma de la programación orientada a objetos a través de clases. Su ventaja sobre otros lenguajes radica en su velocidad y en la amplia funcionalidad gracias a funciones y algoritmos integrados en la librería estandard STL . Está entre en los 3 lenguajes más populares según [TIOBE](https://www.tiobe.com/tiobe-index/) 


## Qué buscamos de un lenguaje para las competencias

1. velocidad de ejecución 
1. velocidad de E/S
1. funciones, algoritmos, estructuras de datos en la libreria estandart

## Lenguajes permitidos en el ICPC


| Lenguaje | Ventajas | Desventajas |
| -------- | -------- | ----------- |
| **Java** | - Gestión de memoria automática <br> - Gran cantidad de librerías | - Consumo alto de memoria  <br> - E/S lenta <br> - Sintaxis extensa y por clases |
| **Kotlin** | - Sintaxis moderna y concisa <br> - Interoperabilidad con Java | - Comunidad y recursos más limitados <br> |
| **Python3** | - Sintaxis simple y legible <br> - Gran cantidad de librerías | - Lento en comparación con lenguajes compilados <br> - Gestión de memoria no tan eficiente |
| **C** | - Muy rápido y eficiente en términos de rendimiento <br> - Soporta el uso de Macros y Alias | - Manejo de memoria manual <br> - Sin varias estructuras de datos |
| **C++** | - Muy rápido y eficiente <br> - Amplia biblioteca estándar STL <br> - Interoperabilidad con C | - Complejidad en la gestión de memoria <br> - Curva de aprendizaje pronunciada <br> |

## Resultados de velocidad y consumo por lenguaje
####  por Pereiraa, R. et al.

---

<div class="mermaid" style="text-align: center;">
xychart-beta
    title "Velocidad por Lenguaje"
    x-axis ["C", "C++", "Rust", "Java", "Python"]
    y-axis "Time (ms)"
    bar [1.00, 1.56 , 1.04, 1.89, 71.90]
    line [1.00, 1.56 , 1.04, 1.89, 71.90]
</div>

---

<div class="mermaid" style="text-align: center;">
xychart-beta
    title "Consumo Energético por Lenguaje"
    x-axis ["C", "C++", "Rust", "Java", "Python"]
    y-axis "Consumo Energético (J)"
    bar [1.00, 1.34, 1.03, 1.98, 75.88]
    line[1.00, 1.34, 1.03, 1.98, 75.88]
</div>

---

<div class="mermaid" style="text-align: center;">
xychart-beta
    title "Consumo de Memoria por Lenguaje"
    x-axis ["C", "C++", "Rust", "Java", "Python"]
    y-axis "Memory (Mb)"
    bar [1.17, 1.34, 1.54, 6.01, 2.80]
</div>

## Ranking de velocidad por lenguaje ejecutando el algoritmo de la criba de Eratóstenes
#### por Plummer, D.

---

<div class="mermaid" style="text-align: center;">
xychart-beta
    title "Criba de Eratóstenes"
    x-axis ["C", "C++", "Rust", "Java", "Kotlin", "Python"]
    y-axis "Aparición en R  anking"
    bar [3, 1, 2, 4, 5, 6]
</div>

## Comparación de librerias estandar

| Lenguaje | Colecciones | Algoritmos |
|----------|-------------|------------|
| **C**    | Arreglos (vectores) y cadenas. Sin estructuras avanzadas | No incluye algoritmos, la implementación es manual. |
| **C++**   | `vector`, `list`, `map`, `set`, `stack`, `queue` (STL). | `sort`, `find`, `binary_search`, entre otros. |
| **Rust**  | `Vec`, `LinkedList`, `HashMap`, `BTreeMap`, `HashSet`, `BTreeSet`. No tiene `stack` ni `queue` específicos, pero se pueden implementar. | `sort`, `iter`, `filter`, `map`, entre otros. |
| **Java**  | `ArrayList`, `LinkedList`, `HashMap`, `TreeMap`, `HashSet`, `TreeSet`, `Stack`, `PriorityQueue`. | `sort`, `binarySearch`, `shuffle`, entre otros. |
| **Kotlin**| `List`, `MutableList`, `Map`, `MutableMap`, `Set`, `MutableSet`. No tiene `stack` ni `queue` específicos, pero se pueden implementar. | `sort`, `filter`, `map`, `reduce`, entre otros. |
| **Python3** | `list`, `tuple`, `dict`, `set`, `frozenset`, `deque` (para `stack` y `queue`). | `sorted`, `map`, `filter`, `reduce`, `heapq`, `bisect`, entre otros. |

## Comparación de Sintaxis para E/S rápida

## C

```c
#include <stdio.h>
int main() {
    int n;
    scanf("%i", &n);
    printf("%i",n); 
    return 0;
}

```

## C con buffers

```c
#include <stdio.h>
int main() {
    char buffer[1000];
    int n;
    snprintf(buffer, sizeof(buffer), "%d\n", n);
    fputs(buffer, stdout); 
    return 0;
}

```

## C++
```c++
#include <bits/stdc++.h>
using namespace std;
int main(){
    ios::sync_with_stdio(0); cin.tie(0);
    int n; cin>> n;
    cout << n;
    return 0;
}

```

## Rust

```rust
use std::io::{self, BufRead, Write, BufWriter};
fn main() {
    let stdin = io::stdin();
    let stdout = io::stdout();
    let mut stdout = BufWriter::new(stdout.lock());
    let mut input = String::new();
    stdin.lock().read_line(&mut input).unwrap();
    let n: i32 = input.trim().parse().unwrap();
    writeln!(stdout, "{}", n).unwrap();
}
```


## Java: con `BufferedReader` y `PrintWriter`

```java
import java.io.*;
import java.util.*;
public class Main {
	public static void main(String[] args) throws Exception {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            PrintWriter pw = new PrintWriter(System.out);
            StringTokenizer st = new StringTokenizer(br.readLine());
            int N = Integer.parseInt(st.nextToken()); 
            pw.println(N);
            pw.close();
	}
}
```

## Java: más veloz con `BufferedReader` directo de `InputStream` 

```java
import java.io.*;
import java.util.*;

class FastIO extends PrintWriter {
	private InputStream stream;
	private byte[] buf = new byte[1 << 16];
	private int curChar;
	private int numChars;
	public FastIO() { this(System.in, System.out); }
	public FastIO(InputStream i, OutputStream o) { super(o); stream = i; }
	public FastIO(String i, String o) throws IOException { 
        super(new FileWriter(o)); stream = new FileInputStream(i); }
	private int nextByte() { 
		if (numChars == -1) { throw new InputMismatchException(); }
		if (curChar >= numChars) { curChar = 0;
			try { numChars = stream.read(buf); }
            catch (IOException e) { throw new InputMismatchException(); }
			if (numChars == -1) { return -1; } }
		return buf[curChar++]; }
	public String next() { int c; 
		do { c = nextByte(); } while (c <= ' ');
		StringBuilder res = new StringBuilder();
		do {
			res.appendCodePoint(c);
			c = nextByte();
		} while (c > ' ');
		return res.toString();
	}
	public int nextInt() {  
		int c;
		do { c = nextByte(); } while (c <= ' ');
		int sgn = 1;
		if (c == '-') { sgn = -1; c = nextByte(); }
		int res = 0;
		do { 
			if (c < '0' || c > '9') { throw new InputMismatchException(); }
			res = 10 * res + c - '0'; c = nextByte();
		} while (c > ' ');
		return res * sgn;
	}
	public double nextDouble() { return Double.parseDouble(next()); }
}
public class Main {
	public static void main(String[] args) throws Exception {
		FastIO io = new FastIO();
        int N = io.nextInt(); io.println(N); 
		io.close();
	}
}
```

## Kotlin

```kotlin
import java.io.PrintWriter
import java.util.*
@JvmField val INPUT = System.`in`
@JvmField val OUTPUT = System.out
@JvmField val _reader = INPUT.bufferedReader()
fun readLine(): String? = _reader.readLine()
fun readLn() = _reader.readLine()!!
fun readInt() = read().toInt()
fun readDouble() = read().toDouble()
fun readLong() = read().toLong()
fun readStrings(n: Int) = Array(n) { read() }
fun readLines(n: Int) = Array(n) { readLn() }
fun readIntArray(n: Int) = IntArray(n) { read().toInt() }
fun readDoubleArray(n: Int) = DoubleArray(n) { read().toDouble() }
fun readLongArray(n: Int) = LongArray(n) { read().toLong() }
fun main() { 
    val n = readInt()
    println(n)
}

```

## Python
```py
import sys
read = sys.stdin.readline
write = sys.stdout.write

def main():
    n = int(read().strip())
    write(f"{n}\n")

if __name__ == "__main__":
    main()
```

## Referencias

- akhaleqh. (2024). *Rust vs C++ – Will Rust Replace C++ in Future*. Recuperado de <https://www.geeksforgeeks.org/rust-vs-c/>
- Behery, A. (2023). *Python VS C++ Time Complexity Analysis*. Recuperado de <https://www.freecodecamp.org/news/python-vs-c-plus-plus-time-complexity-analysis/>
- conaticus. (2024). *Rust vs C++* [video]. Recuperado de <https://youtu.be/WBhTDoZxpCk?si=iBzTj5IK3P9aFYch>
- Coursera. (2023). *Python vs. C++: Which to Learn and Where to Start*. Recuperado de <https://www.coursera.org/articles/python-vs-c>
- Dave's Garage. (2021). *E01: What is the FASTEST Computer Language? 45 Languages Tested!* [video]. Recuperado de <https://youtu.be/tQtFdsEcK_s?si=LHBb6MYXniUwGGnB>
- DevExplain. (2023). *Rust vs C++ | Which is Better?* [video]. Recuperado de <https://youtu.be/qhXu2Q_Fq5I?si=q_DTLlzgSeMmtXUg>
- fasterthanlime. (2023). *10 Reasons Not To Use Rust (The Whole Truth)* [video]. Recuperado de <https://youtu.be/ul9vyWuT8SU?si=pJNz_i3WzJPnM9Rv>
- fasterthanlime. (2023). *C++ vs Rust: which is faster?* [video]. Recuperado de <https://youtu.be/VMpSYJ_7aYM?si=IjIDgD2bQrA6lLNw>
- GeeksforGeeks. (2024). *C++ Programming Language*. Recuperado de <https://www.geeksforgeeks.org/c-plus-plus/>
- ICPC. (2024). *2024 ICPC World Finals Rules - Astana*. Recuperado de <https://icpc.global/worldfinals/rules>
- Jecky. (2024). *Rust vs C++: Top Differences*. Recuperado de <https://www.geeksforgeeks.org/rust-vs-cpp/>
- Klunk, E. (2015). *Why does the Java programming language suck so bad?* [video]. Recuperado de <https://youtu.be/lBF1SOQ1-xw?si=8MVHRzVqBrouWbVe>
- Kotlin. (2023). *Kotlin for competitive programming*. Recuperado de <https://kotlinlang.org/docs/competitive-programming.html>
- Low Level Learning. (2022). *the TRUTH about C++ (is it worth your time?)* [video]. Recuperado de <https://youtu.be/q1ZmFc-sqNc?si=yzDhH3dhqDl5NSmJ>
- Low Level Learning. (2023). *C is 50 Years Old. Should You Learn Rust?* [video]. Recuperado de <https://youtu.be/NtYHC1KNGoc?si=H7MBZAnGAPLraSOc>
- Mahrsee, R. (2022). *Fast I/O in Java in Competitive Programming*. Recuperado de <https://www.geeksforgeeks.org/fast-io-in-java-in-competitive-programming/>
- No Boilerplate. (2022). *Rust is not a faster horse* [video]. Recuperado de <https://youtu.be/4YU_r70yGjQ?si=zw34i1CI0CEjaggS>
- Pandey, U. (2022). *Java Generics to Code Efficiently in Competitive Programming*. Recuperado de <https://www.geeksforgeeks.org/java-generics-to-code-efficiently-in-competitive-programming/>
- Pereiraa, R. et al. (2017). *Energy Efficiency across Programming Languages*. Recuperado de <https://greenlab.di.uminho.pt/wp-content/uploads/2017/10/sleFinal.pdf>
- Pereiraa, R. et al. (2021). *Ranking Programming Languages by Energy Efficiency*. Recuperado de <https://www.smallake.kr/wp-content/uploads/2022/09/scp21.pdf>
- Plummer, D. (2024). *Primes report generated by davepl at 3/8/2024 03:21:28*. Recuperado de <https://plummerssoftwarellc.github.io/PrimeView/report?id=5740&hi=False&hf=False&hp=False&fi=&fp=&fa=&ff=&fb=&tp=False&sc=pp&sd=True>
- Programming Memes. (2022). *Python vs C++ vs C# Speed Comparison* [video]. Recuperado de <https://youtu.be/u7fpOY29Gxc?si=ph3fiA6w0eVe8NYH>
- Qi, B. & Chen, N. (s.f.). *Fast Input & Output*. Recuperado de <https://usaco.guide/general/fast-io?lang=cpp>
- Qi, B. & Chen, N. (s.f.). *Fast Input & Output*. Recuperado de <https://usaco.guide/general/fast-io?lang=java>
- Qi, B. & Chen, N. (s.f.). *Fast Input & Output*. Recuperado de <https://usaco.guide/general/fast-io?lang=py>
- Sanghvi, N. (2022). *Why C++ is best for Competitive Programming?*. Recuperado de <https://www.geeksforgeeks.org/why-cpp-is-best-for-competitive-programming/>
- Spheniscine. (2019). *Notes on using Kotlin for competitive programming*. Recuperado de <https://codeforces.com/blog/entry/71089>
- The builder. (2022). *Python vs C++ Speed Comparison* [video]. Recuperado de <https://www.youtube.com/watch?v=VioxsWYzoJk>
- thekushalghosh. (2020). *Fast I/O for Competitive Programming in Python*. Recuperado de <https://www.geeksforgeeks.org/fast-i-o-for-competitive-programming-in-python/>
- Tom Rocks Maths. (2019). *Why is Kotlin better than Java?* [video]. Recuperado de <https://youtu.be/4-2oRI4OrUg?si=obVRsyXSXowZNe_X>
- Wikipedia Editors. (2024). *Criticism of Java*. Recuperado de <https://en.wikipedia.org/wiki/Criticism_of_Java>
- JetBrains. (2020). *Kotlin for Competitive Programming. Interview with Nick Johnson, ICPC Participant* [video]. Recuperado de <https://youtu.be/eykFs9jBznc?si=SK9e-1ReuMp1MTZb>
- Kumar,A. (2024). *Top 5 most energy efficient coding languages*. Recuperado de <https://wireunwired.com/top-5-most-energy-efficient-coding-languages/>