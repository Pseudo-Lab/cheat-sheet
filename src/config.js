const IS_DEVELOPMENT = true; // 개발중에서는 true로 설정해주시고,
// 배포되는 환경에서는 반드시 false로 꼭 수정해주셔야 합니다.
// 이게 최선인지는 잘 모르겠는데 일단은 이렇게 했습니다.

const BASE_URL = "https://pseudo-lab.github.io";
const BASE_NAME = "/matplotlib-cheat-sheet";
const columnsCountBreakPoints = {
    "340": 1,
    "680": 2,
    "1020": 3,
    "1360": 4,
    "1700": 5,
};
const maxWidth = 320;
export {
    IS_DEVELOPMENT,
    BASE_NAME,
    BASE_URL,
    columnsCountBreakPoints,
    maxWidth,
}