# CPC-GALLOS Blog

¡Bienvenido al repositorio oficial del blog del **Club de Programación Competitiva GALLOS** de la Universidad Autónoma de Aguascalientes!

Este sitio está construido con [Jekyll](https://jekyllrb.com/) utilizando el tema [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) y está alojado en GitHub Pages.

> [!IMPORTANT]
> **¡Buscamos contribuidores y mantenedores!**
> Se aceptan Pull Requests (PR) tanto de miembros del club como de personas ajenas a él. Todos los cambios propuestos son bienvenidos; deja tu PR y a la brevedad será analizado y mergeado.

---

## 🚀 Inicio Rápido (Desarrollo Local)

### 1. Prerrequisitos

- **Ruby** (v3.3+)
- **Bundler** (se instala con `gem install bundler`)
- **GCC/Make** (necesario para construir dependencias nativas)

*(Para instrucciones detalladas de instalación por Sistema Operativo, Docker o Nix, consulta la sección de [Instalación Avanzada](#-instalación-avanzada)).*

### 2. Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone git@github.com:CPC-GALLOS/CPC-GALLOS.github.io.git
cd CPC-GALLOS.github.io
bundle install
```

### 3. Servidor Local

```bash
bundle exec jekyll serve
```

Luego navega a `http://127.0.0.1:4000` o `http://localhost:4000/` en tu navegador.

---

## 📝 Guía de Edición y Creación de Contenido

### Creando un Nuevo Post

Para crear un nuevo blog post desde la terminal, puedes ejecutar:

```bash
bundle exec jekyll post "Titulo del blog"
```

### Convenciones de los Posts (`_posts/`)

- **Formato del archivo:** `YYYY-MM-DD-Titulo_Con_Guiones_Bajos.md`
- **Idioma:** Todo el contenido principal debe estar en Español (los fragmentos de código pueden estar en Inglés o C++).
- **Front Matter (Encabezado Obligatorio):**

  ```yaml
  ---
  title: "Título"
  description: "Breve descripción"
  date: YYYY-MM-DD HH:MM:SS +/-TTTT
  categories: [Club] # o [Recursos], etc.
  author: author_id # Debe coincidir con un ID en _data/authors.yml
  tags: [tag1, tag2] # En minúsculas y separados por comas
  pin: false
  mermaid: false
  image: /assets/img/posts/nombre-de-imagen.png
  ---
  ```

- **Enlaces:** DEBEN usar explícitamente `https://` (el uso de `http://` causará fallos de compilación en los flujos de trabajo / CI).
- **Imágenes:** Las imágenes para los artículos deben ubicarse en `assets/img/posts/`. **(PRECAUCIÓN: No agregues imágenes en `assets/img/favicons/`).**

### Editando las Páginas Principales

- La página principal (sección "About") se edita en `_tabs/about.md`.
- Las demás pestañas y secciones del menú principal también se configuran dentro de la carpeta `_tabs/`.

Para una referencia más avanzada sobre el formato de los textos y Markdown en este tema, puedes revisar este [ejemplo en raw markdown](https://github.com/cotes2020/jekyll-theme-chirpy/blob/b641b364809ea15c46d16ce1379a267d395d55d0/_posts/2019-08-08-text-and-typography.md?plain=1#L65) y [su resultado visual renderizado](https://chirpy.cotes.page/posts/text-and-typography/).

---

## 🛠️ Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `bundle exec jekyll serve` | Levanta el servidor local para desarrollo |
| `bundle exec jekyll build` | Compila el sitio en la carpeta `_site` |
| `JEKYLL_ENV=production bundle exec jekyll b -d _site` | Compilación lista para producción |
| `bundle exec htmlproofer _site ...` | Ejecuta las pruebas locales de enlaces rotos y HTML |
| `bundle update` | Actualiza las dependencias de Ruby en el Gemfile.lock |

---

## ⚙️ Instalación Avanzada

<details>
<summary><strong>Instalación Nativa por Sistema Operativo</strong></summary>

- **Windows:** Usa [Scoop](https://scoop.sh/): `scoop install main/ruby`
- **macOS:** Usa Homebrew: `brew install --cask ruby`
- **Linux:** Busca cómo instalar `ruby` y `ruby-dev`/`ruby-devel` (dependiendo de la distribución).
  - *Fedora (RedHat):* Necesitas primero descargar gcc, g++ y make con el comando `sudo dnf group install "development-tools"`.
  - *Arch Linux:* Debido a que los paquetes de Ruby en Arch pueden estar desactualizados o ser conflictivos, se **recomienda usar Dev Containers (Docker)** o **Nix**.

</details>

<details>
<summary><strong>VS Code Dev Containers con Docker (Recomendado)</strong></summary>

Esta es una excelente alternativa para tener todo el entorno preparado sin afectar tu sistema base. Sigue la [Guía oficial de Dev Containers](https://code.visualstudio.com/docs/devcontainers/tutorial) si tienes dudas.

1. Instala Docker según tu SO:
   - *Windows:* `scoop install main/ruby` o `winget install -e --id Docker.DockerDesktop`
   - *macOS:* `brew install --cask docker`
   - *Arch Linux:* `sudo pacman -Sy docker` y `sudo systemctl enable --now docker`
2. Instala la extensión de [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) en VS Code.
3. Abre el proyecto en VS Code, presiona `F1` y busca **New Dev Container** o **Reopen in Container**, y luego elige el entorno de `ruby`.

</details>

<details>
<summary><strong>Nix-shell (Alternativa Avanzada)</strong></summary>

Si eres usuario de [Nix](https://nixos.org/download/), solamente ejecuta `nix-shell` dentro de la carpeta del proyecto. Automáticamente se usará el archivo `shell.nix` configurado con las dependencias necesarias. Una vez adentro, puedes proceder con el `bundle install`.
</details>
