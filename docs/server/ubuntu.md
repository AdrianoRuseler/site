---
id: ubuntu-oci
title: Ubuntu
description: Ubuntu Server related documentation
---

## Ubuntu Server

- https://ubuntu.com/download/server

### Swap File

Check Current Swap Status

```bash
sudo swapon --show
```

```bash
# Create the 2G swap file:
sudo fallocate -l 2G /swapfile

# Secure the file:
sudo chmod 600 /swapfile

# Format and enable:
sudo mkswap /swapfile
sudo swapon /swapfile

# Make it persistent:
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### Fine-Tuning (Swappiness)

The Swappiness parameter defines how often your system uses the swap. It’s a value between 0 and 100.

- Low (e.g., 10): System avoids swap unless absolutely necessary (good for desktops).
- High (e.g., 60+): System swaps more aggressively (standard for servers).

```bash
cat /proc/sys/vm/swappiness
```

- Adjust Swappiness
  Since your RAM is very limited, you want the system to use RAM as much as possible and only hit the disk (swap) when it’s truly getting tight. Set your swappiness to 10 or 20.

```bash
sudo sysctl vm.swappiness=10
```

- Cache Pressure

This setting controls how the kernel tends to reclaim memory used for caching of directory and inode objects. On a small server, you want it to be a bit more aggressive in reclaiming that cache.

```bash
sudo sysctl vm.vfs_cache_pressure=50
```

To save these settings permanently, add these two lines to the bottom of

```bash
sudo nano /etc/sysctl.conf
```

```bash
vm.swappiness=10
vm.vfs_cache_pressure=50
```

## Reference

- https://gemini.google.com/share/6b9f7d8478cd
