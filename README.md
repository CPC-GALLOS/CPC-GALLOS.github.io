# Γα=Ω5 site

# Guía de instalación de entorno para Jekyll:

- Teniendo los permisos y llaves necesarias, clonar la repo con `git clone git@github.com:CPC-GALLOS/CPC-GALLOS.github.io.git` 
- Para windows instalar [scoop](https://scoop.sh/)
- Ejecutar `scoop install main/ruby` en la terminal (powershell)
- Abrir la carpeta del proyecto en vscode 
- Ejecutar `bundle` dentro de la carpeta del proyecto
- Para ver la pagina web de manera local ejecutar `bundle exec jekyll s` en la terminal
- Ir a http://127.0.0.1:4000 ó http://localhost:4000/ en tu navegador de preferencia

# Guía de edición: 

- En la terminal dentro del proyecto en vscode
- Agrega nuevos blogs ejecutando `bundle exec jekyll post "Titulo del blog"`
- La Pagina principal se edita en `_tabs/about.md`
- Las demás etiquetas también están en `_tabs/`
- Se deben poner las imágenes en `assets/img/` creando una nueva carpeta por cada titulo.  (PRECAUCIÓN: No poner en `assets/img/favicons/`)
- Para un ejemplo de como empezar un blog revisa este [post de chirpy](https://chirpy.cotes.page/posts/write-a-new-post/)
- Para el formato del blog revisa este [ejemplo en markdown](https://github.com/cotes2020/jekyll-theme-chirpy/blob/b641b364809ea15c46d16ce1379a267d395d55d0/_posts/2019-08-08-text-and-typography.md?plain=1#L65)
 y el [resultado del ejemplo](https://chirpy.cotes.page/posts/text-and-typography/)