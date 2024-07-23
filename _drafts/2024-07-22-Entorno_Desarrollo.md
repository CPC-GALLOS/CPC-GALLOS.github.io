---
title: Entorno de Desarrollo
description: 
date: 2024-07-22 20:00:00 +/-TTTT
categories: [Club]
author: ArielParra 
tags: [recomendaciones,C++]
pin: true
mermaid: false
image:
---

nline
La ventaja de usar un IDE en linea es la disponibilidad en cualquier dispositivo

Pthon dbg
Programiz
Online dbg

# Cloud
Jupyter ?
Github codespaces
CS50 es un github codespaces sin limite de tiempo

# MacOS

## con Clang
Este es el compilador por defecto en Xcode

## con gcc

Instalar con 

# Móvil 
## Android

### editor + terminal
 Termux
### Escritorio de Linux
Esto es recomendado para dispositivos de gama alta o dispositivos de más reciente

https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/771px-Apple_Computer_Logo_rainbow.svg.png

- Primero instalamos el gestor de paquetes [brew](https://brew.sh/) abriendo una terminal y ejecutando el comando, para despues dar varios enters:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
- despues en instalamos el compilador gcc


```bash
brew analytics off
brew install gcc
sudo rm /usr/local/bin/g++
sudo ln -s $(ls /usr/local/bin/g++-*) /usr/local/bin/g++

```