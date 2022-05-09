type Props = {
    name: string,
    children?: JSX.Element,
    max?: number
};

export function FormInput({ name, children, max = 2 }: Props) {
    return (
        <div className="flex flex-col mx-3">
            <label className="text-amber-100">{name}</label>
            <input
                className="text-center"
                type="number"
                maxLength={max}
                name={name}
                id={name}
            />
        </div>
    )
}
