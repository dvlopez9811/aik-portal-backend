# aik-portal-backend

Diseño de pruebas de integración backend-database:

### Caso de prueba # 1
| Nombre | Descripción |
| - | - |
| Método | mysql.createConnection |
| Objetivo de la prueba | Probar que se realiza con exito la conexión con una base de datos|
| Entradas | host,user,password,database,port |
| Salidas | Conexión no nula |


### Caso de prueba # 2
| Nombre | Descripción |
| - | - |
| Método | GET “/” |
| Objetivo de la prueba | Probar que se carga el módulo experiencia correctamente |
| Entradas | Request a '/' |
| Salidas | {</br>response :[</br>{ response : 'hello'}, </br> {code : '200'}</br>     ]</br>} |

### Caso de prueba # 3
| Nombre | Descripción |
| - | - |
| Método | GET “/buycars” |
| Objetivo de la prueba | Probar que el endpoint retorna la información del módulo experiencia en su componente buycars |
| Entradas | Request a '/buycars' |
| Salidas | {</br>vehicles :[</br> 1:{ </br>title: string,</br>releaseYear: string,</br>score: int,</br>price: double,</br>description: string,</br>avatar: string</br>},</br></br>N:{</br>title: string,</br>releaseYear: string,</br>score: int,</br>price: double,</br>description: string,</br>avatar: string</br>}</br>]</br>} |

### Caso de prueba # 4
| Nombre | Descripción |
| - | - |
| Método | GET “/vehicles” |
| Objetivo de la prueba | Probar que el endpoint retorna la información del módulo experiencia en su componente vehicles |
| Entradas | Request a '/vehicles' |
| Salidas | {</br>vehicles :[</br> 1:{ </br>title: string,</br>releaseYear: string,</br>score: int,</br>price: double,</br>description: string,</br>avatar: string</br>},</br></br>N:{</br>title: string,</br>releaseYear: string,</br>score: int,</br>price: double,</br>description: string,</br>avatar: string</br>}</br>]</br>} |

### Caso de prueba # 5
| Nombre | Descripción |
| - | - |
| Método | GET “/support” |
| Objetivo de la prueba | Probar que el endpoint retorna la información del módulo experiencia en su componente support |
| Entradas | Request a '/support' |
| Salidas | {</br>support :[</br> 1:{ </br>name: string,</br>avatar: string</br>},</br></br>N:{</br>name: string,</br>avatar: string</br>}</br>]</br>} |

### Caso de prueba # 6
| Nombre | Descripción |
| - | - |
| Método | GET “/publicidad” |
| Objetivo de la prueba | Probar que el endpoint retorna la información del módulo experiencia en su componente publicidad |
| Entradas | Request a '/publicidad' |
| Salidas | {</br>vehicles :[</br> 1:{ </br>nombre: string,</br>imagen: string,</br>enlace: string</br>},</br></br>N:{</br>nombre: string,</br>imagen: string,</br>enlace: string</br>}</br>]</br>} |

### Caso de prueba # 7
| Nombre | Descripción |
| - | - |
| Método | GET “/innovacion” |
| Objetivo de la prueba | Probar que el endpoint retorna la información del módulo experiencia en su componente innovacion |
| Entradas | Request a '/innovacion' |
| Salidas | {</br>vehicles :[</br> 1:{ </br>nombre: string,</br>descripcion: string,</br>imagen: string</br>},</br></br>N:{</br>nombre: string,</br>descripcion: string,</br>imagen: string</br>}</br>]</br>} |

### Caso de prueba # 8
| Nombre | Descripción |
| - | - |
| Método | GET “/redsocial” |
| Objetivo de la prueba | Probar que el endpoint retorna la información del módulo experiencia en su componente redsocial |
| Entradas | Request a '/redsocial' |
| Salidas | {</br>vehicles :[</br> 1:{ </br>nombre: string,</br>imagen: string,</br>enlace: string</br>},</br></br>N:{</br>nombre: string,</br>imagen: string,</br>enlace: string</br>}</br>]</br>} |

## Dependencias necesarias para la ejecución de las pruebas

1. Inicialmente debe instalarse las dependencias de desarrollo *mocha*, *chai*

Esto puede hacerse mediante:

`npm install --save-dev mocha chai`

2. También la dependencia *http-status-code*

`npm install --save-dev http-status-codes`

3. Por último, las dependencias *superagent* y *superagent-promise*, estas no son de desarrollo, son parte de una librería cliente.

`npm install --save superagent superagent-promise`
