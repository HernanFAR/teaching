# Teaching

Una colección de lecciones y guías para entender conceptos de ingeniería de software desde los problemas que los hacen necesarios.

La documentación se publica con [Zensical](https://zensical.org/).

La configuración permanece en `mkdocs.yml` de forma intencional: Zensical puede leerla directamente y así conservamos una ruta de migración simple y reversible mientras su línea estable madura.

## Desarrollo local

```bash
pip install -r requirements.txt
zensical serve
```

## Build

```bash
zensical build --strict --clean
```
