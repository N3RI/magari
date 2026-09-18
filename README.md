# Magari 🚀

Proyecto web estándar con HTML5, CSS3 y JavaScript moderno, preparado para control de versiones con Git y GitHub.

## 📁 Estructura del Proyecto

```text
magari/
├── .gitignore         # Configuración de exclusiones para Git
├── README.md          # Documentación del proyecto
├── index.html         # Documento principal HTML5 semántico
├── css/
│   └── styles.css     # Estilos responsivos con CSS Custom Properties y modo oscuro/claro
└── js/
    └── app.js         # Lógica interactiva en JavaScript moderno
```

## 🛠️ Cómo ejecutar el proyecto localmente

Puedes abrir directamente el archivo `index.html` en tu navegador favorito, o iniciar un servidor local rápido:

### Con Python 3:
```bash
python3 -m http.server 8000
```
Luego abre [http://localhost:8000](http://localhost:8000) en tu navegador.

### Con Node.js:
```bash
npx serve .
```

---

## 🔗 Conexión con GitHub

### 1. Clave SSH
Se ha generado un par de claves SSH en `~/.ssh/id_ed25519`.
Para vincular tu equipo con GitHub:
1. Copia tu clave pública SSH:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
2. Ve a [GitHub SSH Keys](https://github.com/settings/keys).
3. Haz clic en **"New SSH key"**, asígnale un título (por ejemplo: `Laptop` o `Escritorio`) y pega la clave.
4. Haz clic en **"Add SSH key"**.

### 2. Crear y Vincular el Repositorio Remoto
1. Crea un nuevo repositorio en [GitHub](https://github.com/new) llamado `magari` (déjalo vacío, sin README ni .gitignore adicionales).
2. Vincula tu repositorio local con el remoto ejecutando en esta carpeta:
   ```bash
   git remote add origin git@github.com:<TU_USUARIO_GITHUB>/magari.git
   git branch -M main
   git push -u origin main
   ```
