import type {AppStyle, Tag} from "~/app";

const STYLE: Partial<AppStyle> = {
    tag: {
        base: 'text-dark font-semibold mt-10',
        h1: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
        h2: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
        h3: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
        h4: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
        h5: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
        p: ''
    } as Tag,
}

export default STYLE;
