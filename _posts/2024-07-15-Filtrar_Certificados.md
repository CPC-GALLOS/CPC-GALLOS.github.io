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
image:
---

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

<script>
  function updateURLfilters() {
    const checkboxes = document.querySelectorAll('#filter-checks input[type="checkbox"]:checked');
    const typeRadios = document.querySelectorAll('#filter-checks input[name="type"]:checked');
    const issuerRadios = document.querySelectorAll('#filter-checks input[name="issuer"]:checked');
    const selectedTags = Array.from(checkboxes).map(checkbox => checkbox.value.toLowerCase());
    const selectedType = typeRadios.length ? typeRadios[0].value.toLowerCase() : 'all1';
    const selectedIssuer = issuerRadios.length ? issuerRadios[0].value.toLowerCase() : 'all2';
    const url = new URL(window.location);
    if (selectedTags.length > 0) {
      url.searchParams.set('tags', selectedTags.join(','));
    } else {
      url.searchParams.delete('tags');
    }
    if (selectedType !== 'all1') {
      url.searchParams.set('type', selectedType);
    } else {
      url.searchParams.delete('type');
    }
    if (selectedIssuer !== 'all2') {
      url.searchParams.set('issuer', selectedIssuer);
    } else {
      url.searchParams.delete('issuer');
    } 
    window.history.replaceState(null, '', url.toString());
  }
  function setFiltersFromURL() {
    const url = new URL(window.location);
    const tags = url.searchParams.get('tags');
    const type = url.searchParams.get('type');
    const issuer = url.searchParams.get('issuer');
    if (tags) {
      const selectedTags = tags.split(',');
      selectedTags.forEach(tag => {
        const checkbox = document.querySelector(`#filter-checks input[type="checkbox"][value="${tag}"]`);
        if (checkbox) {
          checkbox.checked = true;
        }
      });
    }
    if (type) {
      const radio = document.querySelector(`#filter-checks input[name="type"][value="${type}"]`);
      if (radio) {
        radio.checked = true;
      }
    }
    if (issuer) {
      const radio = document.querySelector(`#filter-checks input[name="issuer"][value="${issuer}"]`);
      if (radio) {
        radio.checked = true;
      }
    }
    filterCards();
  }
  function filterCards() {
    const cards = document.querySelectorAll('.custom_card:not(#filter-checks)');
    const typeRadios = document.querySelectorAll('#filter-checks input[name="type"]:checked');
    const issuerRadios = document.querySelectorAll('#filter-checks input[name="issuer"]:checked');
    const checkboxes = document.querySelectorAll('#filter-checks input[type="checkbox"]:checked');
    const selectedTags = Array.from(checkboxes).map(checkbox => checkbox.value.toLowerCase());
    const selectedType = typeRadios.length ? typeRadios[0].value.toLowerCase() : 'all1';
    const selectedIssuer = issuerRadios.length ? issuerRadios[0].value.toLowerCase() : 'all2';
    cards.forEach(custom_card => {
      const tagsInCard = custom_card.getAttribute('data-tags').toLowerCase().split(' ');
      const matchesType = selectedType === 'all1' || tagsInCard.includes(selectedType);
      const matchesIssuer = selectedIssuer === 'all2' || tagsInCard.includes(selectedIssuer);
      const matchesTags = selectedTags.every(tag => tagsInCard.includes(tag));
      if (matchesType && matchesIssuer && (selectedTags.length === 0 || matchesTags)) {
        custom_card.style.display = '';
      } else {
        custom_card.style.display = 'none';
      }
    });
    updateURLfilters();
  }
  document.addEventListener('DOMContentLoaded', () => {
    setFiltersFromURL();
    const inputs = document.querySelectorAll('#filter-checks input');
    inputs.forEach(input => {
      input.addEventListener('change', filterCards);
    });
  });
</script>

