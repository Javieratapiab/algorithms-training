# Facebook Coding Interview Question - sortedSquaredArray
# https://www.youtube.com/watch?v=4eWKHLSRHPY

# Brute force (inefficient) O(NlogN)
def pow_integers(array):
    result = []
    for n in array:
        result.append(pow(n, 2))
    return result


unsorted_array = pow_integers([-6, -4, 1, 2, 3, 5])
print(sorted(unsorted_array))


# Better solution (linear runtime)
def pow_integers_two(array):
    # we initialize the array (same length of the input)
    output = list(range(1, len(array) + 1))
    left = 0
    right = len(array) - 1
    counter = len(array) - 1

    # We need to fill this out (backwards) from the smallest
    # to the largest integer within the input array.
    for _ in array:
        if abs(array[left]) > array[right]:
            output[counter] = array[left] * array[left]
            left = left + 1
            counter = counter - 1
        else:
            output[counter] = array[right] * array[right]
            right = right - 1
            counter = counter - 1
    return output


print(pow_integers_two([-6, -4, 1, 2, 3, 5]))
