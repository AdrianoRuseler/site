---
id: apache-about
sidebar_position: 3
title: Apache
description: Apache related documentation
---

[Apache](https://www.apache.org/)

```bash
 sudo add-apt-repository ppa:ondrej/apache2 -y && sudo apt-get update
 sudo apt install apache2
 sudo service apache2 restart
```

```bash
sudo a2ensite default-ssl.conf
sudo systemctl reload apache2
sudo nano /etc/apache2/sites-available/000-default.conf
```

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
```

```bash
apt update && apt upgrade -y
reboot now
sudo add-apt-repository ppa:ondrej/apache2 -y && sudo apt-get update
sudo nano /etc/apache2/sites-available/000-default.conf
sudo a2ensite default-ssl.conf
systemctl reload apache2
systemctl daemon-reload
sudo systemctl reload apache2
sudo nano /etc/apache2/sites-available/000-default.conf
sudo service apache2 restart
sudo nano /etc/apache2/sites-available/000-default.conf
cd /var/www/html
mkdir dummy
cp index.html dummy/index.html
cd dummy
sudo nano /etc/apache2/sites-available/000-default.conf
sudo service apache2 restart
sudo nano /etc/apache2/sites-available/default-ssl.conf
nano index.html
sudo systemctl reload apache2
```

## Opening ports 80 (HTTP) and 443 (HTTPS)

- The Commands

```bash
sudo iptables -I INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 443 -j ACCEPT
sudo netfilter-persistent save
```

- Verify the Rules

```bash
sudo iptables -L -n -v
```
