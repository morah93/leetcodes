/*
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.



Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {

};

/*
python3 answer

class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []

        for i in range(len(asteroids)):
            num = asteroids[i]

            if i == 0:
                stack.append(num)
                continue

            if i != 0 and sameDirection(stack[len(stack) - 1], num):
                stack.append(num)

            else: # if the last value in stack NOT same dir as num

                last = stack[len(stack) - 1]

                while len(stack) > 0 and sameDirection(stack[len(stack) - 1],num) is False:
                    temp = stack[len(stack) - 1]
                    stack.pop()

                    if abs(num) != abs(temp):
                        greatest = max(abs(num),abs(temp))
                        # s = None
                        if greatest == abs(temp):
                            # s = num
                            num = temp
                    # else: s = temp
                    # stack.append(s)
                    if num + temp == 0: num = 0
                    # num = temp

                if num !=0: stack.append(num)
        return stack

def sameDirection(a,b):
    # print(a,b)
    if (a < 0 and b < 0) or (a > 0 and b > 0) :
        return True
    elif a < 0 and b > 0:
        return True
    else: return False

*/
