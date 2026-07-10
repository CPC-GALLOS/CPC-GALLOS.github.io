---
title: Filtrar Certificados
description: Filtros para certificados
date: 2024-07-15 08:00:00 +/-TTTT
categories: [Desarrollo_Profesional]
author: ArielParra 
tags: [recomendaciones,cursos,egresados,estudiantes]
pin: false
mermaid: false
comments: false # evitar problemas con los parametros de url
image: https://www.justinmind.com/wp-content/uploads/2025/02/header.png
---

> Si deseas ver una lista detallada sobre los temas junto con becas, revisa este post: [Certificaciones Gratuitas](https://cpc-gallos.github.io/blog/Certificaciones_Gratuitas/). Si buscas ofertas en certificaciónes con costo, revisa este post: [Ofertas en Certificaciones](https://cpc-gallos.github.io/blog/Ofertas_Certificaciones/)
{: .prompt-info }

> Estamos actualizando esta lista a travez de nuestro [api](https://cpc-gallos.github.io/api/), TODO: falta hacer verificación manual de cada uno, adapatar las descripciones, agregar tags donde sea necesario, y ponerles imagenes representativas

<div class="custom_container max-width">
    <div class="custom_card max-width" id="filter-checks" style="padding: 20px;">
        <!-- Search bar -->
        <div style="margin-bottom: 15px;">
            <label style="display:block; font-family: var(--font-family-monospace); font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 5px; color: var(--link-color);">Buscar</label>
            <input type="text" id="f-search" placeholder="Nombre o descripción..." style="width:100%; padding: 10px; border-radius: 5px; border: 1px solid var(--mask-bg); background: var(--main-bg); color: var(--text-color);">
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 15px;">
            <div style="flex: 1; min-width: 150px;">
                <label style="display:block; font-family: var(--font-family-monospace); font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 5px; color: #7c3aed;">Tipo</label>
                <select id="f-type" style="width:100%; padding: 10px; border-radius: 5px; border: 1px solid var(--mask-bg); background: var(--main-bg); color: var(--text-color);"><option value="">Todos</option></select>
            </div>
            <div style="flex: 1; min-width: 150px;">
                <label style="display:block; font-family: var(--font-family-monospace); font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 5px; color: #0284c7;">Dominio</label>
                <select id="f-domain" style="width:100%; padding: 10px; border-radius: 5px; border: 1px solid var(--mask-bg); background: var(--main-bg); color: var(--text-color);"><option value="">Todos</option></select>
            </div>
            <div style="flex: 1; min-width: 150px;">
                <label style="display:block; font-family: var(--font-family-monospace); font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 5px; color: #0369a1;">Categoría</label>
                <select id="f-category" disabled style="width:100%; padding: 10px; border-radius: 5px; border: 1px solid var(--mask-bg); background: var(--main-bg); color: var(--text-color);"><option value="">Todas</option></select>
            </div>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 15px;">
            <div style="flex: 1; min-width: 150px;">
                <label style="display:block; font-family: var(--font-family-monospace); font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 5px; color: #d97706;">Grupo de proveedor</label>
                <select id="f-provider-group" style="width:100%; padding: 10px; border-radius: 5px; border: 1px solid var(--mask-bg); background: var(--main-bg); color: var(--text-color);"><option value="">Todos</option></select>
            </div>
            <div style="flex: 1; min-width: 150px;">
                <label style="display:block; font-family: var(--font-family-monospace); font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 5px; color: #b45309;">Proveedor</label>
                <select id="f-provider" disabled style="width:100%; padding: 10px; border-radius: 5px; border: 1px solid var(--mask-bg); background: var(--main-bg); color: var(--text-color);"><option value="">Todos</option></select>
            </div>
        </div>

        <div style="margin-bottom: 15px;">
            <label style="display:block; font-family: var(--font-family-monospace); font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 5px; color: #059669;">Tags</label>
            <input type="text" id="f-tags" placeholder="" style="width:100%; padding: 10px; border-radius: 5px; border: 1px solid var(--mask-bg); background: var(--main-bg); color: var(--text-color);">
            <div id="selected-tags" style="display:flex; flex-wrap:wrap; gap:5px; margin-top:8px;"></div>
            <div id="tag-suggestions" style="display:flex; flex-wrap:wrap; gap:5px; margin-top:8px;"></div>
            <div style="margin-top: 8px; font-size: 0.75rem; color: var(--text-muted-color);">Escribe para buscar un tag y selecciónalo. Puedes quitarlo después con un clic.</div>
        </div>

        <button id="reset-btn" style="width:100%; padding: 10px; border-radius: 5px; border: 1px solid var(--mask-bg); background: var(--sidebar-bg); color: var(--text-color); font-weight:bold; cursor:pointer; margin-top: 5px; transition: background-color 0.2s;">↺ Limpiar filtros</button>
        
        <div style="margin-top: 20px; font-family: var(--font-family-monospace); text-align: center;">
            <span id="count" style="color: var(--link-color); font-weight:bold;">0</span> resultados
        </div>
    </div><!--filters custom_card-->
</div><!--filters custom_container-->

<div class="custom_container grid" id="grid">
</div><!-- custom_container -->

<style>
  .custom_card {
    text-align: left;
    background-color: var(--sidebar-bg);
    box-shadow: 4px 4px 2px 1px var(--sidebar-hover-bg);
    color: var(--text-color) !important;  
    padding: 12px;
    margin: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1 1 200px;
    min-width: 180px;
    max-width: 100%;
  }
  .max-width{
    min-width: calc(100%)!important;
    max-width: calc(100%) !important;
    flex-basis: 100%;
  }
  .custom_container{
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    margin: 0 auto;
  }
  #filter-checks {
    display: block;
    box-sizing: border-box;
  }
  .chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family-monospace);
    font-size: 0.75rem;
    line-height: 1.2;
    padding: 3px 8px;
    border-radius: 12px;
    background: var(--mask-bg);
    color: var(--text-color);
    border: 1px solid var(--sidebar-hover-bg);
    white-space: nowrap;
    width: max-content;
    height: auto;
    aspect-ratio: auto;
    margin: 0;
  }
  .chip.domain-chip { color: #fff; border-color: transparent; background: #0284c7; }
  .chip.cat-chip { color: #fff; border-color: transparent; background: #0369a1; }
  .chip.type-chip { color: #fff; border-color: transparent; background: #7c3aed; }
  .chip.group-chip { color: #fff; border-color: transparent; background: #d97706; }
  .chip.prov-chip { color: #fff; border-color: transparent; background: #b45309; }
  .chip.tag-chip {
    color: #fff;
    border-color: transparent;
    background: #059669;
  }
  .tag-pill {
    background: #059669;
    border: 1px solid transparent;
    color: #fff;
    padding: 4px 8px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-family: var(--font-family-monospace);
    cursor: pointer;
    transition: all 0.2s;
  }
  .tag-pill:hover {
    filter: brightness(1.2);
    color: #fff;
  }
  .tag-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #059669;
    border: 1px solid transparent;
    color: #fff;
    padding: 4px 8px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-family: var(--font-family-monospace);
  }
  .tag-chip-remove {
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    opacity: 0.8;
  }
  .tag-chip-remove:hover {
    opacity: 1;
  }
  select:disabled, input[type="text"]:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>

<script src="/assets/js/posts/Filtrar_Certificados/filtro_certificados.js"></script>
