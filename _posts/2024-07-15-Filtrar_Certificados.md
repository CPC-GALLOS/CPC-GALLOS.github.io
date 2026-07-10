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

> Es inviable seguir actualizando esta lista, asi que ambos post deberian estar basados en un mismo api, que debera crearse y resolverse siguiendo el [ISSUE en GH Projects](https://github.com/orgs/CPC-GALLOS/projects/1?pane=issue&itemId=205944751&issue=CPC-GALLOS%7CCPC-GALLOS.github.io%7C4)

<div class="custom_container max-width">
    <div class="custom_card max-width" id="filter-checks">
        <h4>Filtrado por tipo</h4>
          <label><input type="radio" name="type" value="all1" checked  onchange="filterCards()"> Todos </label>
          <label><input type="radio" name="type" value="certification" onchange="filterCards()"> Certificaciones </label>
          <label><input type="radio" name="type" value="certificate"   onchange="filterCards()"> Certificados </label>
          <label><input type="radio" name="type" value="badge"         onchange="filterCards()"> Insignias </label>
        <h4>Filtrado por emisor</h4>
          <label><input type="radio" name="issuer" value="all2" checked onchange="filterCards()"> Todos </label>
          <label><input type="radio" name="issuer" value="microsoft"    onchange="filterCards()"> Microsoft </label>
          <label><input type="radio" name="issuer" value="amazon"       onchange="filterCards()"> Amazon </label>
          <label><input type="radio" name="issuer" value="huawei"       onchange="filterCards()"> Huawei </label>
          <label><input type="radio" name="issuer" value="ibm"          onchange="filterCards()"> IBM </label>
          <label><input type="radio" name="issuer" value="oracle"       onchange="filterCards()"> Oracle </label>
          <label><input type="radio" name="issuer" value="github"       onchange="filterCards()"> GitHub </label>
          <label><input type="radio" name="issuer" value="gitlab"       onchange="filterCards()"> GitLab   </label>
          <label><input type="radio" name="issuer" value="cisco"        onchange="filterCards()"> Cisco </label>
          <label><input type="radio" name="issuer" value="fortinet"     onchange="filterCards()"> Fortinet </label>
          <label><input type="radio" name="issuer" value="linux"        onchange="filterCards()"> Linux Foundation </label>
          <label><input type="radio" name="issuer" value="harvard"      onchange="filterCards()"> Harvard </label>
          <label><input type="radio" name="issuer" value="helsinki"     onchange="filterCards()"> Helsinki </label>
          <label><input type="radio" name="issuer" value="opencv"       onchange="filterCards()"> OpenCV </label>
          <label><input type="radio" name="issuer" value="hackerrank"   onchange="filterCards()"> Hacker Rank </label>
          <label><input type="radio" name="issuer" value="kaggle"       onchange="filterCards()"> Kaggle </label>
          <label><input type="radio" name="issuer" value="freecodecamp" onchange="filterCards()"> Free Code Camp </label>
          <label><input type="radio" name="issuer" value="carlosslim"   onchange="filterCards()"> Fundación Carlos Slim </label>
          <label><input type="radio" name="issuer" value="cato"         onchange="filterCards()"> Cato Networks </label>
          <label><input type="radio" name="issuer" value="wolfram"      onchange="filterCards()"> Wolfram U </label>
        <h4>Filtrado por tema</h4>
          <label><input type="checkbox" value="english"       onchange="filterCards()"> 📚 Inglés </label>
          <label><input type="checkbox" value="cybersecurity" onchange="filterCards()"> 🔒 Ciberseguridad </label>
          <label><input type="checkbox" value="devOps"        onchange="filterCards()"> 🛠️ Dev Ops </label>
          <label><input type="checkbox" value="networks"      onchange="filterCards()"> 🌐 Redes </label>
          <label><input type="checkbox" value="servers"       onchange="filterCards()"> 🖥 Servidores </label>
          <label><input type="checkbox" value="cloud"         onchange="filterCards()"> ☁️ Nube </label>
          <label><input type="checkbox" value="programming"   onchange="filterCards()"> 👨‍💻 Programación </label>
          <label><input type="checkbox" value="fullstack"     onchange="filterCards()"> ⚙️ Full Stack </label>
          <label><input type="checkbox" value="datascience"   onchange="filterCards()"> 📊 Ciencia de Datos </label>
          <label><input type="checkbox" value="ai"            onchange="filterCards()"> 🤖 ML - AI </label>
          <label><input type="checkbox" value="database"      onchange="filterCards()"> 🗄️ Bases de datos </label>
          <label><input type="checkbox" value="pm"            onchange="filterCards()"> 📋 Administración de proyectos </label>
    </div><!--filters custom_card-->
</div><!--filters custom_container-->

<div class="custom_container grid">

  <!-- certifications -->
  <div class="custom_card center" data-tags="certification english">
    <a href="https://www.efset.org/">EF SET English certification test</a>
  </div>
</div><!-- custom_container -->

<style>
  .grid>.custom_card{
    /*Fixes text alignent with images on cards*/  
    display: grid;
  }
  .custom_card {
    text-align: justify;
    background-color: var(--sidebar-bg);
    box-shadow: 4px 4px 2px 1px var(--sidebar-hover-bg);
    color: var(--text-color) !important;  
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    min-width: 10rem;
    max-width: 10rem;
  }
  .max-width{
    min-width: calc(100%)!important;
    max-width: calc(100%) !important;
  }
  .custom_container{
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    margin: 0 auto;
  }
  input {
    appearance: none;
    vertical-align: middle;
    outline: none;
    width: 1rem;
    height: 1rem;
    border: 2px solid var(--mask-bg);
    border-color:  var(--mask-bg);
    border-radius: 4px;
    transition: background-color 0.3s, border-color 0.3s;
  }
  input[type="radio"] {
    border-radius: 50%;
  }
  input:checked {
    background-color: var(--mask-bg);
  }
  .center{
    margin-top: auto;
    text-align: center;
  }
  #filter-checks {
    display: inline-block;
  }
  #filter-checks label {
    display: inline-flex;
    align-items: center;
    margin-right: 5px;
  }
  #filter-checks label input {
    margin-right: 5px;
  }
  @media screen and (max-width: 670px) {
    .custom_card {
      min-width: 8rem;
      max-width: 8rem;
    }
  }
</style>

<script src="/assets/js/posts/Filtrar_Certificados/filtro_certificados.js"></script>
