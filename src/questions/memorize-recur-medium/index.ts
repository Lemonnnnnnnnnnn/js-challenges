type RecursiveFn<T> = (index: number) => T;

type FormulaFn<T> = (recursive: RecursiveFn<T>, index: number) => T;

/**
 * 递归函数常常会出现重复计算的问题，memorize 为这类函数添加了缓存功能，避免重复计算
 * @param memoList 缓存列表 
 * @param formulaFn 递归计算函数
 * @returns 包装了 formulaFn 的带有缓存功能的新递归函数 recur
 */
export function memorize<T>(memoList: T[], formulaFn: FormulaFn<T>) {
  // 向外抛出一个带有缓存功能的 recur 函数
  const recur: RecursiveFn<T> = (n) => {
    if (memoList[n]) {
      return memoList[n];
    }
    // formulaFn 应该由外部定义，以适配各种递归函数，formulaFn 应该包含递归逻辑。
    // 但缓存功能又由内部的 recur 函数实现，因此需要将内部定义的 recur 函数传递给 formulaFn
    const result = formulaFn(recur, n);
    memoList[n] = result;

    return result;
  };
  return recur;
}
