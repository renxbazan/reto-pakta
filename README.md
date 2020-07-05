# Reto Pakta

> Reto técnico para ingresar al equipo de Pakta (Rimac)
> **Importante!** este proyecto requiere tener instalado **Serverless!**.

## Acerca de este Proyecto
Se ha creado un proyecto en NodeJs con Serverless , el cual expone 4 endpoints:
	1. reto-pakta-dev-findAll : Se conecta a la BD RDS de mysql y trae todos los valores de la tabla pakta_user **Path: /user** **Metodo HTTP: GET** 
	2. reto-pakta-dev-findOne : Se conecta a la BD RDS de mysql y trae un valor de la tabla pakta_user **Path: /user/{id}** **Metodo HTTP: GET** 
	3. reto-pakta-dev-save :  Recibe el payload Request , valida que los datos estén correctos, se conecta a la BD RDS de mysql  y guarda los datos enviados  **Path: /user** **Metodo HTTP: POST**
	4. reto-pakta-dev-findByName : Este endpoint está intregado con [The Star Wars API](https://swapi.py4e.com/documentation) y tiene un parámetro opcional el cual es **nombre**.Internamente, llama al path /people del API , y si recibe el parámetro nombre, intermentefiltra el response para luego ser convertido al json solicitado (traducción al español).Si no recibe el parámetro nombre, solo convierte el response al json solicitado.**Path: /starwars/people(?nombre)** **Metodo HTTP: GET** 

## Diagrama de Arquitectura
![alt text](https://gist.githubusercontent.com/renxbazan/effd20139c02b370cf22730298edce46/raw/e6908a79201df8a3eb18a2c09b90e0d802457e8f/pakta-diagram.png?raw=true)



## Instalación en Dev
**Nota:** El despliegue en local es posible gracias al plugin de serverless **serverless-offline** 

```batch
# configuracion de credenciales aws a Serverless (Tiene los datos de mi cuenta, si quieres configurar en una propia, 
	reemplazar el key y el Secret con los de tu cuenta).
$ serverless config credentials --provider aws --key {AWS KEY} --secret {AWS SECRET}

# instalacion de dependencias npm
$ npm install

# iniciar servicios en local
$ serverless offline
```
## El terminal te dará como resultado un mensaje como este
![alt text](https://gist.githubusercontent.com/renxbazan/effd20139c02b370cf22730298edce46/raw/d68bd09d4e8caef82d5ef9a5e5ee1ed9fd492cb2/serverless-offline-deploy.png?raw=true)

## Ya puedes probar tus lambdas functions
> **Importante!** Necesitas estar conectado a internet ya que se conecta a una base de datos de AWS 
![alt text](https://gist.githubusercontent.com/renxbazan/effd20139c02b370cf22730298edce46/raw/8c9317d0dcd2fba5847830537e57c41667fc2f40/postman-offline-test.png?raw=true)

## Endpoints que puedes probar: (Reemplazar {URL} por la direccion en la que se depliegan los servicios)
 1. {URL}/user                         (GET)
 2. {URL}/user/1                       (GET)
 3. {URL}/starwars/people              (GET)
 4. {URL}/starwars/people?nombre=d2    (GET)
 5. {URL}/user                         (POST)

 **Nota** para usar el **POST** debes usar un payload con la siguiente estructura:
 ```javascript
 	{
        "document_type": 1,
        "document_number": "46464040",
        "name": "Paolo",
        "last_name": "Guerrero",
        "description": "Usuario de Paolo Guerrero"
  	}
```


 Al probar el POST tendrás un resultado similar al siguiente: 
![alt text](https://gist.githubusercontent.com/renxbazan/effd20139c02b370cf22730298edce46/raw/b9c569bde4f44c6af520a67424815d6ed948fef4/prueba-post.png?raw=true)


## Despliegue en AWS
**Nota:** Se está usando el plugin de serverless **serverless-plugin-include-dependencies** para aligerar el proyecto
y no suba la carpeta **node_modules**

```batch
# desplegar en aws
$ serverless deploy
```
El terminal te dará un resultado como este: 
![alt text](https://gist.githubusercontent.com/renxbazan/effd20139c02b370cf22730298edce46/raw/45913f80b6ffa2941542697c56e233910186c897/serverless-deploy-aws.png?raw=true)

Cualquier duda o consulta, contactarme al email: **renxbazan@gmail.com**