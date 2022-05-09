type Props = {
    text: string,
};

export function ErrorText({text}: Props) {
    return (
        <div className='flex justify-center items-center mt-28'>
            <p className='text-yellow-400 font-bold text-3xl'>{text}</p>
        </div>
    )
}
