---
title: Terminales
description: 
date: 2025-01-15 17:00:00 +/-TTTT
categories: [Club]
author: Joshua 
tags: [tecnologias]
pin: false
mermaid: false
image:
---

## ¿Qué es una Terminal?

Una terminal es un entorno de entrada (input) y salida (output) de texto que permite interactuar con el sistema informático. En terminología UNIX, una terminal es un tipo particular de archivo de dispositivo (device file) que implementa un número adicional de comandos más allá de lectura y escritura.

### Tipos de Terminales

1. *Terminales proporcionadas por el Kernel*
    - *Función*: Estas terminales son gestionadas por el kernel del sistema operativo en nombre de un dispositivo de hardware.
    - *Ejemplo*: La entrada desde un teclado y la salida en forma de texto a la pantalla.
    
1. *Pseudo-Terminales (Pseudo-TTYs)*
    - *Función*: Estas terminales son proporcionadas por programas conocidos como emuladores de terminales, que simulan la funcionalidad de las terminales físicas en los sistemas informáticos modernos.
    - *Ejemplo*: Programas como GNOME Terminal, iTerm2, y Hyper son solo algunos ejemplos.
    - *Interfaces*: Las terminales permiten un control mas fino mediante interfaces como ioctl y termios en sistemas UNIX.
### Características Técnicas

- *Entrada (Input)*: Generalmente desde el teclado, pero también puede ser redirigida desde archivos o cadenas de texto.
    
- *Salida (Output)*: Normalmente se muestra en la pantalla, pero puede ser redirigida a archivos o a otros comandos.
    
- *Codificación de Carácter*: La mayoría de las terminales modernas utilizan UTF-8 para la codificación de caracteres, permitiendo manejar una amplia gama de caracteres y símbolos de diferentes idiomas.
    
- *Buffering*: Los datos que se escriben en stdout suelen almacenarse en un buffer temporal para mejorar el rendimiento del sistema.

## ¿Qué es una Consola?

Una consola es un terminal físico, es decir, una interfaz que permite la interacción directa del usuario con el sistema operativo mediante el uso de programas en modo texto o GUI (Interfaz Gráfica de Usuario).

En los sistemas operativos, la consola se implementa como terminales gestionados por el kernel. En sistemas como Linux y FreeBSD, las consolas se manifiestan en forma de múltiples TTYs (TeleTYpewriters), que son dispositivos virtuales utilizados para proporcionar acceso a sesiones de terminal independientes. Estos terminales pueden ser referenciados bajo diversas denominaciones como "consola", "consola virtual" o "terminal virtual", entre otras variaciones.

## ¿Qué es una shell?

Un *shell* es un intérprete de línea de comandos, es decir, un programa que procesa comandos y emite los resultados. Actúa como un intermediario entre el usuario y el sistema subyacente, proporcionando una interfaz directa para la ejecución de aplicaciones y comandos.

El shell tiene acceso directo al kernel, siendo esta la única forma en que el usuario puede interactuar con el núcleo del sistema operativo.

En el contexto de Unix, "shell" se ha especializado en significar un *shell de línea de comandos*, centrado en introducir el nombre de la aplicación que se desea ejecutar, seguido de los nombres de los archivos u otros objetos sobre los que la aplicación debe actuar, y presionar la tecla Enter. Otros entornos, con la notable excepción reciente de Gnome Shell, generalmente no utilizan la palabra "shell"; por ejemplo, los sistemas de ventanas emplean términos como "administradores de ventanas" y "entornos de escritorio".

Los shells de línea de comandos incorporan construcciones de control de flujo para combinar comandos. Además de escribir comandos de manera interactiva, los usuarios pueden escribir *scripts*. Los shells más comunes utilizan una sintaxis basada en el *Bourne Shell*. 

En la administración del sistema Unix, el *shell de usuario* es el programa que se invoca al iniciar sesión. Las cuentas de usuario normales utilizan un shell de línea de comandos, pero los usuarios con acceso restringido pueden tener un shell restringido o algún otro comando específico (por ejemplo, para cuentas de solo transferencia de archivos).

## Referencias

- askubuntu. (2014). *What is the difference between Terminal, Console, Shell, and Command Line?*. Recuperado de <https://askubuntu.com/questions/506510/what-is-the-difference-between-terminal-console-shell-and-command-line>
- GeeksForGeeks. (2024). *Difference between Terminal, Console, Shell, and Command Line*. Recuperado de <https://www.geeksforgeeks.org/difference-between-terminal-console-shell-and-command-line/>  
- Kumar, P. (2023). *Difference Between Terminal, Console, Shell, and Command Line*. Recuperado de <https://www.tutorialspoint.com/difference-between-terminal-console-shell-and-command-line>
- Prieto, J. (2024). *Diferencias entre Terminal, shell, consola y línea de comandos* [Video]. Recuperado de <https://www.tiktok.com/@sec2john/video/7450515098105335073>