> Si deseas ver una lista detallada sobre los temas junto con becas, revisa este post: [Certificaciones Gratuitas](https://cpc-gallos.github.io/blog/Certificaciones_Gratuitas/). Si buscas ofertas en certificaciónes con costo, revisa este post: [Ofertas en Certificaciones](https://cpc-gallos.github.io/blog/Ofertas_Certificaciones/)
{: .prompt-info }

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
          <label><input type="checkbox" value="ai"            onchange="filterCards()"> 🤖 IA </label>
          <label><input type="checkbox" value="database"      onchange="filterCards()"> 🗄️ Bases de datos </label>
          <label><input type="checkbox" value="pm"            onchange="filterCards()"> 📋 Administración de proyectos </label>
    </div><!--filters custom_card-->
</div><!--filters custom_container-->

<div class="custom_container grid">

  <!-- certifications -->
  <div class="custom_card center" data-tags="certification oracle pm">
    <a href="https://education.oracle.com/oracle-guided-learning-project-management-foundations-associate-rel-1-beta/pexam_1Z0-1126-1">Oracle Project Management Foundations Associate (Beta)</a>
  </div>
  <div class="custom_card center" data-tags="certification oracle cloud">
    <a href="https://education.oracle.com/es/oracle-cloud-infrastructure-2024-foundations-associate/pexam_1Z0-1085-24">OCI Foundations Associate (2024)</a>
  </div>
  <div class="custom_card center" data-tags="certification oracle cloud">
    <a href="https://education.oracle.com/es/ouexam-pexam_1z0-1122-24/pexam_1Z0-1122-24">OCI AI Foundations Associate (2024)</a>
  </div>
  <div class="custom_card center" data-tags="certification oracle cloud datascience">
    <a href="https://education.oracle.com/oracle-cloud-data-management-2023-foundations-associate/pexam_1Z0-1105-23">Oracle Cloud Data Management Foundations Associate (2023)</a>
  </div>
  <div class="custom_card center" data-tags="certification oracle cloud datascience">
    <a href="https://education.oracle.com/es/oracle-cloud-infrastructure-2024-data-foundation-associate/pexam_1Z0-1195-24">OCI Data Foundations Associate</a>
  </div>

  <!-- certificates -->
  <div class="custom_card center" data-tags="certificate gitlab devops">
    <a href="https://university.gitlab.com/learn/learning-path/gitlab-ci-fundamentals">Gitlab CI Fundamentals</a>
  </div>
  <div class="custom_card center" data-tags="certificate gitlab devops">
    <a href="https://university.gitlab.com/courses/teamops">Gitlab TeamOps Foundation</a>
  </div>
  <div class="custom_card center" data-tags="certificate gitlab devops">
    <a href="https://university.gitlab.com/courses/remote-foundations">Gitlab Remote Foundations Certification</a>
  </div>
  <div class="custom_card center" data-tags="certificate github devops">
    <a href="https://www.linkedin.com/learning/paths/career-essentials-in-github-professional-certificate">GitHub Professional Certificate</a>
  </div>
  <div class="custom_card center" data-tags="certificate opencv programming">
    <a href="https://opencv.org/university/free-opencv-course/">OpenCV Bootcamp</a>
  </div> 
  <div class="custom_card center" data-tags="certificate opencv programming ai">
    <a href="https://opencv.org/university/free-tensorflow-keras-course">OpenCV TensorFlow Bootcamp</a>
  </div>
  <div class="custom_card center" data-tags="certificate hackerrank programming">
    <a href="https://www.hackerrank.com/skills-verification/problem_solving_basic">Hacker Rank Problem Solving (Basic)</a>
  </div> 
  <div class="custom_card center" data-tags="certificate hackerrank programming">
    <a href="https://www.hackerrank.com/skills-verification/problem_solving_intermediate">Hacker Rank Problem Solving (Intermediate)</a>
  </div> 
  <div class="custom_card center" data-tags="certificate hackerrank programming">
    <a href="https://www.hackerrank.com/skills-verification/c_sharp_basic">Hacker Rank C# (Basic)</a>
  </div>
  <div class="custom_card center" data-tags="certificate hackerrank fullstack">
    <a href="https://www.hackerrank.com/skills-verification/css">Hacker Rank CSS (Basic)</a>
  </div>
  <div class="custom_card center" data-tags="certificate hackerrank programming fullstack">
    <a href="https://www.hackerrank.com/skills-verification/javascript_basic">Hacker Rank JavaScript (Basic)</a>
  </div>
  <div class="custom_card center" data-tags="certificate hackerrank programming fullstack">
    <a href="https://www.hackerrank.com/skills-verification/javascript_basic">Hacker Rank JavaScript (Intermediate)</a>
  </div>
  <div class="custom_card center" data-tags="certificate hackerrank programming">
    <a href="https://www.hackerrank.com/skills-verification/java_basic">Hacker Rank Java (Basic)</a>
  </div>
  <div class="custom_card center" data-tags="certificate hackerrank programming">
    <a href="https://www.hackerrank.com/skills-verification/python_basic">Hacker Rank Python (Basic)</a>
  </div>
  <div class="custom_card center" data-tags="certificate hackerrank programming datascince">
    <a href="https://www.hackerrank.com/skills-verification/r_basic">Hacker Rank R (Basic)</a>
  </div>
  <div class="custom_card center" data-tags="certificate hackerrank programming datascience">
    <a href="https://www.hackerrank.com/skills-verification/r_intermediate">Hacker Rank R (Intermediate)</a>
  </div>
  <div class="custom_card center" data-tags="certificate hackerrank database">
    <a href="https://www.hackerrank.com/skills-verification/sql_basic">Hacker Rank SQL (Basic)</a>
  </div>
  <div class="custom_card center" data-tags="certificate hackerrank database">
    <a href="https://www.hackerrank.com/skills-verification/sql_intermediate">Hacker Rank SQL (Intermediate)</a>
  </div> 
  <div class="custom_card center" data-tags="certificate hackerrank database">
    <a href="https://www.hackerrank.com/skills-verification/sql_advanced">Hacker Rank SQL (Advanced)</a>
  </div>
  <div class="custom_card center" data-tags="certificate carlosslim programming">
    <a href="https://capacitateparaelempleo.org/interna-diplomado/26">Desarrollo de sitios web y apps móviles</a>
  </div>
  <div class="custom_card center" data-tags="certificate carlosslim programming fullstack">
    <a href="https://capacitateparaelempleo.org/interna-diplomado/62">Fundamentes de Full Stack</a>
  </div>
  <div class="custom_card center" data-tags="certificate carlosslim networks">
    <a href="https://capacitateparaelempleo.org/interna-diplomado/23">Técnico en sistemas informáticos</a>
  </div>
  <div class="custom_card center" data-tags="certificate carlosslim networks">
    <a href="https://capacitateparaelempleo.org/interna-diplomado/23">Técnico en redes</a>
  </div>
  <div class="custom_card center" data-tags="certificate carlosslim cloud">
    <a href="https://capacitateparaelempleo.org/interna-diplomado/30">Técnico de cómputo en la nube</a>
  </div>
  <div class="custom_card center" data-tags="certificate carlosslim programming">
    <a href="https://capacitateparaelempleo.org/interna-especialidad/4">Integrador de servicios IoT</a>
  </div>
  <div class="custom_card center" data-tags="certificate carlosslim datascience">
    <a href="https://capacitateparaelempleo.org/interna-especialidad/6">Tratamiento de datos</a>
  </div>
  <div class="custom_card center" data-tags="certificate kaggle ai">
    <a href="https://www.kaggle.com/learn/intro-to-machine-learning">Kaggle Intro to Machine Learning</a>
  </div> 
    <div class="custom_card center" data-tags="certificate kaggle">
    <a href="https://www.kaggle.com/learn/intermediate-machine-learning">Intermediate Machine Learning</a>
  </div> 
  <div class="custom_card center" data-tags="certificate kaggle ai">
    <a href="https://www.kaggle.com/learn/intro-to-deep-learning">Kaggle Intro to Deep Learning</a>
  </div>
  <div class="custom_card center" data-tags="certificate kaggle database">
    <a href="https://www.kaggle.com/learn/intro-to-sql">Kaggle Intro to SQL</a>
  </div>
    <div class="custom_card center" data-tags="certificate kaggle">
    <a href="https://www.kaggle.com/learn/advanced-sql">Advanced SQL</a>
  </div>
  <div class="custom_card center" data-tags="certificate kaggle datascience">
    <a href="https://www.kaggle.com/learn/data-visualization">Kaggle Data Visualization</a>
  </div>
  <div class="custom_card center" data-tags="certificate kaggle programming">
    <a href="https://www.kaggle.com/learn/python">Kaggle Python</a>
  </div>
  <div class="custom_card center" data-tags="certificate kaggle programming">
    <a href="https://www.kaggle.com/learn/pandas">Kaggle Pandas Lib</a>
  </div>
  <div class="custom_card center" data-tags="certificate Microsoft programming">
    <a href="https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/">MS Foundational C#</a>
  </div>
  <div class="custom_card center" data-tags="certificate freecodecamp english">
    <a href="https://www.freecodecamp.org/learn/a2-english-for-developers/">freecodecamp A2 English for Developers</a>
  </div>
  <div class="custom_card center" data-tags="certificate freecodecamp programming">
    <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/">freecodecamp JavaScript Algorithms and Data Structures</a>
  </div>
  <div class="custom_card center" data-tags="certificate freecodecamp fullstack">
    <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/">freecodecamp Front End Development Libraries</a>
  </div>
  <div class="custom_card center" data-tags="certificate freecodecamp programming fullstack">
    <a href="https://www.freecodecamp.org/learn/back-end-development-and-apis/">freecodecamp Back End Development and APIs</a>
  </div>
  <div class="custom_card center" data-tags="certificate freecodecamp database">
    <a href="https://www.freecodecamp.org/learn/relational-database/">freecodecamp Relational Database</a>
  </div>
  <div class="custom_card center" data-tags="certificate freecodecamp datascience">
    <a href="https://www.freecodecamp.org/learn/data-analysis-with-python/">freecodecamp Data Analysis with Python</a>
  </div>
  <div class="custom_card center" data-tags="certificate freecodecamp datascience">
    <a href="https://www.freecodecamp.org/learn/data-visualization/">freecodecamp Data Visualization</a>
  </div>
  <div class="custom_card center" data-tags="certificate freecodecamp ai">
    <a href="https://www.freecodecamp.org/learn/machine-learning-with-python/">freecodecamp Machine Learning with Python</a>
  </div>
  <div class="custom_card center" data-tags="certificate freecodecamp cybersecurity">
    <a href="https://www.freecodecamp.org/learn/information-security/">freecodecamp Information Security Certification</a>
  </div>
  <div class="custom_card center" data-tags="certificate harvard programming fullstack">
    <a href="https://cs50.harvard.edu/x/">Harvard CS50X</a>
  </div>
  <div class="custom_card center" data-tags="certificate harvard programming">
    <a href="https://cs50.harvard.edu/python/">Harvard CS50 Python</a>
  </div> 
  <div class="custom_card center" data-tags="certificate harvard programming datascience">
    <a href="https://cs50.harvard.edu/r/">Harvard CS50 R</a>
  </div> 
  <div class="custom_card center" data-tags="certificate harvard ai">
    <a href="https://cs50.harvard.edu/ai/">Harvard CS50 AI</a>
  </div> 
  <div class="custom_card center" data-tags="certificate harvard cybersecurity">
    <a href="https://cs50.harvard.edu/cybersecurity/">Harvard CS50 CS</a>
  </div> 
  <div class="custom_card center" data-tags="certificate harvard database">
    <a href="https://cs50.harvard.edu/sql/">Harvard CS50 SQL</a>
  </div> 
  <div class="custom_card center" data-tags="certificate helsinki programming">
    <a href="https://programming-24.mooc.fi/">Helsinki Python Programming MOOC 2024</a>
  </div>
  <div class="custom_card center" data-tags="certificate helsinki programming">
    <a href="https://java-programming.mooc.fi/">Helsinki Java Programming MOOC</a>
  </div>
  <div class="custom_card center" data-tags="certificate helsinki devops">
    <a href="https://devopswithdocker.com/">Helsinki DevOps with Docker</a>
  </div>
  <div class="custom_card center" data-tags="certificate helsinki devops">
    <a href="https://devopswithkubernetes.com/">Helsinki DevOps with Kubernetes</a>
  </div>
  <div class="custom_card center" data-tags="certificate helsinki programming fullstack">
    <a href="https://fullstackopen.com/en/">Helsinki Full Stack open</a>
  </div> 
  <div class="custom_card center" data-tags="certificate helsinki ai">
    <a href="https://www.elementsofai.com/">Helsinki Elements of AI</a>
  </div>
  <div class="custom_card center" data-tags="certificate linux devops">
    <a href="https://training.linuxfoundation.org/training/git-for-distributed-software-development-lfd109x/">Linux Git for Distributed Software Development</a>
  </div>
  <div class="custom_card center" data-tags="certificate linux devops">
    <a href="https://training.linuxfoundation.org/training/introduction-to-kubernetes/">Linux Introduction to Kubernetes</a>
  </div>
  <div class="custom_card center" data-tags="certificate linux cybersecurity">
    <a href="https://training.linuxfoundation.org/training/cybersecurity-essentials-lfc108/">Linux Cybersecurity Essentials</a>
  </div>
  <div class="custom_card center" data-tags="certificate linux servers">
    <a href="https://training.linuxfoundation.org/training/introduction-to-linux/">Linux: Introduction to Linux</a>
  </div>
  <div class="custom_card center" data-tags="certificate microsoft programming">
    <a href="https://www.linkedin.com/learning/paths/career-essentials-in-software-development-by-microsoft-and-linkedin">MS Career Essentials in Software Developer</a>
  </div>
  <div class="custom_card center" data-tags="certificate microsoft datascience">
    <a href="https://www.linkedin.com/learning/paths/career-essentials-in-data-analysis-by-microsoft-and-linkedin">MS Career Essentials in Data analyst</a>
  </div>
  <div class="custom_card center" data-tags="certificate microsoft servers">
    <a href="https://www.linkedin.com/learning/career-essentials-in-system-administration-by-microsoft-and-linkedin">MS Career Essentials in Systems administrator</a>
  </div>
  <div class="custom_card center" data-tags="certificate microsoft pm">
    <a href="https://www.linkedin.com/learning/paths/career-essentials-in-project-management-by-microsoft-and-linkedin">MS Career Essentials in Project Manager</a>
  </div>
  <div class="custom_card center" data-tags="certificate microsoft cybersecurity">
    <a href="https://www.linkedin.com/learning/paths/career-essentials-in-cybersecurity-by-microsoft-and-linkedin">MS Career Essentials in Cybersecurity</a>
  </div>
  <div class="custom_card center" data-tags="certificate microsoft ai">
    <a href="https://www.linkedin.com/learning/paths/career-essentials-in-generative-ai-by-microsoft-and-linkedin">MS Career Essentials in Generative AI</a>
  </div>
  
  <!-- badges -->
  <div class="custom_card center" data-tags="badge fortinet cybersecurity">
    <a href="https://training.fortinet.com/local/staticpage/view.php?page=fcf_cybersecurity">Fortinet Certified Fundamentals Cybersecurity</a>
  </div>
  <div class="custom_card center" data-tags="badge cisco cybersecurity">
    <a href="https://www.netacad.com/courses/cybersecurity/cybersecurity-essentials">Cisco Cybersecurity Essentials</a>
  </div>
  <div class="custom_card center" data-tags="badge cisco cybersecurity">
    <a href="https://skillsforall.com/career-path/cybersecurity?courseLang=en-US">Cisco Junior Cybersecurity Analyst</a>
  </div>
  <div class="custom_card center" data-tags="badge cisco networks">
    <a href="https://www.netacad.com/courses/networking/networking-essentials">Cisco Networking Essentials</a>
  </div>
  <div class="custom_card center" data-tags="badge cisco networks">
    <a href="https://skillsforall.com/career-path/network-technician?courseLang=en-US">Cisco Network Technician</a>
  </div>
  <div class="custom_card center" data-tags="badge cisco english">
    <a href="https://skillsforall.com/course/english-for-it1?courseLang=en-US">Cisco English for IT 1</a>
  </div>
  <div class="custom_card center" data-tags="badge cisco english">
    <a href="https://skillsforall.com/course/english-for-it2?courseLang=en-US">Cisco English for IT 2</a>
  </div>
  <div class="custom_card center" data-tags="badge cisco servers">
    <a href="https://www.netacad.com/courses/os-it/ndg-linux-essentials">Cisco NDG: linux essentials</a>
  </div>
  <div class="custom_card center" data-tags="badge cisco programming">
    <a href="https://www.netacad.com/courses/programming/essentials-programming-c-plus-plus">Cisco CPA: Programming Essentials in C++</a>
  </div>
  <div class="custom_card center" data-tags="badge cisco programming">
    <a href="https://www.netacad.com/courses/programming/essentials-programming-c-plus-plus">Cisco PCAP: Programming Essentials in Python</a>
  </div>
  <div class="custom_card center" data-tags="badge ibm servers">
    <a href="https://www.ibm.com/z/resources/zxplore">IBM Maiframe Zxplore </a>
  </div>
  <div class="custom_card center" data-tags="badge ibm programming datascience">
    <a href="https://cognitiveclass.ai/courses/python-for-data-science">IBM Python for Data Science</a>
  </div>
  <div class="custom_card center" data-tags="badge ibm datascience">
    <a href="https://students.yourlearning.ibm.com/activity/PLAN-0EC2BCEA3C39">IBM Data Fundamentals</a>
  </div>
  <div class="custom_card center" data-tags="badge ibm devops">
    <a href="https://cognitiveclass.ai/courses/docker-essentials">IBM Docker Essentials: A Developer Introduction</a>
  </div>
  <div class="custom_card center" data-tags="badge ibm devops">
    <a href="https://cognitiveclass.ai/courses/kubernetes-course">IBM Introduction to Containers, Kubernetes, and OpenShift V2</a>
  </div>
  <div class="custom_card center" data-tags="badge ibm devops">
    <a href="https://developer.ibm.com/badges/best-practices-building-container-images/">IBM Building Container Images</a>
  </div>
  <div class="custom_card center" data-tags="badge ibm servers networks">
    <a href="https://developer.ibm.com/badges/mq-essentials/">IBM MQ Developer Essentials</a>
  </div>
  <div class="custom_card center" data-tags="badge ibm programming">
    <a href="https://developer.ibm.com/badges/event-streams-developer-essentials/">IBM Event Streams Developer Essentials</a>
  </div>
  <div class="custom_card center" data-tags="badge ibm ai programming">
    <a href="https://cognitiveclass.ai/courses/machine-learning-with-python">IBM Machine Learning with Python</a>
  </div>
  <div class="custom_card center" data-tags="badge ibm ai">
    <a href="https://students.yourlearning.ibm.com/activity/PLAN-B2125F145F0E">AI Foundations: A Collaboration of ISTE and IBM</a>
  </div>
  <div class="custom_card center" data-tags="badge ibm ai">
    <a href="https://students.yourlearning.ibm.com/activity/PLAN-CC702B39D429">IBM Artificial Intelligence Fundamentals</a>
  </div>
  <div class="custom_card center" data-tags="badge ibm ai">
    <a href="https://skills.yourlearning.ibm.com/activity/PLAN-3C28E1067B08?ngo-id=0302">IBM Building AI Solutions Using Advanced Algorithms</a>
  </div>
  <div class="custom_card center" data-tags="badge ibm ai">
    <a href="https://skills.yourlearning.ibm.com/activity/PLAN-9E14CB5C4540?ngo-id=0302">IBM Generative AI in Action</a>
  </div>
  <div class="custom_card center" data-tags="badge ibm ai datascience">
    <a href="https://skills.yourlearning.ibm.com/activity/PLAN-D8E7C82C1D76?ngo-id=0302">IBM Machine Learning for Data Science Projects</a>
  </div>
  <div class="custom_card center" data-tags="badge ibm cybersecurity">
    <a href="https://ibm.biz/Bdv38e">IBM Cybersecurity Fundamentals</a>
  </div>
  <div class="custom_card center" data-tags="badge ibm cybersecurity">
    <a href="https://skills.yourlearning.ibm.com/activity/PLAN-4FB8400F05FC?ngo-id=0302">IBM Cybersecurity Fundamentals</a>
  </div>
  <div class="custom_card center" data-tags="badge ibm cloud">
    <a href="https://skills.yourlearning.ibm.com/activity/PLAN-2EC3A305F2C3?ngo-id=0302">IBM Cloud Computing Fundamentals</a>
  </div>
  <div class="custom_card center" data-tags="badge oracle devops">
    <a href="https://mylearn.oracle.com/ou/learning-path/become-an-oci-kubernetes-engine-specialist/134984">OCI Kubernetes Engine Specialist</a>
  </div>
  <div class="custom_card center" data-tags="badge oracle cloud servers">
    <a href="https://mylearn.oracle.com/ou/learning-path/oracle-linux-system-administration-on-oci/110062">Oracle Linux: System Administration on OCI</a>
  </div>
  <div class="custom_card center" data-tags="badge oracle cloud">
    <a href="https://mylearn.oracle.com/ou/learning-path/mysql-heatwave-implementation/101969">Oracle MySQL HeatWave foundations</a>
  </div>
  <div class="custom_card center" data-tags="badge oracle cloud database">
    <a href="https://mylearn.oracle.com/ou/learning-path/become-an-oracle-databaseazure-specialist/135857">Oracle Database@Azure Specialist</a>
  </div>
  <div class="custom_card center" data-tags="badge oracle cloud database">
    <a href="https://mylearn.oracle.com/ou/learning-path/mysql-explorer/79674">Oracle MySQL Explorer</a>
  </div>
  <div class="custom_card center" data-tags="badge oracle cloud ai">
    <a href="https://mylearn.oracle.com/ou/learning-path/oracle-apex-empowering-low-code-apps-with-ai/138290">Oracle APEX + AI</a>
  </div>
  <div class="custom_card center" data-tags="badge oracle cloud database">
    <a href="https://mylearn.oracle.com/ou/learning-path/become-a-exadata-database-service-cloud-administrator/121071">Oracle Exadata Database Service Cloud Administrator</a>
  </div>
  <div class="custom_card center" data-tags="badge oracle cyberSecurity">
    <a href="https://mylearn.oracle.com/ou/learning-path/discover-and-train-in-cybersecurity/100307">Oracle Discover and Train in CyberSecurity</a>
  </div>
  <div class="custom_card center" data-tags="badge oracle cloud">
    <a href="https://mylearn.oracle.com/ou/learning-path/oracle-cloud-overview/115954">Oracle Cloud Overview</a>
  </div>
  <div class="custom_card center" data-tags="badge microsoft programming ai">
    <a href="https://learn.microsoft.com/en-us/training/paths/tensorflow-fundamentals/">MS TensorFlow fundamentals</a>
  </div>
  <div class="custom_card center" data-tags="badge microsoft devops">
    <a href="https://learn.microsoft.com/en-us/training/paths/intro-to-vc-git/">MS version control with Git</a>
  </div>
  <div class="custom_card center" data-tags="badge microsoft devops">
    <a href="https://aka.ms/LearnGitHubPath">MS GitHub Foundations</a>
  </div>
  <div class="custom_card center" data-tags="badge microsoft devops">
    <a href="https://learn.microsoft.com/en-us/training/paths/github-administration-products/">MS GitHub fundamentals</a>
  </div>
  <div class="custom_card center" data-tags="badge microsoft devops">
    <a href="https://learn.microsoft.com/en-us/training/paths/manage-project-lifecycle-github/">MS Manage lifecycle of projects on GitHub</a>
  </div>
  <div class="custom_card center" data-tags="badge microsoft devops">
    <a href="https://learn.microsoft.com/en-us/training/paths/az-400-manage-source-control/?tab=tab-learning-paths">MS Manage source control</a>
  </div>
  <div class="custom_card center" data-tags="badge microsoft devops">
    <a href="https://learn.microsoft.com/en-us/training/paths/devops-foundations-core-principles-practices/?tab=tab-learning-paths">MS DevOps foundations</a>
  </div>
  <div class="custom_card center" data-tags="badge microsoft devops cloud">
    <a href="https://learn.microsoft.com/en-us/training/paths/intro-to-kubernetes-on-azure/?tab=tab-learning-paths">MS Kubernetes on Azure</a>
  </div>
  <div class="custom_card center" data-tags="badge microsoft devops">
    <a href="https://learn.microsoft.com/en-us/training/modules/learn-continuous-integration-github-actions/">MS CI with GitHub Actions</a>
  </div>
  <div class="custom_card center" data-tags="badge microsoft programming">
    <a href="https://learn.microsoft.com/en-us/training/paths/build-dotnet-applications-csharp/?tab=tab-learning-paths">MS .NET applications with C#</a>
  </div>
  <div class="custom_card center" data-tags="badge microsoft cloud database">
    <a href="https://learn.microsoft.com/en-us/training/paths/azure-sql-fundamentals/">MS Azure SQL fundamentals</a>
  </div>
  <div class="custom_card center" data-tags="badge huawei programming">
    <a href="https://e.huawei.com/en/talent/outPage/#/sxz-course/home?courseId=GREVe60yM27kPS-6tXC2f2BRJaY">Huawei Algorithm and Program Design</a>
  </div>
  <div class="custom_card center" data-tags="badge huawei cloud">
    <a href="https://e.huawei.com/en/talent/outPage/#/sxz-course/home?courseId=Se1I614YHgqqGiacs4WLZCkvGGM">Huawei Cloud Advanced: Architecture and Technologies</a>
  </div>
  <div class="custom_card center" data-tags="badge huawei networks">
    <a href="https://e.huawei.com/en/talent/outPage/#/sxz-course/home?courseId=tpDnx8BSoUVoUNyOKHI5UTQi-oc">Huawei HCIA-Datacom V1.0</a>
  </div>
  <div class="custom_card center" data-tags="badge huawei ai">
    <a href="https://e.huawei.com/en/talent/outPage/#/sxz-course/home?courseId=LEr4w0UtMYfpbhkgY_Yd5QqFAO0">Huawei HCIA-AI V3.5</a>
  </div>
  <div class="custom_card center" data-tags="badge huawei Cybersecurity">
    <a href="https://e.huawei.com/en/talent/outPage/#/sxz-course/home?courseId=0z7mBkdgGnzXrU5PAiIdaA46Q5k">Huawei HCIA-Security V4.0</a>
  </div>
  <div class="custom_card center" data-tags="badge huawei Cybersecurity">
    <a href="https://e.huawei.com/en/talent/outPage/#/sxz-course/home?courseId=QK6LXTniwwARwGticjMM3ElHboM">Huawei Next-Gen Cyber Security</a>
  </div>
  <div class="custom_card center" data-tags="badge huawei Cybersecurity">
    <a href="https://e.huawei.com/en/talent/outPage/#/sxz-course/home?courseId=hfiCUOBrxyx41SlkIIGparn-Mas">Huawei Network Security</a>
  </div>
  <div class="custom_card center" data-tags="badge amazon networks">
    <a href="https://explore.skillbuilder.aws/learn/public/learning_plan/view/1944/networking-core-knowledge-badge-readiness-path?trk=e6934e10-170d-4c94-bf7b-b88f95ed0f47&sc_channel=el">AWS Networking Core</a>
  </div>
  <div class="custom_card center" data-tags="badge amazon cloud">
    <a href="https://explore.skillbuilder.aws/learn/public/learning_plan/view/1991/migration-foundations-knowledge-badge-readiness-path?trk=e6934e10-170d-4c94-bf7b-b88f95ed0f47&sc_channel=el">AWS Migration Foundations</a>
  </div>
  <div class="custom_card center" data-tags="badge amazon cloud">
    <a href="https://explore.skillbuilder.aws/learn/public/learning_plan/view/82/cloud-essentials-learning-plan?trk=e6934e10-170d-4c94-bf7b-b88f95ed0f47&sc_channel=el">AWS Cloud Essentials</a>
  </div>
  <div class="custom_card center" data-tags="badge amazon cloud">
    <a href="https://explore.skillbuilder.aws/learn/public/learning_plan/view/92/serverless-learning-plan?trk=e6934e10-170d-4c94-bf7b-b88f95ed0f47&sc_channel=el">AWS Serverless</a>
  </div>  
  <div class="custom_card center" data-tags="badge amazon cloud">
    <a href="https://explore.skillbuilder.aws/learn/public/learning_plan/view/1044/solutions-architect-learning-plan-earn-a-learning-badge?trk=8c13936a-6ba2-46cd-a416-69143c458b12&sc_channel=sm">AWS Solutions Architect</a>
  </div>

</div><!-- custom_container -->