function circularArrayLoop(nums: number[]): boolean {
    let currentDirection: boolean = false;
    let fastPtr = 0;
    let slowPtr = 0;

    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(nums[i]) == nums.length) {
            continue;
        }
        if (nums[i] >= 0) {
            currentDirection = true;
        } else {
            currentDirection = false;
        }
        slowPtr = i;
        fastPtr = i;

        while (slowPtr != fastPtr || slowPtr != -1 || fastPtr != -1) {
            slowPtr = nextStep(nums, slowPtr, currentDirection);
            if (slowPtr == -1)
                break;

            fastPtr = nextStep(nums, fastPtr, currentDirection);

            if (fastPtr !== -1) {
                fastPtr = nextStep(nums, fastPtr, currentDirection);
            }

            if (fastPtr == -1 || slowPtr == fastPtr) {
                break;
            }
        }
        if (slowPtr == fastPtr && slowPtr != -1) {
            return true;
        }
    }
    return false;
}

function nextStep(nums : number[], currentIndex: number, currentDirection: boolean) {
    let nextDirection = nums[currentIndex] >= 0 ? true : false;
    if (nextDirection !== currentDirection) return -1;

    let nextIndex = (nums[currentIndex] + currentIndex) % nums.length;

    if (nextIndex < 0) nextIndex = nextIndex + nums.length;

    if (nextIndex == currentIndex) return -1;
    return nextIndex;
};