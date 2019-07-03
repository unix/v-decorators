![](./logo-v.png)

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

- @Decorators.Throttle(wait: number = 300)

    **params:**
    - wait: the number of milliseconds to throttle invocations to.

    **desc:**
    creates a throttled function that only invokes func at most once per every wait milliseconds.


<br/>

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

    e.g.:
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

see [examples project](https://github.com/unix/v-decorators/tree/master/test)

<br/>

### LICENSE

[**MIT**](LICENSE)

