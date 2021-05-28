# J9-TP

## Machines

Ce dossier contient la liste des vagrants file pour les machines
- mas-ub : Ubuntu Server 18.04 disposant de: 
    - jenkins
    - ansible
- ctr-ub-1 & ctr-ub-2 : Ubuntu Server 18.04
- ctr-cento : Centos 7

## Micro Service

Le micro service est un serveur nodejs/express

### Fonctions

- GET /md5/<str>
- GET /sha256/<str>
Chacune des ces routes renverra le hash MD5 ou SHA256de la chaîne fournie enparamètre url (<str>)

Exemples d’utilisation 
```
La requête http GET/md5/hellorenverra le json suivant:{"hash":"md5","cleartext":"hello","hashedtext":"5d41402abc4b2a76b9719d911017c592"}
```
```
La requête http GET/sha256/hellorenverra le jsonsuivant:{"hash":"sha256","cleartext":"hello","hashedtext":"2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824"}
```

### Build

Créer une image avec le script avec la commande suivante : 
```
./scripts/build.sh
```

### Démarrer le service
Démarrer le service en local avec la commande suivante :
```
./scripts/start.sh
```