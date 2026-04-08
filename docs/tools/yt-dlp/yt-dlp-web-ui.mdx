---
id: yt-dlp-webui
title: Web UI
description: A terrible web ui and RPC server for yt-dlp. Designed to be self-hosted.
slug: /tools/yt-dlp/webui
---

High performance extendeable web ui and RPC server for yt-dlp with low impact on resources.

Created for the only purpose of fetching videos from my server/nas and monitor upcoming livestreams.

- https://github.com/marcopiovanello/yt-dlp-web-ui
- https://github.com/AdrianoRuseler/yt-dlp-web-ui
- https://hub.docker.com/r/ruseler/yt-dlp-webui-xbuild

## Docker images are available on Docker Hub or ghcr.io.

```bash
docker pull marcobaobao/yt-dlp-webui
```

```bash
# latest dev
docker pull ghcr.io/marcopiovanello/yt-dlp-web-ui:latest
```

## Docker Compose

```yml
services:
  yt-dlp-webui-xbuild:
    image: ruseler/yt-dlp-webui-xbuild:latest
    environment:
      - TZ=America/Sao_Paulo
    ports:
      - 3033:3033
    volumes:
      - ./downloads:/downloads
      - ./config.yml:/config/config.yml
    healthcheck:
      test: curl -f http://localhost:3033 || exit 1
    restart: unless-stopped
```

```yml
# https://github.com/marcopiovanello/yt-dlp-web-ui/wiki/Authentication-methods
require_auth: true
username: your_username
password: your_password

# https://github.com/marcopiovanello/yt-dlp-web-ui/wiki/Twitch-integration
twitch:
  client_id: your-client-id
  client_secret: your-secret
  check_interval: 2m # follows standard go Duration format (e.g. 2m30s, 1h, 30s)
```

```apacheconf
<VirtualHost *:80>
    ProxyPreserveHost On

    # Allow WebSocket upgrade
    <Location />
    #    AuthType Basic
    #    AuthName "Restricted yt-dlp Access"
    #    AuthUserFile /etc/apache2/.ytdlp.htpasswd
    #    Require valid-user

        ProxyPass http://yt-dlp-webui-xbuild:3033/ upgrade=websocket
        ProxyPassReverse http://yt-dlp-webui-xbuild:3033/
    </Location>

    # WebSocket proxy for RPC
    RewriteEngine On
    RewriteCond %{HTTP:Upgrade} =websocket [NC]
    RewriteRule /(.*)           ws://yt-dlp-webui-xbuild:3033/$1 [P,L]
    RewriteCond %{HTTP:Upgrade} !=websocket [NC]
    RewriteRule /(.*)           http://yt-dlp-webui-xbuild:3033/$1 [P,L]

    # WebSocket support headers
    ProxyTimeout 3600
    ProxyBadHeader Ignore

    # Forward headers
    RequestHeader set X-Forwarded-Proto "http"
    RequestHeader set X-Forwarded-Port "80"

</VirtualHost>
```

```bash
docker exec -it yt-dlp /bin/sh
```

```bash
pip install -U --pre yt-dlp[default]
```
