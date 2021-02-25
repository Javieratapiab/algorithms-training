# Facebook Coding Question - How Many Ways to Decode This Message?
# Explanation: https://www.youtube.com/watch?v=qli-JCrSwuk

# Problem:
# Given a string,
# a => 1
# b => 2
# c => 3
# ...
# z => 26

# input can be:
# data = "12"
# num_ways(data) => 2
# because it can be mapped to "ab" and "l"

# Possible solution: recursion
# data => "abc"
# k => last "k" letters (non negative integer)

# Numbers of ways helper
# def helper(data, k):
#     if k == 0:
#         return 1
#     else:


def num_ways_of_data(data):
    return helper(data, data.len() - 1)