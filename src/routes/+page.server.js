import { compile } from 'mdsvex';
import rehypeCallouts from 'rehype-callouts';

export const load = async () => {
    return {
        code: (await compile(inputText, {
            rehypePlugins: [rehypeCallouts],
        })).code,
    };
};

const inputText = `some text from markdown

> [!quote]
> Foo, bar, baz.
>
> &mdash; Julius Caesar

some more text`;
