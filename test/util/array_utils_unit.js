/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

describe('ArrayUtils', function() {
  var ArrayUtils;

  beforeAll(function() {
    ArrayUtils = shaka.util.ArrayUtils;
  });

  describe('removeDuplicates', function() {
    it('will remove duplicate elements', function() {
      var arr = [1, 2, 2, 5, 6, 3, 1, 2];
      expect(ArrayUtils.removeDuplicates(arr)).toEqual([1, 2, 5, 6, 3]);
    });

    it('does nothing if no duplicates', function() {
      var arr = [1, 2, 3, 6, 5, 4];
      expect(ArrayUtils.removeDuplicates(arr)).toEqual(arr);
    });

    it('accepts an optional comparator', function() {
      var arr = ['aaa', 'abc', 'bat', 'car', 'cat'];
      var comparator = function(a, b) { return a[0] === b[0]; };
      expect(ArrayUtils.removeDuplicates(arr, comparator))
          .toEqual(['aaa', 'bat', 'car']);
    });
  });

  describe('indexOf', function() {
    it('will find a matching element', function() {
      var arr = ['aaa', 'bbb', 'ccc'];
      var comparator = function(a, b) { return a[0] === b[0]; };
      expect(ArrayUtils.indexOf(arr, 'bat', comparator)).toBe(1);
    });

    it('will return -1 if not found', function() {
      var arr = ['aaa', 'bbb', 'ccc'];
      var comparator = function(a, b) { return a[0] === b[0]; };
      expect(ArrayUtils.indexOf(arr, 'zoo', comparator)).toBe(-1);
    });
  });
});
