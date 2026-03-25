---
id: intro
title: ➡️ Intro
description: My intro document
slug: /intro
sidebar_position: 1
---

## Redirect to this site

### The PHP Solution (Recommended)

Replace everything in your `index.php` with this snippet:

```bash
nano index.php
```

```php
<?php
header("Location: https://adrianoruseler.github.io/site/", true, 301);
exit();
?>
```

### The HTML/JavaScript Backup

If for some reason your server isn't processing PHP correctly, or you want a "fallback" inside the same file, you can use a Meta Refresh tag. This is less "clean" for SEO but works in a pinch:

```bash
nano index.html
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta
      http-equiv="refresh"
      content="0; url=https://adrianoruseler.github.io/site/"
    />
    <title>Redirecting...</title>
  </head>
  <body>
    <p>
      If you are not redirected,
      <a href="https://adrianoruseler.github.io/site/">click here</a>.
    </p>
  </body>
</html>
```

### The .htaccess Redirect

If your website is hosted on an Apache server (which most standard web hosts use), you can create or edit a file named `.htaccess` in your root directory and add this code:

```bash
nano .htaccess
```

```apacheconf
RewriteEngine On
RewriteRule ^index\.php$ https://adrianoruseler.github.io/site/ [R=301,L]
```

## Which one should you use?

Here is a quick breakdown to help you decide:

| Method        | Best For...                  | Pro/Con                                                                 |
| :------------ | :--------------------------- | :---------------------------------------------------------------------- |
| **PHP**       | Quick fixes or single files. | **Pro:** Easy to implement. **Con:** Slightly slower than server-level. |
| **.htaccess** | Site-wide moves and SEO.     | **Pro:** Fastest performance. **Con:** Only works on Apache servers.    |
| **HTML Meta** | Fallback/Backup.             | **Pro:** Works everywhere. **Con:** Bad for SEO; looks "clunky."        |
