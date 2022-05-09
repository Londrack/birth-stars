type Props = {
    text?: string,
    children?: JSX.Element,
    size?: string
};
export function Button({ text, children }: Props) {
    return (
        <button
            className='ml-5 text-amber-400 border-[1px] border-amber-300
            rounded-xl px-3 py-1 text-base'>{ children ?? text}</button>
    )
}
