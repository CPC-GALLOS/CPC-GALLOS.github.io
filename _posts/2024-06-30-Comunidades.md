---
title: Comunidades
description: Lista de comunidades para aprender más
date: 2024-06-30 21:40:00 +/-TTTT
categories: [Recursos]
author: ArielParra 
tags: [recomendaciones,comunidad]
pin: false
mermaid: false
image: /assets/img/posts/Discord_ICPC.png
---


## Mapa de clubes de programación competitiva y Algoritmia de México

<div id="map-container">
<div id="tooltip"></div>
<object type="image/svg+xml" data="/assets/img/posts/Comunidades/mexico-map.svg" id="mexico-map"></object>
</div>

<div id="info-box" class="hidden"></div>

> Datos Recabados por [{{ site.data.authors.ArielParra.name }}]({{ site.data.authors.ArielParra.url }}), mapa interactivo de México modificado de [Interactive_Mexico_Map](https://github.com/ArielParra/Interactive_Mexico_Map)

>  [`mexico-map.svg`](/assets/img/posts/Comunidades/mexico-map.svg) hecho por Allstrak, Licencia: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Origen: [Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/2/23/Mexico_Map.svg). 


## Comunidades de Discord en Español

- [ICPC México](https://discord.gg/icpcmx)  Discord oficial del club de la comunidad de ICPC México junto a la universidad ITESO. 
- [Club de Algoritmia CUCEI](https://discord.com/invite/VmKrSgK5mQ) Discord oficial del Club de Algoritmia del Centro Universitario de Ciencias Exactas e Ingenierías de la UdeG.
- [Club de Algoritmia ESFM](https://discord.gg/R7urzSYyVW) Discord oficial del Club de algoritmia de la Escuela Superior de Física y Matemáticas del Instituto Politécnico Nacional.
- [RAMCPP](https://discord.gg/dhxmX6eVws) club de programación competitiva RAMCPP de la Universidad Tecnologica de Monterrey.
- [Clearn Architecture](https://discord.com/invite/rxVhJMKPQD) Discord oficial del Club de Programación competitiva de la UADY.
- [Omega UP](https://discord.com/invite/K3JFd9d3wk) Es una organización sin fines de lucro de América Latina para impulsar la tecnología a traves de la programación competitiva.
- [CAUS](https://discord.com/invite/gEbbJrzEYZ) Club de Algoritmia de la Universidad de Sevilla en España.
- [ACM UPM](https://discord.com/invite/UvUyYWW) Discord del club ACM-ICPC de la Universidad Politécnica de Madrid
- [CPC UTEC](https://discord.com/invite/AKbMzpWgRs) Discord del club de programación competitva de la Universidad de Ingeniería y Tecnología (UTEC) de Peru.

## Comunidades de Discord en Inglés

- [Junior Training Sheet](https://discord.gg/BPXwwcBVZJ) Discord del finalista de ICPC, Mostafa Saad, para el acompañamiento de su Junior Training sheet exclusivamente.
- [M(IT)^2](https://discord.com/invite/huwxnwTZ8X) Es el discord oficial del MIT Informatics Tournament.
- [Competitive Programming Initiative](https://discord.com/invite/VCxUzdYhzN) es el discord oficial del USA Computing Olympiad (USACO).
- [CALICO](https://calico.cs.berkeley.edu/discord)Es el discord oficial del CALICO Informatics Competition de la Universidad de Berkeley en California.
- [ICPC North America](https://t.co/QLSRWC9P83)
- [Errichto Algorithms Server](https://discord.gg/YWb3Bmg)
- [University of Adelaide Competitive Programming Club](https://discord.gg/9yBJs68Sj4)
- [The University of Texas at Austin UTPC](https://discord.com/invite/hjQAveZ)
- [University of Calgary Competitive Programming Club](https://discord.gg/kRUusMDyVp)
- [BYU Competitive Programming Association](https://discord.gg/zB3wvFKMhx)
- [Competitive Programming Club at The Ohio State University](https://www.go.osu.edu/cpcdiscord)
- [University of Washington Competitive Programming Club](https://discord.gg/uPBgaKWDJf)
- [Davis Competitive Programming Club](https://discord.gg/JCRXygT2CW) y [Aggie Competitive Programming Contest](https://discord.com/invite/fWx7Pd6XTe)
- [University of Minnesota Twin Cities Competitive Programming Club](https://discord.gg/6Cyr7K9Sfk)
- [Rutgers Competitive Programming](https://discord.gg/44YRA5P)
- [Competitive Programming Club at Stony Brook University](https://discord.gg/v7u5PnGkkR)
- [The Competitive Programmers Union](https://discord.gg/dmzgQ5r)
- [Competitive Programming Club @Liberty University](https://discord.gg/dneShg4YYv)
- [SFU Competitive Programming](https://discord.gg/wfch4Mk33Y)
- [The University of Melbourne Competitive Programming Club](https://discord.gg/R68WZcgSVp)

<style>
   #map-container {
      position: relative;
      background-color: var(--main-bg) !important;
      color-scheme: light;
      max-width: 100%;
      width: fit-content;
      margin: 0 auto;
      overflow: hidden;
   }
   #map-container object {
      width: 100%;
      height: auto;
      display: block;
   }
   #info-box {
      position: relative;
      /* Change from absolute to relative */
      margin: 0 auto;
      margin-top: 10px;
      /* Add spacing between the map and the info-box */
      background-color: var(--sidebar-bg);
      color: var(--text-color) !important;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0 2px 5px var(--sidebar-hover-bg);
      display: none;
   }
   #info-box.hidden {
      display: none;
   }
   #info-box:not(.hidden) {
      display: block;
   }
   #tooltip {
      position: fixed;
      background-color: rgba(0, 0, 0, 0.5);
      color: #eceff4;
      padding: 5px;
      border-radius: 3px;
      font-size: 16px;
      pointer-events: none;
      display: none;
   }
</style>

<script src="/assets/js/posts/Comunidades/mapa_interactivo.js"></script>
