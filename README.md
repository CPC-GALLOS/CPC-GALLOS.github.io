# Γα=Ω5 site

# Guia de instalacion de entorno para Jekyll:

- teniendo los permisos necesarios clonar la repo con `git clone git@github.com:CPC-GALLOS/CPC-GALLOS.github.io.git` 
- En windows instalar [scoop](https://scoop.sh/)
- Ejectar `scoop install main/ruby` en la terminal (powershell)
- Abrir la carpeta del proyecto en vscode 
- Ejecutar `bundle` dentro de la carpeta del proyecto
- Para ver la pagina web de manera local ejecutar `bundle exec jekyll s` en la terminal

# Guia de edicion: 

- Agrega nuevos blos ejeutando `bundle exec jekyll post "Titulo del blog"`
- la Pagina principal se edita en `_tabs/about.md`
- las demas etiquetas tambien estan en `_tabs/`
- poner imagenes en `assets/img/` (cuidado, no los pongas en `assets/img/favicons/`)