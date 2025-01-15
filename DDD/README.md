# Understanding DDD

### Value Object

Value objects represent an item in the application's domain that does not have its own identity but is defined exclusively by its attributes. This means that two value objects are considered equal if their attributes are the same, regardless of whether they are different instances. They are immutable and are not supposed to be changed after they are created. To change a value object, it is necessary to create a new instance of the object.
