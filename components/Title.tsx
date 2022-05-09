type Props = {
    size?: string,
    children?: JSX.Element,
    type?: string
};

export function Title({ size = '80px', children, type = 'h1' }: Props) {

    // background: -webkit-linear-gradient(white, #38495a);
    return (
        <div>
            {type === 'h1'
                ? <h1 className="font-amatic">
                    { children }
                </h1>
                : <h2 className="font-amatic">
                    { children }
                </h2>}
            <style jsx>{`
                div {
                    color: var(--yellow-ocre-2);
                    text-align: center;
                    font-size: ${size};
                }
                div h1, div h2 {
                    background: -webkit-linear-gradient(var(--yellow-ocre-2), var(--ocre-1));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
        </div>
    )
}
