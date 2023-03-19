# Kata: video surveillance

Un conocido fabricante de sistemas de video vigilancia nos ha solicitado el desarrollo de un software para el prototipo de un nuevo producto innovador que están desarrollando. Se trata de un equipo que dispone de un sensor de movimiento y de un grabador. El sensor de movimiento tiene una API con un solo método que devuelve verdadero cuando detecta que algo ha empezado a moverse y falso cuando no detecta movimiento. Por otro lado, el grabador dispone de dos comandos: uno para empezar a grabar y otro para detener la grabación.

Nuestra tarea será diseñar un controlador que compruebe cada segundo si el sensor está detectando movimiento y si es así le debemos indicar al grabador que inicie la grabación, y en caso contrario, debe detenerla. La grabación también debería detenerse en caso de algún comportamiento inesperado del sensor.

La principal limitación es que el fabricante no nos ofrece la posibilidad de acceder ni al código del sensor ni del grabador, parece que no quiere que le copiemos su magnífica idea. Pero al menos nos provee de sus interfaces públicas:

```
interface MotionSensor {
  isDetectingMotion(): boolean;
}

interface VideoRecorder {
  startRecording(): void;
  stopRecording(): void;
}
```
Estas interfaces son todo lo que necesitamos, ya que la idea es hacer uso de dobles de estas piezas para poder comprobar nuestro controlador.

## Requisitos
En resumen, los requisitos que debe cumplir el controlador que tenemos que diseñar son:

* Indica al grabador que detenga la grabación cuando el sensor no detecta movimiento.
* Indica al grabador que comience la grabación cuando el sensor detecta movimiento.
* Indica al grabador que detenga la grabación cuando el sensor arroja un error inesperado.
* Comprueba el estado del sensor de movimiento una vez por segundo.

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
