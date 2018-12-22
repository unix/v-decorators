<p align="center" height="300">
  <img src="logo-v.png" align="center"/>
</p>
<p align=center>
<a target="_blank" href="https://www.npmjs.com/package/v-decorators" title="NPM version"><img src="https://img.shields.io/npm/v/v-decorators/latest.svg?style=flat-square"></a>
<a target="_blank" href="https://www.npmjs.com/package/v-decorators" title="Node version"><img src="https://img.shields.io/npm/dt/v-decorators.svg?style=flat-square"></a>
<a target="_blank" href="https://opensource.org/licenses/MIT" title="License: MIT"><img src="https://img.shields.io/github/license/HaiFengFE/v-decorators.svg?style=flat-square"></a>
<a target="_blank" href="https://travis-ci.org/DhyanaChina/v-decorators" title="Build Status"><img src="https://img.shields.io/travis/HaiFengFE/v-decorators.svg?style=flat-square"></a>
<a target="_blank" href="https://www.npmjs.com/package/v-decorators" title="Peer dependency "><img src="https://img.shields.io/npm/dependency-version/v-decorators/peer/vue.svg?style=flat-square"></a>
</p>
<br/>

### Getting Started
#### step.A, make sure you can use decorators.

1. append transform-decorators-legacy to your `.babelrc` file: `"plugins": ["transform-decorators-legacy" ...`

2. `npm i babel-plugin-transform-decorators-legacy -D`

#### step.B, install and import.

1. install lib to your project, `npm i v-decorators -S`.

2. import in your component, `import { Decorators } from 'v-decorators'`.

<br/>

### Documentation

- @Decorators.AutoCatch(catchMode)
    **params:**
    - None, default. same as 'log',
    - catchMode: 'error'. print error with console.error,
    - catchMode: 'log'. print error with console.log.
    - catchMode: 'slient'. no error message will be displayed.
    - catchMode: `${functon_name}`, string. specify a function to handle errors.

    **desc:**
    help you automatically catch possible errors in async function, no `try ... catch` is required to use the function at any time.
    before use:
    ```
      methods: {
        async request() { try { await http(...) } catch(e) { ... } },
        clickHandle() { request().carch(...) }
      }
    ```
    after use:
    ```
      methods: {
        @Decorators.AutoCatch()
        async request() { await http(...) },
        clickHandle() { request() }
      }
    ```

- @Decorators.Debounce(time)
      **params:**
        - time: number, denounce time.

      **desc:**
      functions are triggered at most once in a specified time.

- @Decorators.Delay(time)
      **params:**
        - time: number, delay time.

      **desc:**
      delayed execution when a function is called. decorator will automatically clean the timer.

- @Decorators.Time()
      **params:**
        - None.

      **desc:**
      statistics and displays the execution time of the current function, just like `console.time` and `console.timeEnd`.

- @Decorators.Shortcut(obj)
      **params:**
        - obj: object, key-value pairs that need to bind scopes.

      **desc:**
      bind data to vue instance, **but it's not responsive**. it can reduce the volume of your data function,
      usually used to bind static data used in vue templates. reduce response data can effectively improve perf.

      ex:
      ```
      const MAX = '100', datePipe = (date) => { ... }
      // ...
      // in your component

      <div>{{ max }} {{datePipe('2018/12/01')}}</div>

      @Decorators.Shortcut({
        max: MAX, datePipe: datePipe,
      })
      data: () => ({
        your responsive datas...
      })
      ```
<br/>

### Examples

[online examples](https://v-decorators.netlify.com/)

<br/>

### LICENSE

[**MIT**](LICENSE)

