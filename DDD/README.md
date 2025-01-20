# Understanding DDD

### Value Object

Value objects represent an item in the application's domain that does not have its own identity but is defined exclusively by its attributes. This means that two value objects are considered equal if their attributes are the same, regardless of whether they are different instances. They are immutable and are not supposed to be changed after they are created. To change a value object, it is necessary to create a new instance of the object.

### Entity

Entities are objects in the application's domain that have a unique identity and are distinguished from other objects by that identity, rather than by their attributes. An entity's identity is usually represented by a unique identifier, such as a primary key. Unlike value objects, entities are mutable, meaning their attributes can change over time as long as their identity remains the same. They are crucial for modeling the business rules and processes that rely on unique, identifiable items.

### Aggregate

Aggregates are clusters of related entities and value objects that are treated as a single unit for the purpose of data changes. Each aggregate has a root entity, known as the Aggregate Root, which enforces the consistency of changes within the aggregate. External objects or processes should only interact with the aggregate through its root. Aggregates help to define boundaries in the domain model and ensure that business rules and invariants are consistently applied.
