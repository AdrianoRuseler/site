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
