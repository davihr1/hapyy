interface Props {
    text: string;
    url: string;
}

export function Evolut(props: Props) {
    return (
        <div className="bg-black-200 w-52 rounded ml-20 pb-2">
            <img src={props.url}
                alt="nlw-sports" className="rounded w-52 h-28" />

            <div>
                <h1 className="text-primary-100 text-sm mt-4 ml-2" >{props.text}</h1>
            </div>
        </div>
    );
}