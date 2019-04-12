# Redirect Theme

<p align="right"><sup>Based on <a href="https://github.com/Shopify/skeleton-theme">Skeleton Theme</a></sup></p>

It redirects. That's all.

See more in the [skeleton-theme](https://github.com/Shopify/skeleton-theme) repository.

## Config

You'll find a `Theme redirection` parameter in `Theme parameters`.

### Redirect URL

The root URL you want to redirect to.

Example: `https://nextstart.netlify.com`

By default, if you don't set any `redirect_url` params, it will not redirect.

### Rules

Here is where magic things happend.

You can redirect a URL pattern to another.

Example: `/products=>/shop` will redirect from Shopify URL `/product` to your ROOT URL `/shop`

And you can add params!

Example: `/products/:slug=>/shop/:slug` will redirect, for example, `/products/first-product` to `/shop/first-product`

**Split your rules with a space**

By default, URLs are going to the `redirect_url` params. If you don't set any rule, everything will be redirect to the `redirect_url`.
