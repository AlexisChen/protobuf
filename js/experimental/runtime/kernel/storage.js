goog.module('protobuf.runtime.Storage');

/**
 * Interface for getting and storing fields of a protobuf message.
 *
 * @interface
 * @package
 * @template FieldType
 */
class Storage {
  /**
   * Returns the pivot value.
   *
   * @return {number}
   */
  getPivot() {}

  /**
   * Sets a field in the specified field number.
   *
   * @param {number} fieldNumber
   * @param {!FieldType} field
   */
  set(fieldNumber, field) {}

  /**
   * Returns a field at the specified field number.
   *
   * @param {number} fieldNumber
   * @return {!FieldType|undefined}
   */
  get(fieldNumber) {}

  /**
   * Deletes a field from the specified field number.
   *
   * @param {number} fieldNumber
   */
  delete(fieldNumber) {}

  /**
   * Executes the provided function once for each field.
   *
   * @param {function(!FieldType, number): void} callback
   */
  forEach(callback) {}

  /**
   * Creates a shallow copy of the storage.
   *
   * @return {!Storage}
   */
  shallowCopy() {}
}

exports = Storage;