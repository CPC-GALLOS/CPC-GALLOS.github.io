# Γα=Ω5 site

# Guía de instalación de entorno de desarrollo con ruby y Jekyll:

- Teniendo los permisos y llaves necesarias, clonar la repo con `git clone git@github.com:CPC-GALLOS/CPC-GALLOS.github.io.git` 
- Para Windows instalar con [scoop](https://scoop.sh/) ejecutando `scoop install main/ruby` en la terminal (powershell)
- para MacOS instalar con brew ejecutando `brew install --cask ruby`
- Para linux depende de la distro, solo busca en google como instalar `ruby` y `ruby-dev`/`ruby-devel`

> [!WARNING]  
> En Arch Linux ruby esta desactualizado, por lo que usar [Github Codespaces](https://github.com/features/codespaces), [cs50.dev](https://cs50.dev/),jruby o **containers de VScode**  son las unicas opciones, yo recomiendo los containers.

## Alternativa: VScode dev containers con docker

- Seguiendo esta [guia oficial](https://code.visualstudio.com/docs/devcontainers/tutorial)
- Para Windows instalar con `scoop install main/ruby` o con `winget install -e --id Docker.DockerDesktop`
- para MacOS instalar con `brew install --cask docker`
- Para Arch Linux ejecutamos `sudo pacman -Sy docker` y `sudo systemctl enable docker`
- Instalamos la extensión de [dev containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) en VScode
- Por último en VScode abrimos la carpeta del proyecto y precionamos `f1` para ejecutar el comando `New Dev Container` y elegimos a `ruby`

## Alternativa Avanzada: nix-shell

- Descarga e instala Nix (the package manager) a travez de este [link](https://nixos.org/download/)
- Ya instalado solo ejecuta nix-shell dentro de esta carpeta del proyecto y listo, continua los pasos

# Despues de instalar:

- Abrir la carpeta del proyecto en vscode 
- Ejecutar `bundle` dentro de la carpeta del proyecto para descargar las dependencias de ruby (solo la primera vez)
- Ejecutar `bundle update` dentro de la carpeta del proyecto para actualizar las dependencias de ruby 
- Para ver la pagina web de manera local ejecutar `bundle exec jekyll s` en la terminal (cada ves que abras el proyecto)
- Ir a http://127.0.0.1:4000 ó http://localhost:4000/ en tu navegador de preferencia

# Guía de edición: 

- En la terminal dentro del proyecto en VScode
- Agrega nuevos blogs ejecutando `bundle exec jekyll post "Titulo del blog"`
- La Pagina principal se edita en `_tabs/about.md`
- Las demás etiquetas también están en `_tabs/`
- Se deben poner las imágenes en `assets/img/` creando una nueva carpeta por cada titulo.  (PRECAUCIÓN: No poner en `assets/img/favicons/`)
- Para un ejemplo de como empezar un blog revisa este [post de chirpy](https://chirpy.cotes.page/posts/write-a-new-post/)
- Para el formato del blog revisa este [ejemplo en markdown](https://github.com/cotes2020/jekyll-theme-chirpy/blob/b641b364809ea15c46d16ce1379a267d395d55d0/_posts/2019-08-08-text-and-typography.md?plain=1#L65)
 y el [resultado del ejemplo](https://chirpy.cotes.page/posts/text-and-typography/)