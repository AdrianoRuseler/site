---
id: yt-dlp-webui
title: Web UI
description: A terrible web ui and RPC server for yt-dlp. Designed to be self-hosted.
slug: /tools/yt-dlp/webui
---

High performance extendeable web ui and RPC server for yt-dlp with low impact on resources.

Created for the only purpose of fetching videos from my server/nas and monitor upcoming livestreams.

- https://github.com/marcopiovanello/yt-dlp-web-ui
- https://hub.docker.com/r/marcobaobao/yt-dlp-webui
- https://github.com/marcopiovanello/yt-dlp-web-ui/pkgs/container/yt-dlp-web-ui

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
  yt-dlp-webui:
    image: marcobaobao/yt-dlp-webui:latest
    ports:
      - 3033:3033
    volumes:
      - ${DOWNLOADS_PATH}:/downloads # replace <your dir> with a directory on your host system
      - ${CONFIG_PATH}:/config
    healthcheck:
      test: curl -f http://localhost:3033 || exit 1
    restart: unless-stopped
```

```bash
docker exec -it yt-dlp /bin/sh
```

```bash
pip install -U --pre yt-dlp[default]
```

yt-dlp Web UI

CONFIG_PATH=/srv/dev-disk-by-uuid-d33ceb8d-d0bc-41f9-aa02-ecf05a6952a1/dockerfiles/yt-dlp-webui
DOWNLOADS_PATH=/srv/dev-disk-by-uuid-d33ceb8d-d0bc-41f9-aa02-ecf05a6952a1/Downloads

no matching manifest for linux/arm/v7 in the manifest list entries
