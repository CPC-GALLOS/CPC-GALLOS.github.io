---
title: Errores En C++
description: 
date: 2024-08-25 14:40:00 +/-TTTT
categories: [Club]
author: ArielParra 
tags: [tecnologias]
pin: false
mermaid: false
image:
---



### Errores de Acceso a Memoria

1. **Acceso Fuera de los Límites de un Arreglo**:
   - Acceder a elementos fuera del rango declarado de un arreglo puede resultar en valores basura.
   
2. **Variables No Inicializadas**:
   - Las variables no inicializadas pueden contener valores basura y causar comportamiento indefinido.
   
3. **Fallo al Reiniciar Variables Globales**:
   - Las variables globales pueden retener valores entre casos de prueba, causando errores.
   
4. **Desbordamiento de la Pila con Recursión**:
   - La recursión profunda puede consumir demasiada memoria en la pila.

### Errores de Precisión y Cálculo
1. **Errores de Precisión con Números de Punto Flotante**:
   - Los números de punto flotante pueden introducir errores de precisión, especialmente con números extremos.
   
2. **Problemas con la Aritmética Modular**:
   - Manejar incorrectamente los números negativos con operaciones modulares puede llevar a resultados inesperados.
   
3. **Uso de `sqrt` y Conversión a Entero**:
   - La conversión incorrecta de valores `double` a enteros puede causar errores.
   
4. **Overflow y Underflow de Enteros**:
   - Realizar operaciones que exceden el rango de un entero puede causar resultados incorrectos o comportamiento indefinido.
   
5. **Underflow de Enteros Sin Signo**:
   - Restar de un entero sin signo puede llevar a desbordamientos inesperados.

### Errores de Lógica y Algoritmo
1. **Sombreado de Variables (Variable Shadowing)**:
   - Declarar una variable en un ámbito interno con el mismo nombre que una externa puede causar comportamiento inesperado.
   
2. **Orden de Operaciones (Precedencia de Operadores)**:
   - No entender el orden de las operaciones puede llevar a errores lógicos.
   
3. **Errores en Comparadores Personalizados para Ordenamiento**:
   - Usar comparadores personalizados incorrectamente puede llevar a una ordenación errónea.
   
4. **En Caso de TLE, Checa que Todos los Ciclos Terminen**:
   - Asegúrate de que todos los ciclos en tu programa terminen para evitar tiempos de ejecución largos.
   
5. **Si una DP Multicaso Da TLE, Intenta Precalcular Todo**:
   - Precalcular datos para evitar recalcular en cada caso de prueba.

### Errores de Entrada/Salida
1. **Manejo Incompleto de la Entrada**:
   - No leer toda la entrada puede llevar a procesar datos sobrantes de casos anteriores.
   
2. **No Usar `endl` (a Menos que Quieras Hacer `flush`)**:
   - Usa `\n` en lugar de `endl` para evitar flushing innecesario.
   
3. **No Mezclar `cin`/`cout` con `scanf`/`printf`**:
   - Mezclar diferentes métodos de entrada/salida puede causar problemas de sincronización.
   
4. **Si Usas `long long`, ¿Estás Usando `%lld` en `scanf`/`printf`?**:
   - Usa el formato correcto para tipos `long long`.

### Errores de Macros y Preprocesador
1. **Uso Incorrecto de Macros**:
   - Las macros mal usadas pueden resultar en resultados inesperados o errores de compilación.
   
2. **Importar Todas las Librerías Estándar de C++ (`#include<bits/stdc++.h>`)**:
   - Utiliza esta inclusión con cuidado para evitar problemas con la compilación.

### Errores de Formato y Requerimientos
1. **¿El Formato de Salida es Fuera de lo Común?**:
   - Asegúrate de que tu salida sigue el formato específico requerido.
   
2. **¿El Límite es Más Chico de lo que Parece?**:
   - Revisa los límites del problema para evitar asumir un rango mayor.

3. **¿El Problema Requiere de un Módulo en la Respuesta?**:
   - Asegúrate de aplicar el módulo a todos los cálculos relevantes.

4. **Si una Función Debe Devolver un Valor, ¿Estás Devolviéndolo en Todos los Casos?**:
   - Asegúrate de que todas las rutas de código devuelvan un valor si se espera.

5. **Si el Problema Tiene Gráficas, ¿Éstas Deben Ser Conexas?**:
   - Verifica la conectividad si es un requisito del problema.

### Errores Específicos de Implementación
1. **La Función `strlen` y la Complejidad del Tamaño del Arreglo**:
   - Repetir `strlen` puede ser ineficiente en términos de uso de memoria.

2. **En el Heap de C++, el Padre es Mayor a sus Hijos**:
   - Recuerda esta propiedad al manipular el heap para evitar errores de memoria.

Esto debería ayudarte a categorizar y abordar los errores en tu código C++.
## Referencias

- Meza, G. (2021). *Pendejario.txt*. Recuperado de <https://github.com/GustavoMeza/icpc-notebook/blob/master/Pendejario.txt>
- Colin Galen. (2021). *C++ Mistakes Noobs Make (and how to prevent them)* [video]. Recuperado de <https://www.youtube.com/watch?v=GsQM0nJhXws>