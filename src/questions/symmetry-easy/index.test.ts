import { get_symmetry_list } from ".";
import { expect , test } from "@jest/globals";

test("get_symmetry_list" , () => {
    const list = get_symmetry_list(1,20);
    expect(list).toEqual([1,2,3,4,5,6,7,8,9,11])
    
    const list2 = get_symmetry_list(100,130);
    expect(list2).toEqual([101,111,121])
})
