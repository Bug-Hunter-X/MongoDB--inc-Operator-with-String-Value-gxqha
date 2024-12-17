# MongoDB $inc Operator with String Value
This repository demonstrates a common error when using the MongoDB `$inc` operator. The `$inc` operator is used to increment a numeric field by a specified value.  However, providing a string value instead of a number will lead to unexpected results. The solution showcases the correct way to use the `$inc` operator with numerical values.

## Bug
The provided code snippet incorrectly uses the `$inc` operator with a string value ("1").  This causes the operation to fail or behave unexpectedly, potentially leading to data corruption or incorrect updates.