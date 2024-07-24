---
title: Entorno de Desarrollo
description: Para la programación competitiva en C++
date: 2024-07-23 7:00:00 +/-TTTT
categories: [Club]
author: ArielParra 
tags: [recomendaciones,C++,compiladores]
pin: false
mermaid: false
image:
---

> En Android 12 y posteriores, suele haber el error ["Process completed (signal 9)"](https://github.com/termux/termux-app/issues/2366#issuecomment-1237468220) dentro de <i class="fa-solid fa-terminal"></i> termux. Para solucionarlo, favor de ir a este [blog por Andronix](https://docs.andronix.app/android-12/andronix-on-android-12-and-beyond#solutions)
{: .prompt-danger}

__Tabla de Contenidos:__
* 
{:toc} 

##  Conectar <i class="fa-brands fa-git-alt"></i> Git con <i class="fa-brands fa-github"></i> GitHub


1. Primero crearemos una cuenta de github <https://github.com/signup> 
1. Después creamos un repositorio (proyecto) en  <https://github.com/new>
1. Luego descargamos git desde la pagina oficial <https://git-scm.com/downloads> o con el gestor de paquetes de cada sistema operativo
    - En <i class="fa-brands fa-microsoft"></i> Windows en ![powershell logo](https://nattia.com/wp-content/uploads/2024/04/Servicios-de-PowerShell.png){: w="15" h="15" } Powershell con el comando: 
    ```powershell
    winget update ; winget install -e --id Git.Git
    ```
    - En <i class="fa-brands fa-apple"></i> MacOs con el gestor de paquetes ![homebrew logo](https://brew.sh/assets/img/homebrew.svg){: w="10" h="10" } [homebrew](https://brew.sh/):
    ```zsh
    brew update && brew install git
    ``` 
    - En <i class="fa-brands fa-android"></i> Android con la terminal <i class="fa-solid fa-terminal"></i> [termux](https://termux.dev/en/) y el comando: 
    ```bash
    pkg update && pkg install git
    ```
    - En <i class="fa-brands fa-apple"></i> iOS/iPadOS con la terminal ![ish logo](https://ish.app/assets/icon.png){:  w="15" h="15" } [ish](https://ish.app/) y los comandos:
    ```bash
    apk update 
    apk add git openssh
    ssh-keygen -A
    ```

4. Si se esta en Windows, revisa qué este actualizado, si no  esta en la ultima versión, comprobamos que esta instalado el cliente de [OpenSSH](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=gui).
5. En una terminal creamos nuestro usuario local de git (es opcional que los datos sean iguales a los de GitHub) con los comandos:
``` bash
git config --global user.name "Usuario"
git config --global user.email "correo@ejemplo.com" 
```

6. comprobamos nuestros datos con el comando:
```bash
 git config --list
 ```

7. En la misma terminal creamos una llave pública de ssh:
```bash
ssh-keygen -t ed25519 -C "correo@ejemplo.com"
```

8. Copiamos los datos del archivo generado en Windows en la ruta: `C:\Users\%USERNAME%\.ssh\id_ed25519.pub`{: .filepath} (para windows tiene el icono de Microsoft publisher ![Microsoft publisher logo](https://upload.wikimedia.org/wikipedia/commons/f/fb/Microsoft_Office_Publisher_%282019-present%29.svg){: w="15" h="15" } y se puede abrir con el bloc de notas
) , para los demás sistemas operativos suele estar en `~/.ssh/id_ed25519.pub`{: .filepath}  y lo conectamos con nuestra cuenta de github através de <https://github.com/settings/ssh/new>, dándole un nombre (puede ser el modelo de tu dispositivo) y pegando la los datos copiados (llave).
9. Por último descargamos nuestro repositorio, en una terminal navega hacia tu carpeta de de destino, yo recomiendo la carpeta de Documentos (Documents) o Escritorio (Desktop).

> Mucho ojo 👁️ en Windows, estas carpetas suelen estar bajo `C:\Users\%USERNAME%\One Drive\`{: .filepath}
{: .prompt-warning }
```bash
git clone git@github.com:"Usuario de GitHub"/"Proyecto".git
```

Una vez ya tengamos conectado nuestra cuenta y hallamos descargado el proyecto, los tres comandos principales de git que usaremos en la terminal son:
```bash
git commit -m "mensaje del commit" # cambios locales a "pushear"
git push # pusheas los cambios junto con el commit hacia GitHub
git pull # descargas los cambios actuales desde GitHub
```

## <i class="fa-solid fa-globe"></i> Compiladores en linea (Online)
La ventaja de usar un IDE en linea es la disponibilidad en cualquier dispositivo, la desventaja evidentemente es que al no tener conexión a internet no puedes utilizarlo aparte de que en algunos deberás guardar tus códigos manualmente en algún otro medio o plataforma.

- [onlinegdb](https://www.onlinegdb.com/online_c++_compiler) este es el compilador en linea recomendado por el club, debido a que permite guardar los códigos al iniciar sesión junto con la compatibilidad completa con nuestra [plantilla de C++](https://cpc-gallos.github.io/blog/Plantilla/) 
- [Programiz](https://www.programiz.com/cpp-programming/online-compiler/) es un compilador en linea para acompañar sus cursos de programación
- [cpp.sh](https://cpp.sh/) la ventaja de este editor es poder comparar las diferencias entre distintos estándares de c++ y distintos niveles de optimización del compilador, lo único malo es que no permite directivas `#pragma` ni la libreria `<bits/stdc++.h>`
- [pythontutor](https://pythontutor.com/cpp.html#mode=edit) este es un muy buen debuger en linea ya que contiene representaciones gráficas para visualizar nuestros códigos y también permite el uso de la libreria `<bits/stdc++.h>`, lo malo es que no tiene entrada de usuario (no permite `std::cin`), junto con otras [cosas incompatibles](https://docs.google.com/document/d/13_Bc-l2FKMgwPx4dZb0sv7eMfYMHhRVgBRShha8kgbU/edit)

## <i class="fa-solid fa-cloud"></i> IDEs en la nube (Cloud)

- [Replit](https://replit.com/languages/cpp) es una plataforma para colaborar en tiempo real con código, la desventaja es que el plan gratuito solo te permite tener 3 proyectos públicos
- [Google Colab](https://colab.research.google.com/) es un servició totalmente gratuito por parte de Google para usar [Jupyer Noteeboks](https://docs.jupyter.org/en/latest/#what-is-a-notebook), para ejecutar c++ tendremos que usar el comando `%%writefile` para escribir hacia archivos, como lo seria el archivo `in.txt` donde pondremos todas las entradas del programa (necesario para la función `freopen`) y el archivo `.cpp` el cual compilaremos con el comando `!g++` y ejecutaremos de esta manera `!./a.out` 

![Google Colab ejemplo](/assets/img/posts/Entorno_Desarrollo/Google_Colab.png){: w="400" h="200"}

- [Github codespaces](https://github.com/features/codespaces) es VScode dentro de un servidor de linux en la nube, compatible con todas las extensiones que desees.
    - GitHub Free 15 GB de espacio al mes con 120 horas
    - GitHub Pro  20 GB de espacio al mes con 180 horas

> Recuerda que tienes acceso de forma gratuita a [GitHub Pro](https://education.github.com/discount_requests/application) por ser estudiante
{: .prompt-tip }

- [cs50.dev](https://cs50.dev/) es github codespaces gratuito y sin limite de tiempo, hosteado por la universidad de Harvard para el acompañamiento de sus [cursos](https://cpc-gallos.github.io/blog/Filtrar_Certificados/?issuer=harvard), este es el editor en la nube recomendado por el club. 

![cs50.dev ejemplo](/assets/img/posts/Entorno_Desarrollo/cs50dev.png){: w="600" h="300"}

> [cs50.dev](https://cs50.dev/) también es de mucha utilidad para correr otros IDEs en la nube como lo es el caso de Rstudio para R
{: .prompt-info }

## VScode IDE 

No confundir con [Visual Studio](https://visualstudio.microsoft.com/) . VScode es el editor recomenado por el Club, esto debido principalmente por su amplio catalogo de extensiones. Para instalarlo podemos hacerlo desde su pagina web o usando el gestor de paquetes 

- En <i class="fa-brands fa-microsoft"></i> Windows en ![powershell logo](https://nattia.com/wp-content/uploads/2024/04/Servicios-de-PowerShell.png){: w="15" h="15" } Powershell con el comando: 
```powershell
winget install -e --id  Microsoft.VisualStudioCode --override '/SILENT /mergetasks="!runcode,addcontextmenufiles,addcontextmenufolders"'
``` 
- En <i class="fa-brands fa-apple"></i> MacOs con el gestor de paquetes ![homebrew logo](https://brew.sh/assets/img/homebrew.svg){: w="10" h="10" } [homebrew](https://brew.sh/):
```zsh
brew install --cask visual-studio-code
``` 
- En <i class="fa-brands fa-android"></i> Android con la terminal <i class="fa-solid fa-terminal"></i> [termux](https://termux.dev/en/) hay dos opciones:
    1.  Usar vscode-server (aplicación en linea similar a <https://vscode.dev/>, la cual tiene extensiones limitadas) que sera accesible en cualquier navegador del dispositivo en las urls [localhost:8080](https://localhost:8080) o [127.0.0.1:8080](https://127.0.0.1:8080), se instala con los comandos:
    ```bash
    pkg update && pkg install tur-repo code-server
    code-server # este es el comando para ejecutar el servidor de vscode
    ```
    2. con el [escritorio nativo](https://cpc-gallos.github.io/blog/Entorno_Desarrollo/#-escritorio-nativo) con los comandos:
    ```bash
    pkg update && pkg install tur-repo code-oss
    ```
- En <i class="fa-brands fa-apple"></i> iOS/iPadOS no se puede amenos que se use un [escritorio emulado](https://cpc-gallos.github.io/blog/Entorno_Desarrollo/#-escritorio-emulado)

### Extensiones para VScode

- ![C/C++ logo](https://ms-vscode.gallerycdn.vsassets.io/extensions/ms-vscode/cpptools/1.21.2/1721683708278/Microsoft.VisualStudio.Services.Icons.Default){: w="15" h="15" } [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) esta es la extensión necesaria para poder correr código de C++ dentro de VScode
- ![code runner logo](https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/code-runner/0.12.2/1712309175692/Microsoft.VisualStudio.Services.Icons.Default){: w="15" h="15" }[code runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) esta es una extensión opcional que acelera el proceso de compilación en VScode
- ![Error lens logo](https://usernamehw.gallerycdn.vsassets.io/extensions/usernamehw/errorlens/3.20.0/1719044874383/Microsoft.VisualStudio.Services.Icons.Default){: w="15" h="15" }[Error lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) esta extensión nos muestra los errores que va dando el IDE o el compilador.
- ![Prettier logo](https://esbenp.gallerycdn.vsassets.io/extensions/esbenp/prettier-vscode/10.4.0/1711025051911/Microsoft.VisualStudio.Services.Icons.Default){: w="15" h="15" }[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) esta extensión le da formato a nuestro código al presionar la combinación de teclas `shift + alt + F`
- ![CPH logo](https://divyanshuagrawal.gallerycdn.vsassets.io/extensions/divyanshuagrawal/competitive-programming-helper/2024.7.1721655847/1721655861341/Microsoft.VisualStudio.Services.Icons.Default){: w="15" h="15" }[Competitive Programming Helper](https://marketplace.visualstudio.com/items?itemName=DivyanshuAgrawal.competitive-programming-helper) esta es la extensión para poder, probar los códigos antes de publicar y también podremos subir directamente los códigos a codeforces de una manera muy rápida

#### Temas recomendados para VScode: 

- ![Material Icon logo](https://pkief.gallerycdn.vsassets.io/extensions/pkief/material-icon-theme/5.7.0/1721659637204/Microsoft.VisualStudio.Services.Icons.Default){: w="15" h="15" } [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme), ![nord logo](https://arcticicestudio.gallerycdn.vsassets.io/extensions/arcticicestudio/nord-visual-studio-code/0.19.0/1632602657822/Microsoft.VisualStudio.Services.Icons.Default){: w="15" h="15" }[nord](https://marketplace.visualstudio.com/items?itemName=arcticicestudio.nord-visual-studio-code), ![catpuccin logo](https://catppuccin.gallerycdn.vsassets.io/extensions/catppuccin/catppuccin-vsc/3.15.0/1721283061832/Microsoft.VisualStudio.Services.Icons.Default){: w="15" h="15" } [catppuccin](https://marketplace.visualstudio.com/items?itemName=Catppuccin.catppuccin-vsc), ![Gruvbox logo](https://jdinhlife.gallerycdn.vsassets.io/extensions/jdinhlife/gruvbox/1.19.0/1715219748445/Microsoft.VisualStudio.Services.Icons.Default){: w="15" h="15" } [GruvBox](https://marketplace.visualstudio.com/items?itemName=jdinhlife.gruvbox), ![Monokai logo](https://monokai.gallerycdn.vsassets.io/extensions/monokai/theme-monokai-pro-vscode/1.3.2/1713687166653/Microsoft.VisualStudio.Services.Icons.Default){: w="15" h="15" } [Monokai Pro](https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode) o ![dracula logo](https://dracula-theme.gallerycdn.vsassets.io/extensions/dracula-theme/theme-dracula/2.25.1/1721220788613/Microsoft.VisualStudio.Services.Icons.Default){: w="15" h="15" } [dracula](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula) 


### Integrar Codeforces con VScode  

- Primero en  VScode tenemos que tener la extensión [Competitive Programming Helper (CPH)](https://marketplace.visualstudio.com/items?itemName=DivyanshuAgrawal.competitive-programming-helper)
- Después cambiaremos el lenguaje por defecto a C++ y agregaremos la ruta (ubicación) de la [plantilla del club](https://cpc-gallos.github.io/blog/Plantilla/) a la configuración de la extensión Competitive Programming Helper (CPH) en VScode

![cph setting imagen](/assets/img/posts/Entorno_Desarrollo/cph_settings.png){: w="400" h="200"}

- Para <i class="fa-brands fa-firefox-browser"></i> firefox: Agrega las extensiones: [competitive companion](https://addons.mozilla.org/en-US/firefox/addon/competitive-companion/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) y [CPH Submit](https://addons.mozilla.org/en-US/firefox/addon/cph-submit/)

- Para navegadores basados en <i class="fa-brands fa-chrome"></i> chromium (<i class="fa-brands fa-chrome"></i> Google Chrome, <i class="fa-brands fa-edge"></i> Microsft Edge, <i class="fa-brands fa-opera"></i> Opera, <i class="fa-brands fa-brave"></i> Brave, etc.): Agrega las extensiones: [competitive companion](https://chromewebstore.google.com/detail/competitive-companion/cjnmckjndlpiamhfimnnjmnckgghkjbl) y [CPH Submit](https://github.com/ArielParra/cph-submit-chromium)

Para usarlas, ten tu sesión de codeforces activa y también ten abierto VScode, cuando abras un problema en codeforces haz click en la extensión de competitive companion (el circulo verde con una cruz), después cámbiate a VScode donde veras unas opciones donde eligieras cpp, y listo podrás pobrar y publicar tu código desde vscode. 

## Instalar el compilador en <i class="fa-brands fa-microsoft"></i> Windows 

- Primero tenemos que descargar el gestor de paquetes `msys2` desde su página oficial [www.msys2.org/](https://github.com/msys2/msys2-installer/releases/download/2024-05-07/msys2-x86_64-20240507.exe) o desde el gestor de paquetes integrado en Windows `winget` a través de una terminal (Powershell ![powershell logo](https://nattia.com/wp-content/uploads/2024/04/Servicios-de-PowerShell.png){: w="15" h="15" }), con el comando: 

```powershell
winget update ; winget install -e --id MSYS2.MSYS2
```

- Ya instalado, abrimos la terminal de MSYS2 UCRT64 ![msys2 ucrt64 logo](https://www.msys2.org/docs/ucrt64.png){: w="15" h="15" } y ejecutamos el siguiente comando (acepta presionando `Enter` 2 veces):

```powershell
pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain
``` 

![msys2 toolchain](https://raw.githubusercontent.com/CPC-GALLOS/Presentations/main/2024/img/001-toolchain.png){: w="500" h="300" }

- Ya terminada la instalación del compilador, procederemos a agregar el compilador al `path`. Para ello, buscamos alguna de estas palabras clave: "variables", "path", "variables del sistema" en el buscador de windows <i class="fa fa-magnifying-glass"></i> y abriremos la aplicación con icono de una computadora con una palomita ![computadora con una palomita](https://raw.githubusercontent.com/CPC-GALLOS/Presentations/main/2024/img/001_icono_path.png){: w="15" h="15" }, allí abriremos las variables y editaremos el path agregando la dirección: `C:\msys64\ucrt64\bin`. 

![path de windows](https://raw.githubusercontent.com/CPC-GALLOS/Presentations/main/2024/img/001_path.png){: w="500" h="300" }

- ya instalada la [extensión C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) en VScode iremos hacia las configuraciones de la extensión.

![configuración de la extensión C/C++](https://raw.githubusercontent.com/CPC-GALLOS/Presentations/main/2024/img/001_cpp_settings.png){: w="500" h="300" }

- Ahi buscamos la opción que diga "compiler path", la cual nos mandara nos manda al archivo [`settings.json`](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson):
        
![imagen de settings.json](https://raw.githubusercontent.com/CPC-GALLOS/Presentations/main/2024/img/001_cpp_settings_json.png){: w="500" h="300" }

- Agregaremos estas lineas a los corchetes internos, teniendo cuidado de no borrar otras configuraciones. 
    ```json

        "C_Cpp.default.compilerPath": "C:/msys64/ucrt64/bin",
        "C_Cpp.clang_format_path": "C:/msys64/ucrt64/bin",
        "code-runner.executorMap": {
            "cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt -g && $dir$fileNameWithoutExt"
        }

    ```
- Con esto ya podremos compilar y ejecutar el codigo dentro de VScode dandole click al simbolo de repdroducir  <i class="fa fa-play"></i>  en la parte superior derecha del editor o con la extensión [code runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) presionando las teclas `ctrl + alt + N`.

## Instalar el compilador en <i class="fa-brands fa-apple"></i> MacOS

### con gcc/g++

1. Primero, si no lo tenemos instalado ya, procedemos a instalar el gestor de paquetes de la comunidad para MacOs ![homebrew logo](https://brew.sh/assets/img/homebrew.svg){: w="10" h="10" } [homebrew](https://brew.sh/) abriendo una terminal y ejecutando el comando, para después dar varios enters:
    ```zsh
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
1. después en instalamos el compilador gcc (el cual incluye g++ y la libreria `<bits/stdc++.h>`)
    ```zsh
    brew analytics off
    brew update && brew install gcc
    sudo rm /usr/local/bin/g++
    sudo ln -s $(ls /usr/local/bin/g++-*) /usr/local/bin/g++
    ```
1. Al final tenemos que recargar la terminal y/o Vscode, para ver reflejados los cambios

### con Clang (Xcode)

- Este es el compilador por defecto en ![Xcode logo](https://developer.apple.com/assets/elements/icons/xcode-12/xcode-12-96x96_2x.png){: w="15" h="15" } [Xcode](https://developer.apple.com/xcode/) y para instalar [Clang (LLVM)](https://clang.llvm.org/) ejecutaremos este comando en la ![MacOS terminal logo](https://help.apple.com/assets/63FFD63D71728623E706DB4F/63FFD63E71728623E706DB56/es_419/d94aa1c4979b25e9ffbda97fcbae219a.png){: w="15" h="15" } terminal:
    ```zsh
    xcode-select install
    ```

- Clang no incluye la libreria `<bits/stdc++>`, necesaria para usar la [plantilla del club](https://cpc-gallos.github.io/blog/Plantilla/), por lo que tendremos que instalarla manualmente con los siguientes comandos:
    ```zsh
    mkdir /usr/local/include/bits
    echo '#define _GLIBCXX_HOSTED 1' > /usr/local/include/bits/stdc++.h
    curl -sS https://raw.githubusercontent.com/gcc-mirror/gcc/master/libstdc%2B%2B-v3/include/precompiled/stdc%2B%2B.h >> /usr/local/include/bits/stdc++.h
    ```

> Recuerda **comentar** o **eliminar** las lineas `#pragma GCC optimize("Ofast,unroll-loops")` y `#pragma GCC target("avx2")` de la [plantilla de C++](https://cpc-gallos.github.io/blog/Plantilla/), debido a qué estas no son compatibles con Clang y daran un error de compilación!
{: .prompt-danger }


## Entorno de desarrollo en <i class="fa-brands fa-android"></i> Android

> Para un mejor desempeño al programar, recomiendo utilizar un teclado y/o mouse externo, ya sean por Bluetooth o por USB con un adaptador OTG o con un adpatador a USB C.
{: .prompt-tip }

### <i class="fa-solid fa-terminal"></i>terminal nativa + <i class="fa-solid fa-laptop-code"></i> editor de código

Termux es la terminal nativa de Android, esta disponible en la playstore, pero suele estar desactualizada por lo que recomiendo descargarlo [directamente en GitHub](https://github.com/termux/termux-app) o a través de la tienda open-source [fdroid](https://f-droid.org/en/packages/com.termux/)

Dentro de la terminal para poder instalar el compilador ejecutamos los siguientes comandos:
```bash
pkg update && pkg upgrade
pkg install build-essential
``` 
Para compilar un archivo de c++, primero navegamos a la carpeta donde este el archivo, recomiendo guardarlos en la capreta de descargas del dispositibo (downloads), despúes compilamos el archivo con la extension `.cpp` y para ejecutar el archivo resultante lo hacemos con `./a.out`:
```bash
cd ~/storage/downloads/
g++ archivo.cpp
./a.out
```

Para los editores de código el club recomienda cualquiera de estas dos opciones: 

1. ![Squircle CE logo](https://f-droid.org/repo/com.blacksquircle.ui/en-US/icon_FtV5qpmuJJ3IqYz5WwTDUqsxFK3kUeIONL3_hbDFlLg=.png){: w="15" h="15" } Squircle CE: disponible en la ![playstore logo](https://cdn-icons-png.flaticon.com/512/732/732208.png){: w="15" h="15" } [playstore](https://play.google.com/store/apps/details?id=com.blacksquircle.ui) o en ![fdroid logo](https://upload.wikimedia.org/wikipedia/commons/3/3c/F-Droid_Logo_4.svg){: w="15" h="15" } [fdroid](https://f-droid.org/es/packages/com.blacksquircle.ui/)
1. ![Acode logo](https://f-droid.org/repo/com.foxdebug.acode/en-US/icon_ljuxslVt96jUyr6FANAPcSTfaLbw4C61GnouGefIK-Y=.png){: w="15" h="15" } Acode: disponible en la ![playstore logo](https://cdn-icons-png.flaticon.com/512/732/732208.png){: w="15" h="15" } [playstore](https://play.google.com/store/apps/details?id=com.foxdebug.acodefree&hl=es_MX) o en ![fdroid logo](https://upload.wikimedia.org/wikipedia/commons/3/3c/F-Droid_Logo_4.svg){: w="15" h="15" } [fdroid](https://f-droid.org/es/packages/com.foxdebug.acode/)

También recomiendo usar el explorador de archivos por defecto en Android "files" ya que este te permite acceder facilmente a los archivos dentro de <i class="fa-solid fa-terminal"></i> termux, si no se tiene esta aplicación instalada se puede instalar esta versión similar: [files por marcapps](https://play.google.com/store/apps/details?id=com.marc.files&ref=apkcombo.com)

### <i class="fa-solid fa-desktop"></i> escritorio nativo

Esto es recomendado para dispositivos de gama alta o dispositivos de más reciente y para usuarios un poco más avanzados, se necesitara instalar [termux-x11](https://github.com/termux/termux-x11) y seguir la guia de instalación de su GitHub y para el escritorio se ocupa seguir [esta guia por DroidMaster](https://github.com/LinuxDroidMaster/Termux-Desktops/blob/main/Documentation/native/termux_native.md) aparte que tendras que instalar [extensiones manualmente](https://code.visualstudio.com/docs/editor/extension-marketplace#_install-from-a-vsix) para code-oss (VScode de termux).


## Entorno de desarrollo en <i class="fa-brands fa-apple"></i> iOS/iPadOS

> Para un mejor desempeño al programar, recomiendo utilizar un teclado y/o mouse externo, ya sean por Bluetooth o por USB con un adaptador/dongle lighting o con un adpatador/dongle a USB C.
{: .prompt-tip }

### <i class="fa-solid fa-terminal"></i>terminal emulada + <i class="fa-solid fa-laptop-code"></i> editor de código

iOS no tiene una terminal nativa sin jailbreak, por lo qué la mejor opción es usar la terminal emulada:
- ![ish logo](https://ish.app/assets/icon.png){:  w="15" h="15" } [ish](https://ish.app) con la que podremos compilar nuestros códigos de forma local.

Para descargar el compilador, dentro de ish ejecutaremos los siguientes comandos:
```bash
apk update && apk upgrade
apk add build-base
```
para compilar código es tan fácil como agregar los archivos `.cpp` a la carpeta `root` desde el [explorar de archivos de iOS (files)](https://apps.apple.com/mx/app/archivos/id1232058109) dentro de [la carpeta de iSH](https://github.com/ish-app/ish/wiki/View-iSH-files-in-Files-App) y ejecutarlos con `./a.out` 
```bash
g++ archivo.cpp
./a.out
```

Para el editor de código el club recomienda:
- ![koder logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKbHWmAPHctAdBnQybNwYpIq9ikzDs11yC8g&s){:  w="15" h="15" } [koder](https://koderapp.com/)

### <i class="fa-solid fa-desktop"></i> escritorio emulado

- Esto se hace a traves de ![UTM logo](https://mac.getutm.app/siteicon.png){:  w="20" h="20" } [UTM SE](https://apps.apple.com/mx/app/utm-se-retro-pc-emulator/id1564628856) y es recomendado especialmente para iPads, ya que la aplicación corre algo lento debido a que es emulado, pero para un mejor rendimiento recomiendo usar [Debian 11 (LXDE)](https://mac.getutm.app/gallery/debian-11-ldxe) y para instalar VScode recomiendo seguir [esta guia oficial](https://code.visualstudio.com/docs/setup/linux#_debian-and-ubuntu-based-distributions)

> se puede llegar a un mejor rendimiento usando un tipo de para-virtualización con SPICE y JIT con TGC, pero ocupa un conociemiento más avanzada y en especial ocupa [más pasos](https://docs.getutm.app/installation/ios/)

## Referencias

- Coder. (s.f). *Termux*. Recuperado de <https://coder.com/docs/code-server/termux> 
- GitHub. (s.f.). *About billing for GitHub Codespaces*. Recuperado de <https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces>
- Moin, S. (2019). *How to include bits/stdc++.h header file on macOS*. Recuperado de <https://codeforces.com/blog/entry/70957>
- Replit. (s.f). *Build, deploy, and scale at any stage of growth*. Recuperado de <https://replit.com/pricing>
