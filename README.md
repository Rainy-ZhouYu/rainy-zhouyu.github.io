# Yu Zhou — Academic Homepage

Source for https://rainy-zhouyu.github.io/, prepared from homepage version 10.

## Publish on GitHub Pages

Upload the contents of this folder to the root of the `Rainy-ZhouYu/rainy-zhouyu.github.io` repository. In Settings → Pages, choose **Deploy from a branch**, **main**, and **/(root)**, then save.

## Edit content

- `_pages/about.md`: biography, research interests, education, projects, awards, and service.
- `_data/publications.yml`: the 13 displayed papers and three selected publications.
- `_data/navigation.yml`: navigation links.
- `_includes/author-profile.html`: portrait and contact links.
- `assets/css/homepage.css`: layout and typography.
- `images/`: profile portrait and original paper figures.

## Local build

Install the Bundler version in `Gemfile.lock`, then run:

```sh
bundle install
bundle exec jekyll serve
```

## Attribution

Based on [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io), with a layout inspired by [Minimal Light](https://github.com/yaoyao-liu/minimal-light). The upstream license is retained in `LICENSE`.

The local icon sprite uses glyphs from the template-bundled Font Awesome 5 Free (Fonticons, Inc.) and Academicons (James Walsh); the source font licenses are SIL OFL 1.1. Paper-figure sources are recorded in `docs/paper-figure-sources.json`.
