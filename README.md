<p align="center" height="250">
  <img height="300" src="logo-v.png" align="center"/>
</p>
<p align=center>
<a target="_blank" href="https://www.npmjs.com/package/v-decorators" title="NPM version"><img src="https://img.shields.io/npm/v/v-decorators/latest.svg?style=flat-square"></a>
<a target="_blank" href="https://www.npmjs.com/package/v-decorators" title="Node version"><img src="https://img.shields.io/npm/dt/v-decorators.svg?style=flat-square"></a>
<a target="_blank" href="https://opensource.org/licenses/MIT" title="License: MIT"><img src="https://img.shields.io/github/license/HaiFengFE/v-decorators.svg?style=flat-square"></a>
<a target="_blank" href="https://travis-ci.org/DhyanaChina/v-decorators" title="Build Status"><img src="https://img.shields.io/travis/HaiFengFE/v-decorators.svg?style=flat-square"></a>
<a target="_blank" href="https://www.npmjs.com/package/v-decorators" title="Peer dependency "><img src="https://img.shields.io/npm/dependency-version/v-decorators/peer/vue.svg?style=flat-square"></a>
</p>

[中文文档](README_CN.md)

### Getting Started
#### step.A: make sure you can use decorators.

1. append transform-decorators-legacy to your `.babelrc` file: `"plugins": ["transform-decorators-legacy" ...`

2. `npm i babel-plugin-transform-decorators-legacy -D`

#### step.B: install and import.

1. install lib to your project, `npm i v-decorators`.

2. import in your component, `import { Decorators } from 'v-decorators'`.

<br/>

### Documentation

- @Decorators.AutoCatch(catchMode?: string)

    **params:**
    - None, default. same as 'log'.
    - 'error': print error with console.error.
    - 'log': print error with console.log.
    - 'slient': no error message will be displayed.
    - `${functon_name}`: specify a function to handle errors.

    **desc:**
    help you automatically catch possible errors in async function, no `try ... catch` is required to use the function at any time.
    
    before use:
    ```
      methods: {
        async request() { try { await http(...) } catch(e) { ... } },
        clickHandle() { request().catch(...) }
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

<br/>

- @Decorators.Debounce(time?: number)

    **params:**
    - time: denounce time.

    **desc:**
    functions are triggered at most once in a specified time.


<br/>

- @Decorators.Throttle(wait: number = 300, options: Object={ leading: true, trailing: true })


    **params:**
    - wait: The number of milliseconds to throttle invocations to.
    - options:
       - leading: Specify invoking on the leading edge of the timeout.
       - trailing: Specify invoking on the trailing edge of the timeout.

- @Decorators.Delay(time?: number)

    **params:**
    - time: delay time.

    **desc:**
    delayed execution when a function is called. decorator will automatically clean the timer.


<br/>

- @Decorators.Time()

    **params:**
    - None.

    **desc:**
    statistics and displays the execution time of the current function, just like `console.time` and `console.timeEnd`.


<br/>

- @Decorators.Shortcuts(obj: object)

    **params:**
    - obj: key-value pairs that need to bind scopes.

    **desc:**
    bind data to vue instance, **but it's not responsive**. it can reduce the volume of your data function, usually used to bind static data used in vue templates. 
    reduce response data can effectively improve perf.

      ex:
      ```
      const MAX = '100', datePipe = (date) => { ... }
      // ...
      // in your component

      <div>{{ max }} {{datePipe('2018/12/01')}}</div>

      @Decorators.Shortcuts({
        max: MAX, datePipe: datePipe,
      })
      data: () => ({
        your responsive datas...
      })
      ```

<br/>

- @Decorators.Deprecated(message?: string)

    **params:**
    - message: logs.

    **desc:**
    show a deprecation message when function called.

<br/>

- @Decorators.NextTick()

    **params:** None.

    **desc:**
    run function in Vue.nextTick. more information: [Vue.nextTick](https://cn.vuejs.org/v2/api/#Vue-nextTick)

<br/>

### Examples

see [examples project](https://github.com/HaiFengFE/v-decorators/tree/master/test)

<br/>

### LICENSE

[**MIT**](LICENSE)

