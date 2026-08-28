---
title: Plantilla
description: Plantilla oficial del club Γα=Ω5 para programación competitiva en C++, alineada con el Notebook TRD e ICPC.
date: 2024-07-19 9:00:00 +/-TTTT
categories: [Club]
author: ArielParra 
tags: [recomendaciones, C++]
pin: true
mermaid: false
image: /assets/img/posts/Plantilla.png
---

__Tabla de Contenidos:__
* TOC
{:toc} 

# Plantilla Corta

Para problemas sencillos, rondas rápidas o cuando se busca la mínima cantidad de líneas sin macros ni librerías adicionales:

```cpp
#include <bits/stdc++.h>
using namespace std;

void solve() {
    return;
}

int main() {
    ios::sync_with_stdio(0); cin.tie(0);
    int tc = 1;
    // cin >> tc;
    while (tc--) solve();
    return 0;
}
```

---

# Plantilla Larga (Oficial de Competencia)

A continuación presentamos la plantilla estándar y completa del club, la cual se encuentra disponible y versionada en el repositorio de GitHub [CPC-GALLOS/Plantilla](https://github.com/CPC-GALLOS/Plantilla). Está diseñada para maximizar la velocidad de escritura, evitar errores de compilación comunes y proporcionar estructuras de alto rendimiento alineadas con nuestro [ICPC Team Reference Document (Notebook TRD)](https://github.com/CPC-GALLOS/Notebook):

```cpp
// _autor_
// link y/o nombre del problema
#include <bits/stdc++.h>
#include <ext/pb_ds/assoc_container.hpp> // PBDS: estructuras de datos basadas en políticas
#include <ext/pb_ds/tree_policy.hpp>     // Requerido para estadísticas de orden (ordered_set)
using namespace std;
using namespace __gnu_pbds; // PBDS: ordered_set & gp_hash_table

/* TLE Pragmas & Advertencias (descomentar con cuidado):
#pragma GCC optimize("O3,unroll-loops")          // O3 optimiza sin fast-math (que rompe signos en floats: -0.0+0.0=-0)
#pragma GCC target("avx2,bmi,bmi2,lzcnt,popcnt") // SIMD + operaciones de bits en HW (bmi/lzcnt/popcnt)
*/

using ll = long long; using ull = unsigned long long; using ld = long double;
using pii = pair<int, int>; using pll = pair<ll, ll>;

// --- PBDS Policy-Based Data Structures ---
// 1. ordered_set: find_by_order(k) (k-ésimo menor, 0-idx) & order_of_key(x) (cnt < x) en O(log N)
template <typename T>
using ordered_set = tree<T, null_type, less<T>, rb_tree_tag, tree_order_statistics_node_update>;
// Truco para ordered_multiset (duplicados permitidos): usar pair<T, int> con ID único

// 2. gp_hash_table: Tabla hash de direccionamiento abierto 3x-5x más rápida que unordered_map
// gp_hash_table<int, int> fast_map;

#define endl '\n'
#define all(x) (x).begin(), (x).end()
#define rall(x) (x).rbegin(), (x).rend()
#define gs(n) ((n * (n + 1)) >> 1)
#define pb push_back   // Seguro con llaves {a, b}; evita llamadas a constructores explícitos
#define eb emplace_back // Construcción in-place v.eb(a, b) sin copias temporales
#define F first
#define S second
#define sz(x) (int)(x).size()
#define yn(x) (cout << ((x) ? "YES\n" : "NO\n"))
#define dbg(...) cerr<<"LINE("<<__LINE__<<")->["<<#__VA_ARGS__<<"]: ["<<(__VA_ARGS__)<<"]\n";

// Temporizador de ejecución (para benchmarking local):
// auto start_time = chrono::high_resolution_clock::now();
// auto duration = chrono::duration_cast<chrono::milliseconds>(chrono::high_resolution_clock::now() - start_time).count();

void solve() {
    return; // Lógica de solución para cada caso de prueba
}

int main() {
    ios::sync_with_stdio(0); cin.tie(0);
    // freopen("in.txt", "r", stdin); freopen("out.txt", "w", stdout);
    int tc = 1;
    // cin >> tc;
    while (tc--) solve();
    return 0;
}
```

> La plantilla está disponible en el repositorio [CPC-GALLOS/Plantilla](https://github.com/CPC-GALLOS/Plantilla). ¡Recuerda sugerir tus mejoras a través de un Pull Request!

---

# Explicación y Justificación de la Plantilla Larga

Cada línea de nuestra plantilla ha sido cuidadosamente seleccionada con base en análisis de ensamblador, benchmarks en jueces virtuales como [Codeforces](https://codeforces.com/) y reglamentos del [ICPC](https://icpc.global/worldfinals/rules). A continuación se desglosa el propósito y la mecánica interna de cada componente.

---

## 1. La Cabecera y Directivas del Compilador

### Inclusión Universal: `#include <bits/stdc++.h>`

La cabecera `<bits/stdc++.h>` es un encabezado precompilado de GNU GCC que incluye todas las bibliotecas de la STL de C++ ([GNU stdc++.h](https://gcc.gnu.org/onlinedocs/gcc-4.8.0/libstdc++/api/a01541_source.html)): `<iostream>`, `<vector>`, `<algorithm>`, `<numeric>`, `<cmath>`, `<string>`, `<queue>`, `<stack>`, `<set>`, `<map>`, `<bitset>`, entre otras ([Govil, 2022](https://www.geeksforgeeks.org/bitsstdc-h-c/)).

> `<bits/stdc++.h>` es un archivo específico de la implementación de GCC y Clang. No forma parte del estándar ISO C++, por lo que en entornos que usan MSVC (Visual Studio tradicional) o Xcode sin GCC puede requerir configuración adicional. En todos los jueces virtuales oficiales (ICPC, Codeforces, AtCoder, CSES) GCC/Clang está soportado y es la opción recomendada.
{: .prompt-info }

Su ventaja en competencia es inmensa: ahorra el tiempo de memorizar e incluir manualmente decenas de encabezados y previene errores de compilación por librerías faltantes. El leve incremento en el tiempo de compilación no afecta en absoluto el tiempo de ejecución en el juez virtual.

---

### Policy-Based Data Structures (PBDS)

La plantilla incorpora las bibliotecas de extensiones avanzadas de GCC:

```cpp
#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/tree_policy.hpp>
using namespace __gnu_pbds;
```

#### 1. `ordered_set` (Árbol Rojo-Negro Aumentado)
La STL tradicional (`std::set`) no permite saber qué elemento ocupa la posición $k$ ni cuántos elementos son menores a un valor $x$ en tiempo sublineal. Con PBDS definimos:

```cpp
template <typename T>
using ordered_set = tree<T, null_type, less<T>, rb_tree_tag, tree_order_statistics_node_update>;
```

Esto habilita dos operaciones fundamentales en **$O(\log N)$** ([adamant, 2014](https://codeforces.com/blog/entry/11080)):
- **`s.find_by_order(k)`**: Retorna un iterador al $k$-ésimo elemento más pequeño (indexado en base 0). Si $k \ge s.\text{size}()$, retorna `s.end()`.
- **`s.order_of_key(x)`**: Retorna la cantidad de elementos estrictamente menores que $x$.

> **Truco para Multiconjuntos (`ordered_multiset`):** Si necesitas elementos duplicados, no uses `less_equal<T>` (ya que rompe la función `erase`), sino un par ordenado `ordered_set<pair<T, int>>` donde el segundo valor almacena un identificador único incremental.
{: .prompt-tip }

#### 2. `gp_hash_table` (Tabla Hash de Alto Rendimiento)
`gp_hash_table` es una tabla hash de direccionamiento abierto (*open addressing with probe sequence*) provista por PBDS que suele ser de **3 a 5 veces más rápida** que `std::unordered_map` (la cual utiliza encadenamiento separado / *separate chaining*).

---

### Directivas `#pragma` para Vectorización SIMD y TLE

Las directivas `#pragma` instruyen al optimizador de GCC para generar código vectorial y aprovechar instrucciones del procesador que no siempre se activan por defecto ([Nor, 2021](https://codeforces.com/blog/entry/96344); [Slotin, 2022](https://en.algorithmica.org/hpc/compilation/flags/)):

```cpp
/*
#pragma GCC optimize("O3,unroll-loops")
#pragma GCC target("avx2,bmi,bmi2,lzcnt,popcnt")
*/
```

1. **`optimize("O3,unroll-loops")`**:
   - **`O3`**: Aplica vectorización automática y optimizaciones agresivas sin romper los estándares IEEE 754 de punto flotante. A diferencia de `Ofast` (que activa `-ffast-math` y puede producir errores como `-0.0 + 0.0 = -0.0` o alteraciones en asociatividad de números flotantes), `O3` es seguro para problemas matemáticos y geométricos ([Ponml, 2011](https://stackoverflow.com/questions/7420665/what-does-gccs-ffast-math-actually-do); [Walfridsson, 2021](https://kristerw.github.io/2021/10/19/fast-math/)).
   - **`unroll-loops`**: Desenrolla bucles de longitud determinable, reduciendo el costo de saltos condicionales (*branch overhead*) y facilitando el pipeline de instrucciones en la CPU.

2. **`target("avx2,bmi,bmi2,lzcnt,popcnt")`**:
   - **`avx2`**: Permite al compilador utilizar registros AVX2 de 256 bits para procesar hasta 8 enteros de 32 bits simultáneamente en una sola instrucción ([Intel Guide to Vectorization](https://www.intel.com/content/dam/develop/external/us/en/documents/31848-compilerautovectorizationguide.pdf); [Wikipedia AVX](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions)).
   - **`bmi, bmi2, lzcnt, popcnt`**: Habilita instrucciones de manipulación de bits a nivel de hardware, acelerando operaciones sobre máscaras binarias.

> Al usar `target("avx2")` junto con contenedores o asignadores de memoria de la STL en ciertas versiones antiguas de GCC puede generarse un error de alineación con `std::allocator`. Por ello, en nuestra plantilla se mantienen comentados para activarlos a discreción cuando un problema intensivo esté al borde del TLE ([USACO Vectorization Guide](https://usaco.guide/adv/vectorization?lang=cpp)).
{: .prompt-danger }

---

## 2. Tipos de Datos y Aliases (`using`)

```cpp
using ll = long long; 
using ull = unsigned long long; 
using ld = long double;
using pii = pair<int, int>; 
using pll = pair<ll, ll>;
```

### ¿Por qué `using` en lugar de `typedef` o `#define`?

- `using` es más legible y moderno (estándar C++11 en adelante).
- A diferencia de `typedef`, `using` soporta plantillas con parámetros (*template aliases*), como vimos con `ordered_set` ([Qualified, 2020](https://codeforces.com/blog/entry/77799)).
- Nunca se debe usar `#define ll long long` porque es una simple sustitución textual del preprocesador que puede causar errores sintácticos con modificadores (`unsigned ll` o punteros `ll* a, b`).

### Rangos de Tipos Primitivos (Arquitectura x64)

- **`int`** (32 bits): $[-2.14 \times 10^9, 2.14 \times 10^9]$.
- **`ll` (`long long`, 64 bits)**: $[-9.22 \times 10^{18}, 9.22 \times 10^{18}]$. Obligatorio cuando una suma o producto acumulado supera $2 \times 10^9$ ([Microsoft Data Type Ranges](https://learn.microsoft.com/en-us/cpp/cpp/data-type-ranges?view=msvc-170)).
- **`ull` (`unsigned long long`, 64 bits sin signo)**: $[0, 1.84 \times 10^{19}]$.
- **`ld` (`long double`, 80/128 bits)**: Proporciona entre 18 y 19 dígitos significativos de precisión decimal, crucial en problemas de geometría computacional donde `double` (15 dígitos) sufre de errores de redondeo.

### `using namespace std;`

En programación competitiva se adopta universalmente para evitar anteponer `std::` a cada llamada (`cin`, `cout`, `vector`, `sort`), ahorrando tiempo y reduciendo la longitud visual del código ([Biggs, 2009](https://stackoverflow.com/questions/1452721/whats-the-problem-with-using-namespace-std)).

---

## 3. Macros Esenciales (`#define`)

### Salto de Línea Rápido: `#define endl '\n'`

En C++, `std::endl` no solo inserta el carácter de nueva línea `\n`, sino que además ejecuta una llamada forzada a `flush()` en el flujo de salida `std::cout` ([cppreference endl](https://en.cppreference.com/w/cpp/io/manip/endl); [Langholtz, 2023](https://gist.github.com/louis-langholtz/9959fbc735a23b631e7d795d4eb0839f)).

La implementación interna de `std::endl` en libstdc++ ([GNU ostream](https://github.com/gcc-mirror/gcc/blob/master/libstdc%2B%2B-v3/include/std/ostream)) demuestra este comportamiento:

```cpp
template<typename _CharT, typename _Traits>
inline basic_ostream<_CharT, _Traits>&
endl(basic_ostream<_CharT, _Traits>& __os) {
    return flush(__os.put(__os.widen('\n')));
}
```

En ensamblador x86-64, una llamada a `std::endl` genera más de 45 instrucciones incluyendo llamadas a `widen`, `put` y `flush`, mientras que imprimir directamente `'\n'` requiere únicamente 16 instrucciones y no vacía el búfer del sistema operativo innecesariamente. Con `#define endl '\n'`, podemos seguir usando la sintaxis habitual de `cout << x << endl;` sin riesgo de TLE.

---

### Macros de Rango y Colecciones: `all(x)` y `rall(x)`

```cpp
#define all(x) (x).begin(), (x).end()
#define rall(x) (x).rbegin(), (x).rend()
```

- **`all(x)`**: Simplifica llamadas a algoritmos de `<algorithm>` como `sort(all(v))`, `reverse(all(v))` o `min_element(all(v))` ([Golovanov, 2020](https://codeforces.com/blog/entry/74684)).
- **`rall(x)`**: Permite ordenar colecciones en orden descendente directo con `sort(rall(v))` sin necesidad de pasar `greater<T>()` como comparador.

---

### Suma de Gauss: `#define gs(n) ((n * (n + 1)) >> 1)`

Calcula la sumatoria de los primeros $n$ números naturales $\sum_{i=1}^n i = \frac{n(n+1)}{2}$ en tiempo $O(1)$. El operador bitshift derecho `>> 1` realiza una división entera entre 2 a nivel de bits.

---

### Tamaño Seguro: `#define sz(x) (int)(x).size()`

El método `.size()` de los contenedores STL retorna un tipo sin signo (`size_t` / `unsigned long`). Si se realizan operaciones aritméticas como `v.size() - 1` cuando el vector está vacío (`size() == 0`), se produce un subdesbordamiento (*underflow*) que resulta en $18446744073709551615$, provocando bucles infinitos y fallos de segmentación. Al convertirlo explícitamente a `int` con `sz(x)`, este peligro queda eliminado.

---

### Salida Booleana Rápida: `#define yn(x) (cout << ((x) ? "YES\n" : "NO\n"))`

Muchos problemas en Codeforces, AtCoder y concursos ICPC solicitan responder `"YES"` o `"NO"`. Esta macro evalúa cualquier expresión booleana y emite la respuesta con su salto de línea de forma instantánea.

---

### Macro de Depuración: `#define dbg(...)`

```cpp
#define dbg(...) cerr<<"LINE("<<__LINE__<<")->["<<#__VA_ARGS__<<"]: ["<<(__VA_ARGS__)<<"]\n";
```

Permite inspeccionar variables durante la prueba local imprimiendo la línea exacta del código fuente, el nombre de la variable y su valor a través de `stderr` (`std::cerr`) ([angelbeats, 2020](https://codeforces.com/blog/entry/85544); [Gokhale, 2019](https://codeforces.com/blog/entry/65543); [Qi et al., Basic Debugging](https://usaco.guide/general/basic-debugging?lang=cpp)):

```cpp
int ans = 42;
dbg(ans); // Salida en consola: LINE(35)->[ans]: [42]
```

> La salida de `std::cerr` no interfiere con la salida estándar `std::cout` calificada por los jueces virtuales, pero dejar múltiples llamadas `dbg()` activas dentro de bucles de $10^6$ iteraciones puede causar TLE.
{: .prompt-warning }

---

### `push_back` vs `emplace_back` y Acceso a Pares

```cpp
#define pb push_back
#define eb emplace_back
#define F first
#define S second
```

- **`F` y `S`**: Abreviaciones clásicas para acceder a los miembros de `std::pair` (`p.F` y `p.S`).
- **`pb` vs `eb`**:
  - `emplace_back` construye el elemento directamente en la memoria del vector usando *perfect forwarding* (`std::forward`), lo cual es muy eficiente al insertar tipos compuestos ([cppreference emplace_back](https://en.cppreference.com/w/cpp/container/vector/emplace_back); [Fertig, 2023](https://andreasfertig.blog/2023/04/push_back-vs-emplace_back-when-to-use-what/); [Stone, 2012](https://stackoverflow.com/questions/10890653/why-would-i-ever-use-push-back-instead-of-emplace-back/36919571#36919571)).
  - En C++ moderno (C++11 en adelante), `push_back` combinado con inicialización por llaves (*brace-initialization* `v.pb({x, y})`) es igualmente óptimo y previene llamadas accidentales a constructores explícitos no deseados ([HosseinYousefi, Codeforces #15643](https://codeforces.com/blog/entry/15643)).

---

## 4. Código Principal (*Driver Code*) y Fast I/O

```cpp
void solve() {
    return; // Lógica del problema
}

int main() {
    ios::sync_with_stdio(0); cin.tie(0);
    // freopen("in.txt", "r", stdin); freopen("out.txt", "w", stdout);
    int tc = 1;
    // cin >> tc;
    while (tc--) solve();
    return 0;
}
```

### Mecánica de Fast I/O: `ios::sync_with_stdio(0); cin.tie(0);`

1. **`ios::sync_with_stdio(0)`**: Desactiva la sincronización obligatoria entre los flujos estándar de C (`stdio`) y los de C++ (`iostream`). Al desactivarla, los flujos de C++ operan con búferes independientes mucho más grandes y eficientes ([cplusplus sync_with_stdio](https://cplusplus.com/reference/ios/ios_base/sync_with_stdio/); [yak_ex, 2011](https://codeforces.com/blog/entry/925)).
   > Tras desactivar la sincronización, **no se deben mezclar** funciones de C (`printf`, `scanf`, `getchar`) con `std::cin` y `std::cout` en el mismo programa.
   {: .prompt-danger }

2. **`cin.tie(0)`**: Por defecto, `std::cin` está atado (*tied*) a `std::cout`, lo que significa que antes de cada operación de lectura `cin` vacía forzosamente el búfer de `cout`. Al pasarle `0` (o `nullptr`), se desacoplan ambos flujos y las lecturas masivas ocurren a la máxima velocidad posible ([Gorbachev, 2021](https://codeforces.com/blog/entry/90775); [Qi & Chen, Fast I/O](https://usaco.guide/general/fast-io?lang=cpp)).

---

### Estructura Modular: `void solve()` y Casos de Prueba (`while (tc--)`)

En lugar de concentrar toda la solución dentro de la función `main`, nuestra plantilla delega cada caso de prueba a la función `void solve()`:

1. **Facilita la salida temprana:** Permite usar `return;` en cualquier momento dentro de `solve()` al detectar un caso base o responder una consulta, sin detener la ejecución de los siguientes casos de prueba.
2. **Ciclo `while (tc--)`:** En ensamblador, un bucle decremental comparando contra 0 genera menos instrucciones de salto condicional que un bucle `for (int i = 0; i < tc; i++)`.
3. **Control de Estado:** En problemas multi-testcase (`cin >> tc`), es fundamental recordar reiniciar todas las variables globales y estructuras de datos (`vector.clear()`, `memset`) al inicio de cada llamada a `solve()`.

---

### Redirección de Archivos: `freopen`

Para competencias presenciales o pruebas locales con archivos de prueba grandes, basta con descomentar:

```cpp
freopen("in.txt", "r", stdin);
freopen("out.txt", "w", stdout);
```

Todas las lecturas de `cin` provendrán del archivo `in.txt`{: .filepath} y las salidas se escribirán automáticamente en `out.txt`{: .filepath}.

---

## 5. Configuración en VS Code

Para utilizar esta plantilla de forma automática al abrir cualquier problema, recomendamos la extensión oficial [Competitive Programming Helper (CPH)](https://marketplace.visualstudio.com/items?itemName=DivyanshuAgrawal.competitive-programming-helper) para Visual Studio Code:

1. Abre los ajustes de VS Code (`Ctrl + ,` / `Cmd + ,`).
2. Busca `cph.general.defaultLanguageTemplateFileLocation`.
3. Selecciona la ruta absoluta hacia tu archivo `Plantilla.cpp`{: .filepath}.

![Configuración de plantilla en CPH](https://cpc-gallos.github.io/blog/Entorno_Desarrollo/cph_settings.png)

> Para más detalles sobre cómo armar tu entorno completo de desarrollo con GCC, VS Code y snippets, consulta nuestro artículo sobre [Entorno de Desarrollo](https://cpc-gallos.github.io/blog/Entorno_Desarrollo/).
{: .prompt-info }

---

## Referencias

- adamant. (2014). *C++ STL: Policy based data structures*. Recuperado de <https://codeforces.com/blog/entry/11080>
- angelbeats. (2020). *Macros for debugging*. Recuperado de <https://codeforces.com/blog/entry/85544>
- Biggs, A. (2009). *What's the problem with "using namespace std;"?*. Recuperado de <https://stackoverflow.com/questions/1452721/whats-the-problem-with-using-namespace-std>
- cplusplus. (s.f.). *std::basic_ostream::flush*. Recuperado de <https://cplusplus.com/reference/ostream/basic_ostream/flush>
- cplusplus. (s.f.). *std::endl*. Recuperado de <https://cplusplus.com/reference/ostream/endl/>
- cplusplus. (s.f.). *std::ios_base::sync_with_stdio*. Recuperado de <https://cplusplus.com/reference/ios/ios_base/sync_with_stdio/>
- cplusplus. (s.f.). *std::vector::emplace_back*. Recuperado de <https://cplusplus.com/reference/vector/vector/emplace_back/>
- cplusplus. (s.f.). *std::vector::push_back*. Recuperado de <https://cplusplus.com/reference/vector/vector/push_back/>
- CPC Gallos. (2024). *CPC Gallos Notebook - Team Reference Document (TRD)*. Recuperado de <https://github.com/CPC-GALLOS/Notebook>
- CPC Gallos. (2024). *Plantilla Oficial de Competencia*. Recuperado de <https://github.com/CPC-GALLOS/Plantilla>
- cppreference. (s.f.). *std::basic_ostream<CharT,Traits>::flush*. Recuperado de <https://en.cppreference.com/w/cpp/io/basic_ostream/flush>
- cppreference. (s.f.). *std::endl*. Recuperado de <https://en.cppreference.com/w/cpp/io/manip/endl>
- cppreference. (s.f.). *std::ios_base::sync_with_stdio*. Recuperado de <https://en.cppreference.com/w/cpp/io/ios_base/sync_with_stdio>
- cppreference. (s.f.). *std::vector<T,Allocator>::emplace_back*. Recuperado de <https://en.cppreference.com/w/cpp/container/vector/emplace_back>
- cppreference. (s.f.). *std::vector<T,Allocator>::push_back*. Recuperado de <https://en.cppreference.com/w/cpp/container/vector/push_back>
- Fertig, A. (2023). *push_back vs emplace_back: When to use what*. Recuperado de <https://andreasfertig.blog/2023/04/push_back-vs-emplace_back-when-to-use-what/>
- Fred Overflow. (2020). *Why C++ programmers prefer ++i over i++ (prefix vs. postfix increment operator, for loop, iterators)* [video]. Recuperado de <https://youtu.be/bONciSOJ_N4?si=aBAQKknnv8br_3S4>
- GeeksforGeeks. (2021). *Fast Input/Output / Sample Video for C++ Productivity Hacks / GeeksforGeeks* [video]. Recuperado de <https://www.youtube.com/watch?v=DhPMRStOU7o>
- GNU. (2024). *ostream-inst.cc*. Recuperado de <https://github.com/gcc-mirror/gcc/blob/master/libstdc%2B%2B-v3/src/c%2B%2B11/ostream-inst.cc>
- GNU. (2024). *ostream*. Recuperado de <https://github.com/gcc-mirror/gcc/blob/master/libstdc%2B%2B-v3/include/std/ostream>
- GNU. (2024). *stdc++.h*. Recuperado de <https://gcc.gnu.org/onlinedocs/gcc-4.8.0/libstdc++/api/a01541_source.html>
- GNU. (s.f.). *Stream Buffers Chapter 13. Input and Output*. Recuperado de <https://gcc.gnu.org/onlinedocs/libstdc++/manual/streambufs.html#io.streambuf.buffering>
- GNU. (s.f.). *3.11 Options That Control Optimization*. Recuperado de <https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html>
- GNU. (s.f.). *6.66.15 Function Specific Option Pragmas*. Recuperado de <https://gcc.gnu.org/onlinedocs/gcc/Function-Specific-Option-Pragmas.html>
- GNU. (s.f.). *7 Pragmas*. Recuperado de <https://gcc.gnu.org/onlinedocs/cpp/Pragmas.html>
- Gokhale, S. (2019). *Debugging in C++*. Recuperado de <https://codeforces.com/blog/entry/65543>
- Gorbachev, E. (2021). *Ok, lets talk about cout.tie once and forever*. Recuperado de <https://codeforces.com/blog/entry/90775>
- Golovanov, A. (2020). *C++ tips and tricks*. Recuperado de <https://codeforces.com/blog/entry/74684>
- Govil, A. (2022). *<bits/stdc++.h> in C++*. Recuperado de <https://www.geeksforgeeks.org/bitsstdc-h-c/>
- Hikikomorichka. (2021). *Useful C++ Tricks*. Recuperado de <https://codeforces.com/blog/entry/87283>
- HosseinYousefi. (2015). *C++ Tricks*. Recuperado de <https://codeforces.com/blog/entry/15643>
- ICPC. (2024). *2024 ICPC World Finals Rules - Astana*. Recuperado de <https://icpc.global/worldfinals/rules>
- Intel. (s.f.). *A guide to vectorization with Intel® C++ Compilers*. Recuperado de <https://www.intel.com/content/dam/develop/external/us/en/documents/31848-compilerautovectorizationguide.pdf>
- Langholtz, L. (2023). *C++: More Reasons To Avoid std::endl*. Recuperado de <https://gist.github.com/louis-langholtz/9959fbc735a23b631e7d795d4eb0839f>
- Microsoft. (2024). *Data Type Ranges*. Recuperado de <https://learn.microsoft.com/en-us/cpp/cpp/data-type-ranges?view=msvc-170>
- Monowar, T. (2023). *++i vs i++ which one is faster and why?*. Recuperado de <https://codeforces.com/blog/entry/115877>
- Morton, A. (2023). *Effectiveness of sync_with_stdio in C++ io streams*. Recuperado de <https://copyprogramming.com/howto/c-io-streams-sync-with-stdio-no-difference>
- Nor. (2021). *[Tutorial] GCC Optimization Pragmas*. Recuperado de <https://codeforces.com/blog/entry/96344>
- Ponml. (2011). *What does gcc's ffast-math actually do?*. Recuperado de <https://stackoverflow.com/questions/7420665/what-does-gccs-ffast-math-actually-do>
- Qi, B. & Chen, N. (s.f.). *Fast Input & Output*. USACO Guide. Recuperado de <https://usaco.guide/general/fast-io?lang=cpp>
- Qi, B. & Shrivastava, A. (s.f.). *Vectorization in C++*. USACO Guide. Recuperado de <https://usaco.guide/adv/vectorization?lang=cpp>
- Qi, B. et al. (s.f.). *Basic Debugging*. USACO Guide. Recuperado de <https://usaco.guide/general/basic-debugging?lang=cpp>
- Qualified. (2020). *Should I use "#define ll long long" or "typedef long long ll"*. Recuperado de <https://codeforces.com/blog/entry/77799>
- Slotin, S. (2022). *Flags and Targets*. Algorithmica. Recuperado de <https://en.algorithmica.org/hpc/compilation/flags/>
- Slotin, S. (2022). *Situational Optimizations*. Algorithmica. Recuperado de <https://en.algorithmica.org/hpc/compilation/situational/>
- Stone, D. (2012). *Why would I ever use push_back instead of emplace_back?*. Recuperado de <https://stackoverflow.com/questions/10890653/why-would-i-ever-use-push-back-instead-of-emplace-back/36919571#36919571>
- Walfridsson, K. (2021). *Optimizations enabled by -ffast-math*. Recuperado de <https://kristerw.github.io/2021/10/19/fast-math/>
- Wikipedia Editors. (2023). *Advanced Vector Extensions*. Recuperado de <https://en.wikipedia.org/wiki/Advanced_Vector_Extensions>
- yak_ex. (2011). *Fast I/O for Competitive Programming*. Recuperado de <https://codeforces.com/blog/entry/925>
- Yawar, M. (2024). *emplace_back() vs push_back() in C++ Vectors*. Recuperado de <https://www.naukri.com/code360/library/vector-push_back-vs-emplace_back>
