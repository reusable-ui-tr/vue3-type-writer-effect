# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

# ReusableUITR Vue3 component for typewriter effect

A Vue 3 component for creating a typewriter effect with customizable options.

## Demo

Click <a href="https://stackblitz.com/edit/vue3-vite-starter-hy19bv?file=src%2FApp.vue" target="_blank">here</a> for a live demo.

## Installation

1. Install '@reusable-ui-tr/vue3-type-writer-effect' with npm

```
npm i @reusable-ui-tr/vue3-type-writer-effect
```

2. Import TypeWriterEffect component in your vue3 component

```javascript
import TypeWriterEffect from "@reusable-ui-tr/vue3-type-writer-effect";
```

3. Use 'TypeWriterEffect' component inside a template

```html
<TypeWriterEffect
  blink-duration="2s"
  cursor-color="blue"
  font-family="Lucida Console"
  font-size="20px"
  highlight-color="green"
  text="Hello World!"
  text-color="white"
  text-wrapper-element-type="p"
  typing-speed="slow"
/>
```

### Properties

| Property Name             | Property Type | Usage                                                                                                                                                                              |        Default Value        | Required |
| :------------------------ | :------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------: | :------: |
| blink-duration            | String        | Blink duration of typewriter effect in seconds or milliseconds (Example values: '1s', '10ms' etc.)                                                                                 |            '1s'             |    no    |
| cursor-color              | String        | All CSS legal color values are supported. (Example values: '#00ff00', #00ff0080, rgb(0, 255, 0), rgba(0, 255, 0, 0.3), hsl(120, 60%, 70%), hsla(120, 60%, 70%, 0.3), 'green' etc.) |           'black'           |    no    |
| font-family               | String        | Font family of the text                                                                                                                                                            | 'Roboto, Arial, sans-serif' |    no    |
| font-size                 | String        | Font size of the text                                                                                                                                                              |           '16px'            |    no    |
| highlight-color           | String        | Highlight color of the text                                                                                                                                                        |        'transparent'        |    no    |
| text                      | String        | Content of the text                                                                                                                                                                |            none             |   yes    |
| text-color                | String        | All CSS legal color values are supported. (Example values: '#00ff00', #00ff0080, rgb(0, 255, 0), rgba(0, 255, 0, 0.3), hsl(120, 60%, 70%), hsla(120, 60%, 70%, 0.3), 'green' etc.) |           'black'           |    no    |
| text-wrapper-element-type | String        | Type of HTML element to wrap text (All HTML elements are valid)                                                                                                                    |           'code'            |    no    |
| typing-speed              | String        | Typing speed of typewriter effect (Only following keywords are valid: 'slowest', 'slow', normal', 'fast', 'fastest')                                                               |          'normal'           |    no    |

## Dependencies

- [vue](https://www.npmjs.com/package/vue)

## Dev Dependencies

- [@types/node](https://www.npmjs.com/package/@types/node)
- [@vitejs/plugin-vue](https://www.npmjs.com/package/@vitejs/plugin-vue)
- [typescript](https://www.npmjs.com/package/typescript)
- [vite](https://www.npmjs.com/package/vite)
- [vite-plugin-dts](https://www.npmjs.com/package/vite-plugin-dts)
- [vite-plugin-libcss](https://www.npmjs.com/package/vite-plugin-libcss)
- [vue-tsc](https://www.npmjs.com/package/vue-tsc)