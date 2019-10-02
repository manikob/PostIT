const apiBuilder = (obj: any, prefix: string) => {
    prefix += obj.url || '';
    Object.keys(obj).forEach(k => {
        if (typeof obj[k] === 'object') {
            apiBuilder(obj[k], prefix);
        } else {
            obj[k] = prefix + (k !== 'url' ? obj[k] : '');
        }
    });
    return obj;
};

const apiObject = {
    url: './api',
    postIt: {
        url: '',
        create: "/",
        delete: "/{id}",
        update: "/",
        get: "/{id}",
        getAll: "/"
    }
};

export const api = apiBuilder(apiObject, '') as typeof apiObject;
