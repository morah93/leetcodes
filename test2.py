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