# Vue Nuxt Scroll Datepicker - Cashbac

### Props:

| Name                  | Type                            | Default             | Description                                                                                                            |
| --------------------- | ------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| v-model, value        | String, Date, DateTime (luxon)  |      yyyy-LL-dd HH:mm:ss               | Value                                                                                                                  |
| value          | String                          | null | Value                         |
| max              | String, Date, DateTime (luxon)  | yyyy-LL-dd HH:mm:ss                | Max date                                                                                                               |
| min              | String, Date, DateTime (luxon)  | yyyy-LL-dd HH:mm:ss                | Min date                                                                                          
| placeholder          | String                          | null | 
| inputClass          | String                          | null | 
| inputStyle          | String                          | null | 
| themeColor          | String                          | null |

### Events:

| Name                  |
| --------------------- |
| close                 |
| open                  |
| change-month          |
| change-year           |
| change-decade         |

### Methods:

| Name                  | Description           |
| --------------------- | --------------------- |
| open                  | Open datetime picker  |
| close                 | Close datetime picker |

## Development

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
