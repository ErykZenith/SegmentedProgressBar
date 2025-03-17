const segmentedProgressBar = (selector, max, value) => {
    document.querySelectorAll(selector).forEach((element, i, elements) => {
        const seg = max / elements.length;
        const min = i * seg;
        const maxT = (i + 1) * seg;
        const percent = value >= maxT ? 100 :
            value > min ? ((value - min) / seg) * 100 : 0;
        element.style.setProperty("--SegmentedProgress", `${percent}%`);
    });
};

export { segmentedProgressBar };