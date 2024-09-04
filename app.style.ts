import type {AppStyle, Tag} from "~/app";

const STYLE: Partial<AppStyle> = {
    tag: {
        base: 'text-dark font-semibold mt-10',
        h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
        h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
        h3: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
        h4: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
        h5: 'text-base sm:text-lg md:text-xl lg:text-2xl',
        p: 'text-dark mt-2 text-base sm:text-lg'
    } as Tag,
}

export default STYLE;
