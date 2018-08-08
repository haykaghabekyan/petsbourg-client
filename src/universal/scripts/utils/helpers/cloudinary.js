export const circle = publicId => {
    return `//res.cloudinary.com/petsbourg/image/upload/c_fill,ar_1:1,g_auto,r_max/v1533644495/${publicId}`;
};

export const thumbnail = publicId => {
    return `//res.cloudinary.com/petsbourg/image/upload/c_fill,ar_1:1,g_auto/v1533644495/${publicId}`;
};