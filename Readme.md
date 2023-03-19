# Template - Testing Sostenible con TypeScript

Plantilla base para practicar las katas del curso o para empezar un proyecto nuevo.

Incluye:
* TypeScript
* Jest
* ESLint
* Prettier
* Husky

## Instrucciones
* `npm install`
* `npm test`

## Actualización dependencias
Al compilar el proyecto original obtenia fallos de compilación en las dependencias por lo que decidí actualizarlas a la última versión:
* `npx npm-upgrade` -> Decir Sí a todo

* `npm i`
* `npm run tsc` -> Sigue dando el mismo error ya que se siguen utilizando las dependencias anteriores aún.

Para asegurar que usa las nuevas dependencias del package.json actualizado en el primer paso elimino el package-lock y los node_modules anteriores.
* `rm package-lock.json`
* `rm -Rf node_modules/`

Y se regeneran actualziados acorde al nuevo package.json con:
* `npm i`

Finalmente:
* `npm run tsc` -> no error!


Más información sobre el curso en [testingsostenible.com](https://testingsostenible.com).

![Testing Sostenible con TypeScript](cover.png)

### ESLint
[TypeScript ESLint Rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

### Husky hooks
* Pre-commit: Execute npm analize (tsc + eslint --fix)
* Pre-push: Execute test
