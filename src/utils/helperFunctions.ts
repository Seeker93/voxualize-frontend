export const debounce = (func: any, delay: number) => {
    let debounceTimer
    return function () {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
}

export const YUV2RBG = (yuv: Uint8Array, width: number, height: number) => {
    const uStart = width * height;
    const halfWidth = (width >>> 1);
    const vStart = uStart + (uStart >>> 2);
    const rgb = new Uint8Array(uStart * 3);

    let i = 0;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const yy = yuv[y * width + x];
            const colorIndex = (y >>> 1) * halfWidth + (x >>> 1);
            const uu = yuv[uStart + colorIndex] - 128;
            const vv = yuv[vStart + colorIndex] - 128;

            rgb[i++] = yy + 1.402 * vv;              // R
            rgb[i++] = yy - 0.344 * uu - 0.714 * vv; // G
            rgb[i++] = yy + 1.772 * uu;              // B
        }
    }

    return rgb;
}