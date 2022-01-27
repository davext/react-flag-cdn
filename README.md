# react-flag-cdn

## React Flag CDN is based on https://flagcdn.com/

This package will pull flags using the country code according to the ISO_3166 standard.

## Example

```
//to render an SVG of the US flag:
<Flag country={"US"}/>

//to render an SVG of the Canadian flag:
<Flag country={"CA"}/>
```

## API

### width
You can specify width using the width prop. `width` takes a number. It also defaults to 100 when it's not passed.
```
<Flag width={20}  country={"CA"}/>
```

## In Development. Not published yet
### hight
You can specify a hight using the hight prop. `hight` takes a number.
```
<Flag hight={20} country={"US"}/>
```

### type
You can specify a variant using the hight prop. `type` takes a string either `svg`,`jpg`, or `png`. Defaults to svg
```
<Flag type={"jpg"} country={"US"}/>
```


### variant
You can get a waving flag rather than a normal one. Only works with rasterized images (`jpg` or `png`)

| Variant Value  | Description |
| -----------    | ----------------- |
| wave      | Renders a waving flag  |
| circle   | Renders a circular flag |

Defaults to normal flags
```
<Flag type={"jpg"} variant={"wave"} country={"US"}/>
```


### colorMode
You can get different color filters for flags rather than a normal one. Only works with rasterized images (`jpg` or `png`)


| Color Value  | Description |
| -----------    | ----------------- |
| inverse   | Renders an inverse color flag |
| bw   | Renders a black and white flag |

Defaults to normal flags
```
<Flag type={"jpg"} colorMode={"inverse"} country={"US"}/>
```


## Ideas?
Open an issue and share your ideas!
