# TDidacta Platform

La plataforma operacional de TDidacta. Actualmente publica lecciones, guías, exploraciones y evaluaciones orientadas principalmente a comprender ingeniería de software desde los problemas que hacen necesarios sus conceptos.

Este repositorio corresponde a **TDidacta Platform**, no al proyecto TDidacta completo ni a TDidacta Framework. Este repositorio corresponde a **TDidacta Platform**, no al proyecto TDidacta completo ni a TDidacta Framework. La documentación se publica con [Zensical](https://zensical.org/).

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
