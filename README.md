# Γα=Ω5 site

# Todo

- [ ] agregar calendario .ics al home page
- [ ] agregar mapa de la uaa con el laboratorio del 203 marcado

# Guia de instalacion de entorno para Jekyll:

- Teniendo los permisos y llaves necesarias, clonar la repo con `git clone git@github.com:CPC-GALLOS/CPC-GALLOS.github.io.git` 
- Para windows instalar [scoop](https://scoop.sh/)
- Ejecutar `scoop install main/ruby` en la terminal (powershell)
- Abrir la carpeta del proyecto en vscode 
- Ejecutar `bundle` dentro de la carpeta del proyecto
- Para ver la pagina web de manera local ejecutar `bundle exec jekyll s` en la terminal
- Ir a http://127.0.0.1:4000 ó http://localhost:4000/ en tu navegador de preferencia

# Guia de edicion: 

- En la terminal dentro del proyecto en vscode
- Agrega nuevos blogs ejecutando `bundle exec jekyll post "Titulo del blog"`
- La Pagina principal se edita en `_tabs/about.md`
- Las demás etiquetas también están en `_tabs/`
- Se deben poner las imágenes en `assets/img/` creando una nueva carpeta por cada titulo.  (PRECAUCIÓN: No poner en `assets/img/favicons/`)