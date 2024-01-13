

export function render(template: string, data: Record<string, string | number>) {
    // 注意“.”不匹配空格、换行符等符号，使用 [\s\S]* 来匹配所有js代码，并用eval执行得到结果
    template = template.replace(/{{\s?#([\s\S]*?)\s?}}/g, (_, prop) => eval(prop))
    template = template.replace(/{{\s?(.*?)\s?}}/g, (_, prop) => String(data[prop]))
    return template
}