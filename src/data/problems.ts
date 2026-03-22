import { Problem } from '../types';

export const problems: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    description: "給定一個整數陣列 `nums` 和一個目標整數 `target`，請找出陣列中**兩個數字**，使它們相加等於 `target`，並回傳這兩個數字的**索引值 (index)**。\n\n你可以假設每種輸入只會有一種有效答案，而且你**不能**使用同一個元素兩次。\n\n你可以按任意順序回傳答案。",
    examples: [
      { input: "nums = [2, 7, 11, 15], target = 9", output: "[0, 1]" },
      { input: "nums = [3, 2, 4], target = 6", output: "[1, 2]" }
    ],
    constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "-10^9 <= target <= 10^9"]
  },
  {
    id: 2,
    title: "Valid Parentheses",
    difficulty: "Easy",
    description: "給定一個只包含字元 `'('`, `')'`, `'{'`, `'}'`, `'['` 和 `']'` 的字串 `s`，判斷輸入的字串是否有效。\n\n有效字串需滿足：\n1. 左括號必須用相同類型的右括號閉合。\n2. 左括號必須以正確的順序閉合。",
    examples: [
      { input: "s = \"()\"", output: "true" },
      { input: "s = \"()[]{}\"", output: "true" },
      { input: "s = \"(]\"", output: "false" }
    ],
    constraints: ["1 <= s.length <= 10^4", "s 僅由括號 '()[]{}' 組成"]
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    description: "給定一個字串 `s`，請你找出其中不含有重複字元的**最長子字串**的長度。",
    examples: [
      { input: "s = \"abcabcbb\"", output: "3", explanation: "無重複字元的最長子字串是 \"abc\"。" },
      { input: "s = \"bbbbb\"", output: "1" }
    ],
    constraints: ["0 <= s.length <= 5 * 10^4", "s 由英文字母、數字、符號和空格組成"]
  },
  {
    id: 4,
    title: "Maximum Subarray",
    difficulty: "Medium",
    description: "給定一個整數陣列 `nums` ，請找出一個具有最大和的連續子陣列（子陣列最少包含一個元素），返回其最大和。",
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "連續子陣列 [4,-1,2,1] 的和最大，為 6。" },
      { input: "nums = [1]", output: "1" }
    ],
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"]
  },
  {
    id: 5,
    title: "Climbing Stairs",
    difficulty: "Easy",
    description: "假設你正在爬樓梯。需要 `n` 階你才能到達樓頂。\n\n每次你可以爬 1 或 2 個臺階。你有多少種不同的方法可以爬到樓頂呢？",
    examples: [
      { input: "n = 2", output: "2", explanation: "有兩種方法可以爬到樓頂。\n1. 1 階 + 1 階\n2. 2 階" },
      { input: "n = 3", output: "3", explanation: "有三種方法可以爬到樓頂。\n1. 1 階 + 1 階 + 1 階\n2. 1 階 + 2 階\n3. 2 階 + 1 階" }
    ],
    constraints: ["1 <= n <= 45"]
  },
  {
    id: 6,
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    description: "給定一個陣列 `prices` ，它的第 `i` 個元素 `prices[i]` 表示一支給定股票第 `i` 天的價格。\n\n你只能選擇**某一天**買入這只股票，並選擇在**未來的某一個不同的日子**賣出該股票。設計一個演算法來計算你所能獲取的最大利潤。\n\n如果你不能獲取任何利潤，返回 0 。",
    examples: [
      { input: "prices = [7,1,5,3,6,4]", output: "5", explanation: "在第 2 天（股票價格 = 1）的時候買入，在第 5 天（股票價格 = 6）的時候賣出，最大利潤 = 6 - 1 = 5 。" },
      { input: "prices = [7,6,4,3,1]", output: "0" }
    ],
    constraints: ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"]
  },
  {
    id: 7,
    title: "Reverse Linked List",
    difficulty: "Easy",
    description: "給你單鏈表的頭節點 `head` ，請你反轉鏈表，並返回反轉後的鏈表。",
    examples: [
      { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" },
      { input: "head = []", output: "[]" }
    ],
    constraints: ["鏈表中節點的數目範圍是 [0, 5000]", "-5000 <= Node.val <= 5000"]
  },
  {
    id: 8,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    description: "將兩個升序鏈表合併為一個新的 **升序** 鏈表並返回。新鏈表是通過拼接給定的兩個鏈表的所有節點組成的。",
    examples: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "list1 = [], list2 = []", output: "[]" }
    ],
    constraints: ["兩個鏈表的節點數目範圍是 [0, 50]", "-100 <= Node.val <= 100", "list1 和 list2 均按 非遞減順序 排列"]
  },
  {
    id: 9,
    title: "3Sum",
    difficulty: "Medium",
    description: "給你一個包含 `n` 個整數的陣列 `nums`，判斷 `nums` 中是否存在三個元素 a，b，c ，使得 a + b + c = 0 ？請你找出所有和為 0 且不重複的三元組。\n\n**注意：** 答案中不可以包含重複的三元組。",
    examples: [
      { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
      { input: "nums = [0,1,1]", output: "[]" }
    ],
    constraints: ["3 <= nums.length <= 3000", "-10^5 <= nums[i] <= 10^5"]
  },
  {
    id: 10,
    title: "Container With Most Water",
    difficulty: "Medium",
    description: "給定一個長度為 `n` 的整數陣列 `height` 。有 `n` 條垂線，第 `i` 條線的兩個端點是 `(i, 0)` 和 `(i, height[i])` 。\n\n找出其中的兩條線，使得它們與 x 軸共同構成的容器可以容納最多的水。\n\n返回容器可以儲存的最大水量。",
    examples: [
      { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49", explanation: "在此情況下，容器能夠容納水（表示為藍色部分）的最大值為 49。" },
      { input: "height = [1,1]", output: "1" }
    ],
    constraints: ["n == height.length", "2 <= n <= 10^5", "0 <= height[i] <= 10^4"]
  },
  {
    id: 11,
    title: "Number of Islands",
    difficulty: "Medium",
    description: "給你一個由 `'1'`（陸地）和 `'0'`（水）組成的的二維網格，請你計算網格中島嶼的數量。\n\n島嶼總是被水包圍，並且每座島嶼只能由水平方向和/或豎直方向上相鄰的陸地連接形成。\n\n此外，你可以假設該網格的四條邊均被水包圍。",
    examples: [
      { input: "grid = [\n  [\"1\",\"1\",\"1\",\"1\",\"0\"],\n  [\"1\",\"1\",\"0\",\"1\",\"0\"],\n  [\"1\",\"1\",\"0\",\"0\",\"0\"],\n  [\"0\",\"0\",\"0\",\"0\",\"0\"]\n]", output: "1" },
      { input: "grid = [\n  [\"1\",\"1\",\"0\",\"0\",\"0\"],\n  [\"1\",\"1\",\"0\",\"0\",\"0\"],\n  [\"0\",\"0\",\"1\",\"0\",\"0\"],\n  [\"0\",\"0\",\"0\",\"1\",\"1\"]\n]", output: "3" }
    ],
    constraints: ["m == grid.length", "n == grid[i].length", "1 <= m, n <= 300", "grid[i][j] 的值為 '0' 或 '1'"]
  },
  {
    id: 12,
    title: "LRU Cache",
    difficulty: "Medium",
    description: "請你設計並實現一個滿足  LRU (最近最少使用) 緩存 約束的資料結構。\n實現 `LRUCache` 類：\n- `LRUCache(int capacity)` 以 正整數 作為容量 `capacity` 初始化 LRU 緩存\n- `int get(int key)` 如果關鍵字 `key` 存在於緩存中，則返回關鍵字的值，否則返回 -1 。\n- `void put(int key, int value)` 如果關鍵字 `key` 已經存在，則變更其資料值 `value` ；如果不存在，則向緩存中插入該組 `key-value` 。如果插入操作導致關鍵字數量超過 `capacity` ，則應該 逐出 最久未使用的關鍵字。\n\n函數 `get` 和 `put` 必須以 `O(1)` 的平均時間複雜度運行。",
    examples: [
      { input: "[\"LRUCache\", \"put\", \"put\", \"get\", \"put\", \"get\", \"put\", \"get\", \"get\", \"get\"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]", output: "[null, null, null, 1, null, -1, null, -1, 3, 4]" }
    ],
    constraints: ["1 <= capacity <= 3000", "0 <= key <= 10000", "0 <= value <= 10^5", "最多調用 2 * 10^5 次 get 和 put"]
  },
  {
    id: 13,
    title: "Merge Intervals",
    difficulty: "Medium",
    description: "以陣列 `intervals` 表示若干個區間的集合，其中單個區間為 `intervals[i] = [starti, endi]` 。請你合併所有重疊的區間，並返回 一個不重疊的區間陣列，該陣列需恰好覆蓋輸入中的所有區間 。",
    examples: [
      { input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]", explanation: "區間 [1,3] 和 [2,6] 重疊, 將它們合併為 [1,6]." },
      { input: "intervals = [[1,4],[4,5]]", output: "[[1,5]]", explanation: "區間 [1,4] 和 [4,5] 可被視為重疊區間。" }
    ],
    constraints: ["1 <= intervals.length <= 10^4", "intervals[i].length == 2", "0 <= starti <= endi <= 10^4"]
  },
  {
    id: 14,
    title: "Coin Change",
    difficulty: "Medium",
    description: "給你一個整數陣列 `coins` ，表示不同面額的硬幣；以及一個整數 `amount` ，表示總金額。\n\n計算並返回可以湊成總金額所需的 **最少的硬幣個數** 。如果沒有任何一種硬幣組合能組成總金額，返回 `-1` 。\n\n你可以認為每種硬幣的數量是無限的。",
    examples: [
      { input: "coins = [1, 2, 5], amount = 11", output: "3", explanation: "11 = 5 + 5 + 1" },
      { input: "coins = [2], amount = 3", output: "-1" }
    ],
    constraints: ["1 <= coins.length <= 12", "1 <= coins[i] <= 2^31 - 1", "0 <= amount <= 10^4"]
  },
  {
    id: 15,
    title: "Lowest Common Ancestor of a Binary Tree",
    difficulty: "Medium",
    description: "給定一個二元樹, 找到該樹中兩個指定節點的最近公共祖先。\n\n百度百科中最近公共祖先的定義為：「對於有根樹 T 的兩個節點 p、q，最近公共祖先表示為一個節點 x，滿足 x 是 p、q 的祖先且 x 的深度儘可能大（一個節點也可以是它自己的祖先）。」",
    examples: [
      { input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1", output: "3", explanation: "節點 5 和節點 1 的最近公共祖先是節點 3 。" },
      { input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4", output: "5", explanation: "節點 5 和節點 4 的最近公共祖先是節點 5 。因為根據定義最近公共祖先節點可以為節點本身。" }
    ],
    constraints: ["樹中節點數目在範圍 [2, 10^5] 內。", "-10^9 <= Node.val <= 10^9", "所有 Node.val 互不相同 。", "p != q", "p 和 q 均存在於給定的二元樹中。"]
  },
  {
    id: 16,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    description: "給定兩個大小分別為 `m` 和 `n` 的正序（從小到大）陣列 `nums1` 和 `nums2`。請你找出並返回這兩個正序陣列的 **中位數** 。\n\n演算法的時間複雜度應該為 `O(log (m+n))` 。",
    examples: [
      { input: "nums1 = [1,3], nums2 = [2]", output: "2.00000", explanation: "合併陣列 = [1,2,3] ，中位數 2" },
      { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.50000", explanation: "合併陣列 = [1,2,3,4] ，中位數 (2 + 3) / 2 = 2.5" }
    ],
    constraints: ["nums1.length == m", "nums2.length == n", "0 <= m <= 1000", "0 <= n <= 1000", "1 <= m + n <= 2000", "-10^6 <= nums1[i], nums2[i] <= 10^6"]
  },
  {
    id: 17,
    title: "Trapping Rain Water",
    difficulty: "Hard",
    description: "給定 `n` 個非負整數表示每個寬度為 1 的柱子的高度圖，計算按此排列的柱子，下雨之後能接多少雨水。",
    examples: [
      { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6", explanation: "可以接 6 個單位的雨水。" },
      { input: "height = [4,2,0,3,2,5]", output: "9" }
    ],
    constraints: ["n == height.length", "1 <= n <= 2 * 10^4", "0 <= height[i] <= 10^5"]
  },
  {
    id: 18,
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    description: "給你一個鏈表陣列，每個鏈表都已經按升序排列。\n\n請你將所有鏈表合併到一個升序鏈表中，返回合併後的鏈表。",
    examples: [
      { input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]", explanation: "將它們合併到一個有序鏈表中得到。\n1->1->2->3->4->4->5->6" },
      { input: "lists = []", output: "[]" }
    ],
    constraints: ["k == lists.length", "0 <= k <= 10^4", "0 <= lists[i].length <= 500", "-10^4 <= lists[i][j] <= 10^4", "lists[i] 按 升序 排列", "lists[i].length 的總和不超過 10^4"]
  },
  {
    id: 19,
    title: "N-Queens",
    difficulty: "Hard",
    description: "按照國際象棋的規則，皇后可以攻擊與之處在同一行或同一列或同一斜線上的棋子。\n\n**n 皇后問題** 研究的是如何將 `n` 個皇后放置在 `n×n` 的棋盤上，並且使皇后彼此之間不能相互攻擊。\n\n給你一個整數 `n` ，返回所有不同的 **n 皇后問題** 的解決方案。\n\n每種解法包含一個不同的 **n 皇后問題** 的棋子放置方案，該方案中 `'Q'` 和 `'.'` 分別代表了皇后和空位。",
    examples: [
      { input: "n = 4", output: "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]", explanation: "4 皇后問題存在兩個不同的解法。" },
      { input: "n = 1", output: "[[\"Q\"]]" }
    ],
    constraints: ["1 <= n <= 9"]
  },
  {
    id: 20,
    title: "Edit Distance",
    difficulty: "Hard",
    description: "給你兩個單詞 `word1` 和 `word2`， 請返回將 `word1` 轉換成 `word2` 所使用的最少操作數  。\n\n你可以對一個單詞進行如下三種操作：\n- 插入一個字元\n- 刪除一個字元\n- 替換一個字元",
    examples: [
      { input: "word1 = \"horse\", word2 = \"ros\"", output: "3", explanation: "horse -> rorse (將 'h' 替換為 'r')\nrorse -> rose (刪除 'r')\nrose -> ros (刪除 'e')" },
      { input: "word1 = \"intention\", word2 = \"execution\"", output: "5", explanation: "intention -> inention (刪除 't')\ninention -> enention (將 'i' 替換為 'e')\nenention -> exention (將 'n' 替換為 'x')\nexention -> exection (將 'n' 替換為 'c')\nexection -> execution (插入 'u')" }
    ],
    constraints: ["0 <= word1.length, word2.length <= 500", "word1 和 word2 由小寫英文字母組成"]
  }
];
