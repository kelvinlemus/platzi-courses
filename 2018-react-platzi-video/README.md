## Ciclo de vida

```
classMiComponenteextendsComponents{

  // Parte: componente entrara en escena
	constructor(){
	// Enlazo (bind) eventos y/o inicializo estado
	}
	componentWillMount(){
	// Se ejecuta antes de montar el componente
	// Se podría usar para hacer un setState()
  // No hacer llamados a API's
	}
	render(){
	// Contiene todos los elementos a renderizar
	// podrías usarlo para calcular propiedades (ej: concatenar una cadena)
	}
	componentDidMount(){
	//Solo se lanza una vez
	//Ideal para llamar a una API, hacer un setInteval, etc
	}

	// Parte: Actualización:
	componentWillReceiveProps(){
	//Es llamado cuando el componente recibe nuevas propiedades.

	}
	shouldComponentUpdate(){
	//Idea para poner una condición y  si las propiedades que le llegaron anteriormente
	// eran las mismas que tenia retornar false para evitar re-renderear el componente
	}
	componentWillUpdate(){
	//metodo llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
	}

	// re-render si es necesario...

	componentDidUpdate(){
	//Método llamado luego del re-render
	}
	componentWillUnmount(){
	//Método llamado antes de desmontar el componente
	}
	componentDidCatch(){
	// Si ocurre algún error, lo capturo desde acá:
	}

}
```

## Smart && dump components
```
Presentacional Cómo se ve
  Puede contener smart components u otros componentes de UI
  Permiten composición con `[props.children]``
  No depeden del resto de la aplicación
  No especifica cómo los datos son cargados o mutados
  Recibe datos y callbacks solo con propiedades
  Rara vez tienen su propio estado
  Están escritos como componentes funcionales a menos que necesiten mejoras de performance. Sólo pueden ser Componentes funcionales o Pure Components

Containers Qué hace
  Concetrado en el funcionamiento de la aplicación
  Contienen componentes de UI u otros containers
  No tienen estilos
  Proveen de datos a componentes de UI u otros contenedores
  Proveen de callbacks a la UI
  Normalmente tienen estado
  Llaman acciones
  Generados por higher order components
```
