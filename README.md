# Blue
![Preview](./img/previewgithub.png?raw=true)

## Version
2.3.1

## Requirements
Batflat 1.3.x

## Changelog
![View changelog](./CHANGELOG.md)

## How to install
1. Download this repository
2. Unzip the downloaded files
3. Move catalog with theme to the `/themes` 
4. Configure template

## Configuration

### Homepage
- Select Pages -> Add new
- Insert title and content
- Select `home.html` template
- Change homepage in settings

### 404 
- Select Pages -> Manage
- Select 404 page
- Change template to the `404.html`

### Sidebar
- Sidebar title require `{$snippet.widget-title}` snippet
- Sidebar content require `{$snippet.widget-content}` snippet

### Social icons
You can modify your social icons in the `inc/social.html` file. All you need to do is change LINK and ICON_NAME.

```html
<a class="social-icon" href="LINK">
    <i class="fa fa-ICON_NAME" aria-hidden="true"></i>
</a>
```

Icon names from: [Font Awesome](https://fontawesome.com/cheatsheet) 

### LangSwitcher
- Add `<li class="langswitcher">{$langSwitcher}</li>` to the `.navbar-nav` container in `header.html` file, if you want to use lang switcher on your site 