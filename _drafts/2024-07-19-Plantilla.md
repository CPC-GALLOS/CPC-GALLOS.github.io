---
title: Plantilla
description: Plantilla del club Γα=Ω5 para su uso en la programación competitiva en C++
date: 2024-07-19 9:00:00 +/-TTTT
categories: [Club]
author: ArielParra 
tags: [recomendaciones,C++]
toc: true
pin: true
image:
---

```cpp
// _autor_
// link y/o nombre del programa
#pragma GCC optimize("Ofast,unroll-loops")//-0.0+0.0=-0  
#pragma GCC target("avx2")
#include<bits/stdc++.h>

using ull = unsigned long long;
using ll = long long;
using namespace std;
#define endl '\n'
#define dbg(...) cerr<<"LINE("<<__LINE__<<")->["<<#__VA_ARGS__<<"]: ["<<(__VA_ARGS__)<<"]\n";   
#define pb push_back 
#define F first
#define S second

int main(){
ios_base::sync_with_stdio(0);cin.tie(0);
//freopen("in.txt", "r", stdin);
    int tc=1;
    //cin>>tc;
    int n;
    while(tc--){
        cin>>n;
        for(int i=0;i<n;++i){
            //code
        }
    }
return 0;
}
``` 

__Tabla de contenidos__
* 
{:toc} 

# Explicación y justificación de la plantilla

## La cabecera (header)

### Directivas #pragma para la vectorización

> Las directivas `#pragma` no son standard y solo funcionan en los compiladores de GNU como gcc y g++. Es muy común que arroje un error al querer compilar en Xcode, ya que este usa el compilador Clang, al igual que en Visual Studio que usa el compilador MSVC.
{: .prompt-warning }

La vectorización es el desarrollo de un bucle combinado con la generación de instrucciones SIMD (Single Instruction, Multiple Data) empaquetadas por parte del compilador para los procesadores con arquitectura x86.

