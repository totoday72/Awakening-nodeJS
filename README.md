<p align="center"><a href="https://nodejs.org/es" target="_blank"><img src="https://nodejs.org/static/images/logo.svg" width="500"></a></p>

# nodeJS-Awakening
Back-end Application

## Instalación de NodeJS:

Instalar NodeJS desde el siguiente link:
<a href="https://nodejs.org/en/download/releases">Node.js 18.18.0</a>

## Instalación IDE de desarrollo:
Instalar WebStorm Jetbreains Community (outdate) desde el siguiente Link:
<a href="https://download.jetbrains.com/webstorm/WebStorm-2023.2.2.exe">Webstorm </a>

WebStorm Early Access Program (No subscription required)
<a href="https://www.jetbrains.com/webstorm/nextversion/">Webstorm EAP</a>

ó instalar Visual code desde el siguiente Link:
<a href="https://code.visualstudio.com/download">Visual Code</a>

## Instalación de Paquetes:
Para el correcto funcionamiento del siguiente proyecto siga los sigueintes pasos:

- [x] Clone el repositorio actual desde la linea de comandos (git clone "link")

```
git clone https://github.com/totoday72/nodeJS-Awakening.git
```

- [x] Una vez clonado el directorio, abra una ventana de linea de comandos y entre a la carpeta del proyecto e instale las dependencias,
Ejemplo: 
```
Ingreso a la carpeta:
cd C:\nodejs\nodeJS-Awakening\
npm install

***** codigo final *****
C:\nodejs\nodeJS-Awakening\npm install
```

- [x] Configurar el ambiente de desarrollo:
El proyecto se puede ejecutar tanto con NPM como con NODEJS. En caso de Usar Webstorm de Jetbreains colocar la siguiente 
configuración.

Configuración nodejs package manager (npm):
```
Name: Exec NPM
Packge Json: ~folder\nodeJS-Awakening\package.json
Command: RUN
Scripts: Start
Arguments:
Node Interpreter: C:\Program Files\nodejs\node.exe
npm: C:\Program Files\nodejs\npm.cmd

Before Launch:
    Browser: Default
    URL: http://localhost:3000
[x] Active tool Window
[x] Focus tool Window

```
Configuración NodeJS:
```
Name: Exec NodeJS
Node Interpreter: C:\Program Files\nodejs\node.exe
Node Arguments: --watch
Working directory: ~\folder\nodeJS-Awakening
java script file: bin\www

Before Launch:
    Browser: Default
    URL: http://localhost:3000
[x] Active tool Window
[x] Focus tool Window

```
Configuración Visual Code:

>Dentro de la carpeta .vscode
crear el archivo launch.json y colocar el siguiente código dentro del archivo.
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch Chrome",
            "request": "launch",
            "type": "chrome",
            "url": "http://localhost:3000",
            "webRoot": "${workspaceFolder}"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}\\bin\\www"
        }
    ]
}
```
Después de las configuraciones anteriores ya estará listo el ambiente de desarrollo para NodeJS.

> [!IMPORTANT]
> La version de NODEJS utilizada en esta versión de software es la v.18.18

> [!WARNING]
> Antes de ejecutar verificar de tener instaladas las dependencias, puede revisar el archivo package.json