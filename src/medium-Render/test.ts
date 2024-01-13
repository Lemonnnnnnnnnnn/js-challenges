import { render } from ".";
const data = {
    name: "小明",
    age: 16,
    school: "第三中学",
    classroom: "教室2"
}


console.log(
    render("{{ name }} 今年 {{ age }} 岁，就读于 {{ school }} 今天在 {{ classroom }} 上课，{{ name }} {{ #data.age >= 18 ? '成年了' : '未成年' }}", data)
);
// 小明 今年 16 岁，就读于 第三中学 今天在 教室2 上课，小明 未成年

console.log(
    render(`{{name}}说了句{{#
        if (data.age >= 18) {
            "我已经成年了！"
        } else {
            "我还没有成年！"
        }
    }}`, data)
);