Los juzgados virtuales son los que compilan nuestros códigos, por lo que no podemos aplicar parámetros al compilador directamente como lo haríamos en nuestra terminal, por ejemplo en este caso se aplica la optimización O2 (la optimización por defecto) al compilador g++: `g++ -O2 code.cpp`. Y no habría problema en no poder editar los parámetros de compilación si no se haya visto ya en multiples ocaciones que no usarlos puede ocacinar un Time limit exceeded, como en el problema [855F Nagini](https://codeforces.com/contest/855/problem/F), donde paso que cuando [no se usaron los pragmas](https://codeforces.com/contest/855/submission/89815214) lanzo un `TLE` y cuando [si se usaron pragmas](https://codeforces.com/contest/855/submission/72962508) se pudo reducir el tiempo hasta en un 61.4%.  

En nuestra plantilla incluimos el `#pragma optimize("Ofast,unroll-loops")`, que seria similar a ejecutar `g++ -Ofast -funroll-loops code.cpp`

- El parametro 'Ofast' aplica todas las optimizaciones agresivas de 'O3' junto con otras optimizaciones que rompen algunos de los standares de C++, ya que también incluye el parámetro `-ffast-math` el cual trae problemas con números de punto flotante, por lo que se recomienda cambiar a 'O3' para problemas geométricos o que usen números decimales.

- El parámetro 'fast-math' asume que la aritmética de punto flotante es asociativa por lo que puede dar resultados
, también redondea números subnormales (denormals) a 0.0 ya que el manejarlos es costoso para el procesador y por ultimo puede dar errores de signo como lo es en el caso de las sumas con signo de cero.

    Esto se puede ver reflejado en este fragmento de código:

    ```cpp
    float a = 1.0f, b = 1e10f, c = -1e10f;
    float sum = a + (b + c);        // difiere de: (a + b) + c resultando en 1 envés de 0
    float denormal = 1e-45f - 0.0f; // se redondea a 0.0 en lugar de 1.42857e+09 
    float zero = -0.0f + 0.0f;      // Resulta en -0.0 en lugar de 0.0
    ```

- El parámetro 'unroll-loops' permite un desarrollo agresivo del bucle convirtiendo los bucles con longitud determinable en múltiples instrucciones, lo que reduce el número de ramas (branches) y optimiza el cálculo en paralelo, pero esto aumenta el tamaño del código y puede provocar errores en la caché de instrucciones.

    Por ejemplo, este bucle:

    ```cpp
    for (int i = 0; i < 5; ++i){
        std::cout << i ;
    }
    ```
    se convierte bajo el parámetro 'unroll-loops' en:

    ```cpp
    int i = 0;
    if (i < 5) { std::cout << i; ++i; }
    if (i < 5) { std::cout << i; ++i; }
    if (i < 5) { std::cout << i; ++i; }
    if (i < 5) { std::cout << i; ++i; }
    if (i < 5) { std::cout << i; ++i; }
    ```

En nuestra plantilla también incluimos `#pragma GCC target("avx2")`, que aplica optimizaciones específicas para procesadores que soportan el conjunto de instrucciones AVX2. Esto permite la vectorización y optimización de operaciones en vectores al decirle al compilador que genere el código utilizando estas instrucciones especiales de AVX2 y AVX. Esto llega a ser muy util, por ejemplo, cuando se trabaja con matrices, los bucles pueden tomar pasos más grandes y ejecutar operaciones en múltiples elementos simultáneamente, lo que puede resultar en una aceleración de hasta 2, 4 o incluso 8 veces más en comparación con el código sin estas optimizaciones.

Las instrucciones regulares (sin AVX) son ejecutadas por el procesador una a la vez, mientras que las instrucciones AVX usan registros especiales capaces de contener más bits que un registro normal. Por ejemplo, hay procesadores que admiten AVX-256pueden realizar operaciones (como cargar, almacenar, sumar, etc.) en 256 bitsque pueden contener 8 enteros de 32 bits, 4 números de punto flotante de 64 bits, o 2 enteros de 64 bits simultáneamente. Esto básicamente es un tipo de paralelismo a nivel de instrucción (SIMD), lo que significa que puedes realizar operaciones sobre múltiples datos alineados en paralelo.

### Directiva #include <bits/stdc++.h>

> La librería `<bits/stdc++.h>` no es estándar y solo funciona en los compiladores de GNU como gcc y g++. Es muy común que arroje un error al querer compilar en Xcode, ya que este usa el compilador Clang, al igual que en Visual Studio que usa el compilador MSVC.
{: .prompt-warning }

En nuestra plantilla usamos `#include<bits/stdc++.h>` ya que [esta librería](https://github.com/gcc-mirror/gcc/blob/master/libstdc%2B%2B-v3/include/precompiled/stdc%2B%2B.h) incluye todas las librerías de la STL que podríamos utilizar en nuestros algoritmos como lo son: `<algorithm>`, `<bitset>`, `<iostream>`, `<iterator>`, `<limits>`, `<map>`, `<queue>`, `<set>`, `<stack>`, `<vector>`, entre otras librerías.


## Definiciones globales (Global definitions)

### Directiva using

`using` es una directiva usada para definir apodos (alias) para un tipo de dato y a diferencia de la directiva `typedef`, `using` permite el uso en y de templates de la librería standard.

Algunos ejemplos de usos comunes seria para un tipo de dato entero matricial: `using imat = std::vector<std::vector<int>>;`o para ahorrar los parámetros del tipo de dato de un template, por ejemplo `using llvec = std::vector<ll>;`, `using iip = std::pair<int,int>;`, `using icp = std::pair<int,char>;`, etc. 

En nuestro caso uno de los tipos de datos más usados es el tipo de dato `long long` y `unsigned long long`, debido a que tienen capacidad de 8 bytes en procesadores de 64 bits.
-  `long long`: Tiene un rango que va desde -9,223,372,036,854,775,808 hasta 9,223,372,036,854,775,807
- `unsigned long long`: Tiene un rango que va desde 0 hasta 18,446,744,073,709,551,615

> Mucho cuidado de no confunidr `long long` con `long`, ya que el tipo de dato `long` es un sinónimo de `int` teniendo ambas una capacidad de 4 bytes.
{: .prompt-warning }



#### using namespace std

En programación competitiva, utilizamos `using namespace std;` para evitar escribir `std::` antes de cada función o contendedor de la librería standard repetidamente y ahorrar tiempo. Sin embargo, fuera de la programación competitiva, usar `using namespace std;` es una muy mala práctica. En un proyecto real, donde se importan varias librerías, pueden surgir conflictos de nombres. 

Por ejemplo, considera que tu proyecto utiliza las funciones `std::static_cast` y `std::bind`, pero también incorpora múltiples funciones de la librería Boost, como `boost::lexical_cast` y `boost::bind`. No habra problemas si se usa `static_cast` o `lexical_cast` sin los prefijos de las librerias, pero si se quisiera usar la función `bind`, el proyecto puede compilar correctamente pero no funcionaria como se esperaba, ya que todas las referencias a la función `bind` se asumirán como `std::bind` en lugar de `boost::bind`.

La alternativa a usar `using namespace std;` es emplear declaraciones específicas para los elementos que se necesiten, como `using std::cin;`, `using std::cout;`, `using std::cerr;`, etc.


### Directivas #define

Las directivas `#define` en C y C++ funcionan de manera similar a las macros y la directiva `equ` en ensamblador, ya que ambas permiten la sustitución directa de código cuando son referenciadas.

Por ejemplo en C:
```c
#define TAM_MAX 50
#define sum(a, b) ((a) + (b))
```
En el ensamblador (NASM) seria:
```nasm
TAM_MAX equ 50
%macro sum 2
    %1 + %2
%endmacro
```

#### #define endl '\n'

`std::endl` es una de las maneras más comunes de insertar un salto de linea en C++, pero no solo inserta una nueva linea `\n` sino que también hace un 'flush' al flujo de salida estándar `stdout`, en pocas palabras es similar a ejecutar la función `std::ostream::.put('\n')` o `std::basic_ostream::put(std::basic_ios::widen('\n'))` y luego hacer `std::basic_ostream::flush`.

Por esto en nuestra plantilla definimos cualquier llamada a `endl` hacia al carácter `\n`, para que podamos seguir usando esa función sin miedo a ralentizar el programa.

Pero aun asi en muchas implementaciones de C++, escribir `\n` provoca un 'flush' de todos modos, a menos que se haya ejecutado `std::ios::sync_with_stdio(false)` anteriormente como es el caso de nuestra plantilla, por lo que usar directamente `std::endl` es malo ya que en el caso del compilador GCC, este ejecuta tres pasos antes de ejecutar la función:


1. Conversión del Carácter:
    `__os.widen('\n')`: Convierte el carácter `\n` al tipo de carácter 'wide' según la configuración regional del flujo obtenida por el parámetro `_Traits`.
1. Inserción del Carácter:
    `__os.put(__os.widen('\n'))`: Inserta el carácter convertido en el flujo de salida. Esta operación agrega el carácter `\n` al búfer del flujo a través de la función `put`
1. Flush del búfer :
    `flush(__os.put(__os.widen('\n')))` llama a `flush()`, que a su vez llama a `__os.flush()` para asegurar que todos los datos en el búfer del flujo se escriban inmediatamente en la salida estándar.

Dado estos pasos, la función `std::endl` se implementa asi en el [compilador GCC](https://github.com/gcc-mirror/gcc/blob/9116490c1b03dac18f10e42df03731a3aed0b4e9/libstdc%2B%2B-v3/include/std/ostream#L731):

```cpp
  template<typename _CharT, typename _Traits>
    inline basic_ostream<_CharT, _Traits>&
    endl(basic_ostream<_CharT, _Traits>& __os)
    { return flush(__os.put(__os.widen('\n'))); }
```

en ensamblador la función `std::endl` se ve de esta manera:

```nasm
doEndl():
        push    rbx
        mov     edx, 12
        mov     esi, OFFSET FLAT:.LC0
        mov     edi, OFFSET FLAT:std::cout
        call    std::basic_ostream<char, std::char_traits<char> >& std::__ostream_insert<char, std::char_traits<char> >(std::basic_ostream<char, std::char_traits<char> >&, char const*, long)
        mov     rax, QWORD PTR std::cout[rip]
        mov     rax, QWORD PTR [rax-24]
        mov     rbx, QWORD PTR std::cout[rax+240]
        test    rbx, rbx
        je      .L10
        cmp     BYTE PTR [rbx+56], 0
        je      .L5
        movsx   esi, BYTE PTR [rbx+67]
.L6:
        mov     edi, OFFSET FLAT:std::cout
        call    std::basic_ostream<char, std::char_traits<char> >::put(char)
        pop     rbx
        mov     rdi, rax
        jmp     std::basic_ostream<char, std::char_traits<char> >::flush()
.L5:
        mov     rdi, rbx
        call    std::ctype<char>::_M_widen_init() const
        mov     rax, QWORD PTR [rbx]
        mov     esi, 10
        mov     rax, QWORD PTR [rax+48]
        cmp     rax, OFFSET FLAT:_ZNKSt5ctypeIcE8do_widenEc
        je      .L6
        mov     rdi, rbx
        call    rax
        movsx   esi, al
        jmp     .L6
.L10:
        call    std::__throw_bad_cast()
_GLOBAL__sub_I_doEndl():
        sub     rsp, 8
        mov     edi, OFFSET FLAT:_ZStL8__ioinit
        call    std::ios_base::Init::Init() [complete object constructor]
        mov     edx, OFFSET FLAT:__dso_handle
        mov     esi, OFFSET FLAT:_ZStL8__ioinit
        mov     edi, OFFSET FLAT:_ZNSt8ios_base4InitD1Ev
        add     rsp, 8
        jmp     __cxa_atexit
```

A diferencia de solo imprimir el caracter `\n`: 

```nasm
doNewline():
        mov     edx, 13
        mov     esi, OFFSET FLAT:.LC0
        mov     edi, OFFSET FLAT:_ZSt4cout
        jmp     std::basic_ostream<char, std::char_traits<char> >& std::__ostream_insert<char, std::char_traits<char> >(std::basic_ostream<char, std::char_traits<char> >&, char const*, long)
_GLOBAL__sub_I_doNewline():
        sub     rsp, 8
        mov     edi, OFFSET FLAT:_ZStL8__ioinit
        call    std::ios_base::Init::Init() [complete object constructor]
        mov     edx, OFFSET FLAT:__dso_handle
        mov     esi, OFFSET FLAT:_ZStL8__ioinit
        mov     edi, OFFSET FLAT:_ZNSt8ios_base4InitD1Ev
        add     rsp, 8
        jmp     __cxa_atexit
```

donde solo imprimir `\n` resulta en 16 lineas de ensamblador comparadas con las 45 lineas necesarias para `std::endl`!


#### #define dbg(...) 

debugeo 

#### defines para templates

push back y emplace back?

## Código principal (Driver code)

### E/S rápida (Fast I/O)

es ...

//freopen("in.txt", "r", stdin);

freopen sirve ....

### while test cases

la variable `tc` significa test cases (casos base), y se usan cuando un problema te pide repetir el mismo algorimo multiples veces. 

```cpp
int tc = 10;
// Decrementa tc y repite el bucle si tc no es cero
while(tc--) { 
  // código a ejecutar   
}
```

```nasm
mov ecx, 10
while:
    ; código a ejecutar
    loop while ; Decrementa ecx y salta a "while" si ecx no es cero
```

esto es un poco más eficiente que 

```cpp
for (int tc = 10; tc > 0 ; tc--) {
  // código a ejecutar   
}
```

```nasm
for_loop:
    cmp ecx, 0         ; Compara ecx con 0
    jle end_loop       ; Si ecx <= 0, salta al final del bucle
    ; código a ejecutar
    dec ecx            ; Decrementa ecx (equivalente a tc--)
    jmp for_loop       ; Salta de nuevo al inicio del bucle
end_loop:
```

quiza no parezca mucho pero esto llega a optmizar el uso de lineas de ensamblador en un 75%


### ++i en lugar de i++

(prefix vs. postfix increment operator)

en la plantilla tenemos `for(int i=0;i<n;++i)` en lugar de `for(int i=0;i<n;i++)`

```cpp
int i,j,k,l; i = j = k = l = 0;
std::cout << i=i+1; // se mostrara 1
std::cout << j+=1;  // se mostrara 1
std::cout << ++k;   // se mostrara 1
std::cout << l++;   // se mostrara 0
```

```nasm
```


## Referencias 

- angelbeats. (2020). *Macros for debugging*. Recuperado de <https://codeforces.com/blog/entry/85544>
- Biggs, A. (2009). *What's the problem with "using namespace std;"?*. Recuperado de <https://stackoverflow.com/questions/1452721/whats-the-problem-with-using-namespace-std>
- cplusplus. (s.f.). *std::basic_ostream::flush*. Recuperado de <https://cplusplus.com/reference/ostream/basic_ostream/flush>
- cplusplus. (s.f.). *std::endl*. Recuperado de <https://cplusplus.com/reference/ostream/endl/>
- cplusplus. (s.f.). *std::ios_base::sync_with_stdio*. Recuperado de <https://cplusplus.com/reference/ios/ios_base/sync_with_stdio/>
- cppreference. (s.f.). *std::basic_ostream<CharT,Traits>::flush*. Recuperado de <https://en.cppreference.com/w/cpp/io/basic_ostream/flush>
- cppreference. (s.f.). *std::endl*. Recuperado de <https://en.cppreference.com/w/cpp/io/manip/endl>
- cppreference. (s.f.). *std::ios_base::sync_with_stdio*. Recuperado de <https://en.cppreference.com/w/cpp/io/ios_base/sync_with_stdio>
- Fertig, A. (2023). *push_back vs emplace_back: When to use what*. Recuperado de <https://andreasfertig.blog/2023/04/push_back-vs-emplace_back-when-to-use-what/>
- Fred Overflow. (2020). *Why C++ programmers prefer ++i over i++ (prefix vs. postfix increment operator, for loop, iterators)* [video]. Recuperado de <https://youtu.be/bONciSOJ_N4?si=aBAQKknnv8br_3S4>
- GeeksforGeeks. (2021). *Fast Input/Output / Sample Video for C++ Productivity Hacks / GeeksforGeeks* [video]. Recuperado de <https://www.youtube.com/watch?v=DhPMRStOU7o>
- GNU. (2024). *ostream-inst.cc*. Recuperado de <https://github.com/gcc-mirror/gcc/blob/master/libstdc%2B%2B-v3/src/c%2B%2B11/ostream-inst.cc>
- GNU. (2024). *ostream*. Recuperado de <https://github.com/gcc-mirror/gcc/blob/master/libstdc%2B%2B-v3/include/std/ostream>
- GNU. (2024). *stdc++.h*. Recuperado de <https://gcc.gnu.org/onlinedocs/gcc-4.8.0/libstdc++/api/a01541_source.html>
- GNU. (s.f.). *Stream Buffers Chapter 13.  Input and Output*. Recuperado de <https://gcc.gnu.org/onlinedocs/libstdc++/manual/streambufs.html#io.streambuf.buffering>
- GNU. (s.f). *3.11 Options That Control Optimization*. Recuperado de <https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html>
- GNU. (s.f). *6.66.15 Function Specific Option Pragmas*. Recuperado de <https://gcc.gnu.org/onlinedocs/gcc/Function-Specific-Option-Pragmas.html>
- GNU. (s.f). *7 Pragmas*. Recuperado de <https://gcc.gnu.org/onlinedocs/cpp/Pragmas.html>
- Gokhale, S. (2019). *Debugging in C++*. Recuperado de <https://codeforces.com/blog/entry/65543>
- Gorbachev, E. (2021). *Ok, lets talk about cout.tie once and forever*. Recuperado de <https://codeforces.com/blog/entry/90775>
- Govil, A. (2022). *<bits/stdc++.h> in C++*. Recuperado de <https://www.geeksforgeeks.org/bitsstdc-h-c/>
- Intel. (s.f). *A guide to vectorization with Intel® C++ Compilers*. Recuperado de <https://www.intel.com/content/dam/develop/external/us/en/documents/31848-compilerautovectorizationguide.pdf>
- Langholtz, L. (2023). *C++: More Reasons To Avoid std::endl*. Recuperado de <https://gist.github.com/louis-langholtz/9959fbc735a23b631e7d795d4eb0839f>
- Microsoft. (2024). *Data Type Ranges*. Recuperado de <https://learn.microsoft.com/en-us/cpp/cpp/data-type-ranges?view=msvc-170>
- Monowar, T. (2023). *++i vs i++ which one is faster and why?*. Recuperado de <https://codeforces.com/blog/entry/115877>
- Morton, A. (2023). *Effectiveness of sync_with_stdio in C++ io streams*. Recuperado de <https://copyprogramming.com/howto/c-io-streams-sync-with-stdio-no-difference>
- NASM. (s.f.). *Chapter 4: The NASM Preprocessor*. Recuperado de <https://www.nasm.us/xdoc/2.10rc8/html/nasmdoc4.html>
- Nor. (2021). *[Tutorial] GCC Optimization Pragmas*. Recuperado de <https://codeforces.com/blog/entry/96344>
- Nor. (2021). *GCC Optimization Pragmas*. Recuperado de <https://nor-blog.codeberg.page/posts/2021-10-26-gcc-optimization-pragmas/>
- Ponml. (2011). *What does gcc's ffast-math actually do?*. Recuperado de <https://stackoverflow.com/questions/7420665/what-does-gccs-ffast-math-actually-do>
- Qi, B. & Chen, N. (s.f.). *Fast Input & Output*. Recuperado de <https://usaco.guide/general/fast-io?lang=cpp>
- Qi, B. & Shrivastava, A. (s.f.). *Vectorization in C++*. Recuperado de <https://usaco.guide/adv/vectorization?lang=cpp>
- Qi, B. et al. (s.f). *Basic Debugging*. Recuperado de <https://usaco.guide/general/basic-debugging?lang=cpp>
- Qualified. (2020). *Should I use "#define ll long long" or "typedef long long ll"*. Recuperado de <https://codeforces.com/blog/entry/77799>
- Slotin, s. (2022).*Flags and Targets*. Recuperado de <https://en.algorithmica.org/hpc/compilation/flags/>
- Slotin, s. (2022).*Situational Optimizations*. Recuperado de <https://en.algorithmica.org/hpc/compilation/situational/>
- Walfridsson, K. (2021). *Optimizations enabled by -ffast-math*. Recuperado de <https://kristerw.github.io/2021/10/19/fast-math/>
- wikipedia. (2023). *Advanced Vector Extensions*. Recuperado de <https://en.wikipedia.org/wiki/Advanced_Vector_Extensions>