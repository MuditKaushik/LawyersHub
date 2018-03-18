export function GetTemplate(componentFolder: string, templateName: string) {
    return `/app/proj/templates/${componentFolder}/${templateName}`;
}

export function GetImages(image: string) {
    return `/app/proj/images/${image}`;
}

export function GetStyle(componentFolder: string, stylesheetName: string) {
    return `/app/proj/scss/${componentFolder}/${stylesheetName}`;
}
