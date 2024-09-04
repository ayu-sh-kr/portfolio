---
slug: rest-client
title: "Rest client in spring boot"
description: "In this blog we will look at the Rest Client in spring boot and how can we configure it to get most out of it"
published: false
publishedOn: "2024-09-04T15:08:00.000Z"
topics:
    - Spring Boot
    - Rest Client
    - Java
    - Http Request
---

**RestClient** in spring boot is a synchronous API to make **HTTP** calls. It is fluent API that overcomes
the inconvenience caused by **RestTemplate**

Spring provide following choices for making calls to HTTP endpoints
* **RestClient** - comes with spring-web
* **WebClient** - comes with spring-web-flux (Reactive)
* **RestTemplate** - synchronous client with template method API.

If you don't like any of these you can use the legendary HttpClient of java, things are a bit verbose here but you my friend as a 
pro developer can create some wrapper for yourself to reduce those verbosity.

#### Rest Client
**RestClient** provides modern and fluent API, and it is an abstraction over Java's Http libraries. It converts between the Java's
Http object and springs' native implementations. Because of its fluent API design it is easier to understand and implement.
A **Fluent API** is a design pattern that allows method chaining in a way that makes the code more readable and expressive by sequentially calling methods on an object, often without the need for intermediate variables.

#### Creating RestClient
RestClient can be created using the static method or the builder to create with more options

::big-group
* Using builder

::code-group
```java
RestClient client = RestClient.builder()
        .baseUrl('https://json-placeholder.com')
        .build();
```
::

::

::big-group
* Using static method

::code-group
```java
RestClient client = RestClient.create();
```
::
::

#### Using the RestClient

::big-group
**Get Request**

::code-group
```java

@Service
public class ProductService {
    
    private final RestClient client;
    
    public ProductService() {
        this.client = RestClient.builder()
                .baseUrl("https://json-placeholder.com")
                .build();
    }
    
    public List<Products> getAllProducts() {
        return this.client
                .get()
                .uri('/posts')
                .retreive()
                .body(new ParameterizedTypeReference<List<Product>>() {});
    }
    
    public Product findById(String id) {
        return this.client
                .get()
                .uri('/posts/{id}', id)
                .retreive()
                .body(Product.class);
    }
}

```
::

::




