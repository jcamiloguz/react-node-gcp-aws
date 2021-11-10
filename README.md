# Multi-Cloud application Google Cloud Platform & Amazon Web Services
Este repositorio hace parte de la implementación de una aplicación web Multi-cloud basada en react.js y node.js, que utiliza los servicios de 
[Google Cloud Platform (GCP)](https://console.cloud.google.com/getting-started) para desplegarse en la web y se conecta a una base de datos alojada en el Servicio 
de base de datos relacional [(RDS)](https://aws.amazon.com/es/rds/) de [Amazon Web Services (AWS)](https://aws.amazon.com/es/) utilizando el motor de base de datos [MySQL](https://www.mysql.com/)
y que por medio de [GitHub Actions](https://github.com/features/actions) actualiza, construye y lanza automaticamente la aplicación en producción.
## 🟩Guía paso a paso para la reproducción de la solución.
Para reproducir la solución se tienen que tener en cuenta los siguientes pasos.

### 1. Realizar un Fork al repositorio jcamiloguz/react-node-gcp-aws.
### 2. Crear cuenta en Google Cloud Platform (GCP).
### 3. Creación de Clúster utilizando Google Kubernetes Engine en **Google Cloud Platform**.
### 4. Creación de los **secrets** del proyecto en GitHub de las credenciales de Google Cloud Platform.
### 5. Inicio del Clúster y obtebción de IP externa.

## 🟨Guía paso a paso funciones adicionales (Opcionales).
A  continuación se presenta una guía paso a paso para llevar a cabo las siguientes funciones adicionales del proyecto:
- Montaje en Docker Hub.
- Montaje base da datos propia de Amazon Web Services (AWS).
### 1. Creación de cuenta en Docker Hub.
### 2. Creación de los **secrets** del proyecto en Github de las credenciales de Docker Hub.
### 3. Creación de la cuenta en **AWS**.
### 4. Creación de la base de datos en el **Servicio de Base de Datos Relacional** de **AWS**.
### 5. Actualización de las credenciales de la base de datos creada.
