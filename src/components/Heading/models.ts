type HeadingTagTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends React.HTMLProps<HTMLElement> {
    tag: HeadingTagTypes;
    children: React.ReactNode;
}