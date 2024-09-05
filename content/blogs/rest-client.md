---
slug: rest-client
title: "Rest client in spring boot"
description: "In this blog we will look at the Rest Client in spring boot and how can we configure it to get most out of it"
published: true
publishedOn: "2024-09-04T09:04:00.000Z"
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

* **Using Builder**

::code-group
```java
RestClient client = RestClient.builder()
        .baseUrl('https://json-placeholder.com')
        .build();
```
::

::

::big-group
* **Using static method**

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
public class ProductService{
    private final RestClient client;
    
//...
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
                .retrieve()
                .body(Product.class);
    }
//...    
}
```
::
::

::big-group

**Post Request**

::code-group
```java

@Service
public class ProductService {
    
    private final RestClient client;
    
    public ResponseEntity<Void> createProduct(Product product) {
        this.client
                .post()
                .contentType(MediaType.APPLICATION_JSON)
                .body(product)
                .retrieve()
                .toBodylessEntity();
    }
    
    public ResponseEntity<APIResponse> createProductWithResponse(Product product) {
        return this.client
                .post()
                .contentType(MediaType.APPLICATION_JSON)
                .body(product)
                .retrieve()
                .toEntity(APIResponse.class);
    }
// ...
}
```
::
::

Similar to Get and Post **RestClient** provide other methods too, such as Put, Patch, Delete etc


::big-group
**Error Handling**

RestClient will throw an exception, the subclass of **RestClientException** whenever it encounters status code of _4xx_ or _5xx_. This behavior can be overwritten using the
**onStatus** method when building the request.

::code-group
```java

public class ProductService {
    
    private final RestClient client;
//...
    
    public ResponseEntity<APIResponse> updateProduct(Product product, Integer id) {
        this.client
                .put()
                .uri("/update-product/{id}", id)
                .contentType(MethodType.APPLICATION_JSON)
                .body(product)
                .retieve()
                .onStatus(HttpStatusCode::is4xxClientError, (request, response) -> {
                    throw new MyCustomRuntimeException(response.getStatusCode(), response.getHeaders());
                })
                .toEntity(APIResponse.class)
        ;
    }
//...
}

```
::
::

::big-group

**Exchange**

Exchange method provides complete control over the underlying request and response object of the Http Request letting you
perform any error handling necessary. `exchange()` method will be used instead of the `retrieve()`

::code-group
```java

public class ProductService {
    
    private final RestClient client;
//...
    
    public ResponseEntity<APIResponse> updateProduct(Product product, Integer id) {
        this.client
                .put()
                .uri("/update-product/{id}", id)
                .contentType(MethodType.APPLICATION_JSON)
                .body(product)
                .exchange((request, response) -> {
                    if (response.getStatusCode().is4xxClientError()) {
                        throw new MyCustomRuntimeException(response.getStatusCode(), response.getHeaders());
                    }
                    else {
                        return convertResponse(convertResponse(response));
                    }
                })
        ;
    }
//...
}

```
::
::

::big-group

**Multipart**

To send multipart data, you need to provide a MultiValueMap<String, Object> whose values may be an Object for part content, a Resource for a file part, or an HttpEntity for part content with headers.

::code-group
```java
@Service
public class MultipartExample {

    private final RestClient restClient;
    
    public void sendMultipartData() {
        MultiValueMap<String, Object> parts = new LinkedMultiValueMap<>();

        parts.add("fieldPart", "fieldValue");
        parts.add("filePart", new FileSystemResource("path/to/file.png"));
        parts.add("jsonPart", new Person("Jason"));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_XML);
        parts.add("xmlPart", new HttpEntity<>(new MyBean(), headers));

        restClient
                .post()
                .uri("/post-file")
                .headers(headers)
                .body(parts)
                .retrieve()
                .toBodilessEntity();
    }
}
```
::

::





