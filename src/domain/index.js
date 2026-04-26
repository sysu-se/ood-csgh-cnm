// 创建game store
import { createGameStore } from './domain/storeAdapter.js';

// 初始化
const puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const gameStore = createGameStore(puzzle);

// 订阅网格变化
gameStore.grid.subscribe(grid => {
  console.log('网格已更新:', grid);
});

// 执行操作
const result = gameStore.guess(0, 2, 4);
if (result.success) {
  console.log('操作成功');
} else {
  console.log('操作失败:', result.error);
}

// 撤销/重做
gameStore.undo();
gameStore.redo();

// 获取提示
const hints = gameStore.getHints();
console.log('提示:', hints);

// 探索模式
gameStore.startExploration();
gameStore.commitExploration();
gameStore.discardExploration();