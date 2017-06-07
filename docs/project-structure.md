# Project structure
An Aurelia project is usually structured with its `attributes`, `components`, `pages`, etc into their own folders.

```
+-- attributes/
|  +-- index.ts
|  +-- some-attribute/
|     +-- some-attribute.html
|     +-- some-attribute.ts
|
+-- components/
|  +-- index.ts
|  +-- some-component/
|     +-- some-component.html
|     +-- some-component.ts
|
+-- converters/
|  +-- index.ts
|  +-- date-time-value-converter.ts
|
+-- pages/
|  +-- dashboard/
|  |  +-- components/
|  |  |  +-- dashboard-specific/
|  |  |    +-- specific.html
|  |  |    +-- specific.ts
|  |  |
|  |  +-- layout.html
|  |  +-- layout.ts
|  |
|  +-- login/
|     +-- layout.html
|     +-- layout.ts
|
+-- routers/
|  +-- app-router.ts
|
+-- services/
|  +-- user-service.ts
|
+-- utilities/
|  +-- app-events.ts
|
+-- app.html
+-- app.ts
+-- main.ts

```

The structure above is a good guidance as to how to structure an Aurelia application. As can be seen in the case of `pages/dashboard`, it can be nested. You would do this if there are any components that are specific to `dashboard`.
