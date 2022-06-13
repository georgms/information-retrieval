# Vagrant

## Setup

1. [Install Virtualbox](https://www.virtualbox.org/wiki/Downloads)
2. [Install Vagrant](https://www.vagrantup.com/downloads)
    * [Special instructions for Windows](https://www.vagrantup.com/docs/other/wsl#vagrant-installation)
    * [Special instructions for Mac](https://medium.com/@Aenon/mac-virtualbox-kernel-driver-error-df39e7e10cd8)
3. `vagrant up`
4. http://localhost:8983

## Stop

Preserves data

`vagrant halt`

## Start

`vagrant up`

## Reset

__Deletes all data__

`vagrant destroy`

## Stop

# Docker

## Setup

1. [Install Docker + Docker Compose](https://docs.docker.com/compose/install/)
2. `docker-compose up`
3. http://localhost:8983

## Stop

Preserves data

`docker-compose stop`

## Start

`docker-compose start`

## Reset

__Deletes all data__

`docker-compose down`
