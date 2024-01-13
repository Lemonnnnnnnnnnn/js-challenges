export function render(template: string, data: Record<string, string | number>) {
    template = template.replace(/{{\s?#([\s\S]*?)\s?}}/g, (_, prop) => eval(prop))
    template = template.replace(/{{\s?(.*?)\s?}}/g, (_, prop) => String(data[prop]))
    return template
}