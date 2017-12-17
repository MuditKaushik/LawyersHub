export function GetTemplate(component: string, template: string) {
    return `app/proj/templates/${component}/${template}`;
}

export function GetImages(image: string) {
    return `app/proj/images/${image}`;
}

export function GetStyle(component: string, style: string) {
    return `app/proj/scss/${component}/${style}`;
}
